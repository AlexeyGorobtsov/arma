import { idDeleteDoor } from '../index.js';
import { rightForm  } from '../tutorial/index.js';
import { delay } from '../helper/index.js';

const wrapInput = document.querySelectorAll('.wrap-inp');
const save = document.querySelector('.save');
const numberForInKeyRF = document.querySelector('#number-for-in-key');
const nameForInKeyRF = document.querySelector('#name-for-in-key');
const descTextareaDoorRF = document.querySelector('#desc-textarea-door');
const wrapDeleteKey = document.querySelector('.wrap-delete-key');
const keyHoldersRF = [];
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
        console.log(keyHoldersRF);
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
export const rightFormObj = {
    numberForInKeyRF: numberForInKeyRF.value,
    keyHoldersRF,
    nameForInKeyRF,
    descTextareaDoorRF,
};