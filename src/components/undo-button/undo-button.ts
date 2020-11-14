/* eslint-disable no-useless-return */
import IMouseData from '../../assets/Events/ArgTypes/IMouseData';
import EventArgs from '../../assets/Events/EventArgs';
import LinkedList from '../../assets/LinkedList/linked-list';
import Task from '../task/task';

import './undo-button.scss';

class UndoButton {
  public task: Task;
  public button: HTMLElement;

  public drawingStates: LinkedList<Blob>;
  /* public mockBlob = new Blob(); */

  /* public undoQueue: number[] = []; */

  constructor(task: Task) {
    this.task = task;

    this.drawingStates = new LinkedList<Blob>();

    this.initialize();
    this.setEventsHandlers();
  }

  initialize(): void {
    this.button = this.task.container.querySelector('.undo-button');
  }

  setEventsHandlers(): void {
    this.button.addEventListener('click', this.handleButtonClick);

    this.task.onDrawingEnding.subscribe(this.saveLastDrawingState);
  }

  handleButtonClick = (): void => {
    /* this.setUndoRequest(); */
    this.undo();
  };

  /* setUndoRequest(): void {
    this.undoQueue.push(this.undoQueue.length); // длина прост как заглушка, шоб дебажить было легче
  } */

  undo(): void {
    /* if (this.undoQueue.length === 0) return;
    this.undoQueue.shift(); */
    const { length } = this.drawingStates;
    if (length === 0) return;

    const lastBlob = this.drawingStates.removeLast();
    const img = new Image();
    img.src = URL.createObjectURL(lastBlob);
    img.onload = () => {
      this.task.resultCanvasManager.context.clearRect(0, 0, this.task.canvasWidth, this.task.canvasHeight);
      this.task.resultCanvasManager.context.drawImage(img, 0, 0);
    };
  }

  saveLastDrawingState = (): void => {
    this.task.resultCanvasManager.canvas.toBlob((blob: Blob) => {
      this.drawingStates.add(blob);
    });
  };
}

export default UndoButton;
