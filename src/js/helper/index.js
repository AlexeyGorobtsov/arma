import {tutorialDom} from "../tutorial";

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export const fadeOut = (domElement) => {
    domElement.classList.remove('fadeIn');
    domElement.classList.add('fadeOut');
    delay(600)
        .then(() => domElement.classList.add('hide-dom'));
};
export const fadeIn = (domElement) => {
    domElement.classList.add('fadeIn');
    domElement.classList.remove('fadeOut', 'hide-dom');
};