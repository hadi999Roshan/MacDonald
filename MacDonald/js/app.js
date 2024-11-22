//show and hide scroll up button
function scrollHeader() {
  let header = document.querySelector("header");
  window.scrollY > 50
    ? header.classList.add("scroll-header")
    : header.classList.remove("scroll-header");
}
window.addEventListener("scroll", scrollHeader);



function scrollUp() {
  let scrollUpElement = document.querySelector(".scroll-up");
  this.scrollY > 350
    ? scrollUpElement.classList.add("show-scroll")
    : scrollUpElement.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);


// activating a navbar elements when we scroll to the target coordinate
let sections = document.querySelectorAll("section[id]")
let homeSection = document.querySelector(".home")
function scrollActive(){
    let scrollDown = window.scrollY

    let homeHeight = homeSection.offsetHeight
    let homeTop = homeSection.offsetTop
    let homeId = document.querySelector("#home")

    if(scrollDown > homeTop + homeHeight){
        homeId.classList.remove("active-link")
    }else{
        homeId.classList.add("active-link")
    }

    sections.forEach((currentSection) => {
        let sectionHeight = currentSection.offsetHeight
        let sectionTop = currentSection.offsetTop - 130
        let sectionId = currentSection.getAttribute("id")

        

        let sectionsClass = document.querySelector("ul li[id*=" + sectionId + "]")
        
        if(scrollDown > sectionTop && scrollDown <= sectionTop + sectionHeight){
            sectionsClass.classList.add("active-link")
        }else{
            sectionsClass.classList.remove("active-link")

        }
    })
}
window.addEventListener("scroll", scrollActive)


//fast forward to nav elements target
let headerTags = document.querySelectorAll("header ul li")

headerTags.forEach((hTag) => {
    const goToSection = () => {
        let sectionId = hTag.getAttribute("id")
        let sectionsClass = document.querySelector("." + sectionId)
        window.scrollTo(0, sectionsClass.offsetTop - 80)

    }
    hTag.addEventListener("click", goToSection)

})


//adding scroll indicator
const beforeHeader = document.querySelector(".range")
function scrollRange() {
    const winScroll = window.scrollY;
    const height = document.documentElement.scrollHeight-window.innerHeight;
    const scroll = ( winScroll / height ) * 100
    beforeHeader.style.width = `${scroll}%`
}

// add sub menu to the nav elements
window.addEventListener("scroll", scrollRange)
const homeLi = document.querySelector("#home")
const homeBtn = document.querySelector("#home a")
const subMenuLis = document.querySelectorAll(".sub-menu li")
const subMenu = document.querySelector(".sub-menu")

homeBtn.addEventListener("click", () => {
    subMenu.classList.toggle("sub-menu-active")
})
subMenuLis.forEach((subMenuLi)=>{
    let liContext = subMenuLi.textContent
    let counter = 1
    let x = document.createElement("div")
    let listItems = ["li","li","li"]
    listItems.forEach((li)=>{
        let y = document.createElement(li)
        y.style.padding = "10px 15px"
        y.style.backgroundColor = "var(--body-color-alt)"
        y.innerHTML = `${liContext}${ counter}`
        counter++
        x.appendChild(y)
    })
    x.style.position = "absolute"
    x.style.display = "none"
    x.style.left = 0
    x.style.top = "2.5rem"
    x.style.cursor = "auto"
    x.style.backgroundColor = "var(--body-color)"
    x.style.borderRadius = "6px"
    x.style.padding = "20px"
    x.style.zIndex = "40"
    subMenuLi.appendChild(x)
    function openMenu(){
    x.style.display = "flex"
    x.style.flexDirection = "column"
    x.style.gap = ".7rem"

    }
    function closeMenu(){
        x.style.display = "none"

    }
    subMenuLi.addEventListener("mouseover", openMenu)
    subMenuLi.addEventListener("mouseout", closeMenu)
})




//show fading effect
ScrollReveal().reveal('.home-data, .footer', {delay: 300, distance: '60px', duration: 2500, origin: 'top', reset: true})
ScrollReveal().reveal('.home-burger', {delay: 1200, distance: '100px', duration: 1500, origin: 'top', reset: true})
ScrollReveal().reveal('.home-dish', {delay: 500, distance: '100px', duration: 2500, origin: 'bottom', reset: true})
ScrollReveal().reveal('.home-ingredient', {delay: 1500, distance: '60px', duration: 2500, origin: 'top',interval :100, reset: true})
ScrollReveal().reveal('.recipe-data, .delivery-data, .contact-data', {delay: 300, distance: '60px', duration: 2500, origin: 'right', reset: true})
ScrollReveal().reveal('.recipe-image, .delivery-img, .contact-img', {delay: 300, distance: '60px', duration: 2500, origin: 'left', reset: true})
ScrollReveal().reveal('.popular-card', {delay: 300, distance: '60px', duration: 2500, origin: 'top',interval :100, reset: true})
