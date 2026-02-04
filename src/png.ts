import { Resize } from "./resize";

export class Png {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  generate(size: number): string {
    return new Resize(this.canvas).generate(size, size).toDataURL();
  }
}
