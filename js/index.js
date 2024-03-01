"use strict"

let cat = document.querySelector("#i_cat");
let dog = document.querySelector("#i_dog");
let text_cat = document.querySelector("#text_cat");
let text_dog = document.querySelector("#text_dog");
let foot_Cat = document.querySelector("#foot_Cat");


foot_Cat.addEventListener("click", () => {

    foot_Cat.style.color = "white";
}
)

window.addEventListener("scroll", () => {
    let val = window.scrollY;
    cat.style.right = val / 8 + 'px';
    dog.style.left = val / 18 + 'px';
    text_cat.style.left = val / 10 + 'px';
    text_dog.style.right = val / 10 + 'px';


})

