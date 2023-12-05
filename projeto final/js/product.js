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
              <p>
                <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#collapseWidthExample" aria-expanded="false" aria-controls="collapseWidthExample">
                  SOBRE
              </button>
              </p>
            </div>
            <div style="min-height: 120px;">
              <div class="collapse collapse-horizontal" id="collapseWidthExample">
                <div class="card card-body bg-black opacity-50 text-white text-opacity-100 justify-content-center d-flex m-auto" style="width: 300px;">
              <p>O PRO Wireless foi projetado para ser o melhor mouse para jogos para profissionais de eSports.</p>
                </div>
              </div>
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
