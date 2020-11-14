import IMouseData from '../../assets/Events/ArgTypes/IMouseData';
import Vector from '../../assets/vector';
import Event from '../../assets/Events/Event';
import BrushType from './brush-type';
import Task from './task';
import EventArgs from '../../assets/Events/EventArgs';

class ToolsManager {
  public task: Task;

  public brushRadius = 50;
  public opacity = 0.5;
  public brushType = BrushType.brush;

  constructor(task: Task) {
    this.task = task;

    this.initialize();
    this.setEventsHandlers();
  }

  initialize() {

  }

  setEventsHandlers = (): void => {
    this.task.onStartDrawing.subscribe(this.mouseDown);
    this.task.onContinuingDrawing.subscribe(this.mouseMove);
    this.task.onDrawingEnding.subscribe(this.mouseUp);

    this.task.onMouseOver.subscribe(this.mouseOver);
    this.task.onMouseMove.subscribe(this.mouseOver);
    this.task.onMouseOver.subscribe(this.mouseOut);
  };

  mouseDown = (args: EventArgs<IMouseData>): void => {
    this.task.tempCanvasManager.canvas.style.opacity = `${this.opacity}`;
    if (this.brushType === BrushType.brush) this.task.tempCanvasManager.beginDrawing(args.data.mousePosition, this.brushRadius);
    else if (this.brushType === BrushType.eraser) this.task.resultCanvasManager.erase(args.data.mousePosition, this.brushRadius);
  };

  mouseMove = (args: EventArgs<IMouseData>): void => {
    if (this.brushType === BrushType.brush) this.task.tempCanvasManager.continuousDrawing(args.data.mousePosition, this.brushRadius);
    else if (this.brushType === BrushType.eraser) this.task.resultCanvasManager.erase(args.data.mousePosition, this.brushRadius);
  };

  mouseUp = (): void => {
    this.task.resultCanvasManager.context.globalAlpha = this.opacity;
    this.task.resultCanvasManager.context.drawImage(this.task.tempCanvasManager.canvas, 0, 0);
    this.task.tempCanvasManager.context.clearRect(0, 0, this.task.resultCanvasManager.width, this.task.resultCanvasManager.height);
  };

  mouseOver = (args: EventArgs<IMouseData>): void => {
    this.task.cursorCanvasManager.drawBrush(args.data.mousePosition, this.brushRadius, this.brushType);
  };

  mouseOut = (): void => {
    this.task.cursorCanvasManager.context.clearRect(0, 0, this.task.cursorCanvasManager.width, this.task.cursorCanvasManager.height);
  };
}

export default ToolsManager;
