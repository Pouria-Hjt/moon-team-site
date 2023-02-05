window.onload = function() {
    Particles.init({
        selector:'.particle',
        maxParticles: 150,
        connectParticles: true,
        color: "#ffde2e",
        speed: 1.5
    });
};

/// typed.js 
var options = {
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
};
var typed = new Typed('.typed', options);

/// change layout

const $ = document
const mainPage = $.querySelector(".pages")
const pageSelector = $.querySelectorAll(".heading-secondary span")
const pageMove = [
    {title: "درباره", left: "-100%" , top: "100%"},
    {title: "درباره تیم", left: "-100%" , top: "-100%"},
    {title: "نمونه کار", left: "100%" , top: "100%"},
    {title: "تماس با ما", left: "100%" , top: "-100%"}
]

pageSelector.forEach(selector  => {
    selector.addEventListener("click", (event)=> {
        let currentPage = pageMove.find(pages => {
            return pages.title == selector.innerHTML
        })
        mainPage.style.transform = "translateX(" + currentPage.left + ") translateY(" + currentPage.top+ ")"

        console.log(currentPage.left)
    })
})