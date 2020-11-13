/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { saveAs } from 'file-saver';

import Vector from '../../assets/Vector';
import Event from '../../assets/Events/Event';
import compilationOptions from '../../compilationOptions';
import DropdownForm from '../dropdown-form/dropdown-form';
import DrawingOptionsPanel from '../drawing-options-panel/drawing-options-panel';
import BrushType from './brush-type';
import CanvasManager from './canvas-manager';
import ContourMap from './contour-map';
import ToolsManager from './toolsManager';
import EventArgs from '../../assets/Events/EventArgs';
import IMouseData from '../../assets/Events/ArgTypes/IMouseData';

import './task.scss';
import LinkedList from '../../assets/LinkedList/linked-list';

class Task {
  public container: HTMLElement;
  public canvasesContainer: HTMLElement;

  public mapCanvasManager: CanvasManager;
  public resultCanvasManager: CanvasManager;
  public cursorCanvasManager: CanvasManager;
  public tempCanvasManager: CanvasManager;

  public canvasWidth: number;
  public canvasHeight: number;

  public map: ContourMap;

  public toolsManager: ToolsManager;

  public drawingOptionsPanel: DrawingOptionsPanel;
  public dropdownForm: DropdownForm;
  public saveButton: HTMLButtonElement;

  public onStartDrawing = new Event<IMouseData>();
  public onContinuingDrawing = new Event<IMouseData>();
  public onDrawingEnding = new Event<IMouseData>();

  public onMouseOver = new Event<IMouseData>();
  public onMouseMove = new Event<IMouseData>();
  public onMouseOut = new Event<IMouseData>();

  constructor(container: HTMLElement) {
    this.container = container;

    this.toolsManager = new ToolsManager(this);

    this.initialize();
    this.setEventsHandlers();

    const mapSize = new Vector(this.canvasWidth, this.canvasHeight);
    this.map = new ContourMap(`${compilationOptions.forGithubPages ? '/GeographyTasks' : ''}/src/data/russia.jpg`, mapSize);
    this.map.draw(this.mapCanvasManager);
  }

  initialize(): void {
    // eslint-disable-next-line no-mixed-operators
    let biggestSide = document.documentElement.clientWidth > document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;
    if (biggestSide < 1000) biggestSide = 1000;
    this.canvasWidth = biggestSide - biggestSide * 0.0;
    this.canvasHeight = biggestSide * 0.5;

    this.canvasesContainer = <HTMLElement>(this.container.querySelector('.task__canvases'));
    this.canvasesContainer.style.height = `${biggestSide * 0.5}px`;

    const mapCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__map-canvas'));
    this.mapCanvasManager = new CanvasManager(mapCanvas, this.canvasWidth, this.canvasHeight);

    const resultCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__result-canvas'));
    this.resultCanvasManager = new CanvasManager(resultCanvas, this.canvasWidth, this.canvasHeight);

    const tempCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__temp-canvas'));
    this.tempCanvasManager = new CanvasManager(tempCanvas, this.canvasWidth, this.canvasHeight);
    this.tempCanvasManager.canvas.style.opacity = `${this.toolsManager.opacity}`;

    const cursorCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__cursor-canvas'));
    this.cursorCanvasManager = new CanvasManager(cursorCanvas, this.canvasWidth, this.canvasHeight);

    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');

    const drawingOptionsPanelContainer = <HTMLElement>(this.container.querySelector('.task__drawing-options-panel'));
    this.drawingOptionsPanel = new DrawingOptionsPanel(drawingOptionsPanelContainer, this);

    this.toolsManager.initialize();
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

    this.toolsManager.setEventsHandlers();
  }

  public isDoubleTouch = false;
  handleStartDrawing = (event: UIEvent): void => {
    if (event instanceof TouchEvent) {
      if (!this.isDoubleTouch) {
        this.isDoubleTouch = true;
        setTimeout(() => {
          this.isDoubleTouch = false;
        }, 300);
        return;
      }

      event.preventDefault();
    }
    if (event instanceof MouseEvent && this.isDoubleTouch) return;

    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleContinuingDrawing);
    this.cursorCanvasManager.canvas.addEventListener('mouseup', this.handleEndDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchmove', this.handleContinuingDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchend', this.handleEndDrawing);

    this.onStartDrawing.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  handleContinuingDrawing = (event: UIEvent): void => {
    this.onContinuingDrawing.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  handleEndDrawing = (event: UIEvent): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleContinuingDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('mouseup', this.handleEndDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('touchmove', this.handleContinuingDrawing);
    this.cursorCanvasManager.canvas.removeEventListener('touchend', this.handleEndDrawing);

    this.onDrawingEnding.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  handleCanvasMouseOver = (event: UIEvent): void => {
    if (event instanceof MouseEvent && this.isDoubleTouch) return;

    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.addEventListener('mouseout', this.handleCanvasMouseOut);

    this.onMouseOver.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  handleCanvasMouseMove = (event: UIEvent): void => {
    this.onMouseMove.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  handleCanvasMouseOut = (event: UIEvent): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.removeEventListener('mouseout', this.handleCanvasMouseOut);

    this.onMouseOut.invoke(new EventArgs<IMouseData>({
      mousePosition: this.calculateMousePositionInsideCanvases(event),
      button: (<MouseEvent>event).button,
    }));
  };

  extractMousePosition(event: UIEvent): Vector {
    let x;
    let y;
    if (event instanceof TouchEvent) {
      x = event.changedTouches[0].pageX - window.pageXOffset;
      y = event.changedTouches[0].pageY - window.pageYOffset;
    } else if (event instanceof MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    }

    return new Vector(x, y);
  }

  calculateMousePositionInsideCanvases(event: UIEvent): Vector {
    const positionInDocument = this.extractMousePosition(event);
    const containerBoundingRect = this.mapCanvasManager.canvas.getBoundingClientRect();
    const containerCoord = new Vector(containerBoundingRect.x, containerBoundingRect.y);

    return positionInDocument.subtract(containerCoord);
  }
}

export default Task;
