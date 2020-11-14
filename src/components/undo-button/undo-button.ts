/* eslint-disable no-useless-return */
import LinkedList from '../../assets/LinkedList/linked-list';
import Task from '../task/task';

import './undo-button.scss';

class UndoButton {
  public task: Task;
  public button: HTMLElement;

  public drawingStates: LinkedList</* Blob */string>;

  constructor(task: Task) {
    this.task = task;

    this.drawingStates = new LinkedList</* Blob */string>();

    this.initialize();
    this.setEventsHandlers();

    this.saveLastDrawingState();
  }

  initialize(): void {
    this.button = this.task.container.querySelector('.undo-button');
  }

  setEventsHandlers(): void {
    this.button.addEventListener('click', this.handleButtonClick);

    this.task.onDrawingEnding.subscribe(this.saveLastDrawingState);
  }

  handleButtonClick = (): void => {
    this.undo();
  };

  undo(): void {
    const { length } = this.drawingStates;
    if (length <= 1) return;

    this.drawingStates.removeLast();
    const img = new Image();
    img.src = /* URL.createObjectURL(this.drawingStates.head.value) */this.drawingStates.head.value;
    img.onload = () => {
      this.task.resultCanvasManager.context.clearRect(0, 0, this.task.canvasWidth, this.task.canvasHeight);
      this.task.resultCanvasManager.context.globalAlpha = 1;
      this.task.resultCanvasManager.context.drawImage(img, 0, 0);
    };
  }

  saveLastDrawingState = (): void => {
    /* this.task.resultCanvasManager.canvas.toBlob((blob: Blob) => {
      this.drawingStates.add(blob);
    }); */
    const imageDataURL = this.task.resultCanvasManager.canvas.toDataURL('image/png');
    this.drawingStates.add(imageDataURL);
  };
}

export default UndoButton;
