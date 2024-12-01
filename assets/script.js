const slides = [
    {
        imageUrl: "./assets/images/slideshow/slide1.jpg",
        tagline: "Impressions tous formats <span>en boutique et en ligne</span>"
    },
    {
        imageUrl: "./assets/images/slideshow/slide2.jpg",
        tagline: "Tirages haute définition grand format <span>pour vos bureaux et events</span>"
    },
    {
        imageUrl: "./assets/images/slideshow/slide3.jpg",
        tagline: "Grand choix de couleurs <span>de CMJN aux pantones</span>"
    },
    {
        imageUrl: "./assets/images/slideshow/slide4.png",
        tagline: "Autocollants <span>avec découpe laser sur mesure</span>"
    }
];

const dots = document.querySelector(".dots"); 
const arrowR = document.querySelector(".arrowRight"); 
const arrowL = document.querySelector(".arrowLeft"); 
const img = document.querySelector(".banner img"); 
const p = document.querySelector(".banner p"); 

let index = 0;

function clickRight() {
    arrowR.addEventListener("click", () => {
        const arrowD = document.querySelectorAll(".dots .dot"); 
        arrowD[index].classList.remove("dot_selected"); 
        index++; 
        if (index >= slides.length) { 
            index = 0; 
        }
        arrowD[index].classList.add("dot_selected"); 
        img.src = slides[index].imageUrl; 
        p.innerHTML = slides[index].tagline; 
    });
}

clickRight();

function clickLeft() {
    arrowL.addEventListener("click", () => {
        const arrowD = document.querySelectorAll(".dots .dot"); 
        arrowD[index].classList.remove("dot_selected"); 
        index--; 
        if (index < 0) { 
            index = slides.length - 1; 
        }
        arrowD[index].classList.add("dot_selected"); 
        img.src = slides[index].imageUrl; 
        p.innerHTML = slides[index].tagline; 
    });
}

clickLeft();

function Dots() {
    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement("div"); 
        dot.classList.add("dot"); 
        dots.appendChild(dot); 
        if (i === index) { 
            dot.classList.add("dot_selected"); 
        }
    }
}

Dots();
