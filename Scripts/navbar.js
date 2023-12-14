// Your JavaScript code here
// if(window.innerWidth < 851){
//   burgger.classList.remove("remover");
//   burgger_close.classList.remove("remover");
// }

let burgger = document.querySelector(".burgger");
let burgger_close = document.querySelector(".burgger_close");
let nav_bar = document.querySelector(".nav_bar");

burgger.addEventListener("click", () => {
  nav_bar.style.left = "70%";
  burgger_close.classList.remove("remover");
});

burgger_close.addEventListener("click", () => {
  nav_bar.style.left = "110%";
  burgger_close.classList.add("remover");
});

window.addEventListener("resize", () => {
  console.log(window.innerWidth);
  if (window.innerWidth < 851) {
    burgger.classList.remove("remover");
    burgger_close.classList.remove("remover");
  }else{
    burgger.classList.add("remover");
    burgger_close.classList.add("remover");
  }
});
