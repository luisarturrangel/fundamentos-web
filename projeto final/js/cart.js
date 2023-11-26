
const cartTotalValue = document.querySelector(".cart-total-value");
const listaTotal = document.querySelector(".listaTotal");


class UI {
   getItemsTotal() {
    let itemsTotal = JSON.parse(localStorage.getItem("totalCart"));
    return cartTotalValue.innerText = parseFloat(itemsTotal.toFixed(2));
  }

  displayCart() {
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
                        <p class="card-text">${item.price}</p>
                    </div>
                </div>
            </div>
        </div>
        `;
        
    });
    listaTotal.innerHTML = result;
  }
}

class Storage {
    
}



document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI;
    ui.getItemsTotal();
    ui.displayCart();
        
});
