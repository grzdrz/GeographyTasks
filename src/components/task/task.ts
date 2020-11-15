/* eslint-disable prefer-const */
/* eslint-disable no-restricted-syntax */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { saveAs } from 'file-saver';

import constants from '../../assets/constants';
import Vector from '../../assets/Vector';
import Event from '../../assets/event/event';
import compilationOptions from '../../compilationOptions';
import DropdownForm from '../dropdown-form/dropdown-form';
import DrawingOptionsPanel from '../drawing-options-panel/drawing-options-panel';
import CanvasManager from './canvas-manager';
import ContourMap from './contour-map';
import ToolsManager from '../drawing-options-panel/tools-manager';
import EventArgs from '../../assets/event/event-args';
import IMouseData from '../../assets/event/arg-data-types/mouse-data-type';
import UndoButton from '../undo-button/undo-button';

import './task.scss';

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

  public undoButton: UndoButton;

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

    this.initialize();
    this.setEventsHandlers();

    const mapSize = new Vector(this.canvasWidth, this.canvasHeight);
    this.map = new ContourMap(`${compilationOptions.forGithubPages ? '/GeographyTasks' : ''}/src/data/russia.jpg`, mapSize);
    this.map.draw(this.mapCanvasManager);

    this.undoButton = new UndoButton(this);
    this.tempCanvasManager.canvas.style.opacity = `${constants.OPACITY}`;
  }

  initialize(): void {
    const biggestSide = this.calculateBiggestSide();

    this.canvasesContainer = <HTMLElement>(this.container.querySelector('.task__canvases'));
    this.canvasesContainer.style.height = `${biggestSide * 0.5}px`;

    const mapCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__map-canvas'));
    const resultCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__result-canvas'));
    const tempCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__temp-canvas'));
    const cursorCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__cursor-canvas'));
    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    const drawingOptionsPanelContainer = <HTMLElement>(this.container.querySelector('.task__drawing-options-panel'));
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');

    this.mapCanvasManager = new CanvasManager(mapCanvas, this.canvasWidth, this.canvasHeight);
    this.resultCanvasManager = new CanvasManager(resultCanvas, this.canvasWidth, this.canvasHeight);
    this.tempCanvasManager = new CanvasManager(tempCanvas, this.canvasWidth, this.canvasHeight);
    this.cursorCanvasManager = new CanvasManager(cursorCanvas, this.canvasWidth, this.canvasHeight);
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.drawingOptionsPanel = new DrawingOptionsPanel(drawingOptionsPanelContainer, this);
  }

  setEventsHandlers(): void {
    this.cursorCanvasManager.canvas.ondragstart = () => false;
    this.cursorCanvasManager.canvas.addEventListener('mousedown', this.handleStartDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchstart', this.handleStartDrawing);

    this.cursorCanvasManager.canvas.addEventListener('mouseover', this.handleCanvasMouseOver);

    // eslint-disable-next-line fsd/no-function-declaration-in-event-listener
    this.saveButton.addEventListener('click', this.handleSaveButton);
  }

  calculateBiggestSide(): number {
    let biggestSide = document.documentElement.clientWidth > document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;
    if (biggestSide < 1000) biggestSide = 1000;
    this.canvasWidth = biggestSide - biggestSide * 0.0;
    this.canvasHeight = biggestSide * 0.5;
    return biggestSide;
  }

  public handleSaveButton = (): void => {
    const tempCanvas = document.createElement('canvas');
    tempCanvas.width = this.mapCanvasManager.width;
    tempCanvas.height = this.mapCanvasManager.height;
    const tempContext = tempCanvas.getContext('2d');

    tempContext.drawImage(this.mapCanvasManager.canvas, 0, 0);
    tempContext.globalAlpha = 1;
    tempContext.drawImage(this.resultCanvasManager.canvas, 0, 0);

    tempCanvas.toBlob((blob: Blob) => {
      saveAs(blob, 'pretty image.png');
    });
  };

  public isDoubleTouch = false;
  public touchIdentifier = -1;
  handleStartDrawing = (event: UIEvent): void => {
    if (event instanceof TouchEvent) {
      if (event.changedTouches[0].identifier > 0) return;
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
