import { idDeleteDoor } from '../index.js';
import {rightForm} from '../tutorial/index.js';
import { delay, getContentDoor, getWrapInput } from '../helper/index.js';

const wrapInput = document.querySelectorAll('.wrap-inp');
const save = document.querySelector('.save');
const wrapDeleteKey = document.querySelector('.wrap-delete-key');

try {

    save.addEventListener('click', e => {
        e.preventDefault();
        const cDoors = document.querySelectorAll('.c-door');
        const removeDomElement = cDoors[idDeleteDoor.id].querySelectorAll('.content-door-wrap-img');
        removeDomElement.forEach(item => item.remove());
        getContentDoor(getWrapInput(wrapInput));
        delay(400)
            .then(() => (rightForm.style.width = '0'));
    });

    wrapDeleteKey.addEventListener('click', e => {
        e.preventDefault();
        const cDoors = document.querySelectorAll('.c-door');
        cDoors[idDeleteDoor.id].remove();
        delay(300)
            .then(() => (rightForm.style.width = '0'));
    });

} catch (e) {
    console.log(e);
}
