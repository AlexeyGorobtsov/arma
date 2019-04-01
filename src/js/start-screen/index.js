import template from '../templates/index.js';
import {
    fadeIn,
    fadeOut,
    getPresentDay,
    removeDom,
    fillContent,
} from '../helper/index.js';
import {mainObjDom} from '../index.js';
import {
    buttonCreate,
    startScreen,
    tutorial,
    projectInput,
    tutorialTitleHead,
    dataCreated,
    wrapCDoors,
    itemTemplates,
} from '../DOM/index.js';

try {
    buttonCreate.addEventListener('click', e => {
        e.preventDefault();
        mainObjDom.projectName = projectInput.value || 'Мини-отель «Веста»';
        const {projectName} = mainObjDom;
        tutorialTitleHead.textContent = projectName;
        dataCreated.textContent = getPresentDay();
        removeDom(wrapCDoors);
        fadeOut(startScreen);
        fadeIn(tutorial);
    });
    /**
     * handle load template
     */
    itemTemplates.forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            removeDom(wrapCDoors);
            fillContent(template[i]);
            fadeOut(startScreen);
            fadeIn(tutorial);
        });
    });

} catch (e) {
    console.log(e);
}