# **Dynamic Table Vue3**
Este componente Vue.js permite a los usuarios visualizar datos en una tabla, buscar dentro de los datos, ordenar columnas, seleccionar la cantidad de filas visibles por página, navegar a través de las páginas de datos, y descargar los datos visibles en formato CSV o Excel. Además, los usuarios pueden personalizar las columnas visibles mediante un modal.

## Propiedades (props)
- **data:** Array de objetos que representa los datos a mostrar en la tabla. Requerido.
- **translations:** Objeto que mapea los campos de los datos a sus traducciones para mostrar en los encabezados de la tabla. Por defecto, es un objeto vacío.
- **visibleColumns:** Array de cadenas que representa las columnas que deben ser visibles inicialmente. Por defecto, es un array vacío.
- **edit:** String que representa la base de la URL para la acción de editar, utilizada para construir las URLs de los botones de edición.
- **show:** String que podría usarse para construir URLs para una acción de "mostrar", aunque no se utiliza en este componente.

## Métodos
- **organizeData():**  Prepara los datos para ser mostrados en la tabla. Se llama automáticamente al crear el componente.
- **changePage(page):**  Cambia la página actual de datos mostrados.
- **nextPage():** Avanza a la próxima página de datos.
- **prevPage():** Regresa a la página anterior de datos.
- **downloadCSV():** Descarga los datos filtrados y visibles en formato CSV.
- **downloadExcel():** Descarga los datos filtrados y visibles en formato Excel.
- **toggleColumn(col):** Agrega o quita una columna de la lista de columnas visibles.
- **sortBy(key):** Ordena los datos por la columna especificada. Si ya está ordenada por esa columna, invierte el orden.
- **sortData(data):** Función auxiliar para ordenar los datos.

## Eventos
El componente no emite eventos personalizados, pero utiliza eventos DOM como click y change para interactuar con el usuario.

## Estilos
El componente utiliza clases de Bootstrap para el estilo general y agrega animaciones de "skeleton" para mostrar un indicador de carga. Los estilos específicos están definidos en la sección  para ajustar el tamaño de las celdas y agregar la animación de carga.

## Uso
Para utilizar este componente, asegúrate de tener Vue.js y Bootstrap incluidos en tu proyecto. Debes pasar los datos requeridos (data, translations, etc.) como props al componente. Aquí hay un ejemplo básico de cómo incluir el componente en tu aplicación Vue.js:

```javascript

<template>
  <div>
    <DynamicTable>
      :data="myData"
      :translations="myTranslations"
      :visibleColumns="['name', 'email']"
      edit="/edit/"
      show="/show/"
    /></DynamicTable>
  </div>
</template>

<script>
import DynamicTable from './DynamicTable.vue';

export default {
  components: {
    DynamicTable
  },
  data() {
    return {
      myData: [{ name: 'John Doe', email: 'john@example.com' }],
      myTranslations: { name: 'Nombre', email: 'Correo Electrónico' }
    };
  }
};
</script>
```


Este ejemplo muestra cómo pasar datos y configuraciones básicas al componente. Asegúrate de ajustar las propiedades y el path del componente según tu estructura de proyecto.