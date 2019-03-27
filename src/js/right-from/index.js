import { idDeleteDoor, ownersDoor } from '../index.js';
import {rightForm} from '../tutorial/index.js';
import { delay, getContentDoor } from '../helper/index.js';

const wrapInput = document.querySelectorAll('.wrap-inp');
const save = document.querySelector('.save');
const wrapDeleteKey = document.querySelector('.wrap-delete-key');
let keyHoldersRF = [];

try {
    wrapInput.forEach((item, id) => {
        const input = item.querySelector('input').checked;
        const label = item.querySelector('label').textContent;
        keyHoldersRF.push({id, input, label});
        item.addEventListener('click', () => {
            const input = item.querySelector('input').checked;
            const label = item.querySelector('label').textContent;
            keyHoldersRF[id] = {id, input, label};
            return keyHoldersRF;
        });
    });

    save.addEventListener('click', e => {
        e.preventDefault();
        const cDoors = document.querySelectorAll('.c-door');
        const removeDomElement = cDoors[idDeleteDoor.id].querySelectorAll('.content-door-wrap-img');
        removeDomElement.forEach(item => item.remove());
        getContentDoor(keyHoldersRF);
        //let keyHoldersRF = [];
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
