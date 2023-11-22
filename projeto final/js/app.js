const addBtn = document.querySelector(".cart-btn");
const cardContent = document.querySelector(".card");
const productsDom = document.querySelector(".grid-layout-cards");
const cartNum = document.querySelector("cart-numb");
let reaisCur = new Intl.NumberFormat("pt-br", {
  style: "currency",
  currency: "BRL",
});

let cart = [];

let buttonsDom = [];

class Products {
  async getProducts() {
    try {
      let result = await fetch("js/products.json");
      let data = await result.json();
      let products = data.items;
      products = products.map((item) => {
        const { title, price } = item.fields;
        const { id } = item.sys;
        const image = item.fields.image.fields.file.url;
        return { title, price, id, image };
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

class UI {
  displayProducts(products) {
    let result = "";
    products.forEach((product) => {
      result += `
        <div class="col">
            <div class="card h-100" style="width: 12rem;">
                <img src=${product.image} class="card-img-top" alt="${
        product.title
      }">
                <div class="card-body">
                    <p class="card-text">${product.title}</p> 
                </div>
                <div class="card-title card-footer card-price">
                        <h5 class="card-title" id="card-price" name="card-price">${reaisCur.format(
                          product.price
                        )}</h5>
                </div>    
                <div class="card-footer">
                    <button class="btn btn-primary cart-btn" data-id=${
                      product.id
                    }>Adicionar ao carrinho</button>
                </div>
            </div>
        </div>
            `;
    });
    productsDom.innerHTML = result;
  }
  getButtons() {
    const buttons = [...document.querySelectorAll(".cart-btn")];
    buttonsDom = buttons;
    buttons.forEach((button) => {
      let id = button.dataset.id;
      let inCart = cart.find((item) => item.id === id);
      if (inCart) {
        button.innerText = "No Carrinho";
        button.disabled = true;
      } else {
        button.addEventListener("click", (event) => {
          event.target.innerText = "No Carrinho";
          event.target.disabled = true;
          let cartItem = {...Storage.getProduct(id), amount: 1};
          cart = [...cart, cartItem];
        });
      }
    });
  }
}

class Storage {
  static saveProducts(products) {
    localStorage.setItem("products", JSON.stringify(products));
  }

  static getProduct(id) {
    let products = JSON.parse(localStorage.getItem("products"));
    return products.find((product) => product.id === id);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const ui = new UI();
  const products = new Products();

  //   get all products
  products.getProducts().then((products) => {
    ui.displayProducts(products);
    Storage.saveProducts(products);
    ui.getButtons();
  });
});
