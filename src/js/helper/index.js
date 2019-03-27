import { idDeleteDoor} from '../index.js';
import {ownersDoor} from '../index';

export const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fadeOut = (domElement) => {
    domElement.classList.remove('fadeIn');
    domElement.classList.add('fadeOut');
    delay(600)
        .then(() => domElement.classList.add('hide-dom'));
};

export const fadeIn = (domElement) => {
    domElement.classList.add('fadeIn');
    domElement.classList.remove('fadeOut', 'hide-dom');
};

export const hideDom = (domElement) => {
    document.addEventListener('click', e => {
        if (parseInt(domElement.style.width) > 0) {
            !domElement.contains(e.target)
                ? domElement.style.width = '0'
                : false;
        }
    });
};
export const getPresentDay = () => {
    const date = new Date();
    return new Intl.DateTimeFormat('ru-Ru').format(date);
};

export const createDoorFunc = (
    name = 'Название двери',
    desc = 'Описание'
) => {
    const div = document.createElement('div');
    div.classList.add('c-door');
    //<img src="./images/door.png" alt="door">
    div.innerHTML = `
                    <div class="head-door">
                        <div class="wrap-image-door">
                            <img src=${require('../../images/door.png')} alt="door">
                        </div>
                        <div class="wrap-name-door">
                            <p class="name-door">${name}</p>
                            <p class="desc-door">${desc}</p>
                        </div>
                    </div>
                    <div class="content-door">
                        <div class="add-key"><span>+</span></div>
                    </div>`;
    return div;
};

export const clickPlus = (domElement) => {
    const addKey = document.querySelectorAll('.add-key');
    addKey.forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            idDeleteDoor.id = i;
            ownersDoor.labels = e.target.closest('.content-door').querySelectorAll('.content-door-wrap-img');
            const wrapInput = document.querySelectorAll('.wrap-inp');
            wrapInput.forEach((item, i) => {
                let input = item.querySelector('input');
                const label = item.querySelector('label').textContent;
                const length = ownersDoor.labels.length;
                if (length > i) {
                    console.log(ownersDoor)
                    const owner = ownersDoor.labels[i].querySelector('span').textContent;
                    owner === label ? (input.checked = true) : (input.checked = false);
                }
                length === 0 ? input.checked = false : false;
            });
            delay(400)
                .then(() => (domElement.style.width = '325px'));
        });
    });
};

export const clickHeadDoor = (domElement) => {
    const headDoor = document.querySelectorAll('.head-door');
    headDoor.forEach(item => {
        item.addEventListener('click', e => {
            e.preventDefault();
            delay(400)
                .then(() => (domElement.style.width = '325px'));
        });
    });
};

export const getDoors = (number) => {
    if (parseInt(number) > 0 && parseInt(number) < 20) {
        let doors = [];
        for (let i = 0; i < number; i++) {
            doors.push(createDoorFunc());
        }
        return doors;
    }
};

export const getContentDoor = (array) => {
    const nameForInKeyRF = document.querySelector('#name-for-in-key');
    const descTextareaDoorRF = document.querySelector('#id-textarea');
    const cDoors = document.querySelectorAll('.c-door');
    const trueKeyHoldersRF = array.filter(item => item.input === true);
    const addKey = cDoors[idDeleteDoor.id].querySelector('.add-key');
    const parentDiv =addKey.parentNode;
    const nameDoor = cDoors[idDeleteDoor.id].querySelector('.name-door');
    const projectName = cDoors[idDeleteDoor.id].querySelector('.desc-door');
    nameDoor.innerText = nameForInKeyRF.value;
    projectName.innerText = descTextareaDoorRF.value;
    console.log(trueKeyHoldersRF);

    trueKeyHoldersRF.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('content-door-wrap-img');
        div.innerHTML = `
                        <img src="images/key.png" alt="key">
                        <p class="owner"><span>${item.label}</span></p>`;
        parentDiv.insertBefore(div, addKey);
    });
};