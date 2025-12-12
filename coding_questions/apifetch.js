
// 1. fetch method using tehn and catch  
fetch('https://jsonplaceholder.typicode.com/todos/2')
      .then(response => response.json())
      .then(json => console.log(json))
      .catch(error => console.log(error))