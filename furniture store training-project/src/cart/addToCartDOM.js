import { formatPrice, getElement } from '../utils.js';

const addToCartDOM = (product) => {
    const cartItem=getElement(`.cart-items`)
        const {id,name,image,price,amount}=product;
        const article=document.createElement(`article`)
        article.innerHTML=` <article class="cart-item" data-id="${id}">
          <img src="${image}" class="cart-item-img"
          " alt="${name}">
          <!-- item info -->
          <div>
            <h4 class="cart-item-name">${name}</h4>
            <p class="cart-item-price">${formatPrice(price)}</p><button class="cart-item-remove-btn
            " data-id="${id}">remove</button>
          </div>
          <!-- amount toggle -->
          <div>
            <button class="cart-item-increase-btn" data-id="${id}"><i class="fas fa-chevron-up" ></i></button>
            <p class="cart-item-amount" data-id="${id}">${amount}</p>
            <button class="cart-item-decrease-btn" data-id="${id}"><i class="fas fa-chevron-down" ></i></button>
          </div>
        </article>`
        ;cartItem.appendChild(article)
    



};

export default addToCartDOM;
