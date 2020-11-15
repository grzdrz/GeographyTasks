/* eslint-disable prefer-rest-params */
/* eslint-disable @typescript-eslint/unbound-method */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Vector from '../../assets/Vector';
import BrushType from './types/brush-type';
import IDrawableImage from './types/drawable-image-type';

class CanvasManager {
  public canvas: HTMLCanvasElement;
  public context: CanvasRenderingContext2D;
  public width: number;
  public height: number;

  constructor(canvas: HTMLCanvasElement, width: number, height: number) {
    this.canvas = canvas;
    this.context = canvas.getContext('2d');

    this.width = width;
    this.height = height;

    this.initialaze();
  }

  initialaze(): void {
    /* this.width = document.documentElement.clientWidth;
    this.height = document.documentElement.clientHeight; */

    this.setSize();
  }

  setSize = (): void => {
    this.canvas.width = this.width;
    this.canvas.height = this.height;
  };

  erase = (position: Vector, brushRadius: number): void => {
    this.context.clearRect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2);
  };

  beginDrawing = (position: Vector, brushRadius: number): void => {
    if (brushRadius < 20) {
      this.context.beginPath();
      const color = 'rgba(0, 0, 0, 1)';
      this.context.strokeStyle = color;
      this.context.lineWidth = brushRadius * 2;
      this.context.lineCap = 'round';
      this.context.lineTo(position.x, position.y);
      this.context.stroke();
    } else {
      const color = 'rgba(0, 0, 0, 1)';
      this.context.fillStyle = color;
      this.context.beginPath();
      this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
      this.context.fill();
    }
  };

  continuousDrawing = (position: Vector, brushRadius: number): void => {
    if (brushRadius < 20) {
      const color = 'rgba(0, 0, 0, 1)';
      this.context.strokeStyle = color;
      this.context.lineWidth = brushRadius * 2;
      this.context.lineCap = 'round';
      this.context.lineTo(position.x, position.y);
      this.context.stroke();
    } else {
      const color = 'rgba(0, 0, 0, 1)';
      this.context.fillStyle = color;
      this.context.beginPath();
      this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
      this.context.fill();
    }
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

  public drawBrush(position: Vector, brushRadius: number, brushType: BrushType): void {
    this.context.clearRect(0, 0, this.width, this.height);

    if (brushType === BrushType.brush) {
      const color = 'rgba(0, 0, 0, 1)';
      this.context.fillStyle = color;
      this.context.lineWidth = 1;

      this.context.beginPath();
      this.context.arc(position.x, position.y, brushRadius, 0, Math.PI * 2);
      this.context.closePath();
      this.context.stroke();
    } else if (brushType === BrushType.eraser) {
      this.context.beginPath();
      this.context.rect(position.x - brushRadius, position.y - brushRadius, brushRadius * 2, brushRadius * 2);
      this.context.closePath();
      this.context.strokeStyle = 'black';
      this.context.stroke();
    }
  }
}

export default CanvasManager;
