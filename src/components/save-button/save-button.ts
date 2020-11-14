/* eslint-disable no-useless-return */
import Task from '../task/task';

import './save-button.scss';

class SaveButton {
  public task: Task;
  public button: HTMLElement;

  constructor(task: Task) {
    this.task = task;

    this.initialize();
    this.setEventsHandlers();
  }

  initialize(): void {
    this.button = this.task.container.querySelector('.save-button');
  }

  setEventsHandlers(): void {
    this.button.addEventListener('click', this.handleButtonClick);
  }

  handleButtonClick = (): void => {
    this.saveToLocalStorage();
  };

  saveToLocalStorage(): void {
    /* this.task.resultCanvasManager.canvas.toBlob((blob: Blob) => {
      localStorage.setItem('lastDrawing', blob);
    }); */
    const image = this.task.resultCanvasManager.canvas.toDataURL('image/png')/* .replace('image/png', 'image/octet-stream') */;
    localStorage.setItem('lastDrawing', image);
  }
}

export default SaveButton;
