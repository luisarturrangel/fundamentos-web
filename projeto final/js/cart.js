
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

  displayDiscount(){

  }

  displayCart(TotalValue) {
    let cart = JSON.parse(localStorage.getItem('cart'));
    let result = "";
    cart.forEach((item) =>{
        result += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${item.image} class="img-fluid rounded-start" alt="${item.title}">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">${reaisCur.format(item.price)}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
    });
    listaTotal.innerHTML = result;
    cartTotalValue.innerText = reaisCur.format(TotalValue);
    cartDiscount.innerText = reaisCur.format( TotalValue - (TotalValue * 0.15));
  }
}

class Storage {
    
}



document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI;
    ui.displayCart(ui.getItemsTotal());
        
});
