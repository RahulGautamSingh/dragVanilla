let splitter = document.querySelector(".splitter")
let leftDiv = document.querySelector(".left")
let rightDiv = document.querySelector(".right")
let draggable = false;
let x = 0,
  y = 0;
splitter.addEventListener("mousedown", () => {
  console.log("start");
  draggable = true;
});

addEventListener("mousemove", () => {
  if (draggable) {
      let e = window.event

console.log(e.clientX)
    leftDiv.style.width = e.clientX-2 + "px"
    rightDiv.style.width = window.innerWidth-e.clientX-2 + "px"
  }
});

addEventListener("mouseup", () => {
  draggable = false;
  console.log("stop");
});
