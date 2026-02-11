import { Ico } from "./ico";
import { Png } from "./png";

export type BundleResult = {
  ico: Blob;
  png32: Blob;
  png180: Blob;
  png192: Blob;
  png512: Blob;
};

export class Bundle {
  private readonly canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  async generate(sizes: number[] = [16, 32, 48]): Promise<BundleResult> {
    const ico = new Ico(this.canvas);
    const png = new Png(this.canvas);

    return {
      ico: await ico.generate(sizes),
      png32: await png.generate(32),
      png180: await png.generate(180),
      png192: await png.generate(192),
      png512: await png.generate(512),
    };
  }
}
