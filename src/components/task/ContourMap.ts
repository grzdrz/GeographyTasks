import Vector from '../../assets/vector';
import CanvasManager from './CanvasManager';

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

  public initialize(): void {
  }

  public update(isSelected: boolean, gameTime: DOMHighResTimeStamp): void {
  }

  public draw(canvas: CanvasManager): void {
    /* while (!this.isImageLoaded)  */
    const timerId = setInterval(() => {
      if (this.isImageLoaded) {
        clearInterval(timerId);
      }
      canvas.drawImage(this);
    }, 500);
  }
}

export default ContourMap;
