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
  public canvasManager1: CanvasManager;
  public canvasManager2: CanvasManager;
  public map: ContourMap;

  public dropdownForm: DropdownForm;
  public saveButton: HTMLButtonElement;

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

    const mapSize = new Vector(this.canvasManager1.width, this.canvasManager1.height);
    this.map = new ContourMap('./src/data/russia.jpg', mapSize);

    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');
  }

  setEventsHandlers(): void {
    this.canvasManager2.canvas.ondragstart = () => false;
    this.canvasManager2.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvasManager2.canvas.addEventListener('touchstart', this.handleMouseDown);

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
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchmove', this.handleMouseMove);
    document.addEventListener('touchend', this.handleMouseUp);

    const position = this.calculateMousePosition(event);
    this.canvasManager2.draw(position, 50);
  };

  handleMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.canvasManager2.draw(position, 50);
  };

  handleMouseUp = (): void => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchmove', this.handleMouseMove);
    document.removeEventListener('touchend', this.handleMouseUp);

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

  /* handlePathMouseOver = (event: UIEvent): void => {
    };

    handlePathMouseOut = (event: UIEvent): void => {
    }; */
}

export default Task;
