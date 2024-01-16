// import
import {
  getStorageItem,
  setStorageItem,
  formatPrice,
  getElement,
} from '../utils.js';
import { openCart } from './toggleCart.js';
import { findProduct } from '../store.js';
import addToCartDOM from './addToCartDOM.js';
// set items
const cartItemCountDOM = getElement('.cart-item-count');
const cartItemsDOM = getElement('.cart-items');
const cartTotalDOM = getElement('.cart-total');

let cart = getStorageItem(`cart`)
export const addToCart = (id) => {
  const item = cart.find((i)=>i.id===id);
  if(!item){
    let product = findProduct(id)
    product = {...product,amount:1}
    cart=[...cart,product]
    addToCartDOM(product)
  }
  else{
    
    // increase amount value in the cart
    const amount = increaseAmount(id)
    // increase amount in DOM 
    const amountElements = [...cartItemsDOM.querySelectorAll('.cart-item-amount')];
    const amountTarget = amountElements.find((e)=>{return e.dataset.id === id} )
    amountTarget.textContent=amount;
    }

displayCartTotal();
displayCartCount();


// set storage
setStorageItem(`cart`,cart)

openCart();
};

const displayCartCount= function () {const cartCount=cart.reduce((total,cartitem)=>{return total +=cartitem.amount},0
)
cartItemCountDOM.textContent=cartCount

};
const displayCartTotal = function(){
  let totals = cart.reduce((total,cartItem)=>{return (total += cartItem.price * cartItem.amount);
  }, 0);
  cartTotalDOM.textContent=formatPrice(totals)
};
const displayAddToCartDOM=function(){
cart.forEach(product=>{addToCartDOM(product)})

};

// increase & decrease functions
    function increaseAmount(id) {
  let newAmount;
  cart = cart.map((cartItem) => {
    if (cartItem.id === id) {
      newAmount = cartItem.amount + 1;
      cartItem={...cartItem,amount:newAmount};
    }
    
    return cartItem;
  });
  return newAmount;
}

function decreaseAmount(id){
  let newAmount;
  cart= cart.map((cartItem) => {
    if(cartItem.id===id){
      newAmount=cartItem.amount-1;
      cartItem={...cartItem,amount:newAmount}
    }
    return cartItem
  }
  )
  return newAmount}
  console.log(cart);

  function removeItem(id) {
  cart = cart.filter((cartItem) => cartItem.id !== id);
}

const cartfunctions=function(){
  cartItemsDOM.addEventListener(`click`,(e)=>{
    const element =e.target;
    const parent= element.parentNode;
    const elementId=element.dataset.id;
    const parentID=parent.dataset.id;

    // remove btn
    if(element.classList.contains(`cart-item-remove-btn`)){
      removeItem(elementId);
      parent.parentElement.remove();
    }

  // increase btn
  else if(parent.classList.contains(`cart-item-increase-btn`)){
    let newAmount=increaseAmount(parentID);
    parent.nextElementSibling.textContent=newAmount;
  
  }
  
  

  // decrease btn
  else if(parent.classList.contains(`cart-item-decrease-btn`)){
    let newAmount=decreaseAmount(parentID);
    if (newAmount===0) {
      removeItem(parentID);
      parent.parentElement.parentElement.parentElement.remove();
    }
    else{
    parent.previousElementSibling.textContent=newAmount;}  
  }

displayCartTotal();
displayCartCount();
setStorageItem(`cart`,cart)})

};

(function(){
  displayCartCount();
  displayCartTotal();
  displayAddToCartDOM();
  cartfunctions();
})();

