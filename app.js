(function () {
  let button = document.getElementById("btn");
  let backGround = document.querySelector(".backGround");
  let colors = ["red", "blue", "yellow", "green", "orange"];

  button.addEventListener("click", changeColor);

  function changeColor() {
    let index = Math.floor(Math.random() * colors.length);

    backGround.style.background = colors[index];
  }
})();
