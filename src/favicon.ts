import { Bundle, type BundleResult } from "./bundle";
import { Ico } from "./ico";
import { Png } from "./png";
import { Resize } from "./resize";

export class FaviconJS {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  async bundle(sizes: number[]): Promise<BundleResult> {
    return new Bundle(this.canvas).generate(sizes);
  }

  async ico(sizes: number[]): Promise<Blob> {
    return new Ico(this.canvas).generate(sizes);
  }

  async png(size: number): Promise<Blob> {
    return new Png(this.canvas).generate(size);
  }

  resize(size: number): HTMLCanvasElement {
    return new Resize(this.canvas).generate(size, size);
  }
}
