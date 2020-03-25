'use strict';

const progressBar = () => {
    const progress = document.querySelectorAll('.skills__progress-done');

    progress.forEach(item => {
        item.style.width = item.getAttribute('data-done') + '%';
        item.style.opacity = 1;
    });
};

progressBar();