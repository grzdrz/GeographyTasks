import BrushType from '../task/BrushType';
import Task from '../task/task';
import './drawing-options-panel.scss';

class DrawingOptionsPanel {
  public container: HTMLElement;
  public task: Task;

  public eraser: HTMLInputElement;
  public brush: HTMLInputElement;

  public opacityInput: HTMLInputElement;

  constructor(container: HTMLElement, task: Task) {
    this.container = container;
    this.task = task;

    this.initialize();
    this.setEventsHandlers();

    this.brush.checked = true;
  }

  initialize() {
    this.eraser = this.container.querySelector('.drawing-options-panel__eraser');
    this.brush = this.container.querySelector('.drawing-options-panel__brush');
    this.opacityInput = this.container.querySelector('.drawing-options-panel__opacity-input');
  }

  setEventsHandlers() {
    this.eraser.addEventListener('click', this.handleRadioClick);
    this.brush.addEventListener('click', this.handleRadioClick);
    this.opacityInput.addEventListener('change', this.handleOpacityChange);
  }

  handleRadioClick = (event: Event) => {
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

  handleOpacityChange = () => {

  };
}

export default DrawingOptionsPanel;
