const toggler = document.querySelector('.navbar-toggler');
// const navbar = document.querySelector('.navbar-collapse');
const icon = document.querySelector('.navbar-icon');

toggler.addEventListener('click', () => {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.toggle('collapse');
    if(navbar.classList.contains('collapse')) {
        icon.src = "assets/images/icon-menu.svg"
    } else {
        icon.src = "assets/images/icon-menu-close.svg"
    }
});