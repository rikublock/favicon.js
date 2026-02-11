import { Ico } from "./ico";
import { Png } from "./png";

export type BundleResult = {
  ico: string;
  png32: string;
  png180: string;
  png192: string;
  png512: string;
};

export class Bundle {
  private readonly canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  generate(sizes: number[] = [16, 32, 48]): BundleResult {
    const ico = new Ico(this.canvas);
    const png = new Png(this.canvas);

    return {
      ico: ico.generate(sizes),
      png32: png.generate(32),
      png180: png.generate(180),
      png192: png.generate(192),
      png512: png.generate(512),
    };
  }
}
