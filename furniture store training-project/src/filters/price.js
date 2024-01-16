import { formatPrice, getElement } from '../utils.js';
import display from '../displayProducts.js';



const setupPrice = (whatever) => {
    const priceInput = getElement(`.price-filter`)
    const priceValue=getElement(`.price-value`)
    // getting the prices
    const price=whatever.map((prices)=>{
        const {price}=prices;
        return price;
    })
    // setting the min and max prices
    const maxPrice=Math.max(...price);
    const minPrice=Math.min(...price);
    

    priceInput.max=maxPrice;
    priceInput.min=minPrice;
    priceInput.value=maxPrice;
    
    
    // value presentation
    priceValue.textContent =formatPrice(priceInput.value);
    
    // new store
    priceInput.addEventListener(`input`,(e) => {
        const newStore=whatever.filter((products)=>{
        return products.price <= priceInput.value;
    })
    console.log(priceInput);
    getElement(`.price-value`).textContent =formatPrice(priceInput.value);
    display(newStore,getElement(`.products-container`))
    })
    
};



export default setupPrice;
