const calendar = document.querySelector("div .day-play")
const play = document.querySelector("div .calendar-block")
const buttonOpen = document.querySelector("a .calendar-item")
const buttonClose = document.querySelector("p .close-button")


buttonOpen.addEventListener("click",()=>{

    if(buttonOpen.classList.contains("active")){
        gsap.to(".day-play", {display:"none"})

    }else{
    }
    buttonOpen.classList.toggle("active")
})