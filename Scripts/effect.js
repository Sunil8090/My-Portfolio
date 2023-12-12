//effect.js
import Partical from "./particles.js";

let outer_element = document.getElementById("banner");

export default class Effect {
  adjustMouseCoordinates(e) {
    const canvasRect = this.canvas.getBoundingClientRect();
    this.mouse.x = e.clientX - canvasRect.left;
    this.mouse.y = e.clientY - canvasRect.top;
  }

  constructor(canvas, context) {
    this.context = context;
    this.canvas = canvas;
    this.canvasRect = this.canvas.getBoundingClientRect();
    this.c_l = this.canvasRect.left;
    this.c_t = this.canvasRect.top;
    this.width = this.canvas.width;
    this.height = this.canvas.height;
    this.element = document.getElementById("welcome").getBoundingClientRect();
    this.particals = [];
    this.numOfParticlas = 350;
    this.createParticles();
    this.mouse = {
      x: -100,
      y: -100,
      radius: 100,
    };
    window.addEventListener("resize", (e) => {
      this.resize(outer_element.offsetWidth, outer_element.offsetHeight);
    });

    outer_element.addEventListener("mousemove", (e) => {
      this.adjustMouseCoordinates(e);
    });

    outer_element.addEventListener("mouseleave", () => {
      this.mouse.x = -100;
      this.mouse.y = -100;
    });
  }

  //methods
  createParticles() {
    for (let i = 0; i < this.numOfParticlas; i++) {
      this.particals.push(new Partical(this));
    }
  }
  handleParticles() {
    this.particals.forEach((part) => {
      part.draw(this.context);
      part.update();
    });
  }

  resize(width, height) {
    let temp_w = this.canvas.width;
    let temp_h = this.canvas.height
    this.canvas.width = width;
    this.canvas.height = height;
    this.width = width;
    this.height = height;
    this.element = document.getElementById("welcome").getBoundingClientRect();
   

    const canvasRect = this.canvas.getBoundingClientRect();
    this.c_l = canvasRect.left;
    this.c_t = canvasRect.top;

    if (Math.abs(temp_w - width) >= 1 || Math.abs(temp_h - height) > 6)
      this.particals.forEach((part) => {
        part.reset();
      });
  }
}
