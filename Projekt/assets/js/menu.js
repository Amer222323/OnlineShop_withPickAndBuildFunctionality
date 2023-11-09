const menuBox = document.getElementsByClassName("divmenu")[0];
const menuHover = document.getElementById("menuHover");

const menuAction = () => {
  if (menuBox.style.display == "none") {
    menuHover.innerHTML = `X`;
    menuBox.style.display = "flex";
  }else{
    menuBox.style.display="none";
    menuHover.innerHTML = `&#9776`;
  }

  };
menuHover.addEventListener("click", menuAction);


