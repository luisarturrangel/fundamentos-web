const cartTotalValue = document.querySelector(".cart-total-value");
const listaTotal = document.querySelector(".listaTotal");
const cartDiscount = document.querySelector(".desconto-valor");

let reaisCur = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

class UI {
  getItemsTotal() {
    let itemsTotal = JSON.parse(localStorage.getItem("totalCart"));
    return itemsTotal;
  }

  displayDiscount() {}

  displayCart(TotalValue) {
    let cart = JSON.parse(localStorage.getItem("cart"));
    let result = "";
    cart.forEach((item) => {
      result += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${
                      item.image
                    } class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${reaisCur.format(item.price)}</p>
                    </div>
                </div>
                <div class="text-end"><button class="btn btn-danger mr-4 mb-2 btn-trash" data-id=${
                  item.id
                }><i class="fas fa-trash text-black"></i></button></div>
            </div>
        </div>
        `;
    });
    listaTotal.innerHTML = result;
    cartTotalValue.innerText = reaisCur.format(TotalValue);
    cartDiscount.innerText = reaisCur.format(TotalValue - TotalValue * 0.15);
  }

  removeItem() {
    const trashBtns = document.querySelectorAll(".btn-trash");

    trashBtns.forEach((btn) => {
      btn.addEventListener("click", () => {
        let products = JSON.parse(localStorage.getItem("cart"));
        let id = btn.dataset.id;
        let indexToRemove = products.findIndex((item) => item.id === id);

        if (indexToRemove !== -1) {
          products.splice(indexToRemove, 1);
          localStorage.setItem("cart", JSON.stringify(products));
          let tempTotal = 0;
          products.forEach((item) => {
            tempTotal += item.price * item.amount;
          });
          localStorage.setItem("totalCart", JSON.stringify(tempTotal));
          this.displayCart(this.getItemsTotal());
          window.location.reload();
        }
      });
    });
  }
}

class Storage {}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  ui.displayCart(ui.getItemsTotal());
  ui.removeItem();
});
