import {getInt} from '../helper/index.js';
import {multipler, doors, price} from '../constants';

const {
    oneK,
    twoK,
    threeK,
    fourK,
} = multipler;


export const calculation = (array) => {
    const helpArr = [];
    const abus = [];
    const apecs = [];
    array.forEach(item => {
        const keys = item.querySelectorAll('.content-door-wrap-img').length;
        const typeNumber = getInt(item.querySelector('.in-key-hd').textContent);
        const inKeys = typeNumber !== ''
            ? typeNumber
            : 0;
        helpArr.push({keys, inKeys});
    });

    helpArr.forEach(item => {
        switch (item.keys) {
        case doors.zero:
            item.inKeys !== 0
                ? abus.push(price.inKey * item.inKeys)
                : false;
            item.inKeys !== 0
                ? apecs.push(price.inKey * item.inKeys)
                : false;
            break;
        case doors.one:
            abus.push(price.key * oneK + price.abus + price.inKey * item.inKeys);
            apecs.push(price.key * oneK + price.apecs + price.inKey * item.inKeys);
            break;
        case doors.two:
            abus.push(price.key * twoK + price.abus + price.inKey * item.inKeys);
            apecs.push(price.key * twoK + price.apecs + price.inKey * item.inKeys);
            break;
        case doors.three:
            abus.push(price.key * threeK + price.abus + price.inKey * item.inKeys);
            apecs.push(price.key * threeK + price.apecs + price.inKey * item.inKeys);
            break;
        case doors.four:
            abus.push(price.key * fourK + price.abus + price.inKey * item.inKeys);
            apecs.push(price.key * fourK + price.apecs + price.inKey * item.inKeys);
            break;
        default:
            abus.push(price.key * fourK + price.abus + price.inKey * item.inKeys);
            apecs.push(price.key * fourK + price.apecs + price.inKey * item.inKeys);

        }
    });

    const abusPrice = abus.reduce((acc, curent) => acc + curent, 0);
    const apecsPrice = apecs.reduce((acc, curent) => acc + curent, 0);

    return {abusPrice, apecsPrice};
};