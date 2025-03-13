function hamburgerMenuDisplay() {
    const menu = document.getElementsByClassName("header__nav__list");
    console.log(menu[0]);
    if (menu[0].style.display === "block") {
        menu[0].style.display = "none";
    } else {
        menu[0].style.display = "block";
    }
}

function hamburgerMenuDisplayClose() {
    const menu = document.getElementsByClassName("header__nav__list");
    menu[0].style.display = "none";
    console.log('Hola')
}
