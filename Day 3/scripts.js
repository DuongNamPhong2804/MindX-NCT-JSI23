fetch("https://jsonplaceholder.typicode.com/photos")
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    for (let i = 0; i < 5; i++) {
      renderData(data[i]);
    }
  });


function renderData(data) {
  let div = document.createElement("div");
  div.classList.add("card");
  let img = document.createElement("img");
  img.src = data.url;
  let h1 = document.createElement("h1");
  h1.innerText = data.title;
  let idDiv = document.createElement("div");
  let b = document.createElement("b");
  b.innerText = "ID: ";
  let span = document.createElement("span");
  span.id = "item_id";
  span.innerText = data.id;
  idDiv.appendChild(b);
  idDiv.appendChild(span);
  div.appendChild(img);
  div.appendChild(h1);
  div.appendChild(idDiv);
  document.body.appendChild(div);
}