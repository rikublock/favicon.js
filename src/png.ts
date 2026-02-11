import { Resize } from "./resize";

export class Png {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  async generate(size: number): Promise<Blob> {
    return new Promise<Blob>((resolve, reject) => {
      new Resize(this.canvas).generate(size, size).toBlob((blob) => {
        if (!blob) {
          return reject(new Error("Failed to generate blob"));
        }

        resolve(blob);
      }, "image/png");
    });
  }
}
