import {delay, fadeOut} from '../helper/index.js';
import {tutorialDom} from '../tutorial/index.js';
import {startScreenDom} from '../start-screen/index.js';
import { fadeIn } from '../helper/index.js';

const hamburger = document.querySelector('.c-hamburger');
const leftPanel = document.getElementById('leftSidePanel');
const lmCloseButton = document.querySelector('.left-menu .wrap-close-href');
const reference = document.querySelector('.reference');
const newProject = document.querySelector('.new-project');

try {
    const hideMenu = () => {
        leftPanel.style.width = '0';
        hamburger.classList.toggle('is-active');
    };
    /**
     * add/remove class hamburger ('is-active)
     * hide left menu
     */
    lmCloseButton.addEventListener('click', e => {
        e.preventDefault();
        hideMenu();
    });

    /**
     * closing a left menu when we click outside the menu field
     */
    document.addEventListener('click', function (e) {
        if (parseInt(leftPanel.style.width) > 0) {
            !leftPanel.contains(e.target) ? hideMenu() : false;
        }
    });
    /**
     * add/remove class hamburger ('is-active)
     * show left menu
     */
    hamburger.addEventListener('click', function (e) {
        e.preventDefault();
        hamburger.classList.toggle('is-active');
        delay(600)
            .then(() => leftPanel.style.width = '700px');
    });
    /**
     * show instruction
     */
    reference.addEventListener('click', e => {
        e.preventDefault();
        fadeIn(tutorialDom.wrapInstructions);
    });
    /**
     * show first screen
     */
    newProject.addEventListener('click', e => {
        e.preventDefault();
        fadeOut(startScreenDom.tutorial);
        fadeIn(startScreenDom.startScreen);

    });
} catch (e) {
    console.log(e);
}