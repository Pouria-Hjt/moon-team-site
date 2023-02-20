const $ = document
///====================== Handle teamCard 

const leaderParent = $.querySelector(".leader .card-container .swiper-wrapper")
const coLeaderParent = $.querySelector(".co-leader .card-container .swiper-wrapper")
const designerParent = $.querySelector(".designer .card-container .swiper-wrapper")
const sponsorParent = $.querySelector(".sponsor .card-container .swiper-wrapper")

let leader = [
    {"image": "public/img/abol.png", "imageAlt": "parzival" , "name": "ابوالفضل محمدی" , "age": "۲۱", "ability": "فول استک دولوپر"},
    {"image": "public/img/skadi.png", "imageAlt": "skadi" , "name": "امیرحسین محبی" , "age": "۱۸", "ability": "دولوپر دیسکورد"},
]
let coLeader = [
    {"image": "public/img/pouria.jpg", "imageAlt": "pouria" , "name": "پوریا حاجتی" , "age": "۱۸", "ability": "طراح سایت"},
    {"image": "public/img/ludho.jpg", "imageAlt": "ludho" , "name": "لودو محمد پور" , "age": "۲۰", "ability": "دولوپر دیسکورد"},
    {"image": "public/img/smath.png", "imageAlt": "smath" , "name": "امیرعلی شهسواری" , "age": "۲۱", "ability": "دولوپر دیسکورد"},
    {"image": "public/img/Viper_gorgi.png", "imageAlt": "viper" , "name": "سعید وایپر" , "age": "۱۹", "ability": "کانفیگر دیسکورد"},
]
let designer = [
    {"image": "public/img/maryam.jpg", "imageAlt": "maryam" , "name": "مریم اوشن" , "age": "۲۰", "ability": "طراح گرافیک"},
    {"image": "public/img/matin.png", "imageAlt": "matin" , "name": "محمد متین پایان" , "age": "۱۸", "ability": "طراح گرافیک"},
]
let sponsor = [
    {"image": "public/img/sadra.png", "imageAlt": "sadra" , "name": "صدرا فرج پور" , "age": "۱۸", "ability": "استریمر"},
    {"image": "public/img/sepehr.png", "imageAlt": "sepehr" , "name": "سپهر کتابی" , "age": "۲۱", "ability": "دولوپر دیسکورد"},
]
function teamCard (list , cardParent) {
    let cardFragment = new DocumentFragment()
    list.forEach(item => {
        let newCard = `<div class="card swiper-slide">
                            <img src="${item.image}" alt="${item.imageAlt}" class="card__image">
                            <p class="card__name">${item.name}</p><p class="card__age">سن : ${item.age}</p>
                            <span class="card__ability">${item.ability}</span>
                         </div>`
        cardFragment.append(newCard)
    })
    cardParent.insertAdjacentHTML("beforeend", cardFragment.textContent)
}
teamCard(leader, leaderParent)
teamCard(coLeader, coLeaderParent)
teamCard(designer, designerParent)
teamCard(sponsor, sponsorParent)

// particle.js

window.addEventListener("load", ()=> {
    Particles.init({
        selector:'.particle',
        maxParticles: 150,
        speed: 1.5,
        connectParticles: true,
        color: "#B2BEB5",
        responsive: [
            {
                breakpoint: 1200,
                options: {
                    maxParticles: 100
                }
            },
            {
                breakpoint: 800,
                options: {
                    maxParticles: 70
                }
            },
            {
                breakpoint: 600,
                options: {
                    maxParticles: 50
                }
            },
            {
                breakpoint: 450,
                options: {
                    maxParticles: 25
                }
            },
        ]
    });

})

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
            return pages.title === selector.innerHTML
        })
        mainPage.style.transform = `translateX(${currentPage.left}) translateY(${currentPage.top})`
    })
})
pageBtn.forEach(selector  => {
    selector.addEventListener("click", (event) => {
        let currentPage = pageMove.find(pages => {
            return pages.title === selector.innerHTML
        })
        mainPage.style.transform = `translateX(${currentPage.left}) translateY(${currentPage.top})`
    })
})
const BtnContainer = $.querySelector('.pages__main-btn__container')
const dropDownContainer = $.querySelector('.pages__main-btn__dropdown')
BtnContainer.addEventListener("mouseenter", (event) => {
    BtnContainer.parentElement.classList.add("change")
})
BtnContainer.addEventListener("mouseleave", (event) => {
    BtnContainer.parentElement.classList.remove("change")
})
dropDownContainer.addEventListener("mouseenter", (event) => {
    BtnContainer.parentElement.classList.add("change")
})
dropDownContainer.addEventListener("mouseleave", (event) => {
    BtnContainer.parentElement.classList.remove("change")
})

BtnContainer.addEventListener("click", (event) => {
    BtnContainer.parentElement.classList.toggle("change")
})
/// swiper.js
var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    }
});