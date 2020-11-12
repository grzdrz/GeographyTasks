import Vector from '../assets/Vector';
import IDrawableImage from './IDrawableImage';

class CanvasManager {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public width: number;
  public height: number;

  constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.initialaze();
    this.clear();
  }

  initialaze(): void {
    this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight;

    this.canvas.width = this.width;
    this.canvas.height = this.height;
  }

  clear(): void {
    this.context.fillStyle = 'rgb(179, 179, 179)';
    this.context.fillRect(0, 0, this.width, this.height);
  }

  beginDrawing = (position: Vector): void => {
    this.context.beginPath();
    this.context.moveTo(position.x, position.y);
  };

  draw = (position: Vector): void => {
    /* context.fillStyle = 'black';
    context.fillRect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2); */

    this.context.lineTo(position.x, position.y);
    this.context.strokeStyle = 'black';
    this.context.stroke();
  };

  endDrawing = (): void => {
    this.context.closePath();
  };

  public drawImage(object: IDrawableImage): void {
    if (object.isImageLoaded) {
      // точка вращения относительно канваса
      const x = object.position.x + object.size.width / 2;
      const y = object.position.y + object.size.height / 2;
      // центр объекта относительно самого себя
      const objCenterX = -object.size.width / 2;
      const objCenterY = -object.size.height / 2;
      this.context.setTransform(1, 0, 0, 1, x, y);
      this.context.rotate(object.angle);
      this.context.drawImage(object.image, objCenterX, objCenterY, object.size.width, object.size.height);
      this.context.resetTransform();
    } else { // заглушка, до подгрузки изображения
      const position = new Vector(object.position.x, object.position.y);
      this.drawSquare(position, object.size, 'rgb(12, 123, 222)');
    }
  }

  public drawSquare(position: Vector, size: Vector, color: string): void {
    this.context.fillStyle = color;
    this.context.fillRect(position.x, position.y, size.width, size.height);
  }
}

export default CanvasManager;
