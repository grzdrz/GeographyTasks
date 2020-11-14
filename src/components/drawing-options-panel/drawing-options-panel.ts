import constants from '../../assets/constants';
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
    this.opacityInput.value = `${constants.OPACITY}`;
    this.brushSizeInput.value = `${constants.BRUSH_RADIUS}`;
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
    this.opacityInput.addEventListener('input', this.handleOpacityInput);
    this.brushSizeInput.addEventListener('input', this.handleBrushSizeInput);
    this.opacityInput.addEventListener('change', this.handleOpacityChange);
    this.brushSizeInput.addEventListener('change', this.handleBrushSizeChange);
  }

  handleRadioClick = (event: Event): void => {
    const target = <HTMLElement>(event.target);
    const { name } = target.dataset;

    switch (name) {
      case 'brush': {
        this.task.toolsManager.brushType = BrushType.brush;
        break;
      }
      case 'eraser': {
        this.task.toolsManager.brushType = BrushType.eraser;
        break;
      }
      default: {
        this.task.toolsManager.brushType = BrushType.brush;
        break;
      }
    }
  };

  handleOpacityInput = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    this.task.toolsManager.opacity = Number.parseFloat(target.value);
    if (this.task.toolsManager.opacity < 0) {
      target.value = '0';
      this.task.toolsManager.opacity = 0;
    } else if (this.task.toolsManager.opacity > 1) {
      target.value = '1';
      this.task.toolsManager.opacity = 1;
    }
  };

  handleBrushSizeInput = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    this.task.toolsManager.brushRadius = Number.parseInt(target.value, 10);
    if (this.task.toolsManager.brushRadius < 1) {
      target.value = '1';
      this.task.toolsManager.brushRadius = 1;
    } else if (this.task.toolsManager.brushRadius > 100) {
      target.value = '100';
      this.task.toolsManager.brushRadius = 100;
    }
  };

  handleOpacityChange = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    const value = Number.parseFloat(target.value);
    if (value !== undefined && !Number.isNaN(value)) {
      this.task.toolsManager.opacity = value;
      target.value = `${value}`;
    } else {
      this.task.toolsManager.opacity = 1;
      target.value = '1';
    }
  };

  handleBrushSizeChange = (event: Event): void => {
    const target = <HTMLInputElement>(event.target);
    const value = Number.parseFloat(target.value);
    if (value !== undefined && !Number.isNaN(value)) {
      this.task.toolsManager.brushRadius = value;
      target.value = `${value}`;
    } else {
      this.task.toolsManager.brushRadius = 1;
      target.value = '1';
    }
  };
}

export default DrawingOptionsPanel;
