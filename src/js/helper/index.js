import {idDeleteDoor} from '../index.js';
import {ownersDoor} from '../index';
import {constants} from '../constants.js';
import {
    nameForInKeyRF,
    descTextareaDoorRF, // RF right form
    individualKeyRF,
    numberDoorTF, // TF total form
    numberKeyTF,
    numberInKeyTF,
    priceAbus,
    priceApecs,

} from '../DOM/index.js';
import {calculation} from '../pricing';

const {defaultNameDoor, defaultDescDoor, defaultImage} = constants;


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
    name = defaultNameDoor,
    desc = defaultDescDoor
) => {
    const div = document.createElement('div');
    div.classList.add('c-door');
    //<img src="./images/door.png" alt="door">
    div.innerHTML = `
                    <div class="head-door">
                        <div class="wrap-image-door">
                            <img src=${defaultImage} alt="door">
                        </div>
                        <div class="wrap-name-door">
                            <p class="name-door">${name}</p>
                            <p class="desc-door">${desc}</p>
                            <p class="in-key-hd"></p>
                        </div>
                    </div>
                    <div class="content-door">
                        <div class="add-key">+</div>
                    </div>`;
    return div;
};

export const tempKeys = keys => {
    const helpArray = [];
    keys.forEach(item => {
        const str = `
        <div class="content-door-wrap-img">
            <img src="images/key.png" alt="key">
            <p class="owner"><span>${item}</span></p>
        </div>`;
        helpArray.push(str);
    });
    // console.log(...helpArray);
    const [innerHtml] = [...helpArray];
    console.log(innerHtml)
    return innerHtml;
};

export const tempDoors = (
    name,
    desc,
    srcImg,
    inKey,
    keys
) => {
    const div = document.createElement('div');
    div.classList.add('c-door');
    div.innerHTML = `
    <div class="head-door">
        <div class="wrap-image-door">
            <img src=${srcImg} alt="door">
        </div>
        <div class="wrap-name-door">
            <p class="name-door">${name}</p>
            <p class="desc-door">${desc}</p>
            <p class="in-key-hd">${inKey}</p>
        </div>
    </div>
    <div class="content-door">
     ${tempKeys(keys)}
     <div class="add-key">+</div>
    </div>`;
    return div;
};


export const getInt = str => {
    const array = [...str].filter(item => {
        if (!isNaN(parseInt(item))) {

            return true;
        }
    });

    return array.length ? parseInt(array.join('')) : '';
};
const getImgRF = (src) => {
    const wraps = document.querySelectorAll('.my-slides-rf');
    [...wraps].forEach(item => {
        item.querySelector('img').src === src
            ? item.style.display = 'block'
            : item.style.display = 'none';
    });
};
export const clickPlus = (domElement, e) => {
    const addKey = document.querySelectorAll('.add-key');
    addKey.forEach((item, i) => {
        if (item === e.target) {
            idDeleteDoor.id = i;
        }
    });

    const cDoor = e.target.closest('.c-door');
    const individualKey = cDoor.querySelector('.in-key-hd').textContent;
    const nameForInKey = cDoor.querySelector('.name-door').textContent;
    const descTextareaDoor = cDoor.querySelector('.desc-door').textContent;
    const img = cDoor.querySelector('.wrap-image-door img');
    nameForInKeyRF.value = nameForInKey;
    descTextareaDoorRF.value = descTextareaDoor;
    individualKeyRF.value = getInt(individualKey);
    getImgRF(img.src);
    ownersDoor.labels = e.target.closest('.content-door').querySelectorAll('.content-door-wrap-img');
    const wrapInput = document.querySelectorAll('.wrap-inp');
    wrapInput.forEach(item => {
        let input = item.querySelector('input');
        input.checked = false;
        const label = item.querySelector('label').textContent;
        const length = ownersDoor.labels.length;
        const {labels} = ownersDoor;
        labels.forEach(labelCD => {
            const owner = labelCD.querySelector('span').textContent;
            owner === label ? (input.checked = true) : false;
        });
        length === 0 ? input.checked = false : false;
    });
    delay(400)
        .then(() => (domElement.style.width = '325px'));
};

const getNumberInKeys = array => {
    const helpArr = [];
    array.forEach(item => {
        const number = getInt(item.textContent);
        typeof number === 'number'
            ? helpArr.push(getInt(item.textContent))
            : false;
    });

    return helpArr.reduce((acc, currentV) => {

        return (currentV) + acc;
    }, 0);
};

export const clickHeadDoor = (domElement, e) => {
    e.preventDefault();
    delay(400)
        .then(() => (domElement.style.width = '325px'));
    const numberDoors = document.querySelectorAll('.c-door');
    const numberKeys = document.querySelectorAll('.content-door-wrap-img');
    const numberInKeys = document.querySelectorAll('.in-key-hd');
    numberDoorTF.textContent = numberDoors.length;
    numberKeyTF.textContent = numberKeys.length;
    numberInKeyTF.textContent = getNumberInKeys(numberInKeys);
    const price = calculation(numberDoors);
    priceAbus.textContent = `${price.abusPrice} руб.`;
    priceApecs.textContent = `${price.apecsPrice} руб.`;
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

const getSrcImg = () => {
    const wraps = document.querySelectorAll('.my-slides-rf');
    const selectImg = [...wraps].filter(item => item.style.display === 'block');
    let [img] = selectImg;

    return img.querySelector('img').src;
};

export const getContentDoor = (array) => {
    const str = individualKeyRF.value !== '' ? `+ ${individualKeyRF.value} инд. кл.` : '';
    const cDoors = document.querySelectorAll('.c-door');
    const trueKeyHoldersRF = array.filter(item => item.input === true);
    const addKey = cDoors[idDeleteDoor.id].querySelector('.add-key');
    const parentDiv = addKey.parentNode;
    const nameDoor = cDoors[idDeleteDoor.id].querySelector('.name-door');
    const descTextareaDoor = cDoors[idDeleteDoor.id].querySelector('.desc-door');
    const individualKey = cDoors[idDeleteDoor.id].querySelector('.in-key-hd');
    const img = cDoors[idDeleteDoor.id].querySelector('img');
    img.src = getSrcImg();
    nameDoor.innerText = nameForInKeyRF.value; // RF right form
    descTextareaDoor.innerText = descTextareaDoorRF.value;
    individualKey.innerText = str;
    trueKeyHoldersRF.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('content-door-wrap-img');
        div.innerHTML = `
                        <img src="images/key.png" alt="key">
                        <p class="owner"><span>${item.label}</span></p>`;
        parentDiv.insertBefore(div, addKey);
    });
};

export const getWrapInput = array => {
    const keyHoldersRF = [];
    array.forEach((item, id) => {
        const input = item.querySelector('input').checked;
        const label = item.querySelector('label').textContent;
        keyHoldersRF.push({id, input, label});
        item.addEventListener('click', () => {
            const input = item.querySelector('input').checked;
            const label = item.querySelector('label').textContent;
            keyHoldersRF[id] = {id, input, label};
        });
    });

    return keyHoldersRF;
};

/**
 *  generate a download project
 */
export const download = (filename, content) => {
    const element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(content));
    element.setAttribute('download', filename);
    element.style.display = 'none';
    document.body.appendChild(element);
    element.click();
    document.body.removeChild(element);
};