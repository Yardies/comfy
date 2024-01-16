// global imports
import '../toggleSidebar.js';
import '../cart/toggleCart.js';
import '../cart/setupCart.js';
// specific
import { addToCart } from '../cart/setupCart.js';
import { singleProductUrl, getElement, formatPrice } from '../utils.js';

// selections
const loading = getElement('.page-loading');
const centerDOM = getElement('.single-product-center');
const pageTitleDOM = getElement('.page-hero-title');
const imgDOM = getElement('.single-product-img');
const titleDOM = getElement('.single-product-title');
const companyDOM = getElement('.single-product-company');
const priceDOM = getElement('.single-product-price');
const colorsDOM = getElement('.single-product-colors');
const descDOM = getElement('.single-product-desc');
const cartBtn = getElement('.addToCartBtn');

// cart product 
let productID;

// show product when page loads
window.addEventListener(`DOMContentLoaded`, async function (e) {
    // get ID
    const pageID=window.location.search;

    // fetch the data
try {
    const response = await fetch(singleProductUrl+`${pageID}`)
    if (response.status>=200 && response.status<=300) {
        const data = await response.json();
        const {id,fields} = data;
        productID=id;
        const{colors,company,description,name,price}=fields
        const image = fields.image[0].thumbnails.large.url;
        
        document.title=`${name} | comfy`;
        pageTitleDOM.innerHTML=`home / ${name}`

        imgDOM.src=image;
        titleDOM.innerHTML=name;
        companyDOM.innerHTML=company;
        priceDOM.innerHTML=formatPrice(price);
        descDOM.innerHTML=description;

        // colors 
        colors.forEach(color => {
            const span=document.createElement(`span`)
            span.classList.add('product-color');
            span.style.backgroundColor=color;
            colorsDOM.appendChild(span);
        });

    }
    else {
    console.log(response.status, response.statusText);
    centerDOM.innerHTML=`${response.status},<button class="btn"><a href="./index.html">back home</a></button> `  
    }
} catch (error) {
    console.log(error);
}

        // remove loading
loading.style.display=`none`
// closing brackets
})


// add to cart
cartBtn.addEventListener('click',()=>{
    addToCart(productID);
});












    

