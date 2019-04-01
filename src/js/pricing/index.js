import {getInt} from '../helper/index.js';
import {multipler, doors, price} from '../constants.js';

const {
    oneK,
    twoK,
    threeK,
    fourK,
} = multipler;


export const calculation = (array) => {
    const abus = [];
    const apecs = [];
    let locksAndKeys = [...array].reduce((acc, item) => {
        const keys = item.querySelectorAll('.content-door-wrap-img').length;
        const typeNumber = getInt(item.querySelector('.in-key-hd').textContent);
        const inKeys = typeNumber !== ''
            ? typeNumber
            : 0;
        acc.push({keys, inKeys});

        return acc;
    }, []);

    locksAndKeys.forEach(item => {
        switch (item.keys) {
        case doors.zero:
            abus.push(price.inKey * item.inKeys + price.abus );
            apecs.push(price.inKey * item.inKeys + price.apecs);
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
    const locks = locksAndKeys.length;
    const abusLocksPrice = locks * price.abus;
    const apecsLocksPrice = locks * price.apecs;
    const totalAbusPrice = abus.reduce((acc, curent) => acc + curent, 0);
    const totalApecsPrice = apecs.reduce((acc, curent) => acc + curent, 0);
    const abusKeyPrice = totalAbusPrice - abusLocksPrice;
    const apecsKeyPrice = totalApecsPrice - apecsLocksPrice;

    return {
        totalAbusPrice,
        totalApecsPrice,
        abusLocksPrice,
        apecsLocksPrice,
        abusKeyPrice,
        apecsKeyPrice,
    };
};