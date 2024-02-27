<h1  align="center"  id="title">Dynamic Table Vue3</h1>
  
<p  align="center"><img  src="https://camo.githubusercontent.com/c9678b05bc417572e29a438145ffaeb544a261bee7212eca889b3ea4dbcab377/68747470733a2f2f692e6962622e636f2f664630543239642f64656d6f7374726163696f6e2e706e67"  alt="project-image"></p>
  
<p  id="description">This Vue.js component enables users to visualize data in a table search within the data sort columns select the number of rows visible per page navigate through data pages and download visible data in CSV or Excel format. Additionally users can customize visible columns through a modal interface.</p>

  

<h2>🧐 Features</h2>

Here're some of the project's best features:


* data: Array de objetos que representa los datos a mostrar en la tabla. Requerido.

* translations: Objeto que mapea los campos de los datos a sus traducciones para mostrar en los encabezados de la tabla. Por defecto es un objeto vacío.

* visibleColumns: Array de cadenas que representa las columnas que deben ser visibles inicialmente. Por defecto es un array vacío.

* edit: String que representa la base de la URL para la acción de editar utilizada para construir las URLs de los botones de edición.

* show: String que podría usarse para construir URLs para una acción de "mostrar" aunque no se utiliza en este componente.
Methods:

-   **organizeData():** Prepares the data to be displayed in the table. Automatically called when the component is created.
    
-   **changePage(page):** Changes the current page of displayed data.
    
-   **nextPage():** Moves to the next page of data.
    
-   **prevPage():** Moves to the previous page of data.
    
-   **downloadCSV():** Downloads the filtered and visible data in CSV format.
    
-   **downloadExcel():** Downloads the filtered and visible data in Excel format.
    
-   **toggleColumn(col):** Adds or removes a column from the list of visible columns.
    
-   **sortBy(key):** Sorts the data by the specified column. If already sorted by that column, reverses the order.
    
-   **sortData(data):** Auxiliary function for sorting the data.

  

### Step 1: Install the Dependency
  

<p>1. Install the Dependency</p>
  
```

npm install dynamic-table-vue3

```

 
```

yarn add dynamic-table-vue3

```

  

### Step 2: Import and Register the Component Globally

  
```

import { createApp } from 'vue';
import App from './App.vue';
	// Import the component
import DynamicTableVue3 from 'dynamic-table-vue3';
const app = createApp(App);
	// Register the component globally
app.component('DynamicTableVue3' DynamicTableVue3);
app.mount('#app');

```

### Step 3: Use the Component in Your Vue Application

```
<template> 
	<div id="app"> 
		<DynamicTableVue3 
		:data="clients"
		:translations="translations"
		:visible-columns="['id', 'name', 'email', 'phone', 'locations']"
		show="test/" edit="edit/"  /> 
	</div>
 </template>
```


<h2>💻 Built with</h2>

  

Technologies used in the project:

  

* vue3
* vite
* js
* node

  

<h2>🛡️ License:</h2>


This project is licensed under the MIT

  

<h2>💖Like my work?</h2>
 

dev.ecortescl@gmail.com
