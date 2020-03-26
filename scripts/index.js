'use strict';

const scrollPage = () => {
    document.body.addEventListener('click', (event) => {
        const target = event.target;

        if (target.closest('.header__navbar-link') || target.closest('.footer__button')) {
            event.preventDefault();
            const elem = target.getAttribute('href');

            document.querySelector(elem).scrollIntoView({
                behavior: "smooth"
            });
        }

    });
};
scrollPage();

const progressBar = () => {
    const progress = document.querySelectorAll('.skills__progress-done');

    progress.forEach(item => {
        item.style.width = item.getAttribute('data-done') + '%';
        item.style.opacity = 1;
    });
};



progressBar();
