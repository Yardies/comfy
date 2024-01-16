import { getElement } from '../utils.js';

getElement(`.toggle-cart`).addEventListener(`click`,()=>{
    getElement(`.cart-overlay`).classList.add(`show`)
})
getElement(`.cart-close`).addEventListener(`click`,()=>{
    getElement(`.cart-overlay`).classList.remove(`show`)
})
export const openCart = () => {
    getElement(`.cart-overlay`).classList.add(`show`)
};
