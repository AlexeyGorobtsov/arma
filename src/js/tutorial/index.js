import {
    clickPlus,
    delay,
    fadeOut,
    hideDom,
    createDoorFunc,
    clickHeadDoor,
    getDoors,
} from '../helper/index.js';

const instructionHref = document.querySelector('.instruction-href');
const wrapTutorialContent = document.querySelector('.wrap-tutorial-content');
const wrapInstructions = document.querySelector('.wrap-instructions');
export const rightForm = document.querySelector('.right-form-panel');
const headDoor = document.querySelectorAll('.head-door');
const totalFormPanel = document.querySelector('.total-form-panel');
const bCreateDoor = document.querySelector('.b-create-door');
const createDoor = document.querySelector('.create-door');
const numberDoorCustom = document.querySelector('.number-door-custom');
const buttonOk = document.querySelector('.button-ok');


export const tutorialDom = {
    wrapInstructions,
    wrapTutorialContent,
    rightForm,
    headDoor,
    totalFormPanel,
    bCreateDoor,
    createDoor,
    numberDoorCustom,
    buttonOk,
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
    document.addEventListener('click', e => {
        if (e.target.classList.contains('add-key')) {
            clickPlus(rightForm, e);
        }
    });
    /**
     * hide right-form when we click outside right-form
     */
    hideDom(rightForm);
    /**
     * show total form
     */
    headDoor.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            delay(400)
                .then(() => (totalFormPanel.style.width = '325px'));
        });
    });

    document.addEventListener('click', e => {
        const headDoor = e.target.closest('.head-door');
        (headDoor !== null
            ? headDoor.contains(e.target): false)
            ? clickHeadDoor(totalFormPanel, e)
            : false;
    });

    /**
     * hide total form when we click outside right-form
     */
    hideDom(totalFormPanel);
    /**
     * add one door when we click button
     */
    bCreateDoor.addEventListener('click', e => {
        e.preventDefault();
        const door = createDoorFunc();
        const parentDiv = createDoor.parentNode;
        parentDiv.insertBefore(door, createDoor);
    });
    /**
     * create the number of doors specified in the modal window
     */
    buttonOk.addEventListener('click', e => {
        e.preventDefault();
        delay(800)
            .then(() => {
                const doors = getDoors(numberDoorCustom.value) || [];
                doors.forEach(door => {
                    const parentDiv = createDoor.parentNode;
                    parentDiv.insertBefore(door, createDoor);
                });
            })
            .then(() => numberDoorCustom.value = '');
    });

} catch (e) {
    console.log(e);
}