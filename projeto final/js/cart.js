
const cartTotalValue = document.querySelector(".cart-total-value");
const listaTotal = document.querySelector(".listaTotal");


class UI {
   getItemsTotal() {
    let itemsTotal = JSON.parse(localStorage.getItem("totalCart"));
    return cartTotalValue.innerText = parseFloat(itemsTotal.toFixed(2));
  }

  displayCart() {
    cart = JSON.parse(localStorage.getItem('cart'));
    cart.ForEach((item) =>{
        result += `
        <div class="card mb-3" style="max-width: 540px;">
            <div class="row g-0">
                <div class="col-md-4">
                    <img src=${item.image} class="img-fluid rounded-start" alt="...">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${item.title}</h5>
                        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p class="card-text"><small class="text-body-secondary">Last updated 3 mins ago</small></p>
                    </div>
                </div>
            </div>
        </div>
        `
    })
  }
}



document.addEventListener("DOMContentLoaded", () => {
    const ui = new UI;
    ui.getItemsTotal();
        
});
