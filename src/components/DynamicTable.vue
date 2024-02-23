<template>
    <div class="p-4  mt-4 border">
        <div class="d-flex">
            <div class="col-lg-4">
                <input
                    v-model="searchQuery"
                    type="text"
                    class="form-control"
                    placeholder="Buscar..."
                />
            </div>
            <div class="ml-auto text-right">
                <button @click="downloadCSV" class="btn btn-dark mr-1">
                    <i class="bi bi-filetype-csv"></i>
                </button>
                <button @click="downloadExcel" class="btn btn-success mr-1">
                    <i class="bi bi-filetype-xlsx"></i>
                </button>
                <button
                    type="button"
                    class="btn btn-primary"
                    data-toggle="modal"
                    data-target="#columnVisibilityModal"
                >
                    Columnas Visibles
                </button>
                <div
                    class="modal fade"
                    id="columnVisibilityModal"
                    tabindex="-1"
                    aria-labelledby="columnVisibilityModalLabel"
                    aria-hidden="true"
                >
                    <div class="modal-dialog modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5
                                    class="modal-title"
                                    id="columnVisibilityModalLabel"
                                >
                                    Columnas Visibles
                                </h5>
                                <button
                                    type="button"
                                    class="close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                >
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div class="modal-body">
                                <div class="row text-center">
                                    <div
                                        class="col form-check form-check-inline"
                                        v-for="(col, index) in dataCols"
                                        :key="index"
                                    >
                                        <input
                                            class="form-check-input"
                                            type="checkbox"
                                            :checked="
                                                visibleColumns.includes(col)
                                            "
                                            @change="toggleColumn(col)"
                                            :value="col"
                                            :id="'col-' + index"
                                        />
                                        <!-- Usar la versión traducida si está disponible -->
                                        <label :for="'col-' + index">{{
                                            translations[col] || col
                                        }}</label>
                                    </div>
                                </div>
                            </div>
                            <div class="modal-footer">
                                <button
                                    type="button"
                                    class="btn btn-secondary"
                                    data-dismiss="modal"
                                >
                                    Cerrar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="table-responsive">
            <table class="table mt-3" :key="tableKey">
                <thead>
                    <tr style="font-size: 10px">
                        <th v-for="(col, index) in visibleColumns" :key="index">
                            {{ translations[col] || col }}
                            <span
                                @click="sortBy(col)"
                                style="cursor: pointer"
                                v-if="sortOrders[col] != null"
                            >
                                <i :class="sortIconClass(col)"></i>
                            </span>
                        </th>
                        <th>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr
                        v-if="loading"
                        v-for="n in 10"
                        :key="'skeleton-' + n"
                        class="skeleton-row"
                    >
                        <td
                            v-for="(col, index) in visibleColumns"
                            :key="'skeleton-col-' + index"
                            class="skeleton-cell"
                        ></td>

                        <td class="skeleton-cell"></td>
                    </tr>
                    <tr
                        v-else
                        v-for="(row, rowIndex) in paginatedData"
                        :key="rowIndex"
                    >
                        <td
                            v-for="(col, colIndex) in visibleColumns"
                            :key="colIndex"
                        >
                            {{ row[col] }}
                        </td>
                        <td>
                           
                            <a
                                :href="edit + row.id "
                                class="btn btn-info btn-xs mr-1"
                            >
                                <i class="bi bi-eye"></i>
                            </a>
                            
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>

        <div class=" d-flex">
            <div class="">
                <div class="input-group">
                    <div class="input-group-prepend">
                        <div class="input-group-text">
                            <i class="bi bi-eye"></i>
                        </div>
                    </div>
                    <select
                        v-model="itemsPerPage"
                        class="form-control"
                        id="perPage"
                    >
                        <option
                            v-for="option in perPageOptions"
                            :key="option"
                            :value="option"
                        >
                            {{ option }}
                        </option>
                    </select>
                </div>
            </div>
            <div class=" ml-auto ">
                <nav aria-label="Page navigation example">
                    <ul class="pagination">
                        <li
                            class="page-item"
                            :class="{ disabled: currentPage === 1 }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="prevPage"
                                >Anterior</a
                            >
                        </li>
                        <li class="page-item" v-if="currentPage > 1">
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="changePage(1)"
                                >Primero</a
                            >
                        </li>
                        <li class="page-item" v-if="currentPage > 3">
                            <a class="page-link" href="#">
                                <i class="bi bi-skip-backward-fill"></i>
                            </a>
                        </li>
                        <li
                            class="page-item"
                            v-for="page in visiblePages"
                            :key="page"
                            :class="{ active: page === currentPage }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="changePage(page)"
                                >{{ page }}</a
                            >
                        </li>
                        <li
                            class="page-item"
                            v-if="currentPage < totalPages - 2"
                        >
                            <a class="page-link" href="#"
                                ><i class="bi bi-skip-forward-fill"></i
                            ></a>
                        </li>
                        <li class="page-item" v-if="currentPage < totalPages">
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="changePage(totalPages)"
                                >{{ totalPages }}</a
                            >
                        </li>
                        <li
                            class="page-item"
                            :class="{ disabled: currentPage === totalPages }"
                        >
                            <a
                                class="page-link"
                                href="#"
                                @click.prevent="nextPage"
                                >Siguiente</a
                            >
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import * as XLSX from "xlsx";


