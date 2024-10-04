fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => {
          if(!response.ok){
                    throw new Error('Neteork is not stabe');
          }
          return response.json();
})

.then(data => {
          console.log(data);
})
.catch(error => {
          console.error('There was a problem with the fetch operation');        
});