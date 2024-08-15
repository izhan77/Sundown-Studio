var loader = document.querySelector("#loader");
setTimeout(function(){
    loader.style.top = "-100%"
}, 4200)


const scroll = new LocomotiveScroll({
    el: document.querySelector('#wrapper'),
    smooth: true
});

const fixedImage2 = document.querySelector("#fixed-imageP4");
const imagess = document.querySelectorAll(".e44");
const i11 = document.querySelector("#e1").getAttribute("data-image");
fixedImage2.style.backgroundImage = `url(${i11})`;



var elemC = document.querySelector("#element-container");
var fixed = document.querySelector("#fixed-image")

elemC.addEventListener("mouseenter", function () {
    fixed.style.display = "block";
})
elemC.addEventListener("mouseleave", function () {
    fixed.style.display = "none";
})


var elements = document.querySelectorAll(".element");
elements.forEach(function (e) {
    e.addEventListener("mouseenter", function () {
        var image = e.getAttribute("data-image");
        fixed.style.backgroundImage = `url(${image})`
    })
})

console.log(elements);

document.addEventListener("DOMContentLoaded", function () {
    const redScrollBar = document.getElementById('red-s');
    const headings = document.querySelectorAll('#headings h2 a');

    headings.forEach((heading, index) => {
        heading.addEventListener('click', function (event) {
            event.preventDefault();

            const topPosition = index * (redScrollBar.clientHeight + 1.5 * parseFloat(getComputedStyle(heading).paddingTop));
            redScrollBar.style.top = topPosition + 'px';
        });
    });
});

var headings = document.querySelectorAll('#headings h2 a');
var h1 = document.querySelector('#headings h2 a')
h1.style.color = "white";

// console.log(h1);

var para = document.querySelectorAll("#p4 p");
var p4Content = document.querySelector(".p4-content");
var headings = document.querySelectorAll("#headings h2 a");


para.forEach(function (e) {
    e.style.display = "none";
});

headings[0].style.color = 'white';
p4Content.innerHTML = para[0].textContent;
// fixedImage2.style.backgroundImage = `url(${images[0].src})`;


headings.forEach(function (heading, index) {
    heading.addEventListener('click', function () {

        headings.forEach(function (h) {
            h.style.color = '#4F4A45';
        });

        this.style.color = 'white';


        para.forEach(function (p) {
            p.style.display = "none";
        });

        para[index].style.display = "block";
        p4Content.innerHTML = para[index].textContent;

        const fixedImage2 = document.querySelector("#fixed-imageP4");
        const images = document.querySelectorAll(".e44");
        fixedImage2.style.backgroundImage = `url(${images[index].getAttribute('data-image')})`;
        // fixedImage2.style.backgroundImage = `url(${imgg})`;
    });
});

var swiper = new Swiper(".mySwiper", {
    effect: "cube",
    grabCursor: true,
    cubeEffect: {
        shadow: true,
        slideShadows: true,
        shadowOffset: 20,
        shadowScale: 0.94,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});


var fullScr = document.querySelector("#full-scr");
var navimg = document.querySelector("nav img");
var menu = document.querySelector("nav h3");
var flag = 0;
menu.addEventListener('click', function () {
    if (flag == 0) {
        fullScr.style.top = 0;
        navimg.style.opacity = 0;
        flag = 1;
    }
    else {
        fullScr.style.top = "-100%";
        navimg.style.opacity = 1;
        flag = 0;
    }
})






















