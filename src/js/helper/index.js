import { idDeleteDoor} from '../index.js';

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