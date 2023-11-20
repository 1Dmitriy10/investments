export function getMobMenu() {
    let burgerMenuBTN = document.querySelector('.burger-menu-wrap');
    let burgerMenu = document.querySelector('.burger-menu');
    let menu = document.querySelector('.nav_box-mob');
    burgerMenuBTN.addEventListener('click', actionMenu);
    function actionMenu() {
        menu.classList.toggle('active')
        burgerMenu.classList.toggle('active')
    }
}
getMobMenu()