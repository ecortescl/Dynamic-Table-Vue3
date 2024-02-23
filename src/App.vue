<template>
  <div class="container">
    <div><h1>Dynamic Table Vue3</h1></div>
    <DynamicTable
      :data="clients"
      :translations="translations"
      :visible-columns="['id', 'nombre', 'correo', 'telefono', 'direccion']"
      show="test/"
    ></DynamicTable>
  </div>
</template>

<script>
import DynamicTable from "../src/components/DynamicTable.vue";


export default {
  data() {
    return {
      clients: [
        {
          id: 1,
          nombre: "Juan Perez",
          correo: "juan@example.com",
          telefono: "123-456-7890",
          direccion: "Calle 123, Ciudad A",
        },
        {
          id: 2,
          nombre: "María González",
          correo: "maria@example.com",
          telefono: "987-654-3210",
          direccion: "Avenida 456, Ciudad B",
        },
        {
          id: 3,
          nombre: "Carlos Rodríguez",
          correo: "carlos@example.com",
          telefono: "111-222-3333",
          direccion: "Calle 789, Ciudad C",
        },
        {
          id: 4,
          nombre: "Laura Martínez",
          correo: "laura@example.com",
          telefono: "444-555-6666",
          direccion: "Avenida 789, Ciudad D",
        },
        {
          id: 5,
          nombre: "Pedro Sánchez",
          correo: "pedro@example.com",
          telefono: "777-888-9999",
          direccion: "Calle 456, Ciudad E",
        },
        {
          id: 6,
          nombre: "Ana López",
          correo: "ana@example.com",
          telefono: "222-333-4444",
          direccion: "Avenida 123, Ciudad F",
        },
        {
          id: 7,
          nombre: "Luis Ramírez",
          correo: "luis@example.com",
          telefono: "555-666-7777",
          direccion: "Calle 789, Ciudad G",
        },
        {
          id: 8,
          nombre: "Elena Flores",
          correo: "elena@example.com",
          telefono: "999-888-7777",
          direccion: "Avenida 456, Ciudad H",
        },
        {
          id: 9,
          nombre: "Jorge García",
          correo: "jorge@example.com",
          telefono: "333-222-1111",
          direccion: "Calle 123, Ciudad I",
        },
        {
          id: 10,
          nombre: "Sofía Hernández",
          correo: "sofia@example.com",
          telefono: "666-555-4444",
          direccion: "Avenida 789, Ciudad J",
        },
        {
          id: 11,
          nombre: "Diego Torres",
          correo: "diego@example.com",
          telefono: "111-222-3333",
          direccion: "Calle 456, Ciudad K",
        },
        {
          id: 12,
          nombre: "Isabel Cruz",
          correo: "isabel@example.com",
          telefono: "444-555-6666",
          direccion: "Avenida 123, Ciudad L",
        },
        {
          id: 13,
          nombre: "Pablo Díaz",
          correo: "pablo@example.com",
          telefono: "777-888-9999",
          direccion: "Calle 789, Ciudad M",
        },
        {
          id: 14,
          nombre: "Adriana Reyes",
          correo: "adriana@example.com",
          telefono: "222-333-4444",
          direccion: "Avenida 456, Ciudad N",
        },
        {
          id: 15,
          nombre: "Ricardo Vargas",
          correo: "ricardo@example.com",
          telefono: "555-666-7777",
          direccion: "Calle 123, Ciudad O",
        },
        {
          id: 16,
          nombre: "Fernanda Morales",
          correo: "fernanda@example.com",
          telefono: "999-888-7777",
          direccion: "Avenida 789, Ciudad P",
        },
        {
          id: 17,
          nombre: "Martín Núñez",
          correo: "martin@example.com",
          telefono: "333-222-1111",
          direccion: "Calle 456, Ciudad Q",
        },
        {
          id: 18,
          nombre: "Valeria Silva",
          correo: "valeria@example.com",
          telefono: "666-555-4444",
          direccion: "Avenida 123, Ciudad R",
        },
        {
          id: 19,
          nombre: "Gabriel Rivas",
          correo: "gabriel@example.com",
          telefono: "111-222-3333",
          direccion: "Calle 789, Ciudad S",
        },
        {
          id: 20,
          nombre: "Daniela Guzmán",
          correo: "daniela@example.com",
          telefono: "444-555-6666",
          direccion: "Avenida 456, Ciudad T",
        },
        {
          id: 21,
          nombre: "Alejandro Reyes",
          correo: "alejandro@example.com",
          telefono: "777-888-9999",
          direccion: "Calle 123, Ciudad U",
        },
        {
          id: 22,
          nombre: "Paula Soto",
          correo: "paula@example.com",
          telefono: "222-333-4444",
          direccion: "Avenida 789, Ciudad V",
        },
        {
          id: 23,
          nombre: "Roberto Cruz",
          correo: "roberto@example.com",
          telefono: "555-666-7777",
          direccion: "Calle 456, Ciudad W",
        },
        {
          id: 24,
          nombre: "Camila Mendoza",
          correo: "camila@example.com",
          telefono: "999-888-7777",
          direccion: "Avenida 123, Ciudad X",
        },
        {
          id: 25,
          nombre: "Lorenzo Duarte",
          correo: "lorenzo@example.com",
          telefono: "333-222-1111",
          direccion: "Calle 789, Ciudad Y",
        },
        {
          id: 26,
          nombre: "Lucía Peralta",
          correo: "lucia@example.com",
          telefono: "666-555-4444",
          direccion: "Avenida 456, Ciudad Z",
        },
        {
          id: 27,
          nombre: "Matías Castro",
          correo: "matias@example.com",
          telefono: "111-222-3333",
          direccion: "Calle",
        },
      ],
      traslate: [
        {
          id: "id",
          nombre: "nombre",
          correo: "correo",
          telefono: "telefono",
        },
      ],
    };
  },

  components: {
    DynamicTable
  }
};
</script>
