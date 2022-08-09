const buttonMenuShow = document.querySelector("#button-menu-show");
const menu = document.querySelector("#menu");

buttonMenuShow.addEventListener("click", () => {
    menu.classList.toggle("menu-visible");
    menu.classList.toggle("menuSpawnAnimation");
});