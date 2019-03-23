import './css/bootstrap/bootstrap-grid.min.css';
import './css/bootstrap/bootstrap-reboot.min.css';
import './css/bootstrap/bootstrap.min.css';
import './js/index';
import './css/startScreen/index.css';
import './css/tutorial/index.css';


const toggles = document.querySelectorAll('.c-hamburger');
const toggleHandler = toggle => {
    toggle.addEventListener('click', function (e) {
        e.preventDefault();
        this.classList.toggle('is-active');
    });
};
toggles.forEach(item => toggleHandler(item));
