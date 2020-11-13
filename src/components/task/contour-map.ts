import Vector from '../../assets/vector';
import CanvasManager from './canvas-manager';

class ContourMap {
  public position = new Vector(0, 0);
  public size = new Vector(0, 0);
  public angle = 0;

  public image: HTMLImageElement;
  public isImageLoaded = false;

  constructor(imageSrc: string, size: Vector) {
    this.size = size;

    this.image = new Image();
    this.image.src = imageSrc;
    this.image.onload = () => {
      this.isImageLoaded = true;
    };
  }

  /* public initialize(): void {
  }

  public update(isSelected: boolean, gameTime: DOMHighResTimeStamp): void {
  } */

  public draw(canvas: CanvasManager): void {
    if (!this.isImageLoaded) {
      const timerId = setInterval(() => {
        if (this.isImageLoaded) {
          clearInterval(timerId);
        }
        canvas.drawImage(this);
      }, 500);
    } else {
      canvas.drawImage(this);
    }
  }
}

export default ContourMap;
