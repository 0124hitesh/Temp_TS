import * as particles from "@pixi/particle-emitter";
import { Container, Rectangle } from "pixi.js";
const defaultOptions = {
    "lifetime": {
        "min": 1.5,
        "max": 2.50
    },
    "frequency": 0.005,
    "emitterLifetime": -1,
    "maxParticles": 10000,
    "addAtBack": false,
    "pos": {
        "x": 0,
        "y": 0
    },
};
export class Emitter extends particles.Emitter {
  constructor(parent: Container, config: any) {
    super(parent, { ...defaultOptions, ...config });
  }
}