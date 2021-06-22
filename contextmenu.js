let container = document.querySelector(".container")
let menu = document.querySelector(".menu")
let displaying = false
let posx = 0,posy = 0;
addEventListener('mousemove',(e)=>{
    posx = e.clientX
    posy = e.clientY
    console.log(posx,posy)
})
container.addEventListener('contextmenu',(e)=>{
    e.preventDefault()
    menu.style.top = posy + "px"
    menu.style.left = posx + "px"
    menu.style.display = "flex"
    displaying = true
})

addEventListener('mousedown',(e)=>{
    menu.style.display = "none"
    displaying = false
})