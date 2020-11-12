/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import Vector from '../assets/Vector';
import CanvasManager from './canvas-manager';
import constants from './constants';
import IDrawableImage from './IDrawableImage';
import ContourMap from './ContourMap';

import './task.scss';

class Task {
  public container: HTMLElement;
  public canvasManager1: CanvasManager;
  public canvasManager2: CanvasManager;
  public map: ContourMap;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    /* this.setSize(); */

    this.map.draw(this.canvasManager1);
  }

  initialize(): void {
    const canvases = [...this.container.querySelectorAll('.task__canvas')].map((canvas) => canvas as HTMLCanvasElement);
    this.canvasManager1 = new CanvasManager(canvases[0]);
    this.canvasManager2 = new CanvasManager(canvases[1]);
    canvases[1].style.opacity = '0.5';

    const mapSize = new Vector(this.canvasManager1.width, this.canvasManager1.height);
    this.map = new ContourMap('./src/data/russia.jpg', mapSize);
  }

  setEventsHandlers(): void {
    this.canvasManager2.canvas.ondragstart = () => false;
    this.canvasManager2.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvasManager2.canvas.addEventListener('touchstart', this.handleMouseDown);
  }

  public drag = false;

  handleMouseDown = (event: UIEvent) => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchmove', this.handleMouseMove);
    document.addEventListener('touchend', this.handleMouseUp);

    /* const position = this.calculateMousePosition(event);
    this.canvasManager.beginDrawing(position); */
    this.drag = true;
  };

  handleMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    /* this.canvasManager.beginDrawing(position);
    this.canvasManager.draw(position);
    this.canvasManager.endDrawing(); */

    this.canvasManager2.draw(position, this.drag, 50);
  };

  handleMouseUp = (): void => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchmove', this.handleMouseMove);
    document.removeEventListener('touchend', this.handleMouseUp);

    /* this.canvasManager.endDrawing(); */
    this.drag = false;
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
