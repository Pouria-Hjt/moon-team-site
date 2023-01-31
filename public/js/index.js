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