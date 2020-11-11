import Vector from '../assets/Vector';
import CanvasManager from './canvas-manager';
import constants from './constants';

import './task.scss';

class Task {
  public container: HTMLElement;
  public canvasManager: CanvasManager;
  public mapContainer: HTMLElement;
  public countries: SVGPathElement[];
  public svg: SVGSVGElement;

  /* public baseWidth: number;
  public baseHeight: number; */

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    /* this.setSize(); */
  }

  initialize(): void {
    /* const canvas = this.container.querySelector('canvas');
    this.canvasManager = new CanvasManager(canvas); */

    this.svg = this.container.querySelector('svg');
    this.countries = [...this.container.querySelectorAll('path')];
    this.countries.forEach((path) => {
      path.style.fill = 'rgb(78, 92, 124)';
    });
  }

  setEventsHandlers(): void {
    /* this.canvasManager.canvas.ondragstart = () => false;
    this.canvasManager.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvasManager.canvas.addEventListener('touchstart', this.handleMouseDown); */

    this.countries.forEach((path) => {
      path.addEventListener('click', this.handlePathClick);
    });
  }

  setSize(): void {
    const { kx, ky } = this.calculateScaleCoefficient(this.mapContainer.clientWidth, this.mapContainer.clientHeight);
    this.svg.style.transform = `scale(${kx}, ${kx})`;
    this.countries.forEach((path) => {
      path.style.transform = `scale(${kx}, ${kx})`;
    });
  }

  calculateScaleCoefficient(width: number, height: number): { kx: number, ky: number } {
    const kx = width / this.svg.clientWidth;
    const ky = height / this.svg.clientHeight;
    return { kx, ky };
  }

  handlePathClick = (event: Event): void => {
    this.countries.forEach((path) => {
      path.style.fill = 'rgb(78, 92, 124)';
      /* path.style.transform = 'scale(1, 1)'; */
    });

    const target = <HTMLElement>event.target;
    target.style.fill = 'red';
    /* target.style.transform = 'scale(1.2, 1.2)'; */
  };

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
}

export default Task;
