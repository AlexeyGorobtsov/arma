import {
    prevRF,
    nextRF,
    slidesRF,
    groupSl,
    dots,
} from '../DOM/index.js';

try {

    let slideIndex = 1;

    const showSlides = (n, slidesEl) => {
        const length = slidesEl.length;
        n > length ? slideIndex = 1 : false;
        n < 1 ? slideIndex = length : false;
        [...slidesEl].forEach(item => item.style.display = 'none');
        slidesEl[slideIndex - 1].style.display = 'flex';

        for (let i = 0; i < dots.length; i++) {
            dots[i].className = dots[i].className.replace(' active', '');
        }
        slidesEl[slideIndex - 1].style.display = 'flex';

        slideIndex - 1 < dots.length
            ? dots[slideIndex - 1].className += ' active'
            : false;
    };

    showSlides(slideIndex, slidesRF);
    showSlides(slideIndex, groupSl);
    const plusSlides = n => showSlides(slideIndex += n, slidesRF);
    const currentSlide = n => {
        showSlides(slideIndex = n, groupSl);
    };
    dots.forEach((item, i) => {
        item.addEventListener('click', e => {
            e.preventDefault();
            currentSlide(i + 1);
        });
    });
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
