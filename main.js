// let btn1 = document.querySelector("#btn1")
// let btn2 = document.querySelector("#btn2")
let img = document.querySelector("#imgCont")
let x = document.querySelectorAll(".btn")
let counter =0;
const cars=[
    "joey-banks-YApiWyp0lqo-unsplash",
    "joshua-koblin-eqW1MPinEV4-unsplash",
    "matt-antonioli-3akA0XDg1_g-unsplash",
    "peter-broomfield-m3m-lnR90uM-unsplash",
    "stefan-rodriguez-2AovfzYV3rc-unsplash",
    "hakon-sataoen-yQ9mZzBdDAM-unsplash"
];

// function random() {
//     let rand = Math.floor(Math.random()*cars.length)
//     return rand;
// }

// x.forEach(function(element) {
//     element.addEventListener("click", function () {
//         img.style.backgroundImage = `url('images/${cars[random()]}.jpg')`;
//     })
// })

x.forEach(function(x) {
    x.addEventListener("click", function () {
    if (x.classList.contains('btn-left')) {
        counter--;
        if (counter<0) {
            counter=cars.length-1;
        }
        img.style.backgroundImage = `url('./images/${cars[counter]}.jpg')`;
    }
    if (x.classList.contains('btn-right')) {
        counter++;
        if (counter>cars.length-1) {
            counter=0;
        }
        img.style.backgroundImage = `url('./images/${cars[counter]}.jpg')`;
    }
})
})
