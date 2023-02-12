window.onload = function() {
    Particles.init({
        selector:'.particle',
        maxParticles: 150,
        speed: 1.5,
        connectParticles: true,
        color: "#B2BEB5"

    });
};

/// typed.js 
var typed = new Typed('.typed', {
    strings: [
        "developers",
        "designers",
        "configers"
    ],
    typeSpeed: 100,
    backSpeed: 65,
    loop: true,
    showCursor: false,
    smartBackspace: true,
});

/// change layout

const $ = document
const mainPage = $.querySelector(".pages")
const pageSelector = $.querySelectorAll(".heading-secondary span")
let pageBtn = $.querySelectorAll(".pages__main-btn__dropdown-item")

const pageMove = [
    {title: "درباره", left: "-100%" , top: "100%"},
    {title: "اعضا تیم", left: "-100%" , top: "-100%"},
    {title: "نمونه کار", left: "100%" , top: "100%"},
    {title: "تماس با ما", left: "100%" , top: "-100%"},
    {title: "صفحه اصلی", left: "0%" , top: "-0%"},
]

pageSelector.forEach(selector  => {
    selector.parentElement.addEventListener("click", (event)=> {
        let currentPage = pageMove.find(pages => {
            return pages.title == selector.innerHTML
        })
        mainPage.style.transform = `translateX(${currentPage.left}) translateY(${currentPage.top})`
    })
})
pageBtn.forEach(selector  => {
    selector.addEventListener("click", (event)=> {
        let currentPage = pageMove.find(pages => {
            return pages.title == selector.innerHTML
        })
        mainPage.style.transform = `translateX(${currentPage.left}) translateY(${currentPage.top})`
    })
})

const BtnContainer = $.querySelector('.pages__main-btn__container')

BtnContainer.addEventListener("click", (event) => {
    BtnContainer.parentElement.classList.toggle("change")
})