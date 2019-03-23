import {fadeIn, fadeOut} from '../helper';

const buttonCreate = document.querySelector('.button-create');
const startScreen = document.querySelector('.start-screen');
const tutorial = document.querySelector('.tutorial');
export const startScreenDom = {
    buttonCreate,
    startScreen,
    tutorial
};

try {
    buttonCreate.addEventListener('click', e => {
        e.preventDefault();
        fadeOut(startScreen);
        fadeIn(tutorial);

    });
} catch (e) {
    console.log(e);
}