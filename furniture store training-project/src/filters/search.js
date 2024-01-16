import { getElement } from '../utils.js';
import display from '../displayProducts.js';
const setupSearch = (store) => {
    const input=getElement(`.input-form`)
    const searchInput=getElement(`.search-input`)
    input.addEventListener(`keyup`, (e) =>{
        const value=searchInput.value;
        if (value){
            const newStore=store.filter((product)=>{
                return product.name.toLowerCase().includes(value.toLowerCase())
                
            })
            if (newStore.length>0){display(newStore,getElement(`.products-container`))}
            else{getElement(`.products-container`).innerHTML=`<h3 class"filter-error">sorry no products matches your search</h3>`}
            
        }
        else{
            display(store,getElement(`.products-container`))
        }
    })

};

export default setupSearch;
