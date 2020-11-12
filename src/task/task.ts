import Vector from '../assets/Vector';
import CanvasManager from './canvas-manager';
import constants from './constants';
import IDrawableImage from './IDrawableImage';
import ContourMap from './ContourMap';

import './task.scss';

class Task {
  public container: HTMLElement;
  public canvasManager: CanvasManager;
  public map: ContourMap;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    /* this.setSize(); */

    this.map.draw(this.canvasManager);
  }

  initialize(): void {
    const canvas = this.container.querySelector('canvas');
    this.canvasManager = new CanvasManager(canvas);
    const mapSize = new Vector(this.canvasManager.width, this.canvasManager.height);
    this.map = new ContourMap('./src/data/russia.jpg', mapSize);
  }

  setEventsHandlers(): void {
    this.canvasManager.canvas.ondragstart = () => false;
    this.canvasManager.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvasManager.canvas.addEventListener('touchstart', this.handleMouseDown);
  }

  handleMouseDown = (event: UIEvent) => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchmove', this.handleMouseMove);
    document.addEventListener('touchend', this.handleMouseUp);

    const position = this.calculateMousePosition(event);
    this.canvasManager.beginDrawing(position);
  };

  handleMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.canvasManager.draw(position);
  };

  handleMouseUp = (): void => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchmove', this.handleMouseMove);
    document.removeEventListener('touchend', this.handleMouseUp);

    this.canvasManager.endDrawing();
  };

  calculateMousePosition(event: UIEvent): Vector {
    let x;
    let y;
    if (event instanceof TouchEvent) {
      x = event.changedTouches[0].pageX;
      y = event.changedTouches[0].pageY;
    } else if (event instanceof MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    }
    return new Vector(x, y);
  }

  /* handlePathMouseOver = (event: UIEvent): void => {
    };

    handlePathMouseOut = (event: UIEvent): void => {
    }; */
}

export default Task;