export default {
    props: {
        data: {
            type: Array,
            required: true,
        },
        translations: {
            type: Object,
            default: () => ({}),
        },
        visibleColumns: {
            type: Array,
            default: () => [],
        },
        edit: {
            type: String,
        },
        show: {
            type: String,
        },


    },
    data() {
        return {
            currentPage: 1,
            itemsPerPage: 10,
            perPageOptions: [10, 20, 50, 100],
            searchQuery: "",
            loading: true, // Activar carga inicial
            dataRows: [],
            dataCols: [],
            originalColumns: [],
            tableKey: 0,
            sortDirection: "asc",
            sortKey: "created_at",
            sortOrders: {},
        };
    },
    computed: {
        totalPages() {
            return Math.ceil(this.filteredData.length / this.itemsPerPage);
        },
        filteredData() {
            let filtered = this.dataRows;
            if (this.searchQuery.trim() !== "") {
                filtered = this.dataRows.filter((row) =>
                    Object.values(row).some((value) =>
                        String(value)
                            .toLowerCase()
                            .includes(this.searchQuery.trim().toLowerCase())
                    )
                );
            }
            return this.sortData(filtered);
        },
        paginatedData() {
            const start = (this.currentPage - 1) * this.itemsPerPage;
            return this.filteredData.slice(start, start + this.itemsPerPage);
        },
        visiblePages() {
            let pages = [];
            let start = this.currentPage - 4;
            let end = this.currentPage + 5;
            if (start < 1) {
                start = 1;
                end = Math.min(10, this.totalPages);
            }
            if (end > this.totalPages) {
                end = this.totalPages;
                start = Math.max(1, this.totalPages - 9);
            }
            for (let i = start; i <= end; i++) {
                pages.push(i);
            }
            return pages;
        },
    },
    methods: {
        organizeData() {
            if (this.data && this.data.length > 0) {
                this.dataCols = Object.keys(this.data[0]);
                this.originalColumns = [...this.dataCols];
                this.dataRows = this.data;
                // Inicializa sortOrders
                this.dataCols.forEach((col) => {
                    this.sortOrders[col] = 1; // Ascendente por defecto
                });

                setTimeout(() => {
                    this.loading = false;
                }, 1000); // Simula carga por 1 segundo
            }
        },
        changePage(page) {
            this.currentPage = page;
        },
        nextPage() {
            if (this.currentPage < this.totalPages) {
                this.currentPage++;
            }
        },
        prevPage() {
            if (this.currentPage > 1) {
                this.currentPage--;
            }
        },
        downloadCSV() {
            const headers = Object.values(this.translations);
            const csvContent =
                "data:text/csv;charset=utf-8," +
                headers.join(",") +
                "\n" +
                this.dataRows
                    .map((row) =>
                        this.visibleColumns.map((col) => row[col]).join(",")
                    )
                    .join("\n");
            const encodedUri = encodeURI(csvContent);
            const link = document.createElement("a");
            link.setAttribute("href", encodedUri);
            link.setAttribute("download", "data.csv");
            document.body.appendChild(link);
            link.click();
        },
        downloadExcel() {
            const ws = XLSX.utils.json_to_sheet(
                this.dataRows.map((row) =>
                    this.visibleColumns.reduce((acc, col) => {
                        acc[this.translations[col] || col] = row[col];
                        return acc;
                    }, {})
                )
            );

            const wb = XLSX.utils.book_new();
            XLSX.utils.book_append_sheet(wb, ws, "Sheet1");

            // Cambia el nombre del archivo aquí según sea necesario
            XLSX.writeFile(wb, "data.xlsx");
        },
        toggleColumn(col) {
            const index = this.visibleColumns.indexOf(col);
            if (index !== -1) {
                this.visibleColumns.splice(index, 1);
            } else {
                this.visibleColumns.push(col);
            }
            this.tableKey++; // Forzar actualización de la tabla
        },
        sortIconClass(col) {
            return {
                "bi bi-arrow-up": this.sortOrders[col] > 0,
                "bi bi-arrow-down": this.sortOrders[col] < 0,
            };
        },
        sortBy(key) {
            if (this.sortKey === key) {
                this.sortOrders[key] = this.sortOrders[key] > 0 ? -1 : 1;
            } else {
                this.sortKey = key;
                this.sortOrders[key] = 1; // Default to ascending
            }
            // Actualizar dirección de ordenamiento global si es necesario
            this.sortDirection = this.sortOrders[key] > 0 ? "asc" : "desc";
        },
        sortData(data) {
            const sortedData = [...data]; // Trabaja con una copia para evitar mutaciones directas
            sortedData.sort((a, b) => {
                let modifier = this.sortDirection === "asc" ? 1 : -1;
                if (a[this.sortKey] < b[this.sortKey]) return -1 * modifier;
                if (a[this.sortKey] > b[this.sortKey]) return 1 * modifier;
                return 0;
            });
            return sortedData;
        },
    },
    watch: {
        data: {
            immediate: true,
            handler() {
                this.organizeData();
            },
        },
        itemsPerPage() {
            this.currentPage = 1; // Resetea a la primera página al cambiar el número de items por página
        },
    },
    created() {
        this.organizeData(); // Asegurarse de que se llame al crear la instancia
    },
};
</script>

<style>
@keyframes loadingGradient {
    0% {
        background-position: -200% 0;
    }
    100% {
        background-position: 200% 0;
    }
}

.skeleton-row {
    width: 100%;
}

.skeleton-cell {
    height: 20px;
    background-color: #f0f0f0;
    background-image: linear-gradient(
        90deg,
        #f0f0f0 25%,
        #e0e0e0 50%,
        #f0f0f0 75%
    );
    background-size: 200% 100%;
    background-repeat: no-repeat;
    animation: loadingGradient 1.5s infinite linear;
    border-bottom: 1px solid #e0e0e0;
}

td {
    font-size: 10px !important;
}
tr {
    font-size: 10px !important;
}
</style>
