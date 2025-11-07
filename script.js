// // section one

let breadone = document.getElementById("breadone");
let vegetable = document.getElementById("vegetable");
let meat = document.getElementById("meat");
let breadtwo = document.getElementById("breadtwo");
let dotOne = document.getElementById("dotOne");

window.addEventListener("scroll", () => {
  let value = window.scrollY;
  console.log(value);

  breadone.style.top = value * 0.9 + "px";
  breadone.style.right = value * 0.3 + "px";
  vegetable.style.top = value * 1 + "px";
  vegetable.style.right = value * 0.3 + "px";
  meat.style.top = value * 1.1 + "px";
  meat.style.right = value * 0.3 + "px";
  breadtwo.style.top = value * 1.2 + "px";
  breadtwo.style.right = value * 0.3 + "px";
  dotOne.style.right = value * 8 + "px;";
});
