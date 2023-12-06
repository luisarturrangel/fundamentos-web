const productInfo = document.querySelector(".product-info");
let reaisCur = new Intl.NumberFormat("pt-br", {
    style: "currency",
    currency: "BRL",
  });


class UI {
  displayProduct() {
    let products = JSON.parse(localStorage.getItem("products"));
    let id = window.location.href.split("?")[1].split("id=")[1];
    let result = "";
    products.forEach((item) => {
      if (item.id === id) {
        result = `
            <div class="background-container">
        <div>
            <div class="container text-center movertransition">
              <h1>${item.title}</h1>
              <img src="${item.image}" alt="${item.title}">
              <div class="container center transitionclick">
                <h1>${reaisCur.format(item.price)}</h1>
            </div>
            <div class="">     
              <button class="btn btn-primary mb-3" data-bs-toggle="modal" data-id=${item.id} data-bs-target="#myModal">Realizar compra</button>
        </div>
          `;
      }
      productInfo.innerHTML = result;
    });
  }

}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.displayProduct();
});
