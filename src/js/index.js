import './bootstrap/bootstrap.min.js';
import './helper/index.js';
import './left-menu/index.js';
import './right-from/index.js';
import './tutorial/index.js';
import './start-screen/index.js';
import './total-form/index.js';
import './DOM/index.js';
import './pricing/index.js';
import './slider/index.js';
import {calculation} from './pricing/index.js';
import {wrapRadio} from './DOM/index.js';
import {getContentForSave, getMetaForSave} from './helper/index.js';

export const idDeleteDoor = {};
export const ownersDoor = {};
export const mainObjDom = {};

try {
    $(document).on('click', '#sendOrder', e => {
        e.preventDefault();
        const numberDoors = document.querySelectorAll('.c-door');
        const price = calculation(numberDoors);
        const {
            totalAbusPrice,
            totalApecsPrice,
            abusLocksPrice,
            apecsLocksPrice,
            abusKeyPrice,
            apecsKeyPrice,
        } = price;
        const checkedFirm = [...wrapRadio].reduce((acc, item) => {
            const input = item.querySelector('input');
            const firm = item.nextElementSibling.textContent;
            input.checked
                ? acc.push(firm)
                : false;

            return acc;
        }, []);
        const firm_name = checkedFirm.join('') !== ''
            ? checkedFirm.join('')
            : 'Not checked firm';
        const data = {
            firm_name: firm_name,
            total_price_abus: totalAbusPrice,
            total_apecs_price: totalApecsPrice,
            abus_lock_price: abusLocksPrice,
            apecs_lock_price: apecsLocksPrice,
            abus_key_price: abusKeyPrice,
            apecs_key_price: apecsKeyPrice,
            template: {
                doors: getContentForSave(),
                meta: getMetaForSave()
            }
        };

        $.ajax({
            method: 'PUT',
            url: '',
            dataType: 'json',
            data: data,
            success: result => {
                console.log(result);
            }
        });


    });
} catch (e) {
    console.log(e);
}
