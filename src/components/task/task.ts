/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import { saveAs } from 'file-saver';

import Vector from '../../assets/Vector';
import compilationOptions from '../../compilationOptions';
import DropdownForm from '../dropdown-form/dropdown-form';
import DrawingOptionsPanel from '../drawing-options-panel/drawing-options-panel';
import BrushType from './brush-type';
import CanvasManager from './canvas-manager';
import ContourMap from './contour-map';

import './task.scss';

class Task {
  public container: HTMLElement;
  public canvasesContainer: HTMLElement;

  public mapCanvasManager: CanvasManager;
  public resultCanvasManager: CanvasManager;
  public cursorCanvasManager: CanvasManager;
  public tempCanvasManager: CanvasManager;

  public map: ContourMap;

  public drawingOptionsPanel: DrawingOptionsPanel;

  public dropdownForm: DropdownForm;
  public saveButton: HTMLButtonElement;

  public brushRadius = 50;
  public opacity = 0.5;
  public brushType = BrushType.brush;

  public canvasWidth: number;
  public canvasHeight: number;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();

    this.map.draw(this.mapCanvasManager);
  }

  initialize(): void {
    // eslint-disable-next-line no-mixed-operators
    const biggestSide = document.documentElement.clientWidth > document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;
    this.canvasWidth = biggestSide - biggestSide * 0.0;
    this.canvasHeight = biggestSide * 0.5;

    this.canvasesContainer = <HTMLElement>(this.container.querySelector('.task__canvases'));
    this.canvasesContainer.style.height = `${biggestSide * 0.5}px`;

    const mapSize = new Vector(this.canvasWidth, this.canvasHeight);
    this.map = new ContourMap(`${compilationOptions.forGithubPages ? '/GeographyTasks' : ''}/src/data/russia.jpg`, mapSize);

    const mapCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__map-canvas'));
    this.mapCanvasManager = new CanvasManager(mapCanvas, this.canvasWidth, this.canvasHeight);

    const resultCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__result-canvas'));
    this.resultCanvasManager = new CanvasManager(resultCanvas, this.canvasWidth, this.canvasHeight);

    const tempCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__temp-canvas'));
    this.tempCanvasManager = new CanvasManager(tempCanvas, this.canvasWidth, this.canvasHeight);
    this.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;

    const cursorCanvas = <HTMLCanvasElement>(this.container.querySelector('.task__cursor-canvas'));
    this.cursorCanvasManager = new CanvasManager(cursorCanvas, this.canvasWidth, this.canvasHeight);

    const dropdownFormContainer = <HTMLElement>(this.container.querySelector('.task__dropdown-form'));
    this.dropdownForm = new DropdownForm(dropdownFormContainer);
    this.saveButton = this.container.querySelector('.dropdown-form__save-button');

    const drawingOptionsPanelContainer = <HTMLElement>(this.container.querySelector('.task__drawing-options-panel'));
    this.drawingOptionsPanel = new DrawingOptionsPanel(drawingOptionsPanelContainer, this);
  }

  setEventsHandlers(): void {
    this.cursorCanvasManager.canvas.ondragstart = () => false;
    this.cursorCanvasManager.canvas.addEventListener('mousedown', this.handleStartDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchstart', this.handleStartDrawing);

    this.cursorCanvasManager.canvas.addEventListener('mouseover', this.handleCanvasMouseOver);

    window.addEventListener('resize', this.handleWindowSizeChange);

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
    }

    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleDrawing);
    this.cursorCanvasManager.canvas.addEventListener('mouseup', this.handleEndDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchmove', this.handleDrawing);
    this.cursorCanvasManager.canvas.addEventListener('touchend', this.handleEndDrawing);

    const globalPosition = this.calculateMousePosition(event);
    const positionInsideCanvases = this.calculateMousePositionInsideCanvases(globalPosition);
    this.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;
    if (this.brushType === BrushType.brush) this.tempCanvasManager.beginDrawing(positionInsideCanvases, this.brushRadius)/* this.tempCanvasManager.draw(positionInsideCanvases, this.brushRadius, this.brushType) */;
    else if (this.brushType === BrushType.eraser) this.resultCanvasManager.erase(positionInsideCanvases, this.brushRadius);
  };

  handleDrawing = (event: UIEvent): void => {
    const globalPosition = this.calculateMousePosition(event);
    const positionInsideCanvases = this.calculateMousePositionInsideCanvases(globalPosition);
    if (this.brushType === BrushType.brush) this.tempCanvasManager.continuousDrawing(positionInsideCanvases, this.brushRadius)/* this.tempCanvasManager.draw(positionInsideCanvases, this.brushRadius, this.brushType) */;
    else if (this.brushType === BrushType.eraser) this.resultCanvasManager.erase(positionInsideCanvases, this.brushRadius);
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

  handleCanvasMouseOver = (event: UIEvent): void => {
    this.cursorCanvasManager.canvas.addEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.addEventListener('mouseout', this.handleCanvasMouseOut);

    const globalPosition = this.calculateMousePosition(event);
    const positionInsideCanvases = this.calculateMousePositionInsideCanvases(globalPosition);
    this.cursorCanvasManager.drawBrush(positionInsideCanvases, this.brushRadius, this.brushType);
  };

  handleCanvasMouseMove = (event: UIEvent): void => {
    const globalPosition = this.calculateMousePosition(event);
    const positionInsideCanvases = this.calculateMousePositionInsideCanvases(globalPosition);
    this.cursorCanvasManager.drawBrush(positionInsideCanvases, this.brushRadius, this.brushType);
  };

  handleCanvasMouseOut = (): void => {
    this.cursorCanvasManager.canvas.removeEventListener('mousemove', this.handleCanvasMouseMove);
    this.cursorCanvasManager.canvas.removeEventListener('mouseout', this.handleCanvasMouseOut);

    this.cursorCanvasManager.context.clearRect(0, 0, this.cursorCanvasManager.width, this.cursorCanvasManager.height);
  };

  calculateMousePosition(event: UIEvent): Vector {
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

  calculateMousePositionInsideCanvases(globalPosition: Vector): Vector {
    const containerBoundingRect = this.mapCanvasManager.canvas.getBoundingClientRect();
    const containerCoord = new Vector(containerBoundingRect.x, containerBoundingRect.y);

    return globalPosition.subtract(containerCoord);
  }

  handleWindowSizeChange = (): void => {
    let biggestSide = document.documentElement.clientWidth > document.documentElement.clientHeight ? document.documentElement.clientWidth : document.documentElement.clientHeight;
    if (biggestSide < 1000) biggestSide = 1000;
    this.canvasWidth = biggestSide - biggestSide * 0.0;
    this.canvasHeight = biggestSide * 0.5;

    this.canvasesContainer.style.height = `${biggestSide * 0.5}px`;

    this.mapCanvasManager.width = this.canvasWidth;
    this.mapCanvasManager.height = this.canvasHeight;
    this.mapCanvasManager.setSize();

    this.resultCanvasManager.width = this.canvasWidth;
    this.resultCanvasManager.height = this.canvasHeight;
    this.resultCanvasManager.setSize();

    this.tempCanvasManager.width = this.canvasWidth;
    this.tempCanvasManager.height = this.canvasHeight;
    this.tempCanvasManager.setSize();

    this.cursorCanvasManager.width = this.canvasWidth;
    this.cursorCanvasManager.height = this.canvasHeight;
    this.cursorCanvasManager.setSize();

    this.map.size.x = this.canvasWidth;
    this.map.size.y = this.canvasHeight;
    this.map.draw(this.mapCanvasManager);
  };
}

export default Task;
