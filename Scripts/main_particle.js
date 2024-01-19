import Effect from "./effect.js";

window.openInNewTab = function (url) {
  var win = window.open(url, "_blank");
  win.focus();
};

let canvas = document.getElementById("canvas1");
let outer_element = document.getElementById("banner");
let ctx = canvas.getContext("2d");

canvas.width = outer_element.offsetWidth;
canvas.height = outer_element.offsetHeight;

// export let gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
// gradient.addColorStop(0, "#EAEBEB");
// gradient.addColorStop(0.3, "#FFD500");
// gradient.addColorStop(0.8, "#FFD500");
// gradient.addColorStop(1, "#800020");
// ctx.fillStyle = gradient;

const effect = new Effect(canvas, ctx);
function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  // ctx.fillStyle = "rgba(255, 255, 255,0.3)";
  // ctx.fillRect(0, 0, canvas.width, canvas.height);
  effect.handleParticles();
  requestAnimationFrame(animate);
}

animate();
