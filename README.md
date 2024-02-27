<h1  align="center"  id="title">Dynamic Table Vue3</h1>
  
<p  align="center"><img  src="https://camo.githubusercontent.com/c9678b05bc417572e29a438145ffaeb544a261bee7212eca889b3ea4dbcab377/68747470733a2f2f692e6962622e636f2f664630543239642f64656d6f7374726163696f6e2e706e67"  alt="project-image"></p>
  
<p  id="description">This Vue.js component enables users to visualize data in a table search within the data sort columns select the number of rows visible per page navigate through data pages and download visible data in CSV or Excel format. Additionally users can customize visible columns through a modal interface.</p>

  

<h2>🧐 Features</h2>

Here're some of the project's best features:

<h3>Props: </h3>

* Data: Array of objects representing the data to be displayed in the table. Required.

* Translations: Object mapping data fields to their translations for display in the table headers. Default is an empty object.

* VisibleColumns: Array of strings representing the columns that should be initially visible. Default is an empty array.

* Edit: String representing the base URL for the edit action used to construct the URLs for edit buttons.

* Show: String that could be used to build URLs for a "show" action although it's not utilized in this component.

<h3>Methods: </h3>

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
