let circle = document.querySelector(".circle");
let slider = document.querySelector(".slider");
let value = document.querySelector(".value");
let sliderLeft = document.querySelector(".slider-left");

let draggable = false;

circle.addEventListener("mousedown", () => {
  console.log("start");
  draggable = true;
});

addEventListener("mousemove", () => {
  if (draggable) {
    var e = window.event;

    var posX = e.clientX - slider.offsetLeft;
    // var posY = e.clientY - slider.offsetLeft+slider.offsetWidth;

    if (posX >= -10 && posX <= 190) {
      circle.style.left = posX + "px";
      value.innerText = parseInt((posX + 10) / 2);
      sliderLeft.style.width = posX + 10 + "px";
    }
    // if(posY-50>=slider.offsetTop && posY+50<=slider.offsetTop+slider.offsetHeight)
    // box.style.top = posY - 50 + "px";
  }
});

addEventListener("mouseup", () => {
  draggable = false;
  console.log("stop");
});
