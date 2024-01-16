// global imports
import './src/toggleSidebar.js';
import './src/cart/toggleCart.js';
import './src/cart/setupCart.js';
// specific imports
import fetchProducts from './src/fetchProducts.js';
import { setupStore, store } from './src/store.js';
import display from './src/displayProducts.js';
import { getElement } from './src/utils.js';
import { addToCart } from './src/cart/setupCart.js';

const initiate = async()=>{
    const products= await fetchProducts();
    if (products) {
        setupStore(products);
        // featured
        let featuredItems=store.filter((product)=>{
            return product.featured===true;
        })
        display(featuredItems,getElement(`.featured-center`));
    }
    
}

document.addEventListener(`DOMContentLoaded`,initiate)



