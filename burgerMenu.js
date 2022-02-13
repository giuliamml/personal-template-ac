//burger-menu-logic
function menuOpen() {
  let burgerMenu = document.querySelector("div#burger-menu-container");
  let burgerMenuItems = document.querySelector("div.burger-menu-items");

  burgerMenu.classList.toggle("change");

  if (burgerMenu.className === "") {
    burgerMenuItems.style.display = "none";
  } else if (burgerMenu.className === "change") {
    burgerMenuItems.style.display = "flex";
    burgerMenuItems.style.flexDirection = "column";
    burgerMenuItems.style.width = "100vw";
    burgerMenuItems.style.height = "100vh";
    burgerMenuItems.style.position = "absolute";
    burgerMenuItems.style.zIndex = "1";
    burgerMenuItems.style.background = "#012d4e";
    burgerMenuItems.style.boxShadow = "7px 0px 15px 0px #00000036";
    burgerMenuItems.style.top = "-10vh";
    burgerMenuItems.style.left = "0";
  }
}
