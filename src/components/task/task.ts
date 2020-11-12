/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { saveAs } from 'file-saver';

import Vector from '../../assets/Vector';
import CanvasManager from './CanvasManager';
import constants from './constants';
import IDrawableImage from './IDrawableImage';
import ContourMap from './ContourMap';
import DropdownForm from '../dropdown-form/dropdown-form';

import './task.scss';

class Task {
  public container: HTMLElement;
  public canvases: HTMLCanvasElement[];
  public cursorCanvasManager: CanvasManager;
  public canvasManager1: CanvasManager;
  public canvasManager2: CanvasManager;
  public map: ContourMap;

  public dropdownForm: DropdownForm;
  public saveButton: HTMLButtonElement;

  public brushRadius = 50;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    /* this.setSize(); */

    this.map.draw(this.canvasManager1);
  }

  initialize(): void {
    this.canvases = [...this.container.querySelectorAll('.task__canvas')].map((canvas) => canvas as HTMLCanvasElement);
    this.canvasManager1 = new CanvasManager(this.canvases[0]);
    this.canvasManager2 = new CanvasManager(this.canvases[1]);
    this.canvases[1].style.opacity = '0.5';
    /* this.canvasManager2.context.globalAlpha = 0.5; */

    const cursorCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__cursor-canvas'));
    this.cursorCanvasManager = new CanvasManager(cursorCanvas);

    const mapSize = new Vector(this.canvasManager1.width, this.canvasManager1.height);
    this.map = new ContourMap('./src/data/russia.jpg', mapSize);

    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');
  }

  setEventsHandlers(): void {
    this.cursorCanvasManager.canvas.ondragstart = () => false;
    this.cursorCanvasManager.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.cursorCanvasManager.canvas.addEventListener('touchstart', this.handleMouseDown);

    this.cursorCanvasManager.canvas.addEventListener('mouseover', this.handleCanvasMouseOver);

    // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
    this.saveButton.addEventListener('click', () => {
      const can3 = document.createElement('canvas');
      can3.width = this.canvasManager1.width;
      can3.height = this.canvasManager1.height;
      const ctx3 = can3.getContext('2d');

      ctx3.drawImage(this.canvasManager1.canvas, 0, 0);
      ctx3.globalAlpha = 0.5;
      ctx3.drawImage(this.canvasManager2.canvas, 0, 0);
      ctx3.globalAlpha = 1;

      let blobImage: Blob;
      can3.toBlob((blob: Blob) => {
        blobImage = blob;
      });

      const timerId = setInterval(() => {
        if (blobImage) {
          clearInterval(timerId);
          saveAs(blobImage, 'pretty image.png');
        }
      }, 500);
    });
  }

  handleMouseDown = (event: UIEvent) => {
    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleMouseMove);
    this.cursorCanvasManager.canvas.addEventListener('mouseup', this.handleMouseUp);
    this.cursorCanvasManager.canvas.addEventListener('touchmove', this.handleMouseMove);
    this.cursorCanvasManager.canvas.addEventListener('touchend', this.handleMouseUp);

    const position = this.calculateMousePosition(event);
    this.canvasManager2.draw(position, this.brushRadius);
  };

  handleMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.canvasManager2.draw(position, this.brushRadius);
  };

  handleMouseUp = (): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleMouseMove);
    this.cursorCanvasManager.canvas.removeEventListener('mouseup', this.handleMouseUp);
    this.cursorCanvasManager.canvas.removeEventListener('touchmove', this.handleMouseMove);
    this.cursorCanvasManager.canvas.removeEventListener('touchend', this.handleMouseUp);

    /* const position = this.calculateMousePosition(event);
    this.canvasManager2.draw(position, 50); */
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

  handleCanvasMouseOver = (event: UIEvent): void => {
    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.addEventListener('mouseout', this.handleCanvasMouseOut);

    const position = this.calculateMousePosition(event);
    this.cursorCanvasManager.drawBrush(position, this.brushRadius);
  };

  handleCanvasMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.cursorCanvasManager.drawBrush(position, this.brushRadius);
  };

  handleCanvasMouseOut = (event: UIEvent): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.removeEventListener('mouseout', this.handleCanvasMouseOut);

    this.cursorCanvasManager.context.clearRect(0, 0, this.cursorCanvasManager.width, this.cursorCanvasManager.height);
  };
}

export default Task;
