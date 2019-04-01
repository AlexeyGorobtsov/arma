import {delay, fadeOut} from '../helper/index.js';
import {tutorialDom} from '../tutorial/index.js';
import {fadeIn} from '../helper/index.js';
import {
    download,
    getContentForSave,
    getMetaForSave,
    fillContent,
} from '../helper/index.js';
import {
    saveProject,
    hamburger,
    leftPanel,
    lmCloseButton,
    reference,
    newProject,
    inputUpload,
    tutorial,
    startScreen
} from '../DOM/index.js';
// import template from '../templates/index.js';


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
        fadeOut(tutorial);
        fadeIn(startScreen);

    });
    /**
     * download project
     */
    saveProject.addEventListener('click', e => {
        e.preventDefault();
        const template = {
            doors: getContentForSave(),
            meta: getMetaForSave()
        };
        download('test.txt', JSON.stringify(template));
    });
    /**
     * upload project
     */
    inputUpload.addEventListener('change', e => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.onload = () => {
            const response = JSON.parse(reader.result);
            fillContent(response);
        };

        reader.onerror = function (err) {
            console.log(err, err.loaded
                , err.loaded === 0
                , file);
        };

        e.target.files[0]
            ? reader.readAsText(e.target.files[0])
            : false;
    });
} catch (e) {
    console.log(e);
}