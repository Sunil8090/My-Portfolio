// import { gradient } from "./main_particle.js";

export default class Partical {
  constructor(effect) {
    this.effect = effect;
    this.radius = Math.floor(Math.random() * 12 + 1);
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);
    if (
      this.x - this.radius <
        this.effect.element.x - this.effect.c_l + this.effect.element.width &&
      this.x + this.radius > this.effect.element.x - this.effect.c_l &&
      this.y - this.radius <
        this.effect.element.y - this.effect.c_t + this.effect.element.height &&
      this.y + this.radius > this.effect.element.y - this.effect.c_t
    ) {
      this.x -= 220;
      this.y += 220;
    }
    this.minRadius = this.radius;
    this.maxRadius = this.radius * 5;
    this.vx = Math.random() * 1 - 0.5;
    this.vy = Math.random() * 1 - 0.5;
    this.pushX = 0;
    this.pushY = 0;
    this.friction = 0.95;
    this.width = this.radius * 2;
    this.height = this.radius * 2;
  }

  draw(context) {
    context.beginPath();
    // context.fillStyle = gradient;
    // context.fillStyle = "transparent"
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    // context.fill();
    context.strokeStyle = 'black';
    context.lineWidth = 1;
    context.stroke();

    context.beginPath();
    context.fillStyle = "rgba(255,255,255,0.3)";
    context.arc(
      this.x - this.radius * 0.3,
      this.y - this.radius * 0.3,
      this.radius * 0.6,
      0,
      Math.PI * 2
    );
    context.fill();
  }

  update() {
    let dx = this.x - this.effect.mouse.x;
    let dy = this.y - this.effect.mouse.y;
    let distance = Math.hypot(dx, dy);
    let force = this.effect.mouse.radius / distance;

    if (distance < this.effect.mouse.radius) {
      if (this.radius < this.maxRadius) {
        this.radius += 2;
      }
      const angle = Math.atan2(dy, dx);
      this.pushX += Math.cos(angle) * force;
      this.pushY += Math.sin(angle) * force;
    }

    if (this.radius > this.minRadius) this.radius -= 0.4;

    //start of collision

    if (
      this.x - this.radius <
        this.effect.element.x - this.effect.c_l + this.effect.element.width &&
      this.x + this.radius > this.effect.element.x - this.effect.c_l &&
      this.y - this.radius <
        this.effect.element.y - this.effect.c_t + this.effect.element.height &&
      this.y + this.radius > this.effect.element.y - this.effect.c_t
    ) {
      // Collision detected!
      // Move the particle outside the element to avoid continuous collision
      if (this.x < this.effect.element.x - this.effect.c_l) {
        this.vx = -this.vx;
        this.x = this.effect.element.x - this.effect.c_l - this.radius;
      } else if (
        this.x >
        this.effect.element.x - this.effect.c_l + this.effect.element.width
      ) {
        this.vx = -this.vx;
        this.x =
          this.effect.element.x -
          this.effect.c_l +
          this.effect.element.width +
          this.radius;
      }

      if (this.y < this.effect.element.y - this.effect.c_t) {
        this.vy = -this.vy;
        this.y = this.effect.element.y - this.effect.c_t - this.radius;
      } else if (
        this.y >
        this.effect.element.y - this.effect.c_t + this.effect.element.height
      ) {
        this.vy = -this.vy;
        this.y =
          this.effect.element.y -
          this.effect.c_t +
          this.effect.element.height +
          this.radius;
      }
    }

    //end of collision code

    this.x += (this.pushX *= this.friction) + this.vx;
    this.y += (this.pushY *= this.friction) + this.vy;

    if (this.x < this.radius) {
      this.vx *= -1;
      this.x = this.radius;
    } else if (this.x > this.effect.width - this.radius) {
      this.vx *= -1;
      this.x = this.effect.width - this.radius;
    }

    if (this.y < this.radius) {
      this.vy *= -1;
      this.y = this.radius;
    } else if (this.y > this.effect.height - this.radius) {
      this.vy *= -1;
      this.y = this.effect.height - this.radius;
    }
  }

  reset() {
    this.x =
      this.radius + Math.random() * (this.effect.width - this.radius * 2);
    this.y =
      this.radius + Math.random() * (this.effect.height - this.radius * 2);

      if (
        this.x - this.radius <
          this.effect.element.x - this.effect.c_l + this.effect.element.width &&
        this.x + this.radius > this.effect.element.x - this.effect.c_l &&
        this.y - this.radius <
          this.effect.element.y - this.effect.c_t + this.effect.element.height &&
        this.y + this.radius > this.effect.element.y - this.effect.c_t
      ) {
        this.x -= 220;
        this.y += 220;
      }
  }
}
