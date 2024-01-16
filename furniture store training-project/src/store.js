import { getStorageItem, setStorageItem } from './utils.js';
let store = getStorageItem(`store`);
// let store = [];
const setupStore = (asshole) => {
    store=asshole.map((product) => {
        const{id,fields:{featured,company,colors,price,name,image:img},} = product;
        const image=img[0].thumbnails.large.url;
        return {
            id,
            featured,
            company,
            colors,
            price,
            name,
            image
        }
    })
    setStorageItem(`store`, store)
};
const findProduct = (item) => {
    let product = store.find((i)=> i.id === item);return product;
};
export { store, setupStore, findProduct };
