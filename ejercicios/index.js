const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menu-item-link');
menu.addEventListener('click', (event) => {
    if (event.target.classList.contains('menu-item-link')) {
        menuItems.forEach((item) => {
            item.classList.remove('menu-item-link-active');
        });
        event.target.classList.add('menu-item-link-active');
    }
});
