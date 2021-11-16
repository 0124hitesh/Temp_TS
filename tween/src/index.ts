import { gsap } from "gsap";
import { Point } from "./point";
window.onload = function () {
  const canvas = <HTMLCanvasElement>document.getElementById("can");
  const context = canvas.getContext("2d");

  const carPosition = new Point(10, 10);
  const car = new Image();
  car.onload = function () {
    gsap.to(carPosition, {
      duration: 2,
      x: 350,
      //   y: 100,
      ease: "sine.out",
      repeat: 1,
      // yoyo: true,
      yoyoEase: "cric.out",
      onUpdate: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(car, carPosition.x, carPosition.y, 80, 50);
      },
      onComplete: function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        context.drawImage(car, carPosition.x, carPosition.y, 80, 50);
      }
    });
  };
  car.src = "./assets/car.png";
}

const d = <HTMLDivElement>document.getElementById('crawl');
gsap.fromTo(d, 
  {top: 30, left: 0}, 
  {top: 600, left: 100, duration: 5, ease: "bounce.out"}, 
  
)