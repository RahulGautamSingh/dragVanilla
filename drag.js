let box = document.querySelector(".box");
let container = document.querySelector(".container")
let draggable = false;
let x = 0,
  y = 0;
  console.log(container.offsetWidth)
box.addEventListener("mousedown", () => {
  console.log("start");
  draggable = true;
});

addEventListener("mousemove", () => {
  if (draggable) {
    var e = window.event;

    var posX = e.clientX;
    var posY = e.clientY;

    box.style.position = "absolute";
    if(posX-50>=container.offsetLeft && posX+50<=container.offsetLeft+container.offsetWidth) 
    box.style.left = posX - 50 + "px";
    
    if(posY-50>=container.offsetTop && posY+50<=container.offsetTop+container.offsetHeight)
    box.style.top = posY - 50 + "px";
  }
});

addEventListener("mouseup", () => {
  draggable = false;
  console.log("stop");
});
