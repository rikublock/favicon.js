export class Resize {
  private canvas: HTMLCanvasElement;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
  }

  /**
   * Resize the canvas by halving the width and height. This produces better
   * sampling and the image quality is generally better.
   */
  generate(width: number, height: number): HTMLCanvasElement {
    while (this.canvas.width / 2 >= width) {
      this._resize(this.canvas.width / 2, this.canvas.height / 2);
    }

    if (this.canvas.width > width) {
      this._resize(width, height);
    }

    return this.canvas;
  }

  /**
   * Simple resize of a canvas element.
   */
  private _resize(width: number, height: number): void {
    const canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext("2d");
    if (!ctx) {
      throw new Error("Failed to obtain 2D rendering context from canvas");
    }
    ctx.drawImage(this.canvas, 0, 0, width, height);
    this.canvas = canvas;
  }
}
