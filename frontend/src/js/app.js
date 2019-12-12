const loader = document.querySelector('.loader');
const main = document.querySelector('.main-content');
const contact = document.querySelector('#contact');

function init() {
    setTimeout(() => {
        loader.style.opacity = 0;
        loader.style.display = 'none';
        main.style.display = 'block';
        contact.style.display = 'block';
        setTimeout(() => (main.style.opacity = 1), 50);
        setTimeout(() => (contact.style.opacity = 1), 50);
    }, 3000);
};

init()