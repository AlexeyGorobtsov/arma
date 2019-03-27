import { fadeIn, fadeOut, getPresentDay } from '../helper/index.js';
import { mainObjDom } from '../index.js';

const buttonCreate = document.querySelector('.button-create');
const startScreen = document.querySelector('.start-screen');
const tutorial = document.querySelector('.tutorial');
const projectInput = document.querySelector('.project-input');
const tutorialTitleHead = document.querySelector('.title-header-t');
const dataCreated = document.querySelector('.data-created');

export const startScreenDom = {
    buttonCreate,
    startScreen,
    tutorial,
    projectInput,
    tutorialTitleHead,
};

try {
    buttonCreate.addEventListener('click', e => {
        e.preventDefault();
        mainObjDom.projectName = projectInput.value || 'Мини-отель «Веста»';
        const { projectName } = mainObjDom;
        tutorialTitleHead.textContent = projectName;
        dataCreated.textContent = getPresentDay();
        fadeOut(startScreen);
        fadeIn(tutorial);

    });
} catch (e) {
    console.log(e);
}