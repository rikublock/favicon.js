import { Bundle } from "./bundle";
import { Ico } from "./ico";
import { Png } from "./png";
import { Resize } from "./resize";

export class FaviconJS {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  bundle(sizes: number[]) {
    return new Bundle(this.canvas).generate(sizes);
  }

  ico(sizes: number[]): string {
    return new Ico(this.canvas).generate(sizes);
  }

  png(size: number): string {
    return new Png(this.canvas).generate(size);
  }

  resize(size: number): HTMLCanvasElement {
    return new Resize(this.canvas).generate(size, size);
  }
}
