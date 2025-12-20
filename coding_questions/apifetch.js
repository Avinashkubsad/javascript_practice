
// 1. fetch method using then and catch methods
fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error)) 