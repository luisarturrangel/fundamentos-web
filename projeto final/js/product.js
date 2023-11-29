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
            <div class="card mb-3" style="max-width: auto; min-height: 70vh;">
            <div class="row">
                <div class="card-body">
                    <h2 class="card-title">${item.title}</h2>
                  </div>
            </div>
            <div class="row g-0">   
              <div class="col-md-4">
                <img src=${item.image} class="img-fluid rounded-start h-100 w-100" alt="...">
              </div>
              <div class="col-md-8 row text-center d-flex flex-row align-items-center m-auto">
                <div>
                    <h1>${reaisCur.format(item.price)}</h1>
                </div>
                <div><button class="btn btn-primary cart-btn w-auto m-auto" data-id=${item.id}>Comprar</button></div>
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
