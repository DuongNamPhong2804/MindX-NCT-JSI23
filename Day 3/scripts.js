fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data_vua_lay) {
    data_vua_lay.slice(0, 5).forEach(function(item) {
      console.log(item);
    });
  });