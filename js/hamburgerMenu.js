function hamburgerMenuDisplay() {
    const menu = document.getElementsByClassName("header__nav__list");
    if (menu[0].style.display === "block") {
        menu[0].style.display = "none";
    } else {
        menu[0].style.display = "block";
    }
}

function hamburgerMenuDisplayClose() {
    const menu = document.getElementsByClassName("header__nav__list");
    menu[0].style.display = "none";
}
