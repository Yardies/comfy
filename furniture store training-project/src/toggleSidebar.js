import { getElement } from './utils.js';


getElement(`.toggle-nav`).addEventListener(`click`,()=>{
    getElement(`.sidebar-overlay`).classList.add(`show`);
getElement(`.sidebar-close`).addEventListener(`click`,()=>{
    getElement(`.sidebar-overlay`).classList.remove(`show`)
})})


