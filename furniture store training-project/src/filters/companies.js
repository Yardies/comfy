import { getElement } from '../utils.js';
import display from '../displayProducts.js';

const setupCompanies = (store) => {
    const companies =[`all`,...new Set(store.map((product)=>product.company)) ]
    const companiesNames=getElement(`.companies`)
    
        
        companiesNames.innerHTML = companies.map((company) => {return `<button class="company-btn">${company}</button>`
    }).join(``)
    companiesNames.addEventListener('click',(e)=>{
        let company = e.target.textContent.toLowerCase();
        if (company === `all`) {
            display(store,getElement(`.products-container`))
        }
        else{
            const newStore=store.filter(product => product.company === company);
            display(newStore,getElement(`.products-container`))
        }
    }

)};

export default setupCompanies;
