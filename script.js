// // section one

let breadone = document.getElementById("breadone");
let vegetable = document.getElementById("vegetable");
let meat = document.getElementById("meat");
let breadtwo = document.getElementById("breadtwo");
let descOne = document.getElementById("dotDescriptionOne");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);              //script kondisi
  if (value <= 606) {
    breadone.style.top = value * 0.9 + "px";
    breadone.style.right = value * 0.3 + "px";
    vegetable.style.top = value * 1 + "px";
    vegetable.style.right = value * 0.3 + "px";
    meat.style.top = value * 1.1 + "px";
    meat.style.right = value * 0.3 + "px";
    breadtwo.style.top = value * 1.2 + "px";
    breadtwo.style.right = value * 0.3 + "px";
    descOne.style.left = value * 0.3 + "px";
  }
});
