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

  public mapCanvasManager: CanvasManager;
  public resultCanvasManager: CanvasManager;
  public cursorCanvasManager: CanvasManager;
  public tempCanvasManager: CanvasManager;

  public map: ContourMap;

  public dropdownForm: DropdownForm;
  public saveButton: HTMLButtonElement;

  public brushRadius = 50;
  public opacity = 0.5;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    /* this.setSize(); */

    this.map.draw(this.mapCanvasManager);
  }

  initialize(): void {
    /* this.canvases = [...this.container.querySelectorAll('.task__canvas')].map((canvas) => canvas as HTMLCanvasElement); */
    const mapCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__map-canvas'));
    this.mapCanvasManager = new CanvasManager(mapCanvas);

    const resultCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__result-canvas'));
    this.resultCanvasManager = new CanvasManager(resultCanvas);
    /* this.resultCanvasManager.canvas.style.opacity = '0.5'; */
    /* this.resultCanvasManager.context.globalAlpha = 0.5; */

    const tempCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__temp-canvas'));
    this.tempCanvasManager = new CanvasManager(tempCanvas);
    this.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;

    const cursorCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__cursor-canvas'));
    this.cursorCanvasManager = new CanvasManager(cursorCanvas);

    const mapSize = new Vector(this.mapCanvasManager.width, this.mapCanvasManager.height);
    this.map = new ContourMap('./src/data/russia.jpg', mapSize);

    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');
  }

  setEventsHandlers(): void {
    this.cursorCanvasManager.canvas.ondragstart = () => false;
    this.cursorCanvasManager.canvas.addEventListener('mousedown', this.handleStartDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchstart', this.handleStartDrawing);

    this.cursorCanvasManager.canvas.addEventListener('mouseover', this.handleCanvasMouseOver);

    // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
    this.saveButton.addEventListener('click', () => {
      const can3 = document.createElement('canvas');
      can3.width = this.mapCanvasManager.width;
      can3.height = this.mapCanvasManager.height;
      const ctx3 = can3.getContext('2d');

      ctx3.drawImage(this.mapCanvasManager.canvas, 0, 0);
      ctx3.globalAlpha = 0.5;
      ctx3.drawImage(this.resultCanvasManager.canvas, 0, 0);
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

  handleStartDrawing = (event: UIEvent) => {
    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleDrawing);
    this.cursorCanvasManager.canvas.addEventListener('mouseup', this.handleEndDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchmove', this.handleDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchend', this.handleEndDrawing);

    const position = this.calculateMousePosition(event);
    this.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;
    this.tempCanvasManager.draw(position, this.brushRadius);
  };

  handleDrawing = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.tempCanvasManager.draw(position, this.brushRadius);
  };

  handleEndDrawing = (): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('mouseup', this.handleEndDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('touchmove', this.handleDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('touchend', this.handleEndDrawing);

    this.resultCanvasManager.context.globalAlpha = this.opacity;
    this.resultCanvasManager.context.drawImage(this.tempCanvasManager.canvas, 0, 0);
    this.tempCanvasManager.context.clearRect(0, 0, this.resultCanvasManager.width, this.resultCanvasManager.height);
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
