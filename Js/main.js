const openNav = document.querySelector(".openNav")
const closeNav = document.querySelector(".closeNav")
const menu = document.querySelector(".nav-bar")
const link = document.querySelectorAll(".linknavbar")

//  scroll

const st = ScrollReveal({
    origin : 'top',
    distance : '60px',
    duration : 2500,
    delay : 400 ,
    // reset : true
})
st.reveal(".transitiontop")






openNav.addEventListener("click", () => {
    menu.classList.add("show-navbar")

})
closeNav.addEventListener("click", () => {
    menu.classList.remove("show-navbar")
})

link.forEach((e) => {
    e.onclick = () => {
        menu.classList.remove("show-navbar")
    }
})
