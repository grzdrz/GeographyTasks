import Vector from '../assets/Vector';

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
}

export default CanvasManager;
