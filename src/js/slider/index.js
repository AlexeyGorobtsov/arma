import {prevRF, nextRF} from '../DOM';

try {

    let slideIndex = 1;
    const showSlides = n => {

        const slides = document.getElementsByClassName('my-slides-rf');
        const length = slides.length;
        n > length ? slideIndex = 1 : false;
        n < 1 ? slideIndex = length : false;
        [...slides].forEach(item => item.style.display = 'none');
        slides[slideIndex - 1].style.display = 'block';
    };

    showSlides(slideIndex);
    const plusSlides = n => showSlides(slideIndex += n);

    prevRF.addEventListener('click', e => {
        e.preventDefault();
        plusSlides(-1);
    });
    nextRF.addEventListener('click', e => {
        e.preventDefault();
        plusSlides(1);
    });
} catch (e) {
    console.log(e);
}
