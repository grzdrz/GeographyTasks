import BrushType from '../task/brush-type';
import Task from '../task/task';
import './drawing-options-panel.scss';

class DrawingOptionsPanel {
  public container: HTMLElement;
  public task: Task;

  public eraser: HTMLInputElement;
  public brush: HTMLInputElement;

  public opacityInput: HTMLInputElement;
  public brushSizeInput: HTMLInputElement;

  constructor(container: HTMLElement, task: Task) {
    this.container = container;
    this.task = task;

    this.initialize();
    this.setEventsHandlers();

    this.brush.checked = true;
    this.opacityInput.value = '0.5';
    this.brushSizeInput.value = '50';
  }

  initialize(): void {
    this.eraser = this.container.querySelector('.drawing-options-panel__eraser');
    this.brush = this.container.querySelector('.drawing-options-panel__brush');
    this.opacityInput = this.container.querySelector('.drawing-options-panel__opacity-input');
    this.brushSizeInput = this.container.querySelector('.drawing-options-panel__brush-size-input');
  }

  setEventsHandlers(): void {
    this.eraser.addEventListener('click', this.handleRadioClick);
    this.brush.addEventListener('click', this.handleRadioClick);
    this.opacityInput.addEventListener('input', this.handleOpacityChange);
    this.brushSizeInput.addEventListener('input', this.handleBrushSizeChange);
  }

  handleRadioClick = (event: Event): void => {
    const target = <HTMLElement>(event.target);
    const { name } = target.dataset;

    switch (name) {
      case 'brush': {
        this.task.brushType = BrushType.brush;
        break;
      }
      case 'eraser': {
        this.task.brushType = BrushType.eraser;
        break;
      }
      default: {
        this.task.brushType = BrushType.brush;
        break;
      }
    }
  };

  handleOpacityChange = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    this.task.opacity = Number.parseFloat(target.value);
    if (this.task.opacity < 0) {
      target.value = '0';
      this.task.opacity = 0;
    } else if (this.task.opacity > 1) {
      target.value = '1';
      this.task.opacity = 1;
    }
  };

  handleBrushSizeChange = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    this.task.brushRadius = Number.parseInt(target.value, 10);
    if (this.task.brushRadius < 1) {
      target.value = '1';
      this.task.brushRadius = 1;
    } else if (this.task.brushRadius > 100) {
      target.value = '100';
      this.task.brushRadius = 100;
    }
  };
}

export default DrawingOptionsPanel;
