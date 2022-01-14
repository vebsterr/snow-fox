(() => {
    const refs = {
        openMenuBtn: document.querySelector(".social__call"),
        closeMenuBtn: document.querySelector(".tel-menu__exit-button"),
        menu: document.querySelector(".tel-menu"),
    };

    refs.openMenuBtn.addEventListener("click", toggleMenu);
    refs.closeMenuBtn.addEventListener("click", toggleMenu);

    function toggleMenu() {
        refs.menu.classList.toggle("is-open");
    }
})();
