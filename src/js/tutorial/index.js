import { delay } from '../helper';
import { fadeOut } from '../helper';

const instructionHref = document.querySelector('.instruction-href');
const wrapTutorialContent = document.querySelector('.wrap-tutorial-content');
const wrapInstructions = document.querySelector('.wrap-instructions');
const addKey = document.querySelectorAll('.add-door');
const rightForm = document.querySelector('.right-form-panel');
export const tutorialDom = {
    wrapInstructions,
    wrapTutorialContent,
    addKey,
    rightForm
};


try {
    /**
     * hide instruction
     */
    instructionHref.addEventListener('click', function (e) {
        e.preventDefault();
        fadeOut(wrapInstructions);
    });
    /**
     * show right form when you press the plus
     */
    addKey.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            delay(400)
                .then(() => (rightForm.style.width = '325px'));
        });
    });
    /**
     * hide right form when we click outside form
     */
    document.addEventListener('click', e => {
        e.preventDefault();
        if (parseInt(rightForm.style.width) > 0) {
            !rightForm.contains(e.target)
                ? rightForm.style.width = '0'
                : false;
        }
    });
} catch (e) {
    console.log(e);
}