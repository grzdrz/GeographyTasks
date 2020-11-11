import Vector from '../assets/Vector';
import CanvasManager from './canvas-manager';

class Task {
  public container: HTMLElement;
  public canvasManager: CanvasManager;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
  }

  initialize(): void {
    const canvas = this.container.querySelector('canvas');
    this.canvasManager = new CanvasManager(canvas);
  }

  setEventsHandlers(): void {
    this.canvasManager.canvas.ondragstart = () => false;
    this.canvasManager.canvas.addEventListener('mousedown', this.handleMouseDown);
    this.canvasManager.canvas.addEventListener('touchstart', this.handleMouseDown);
  }

  handleMouseDown = (event: UIEvent) => {
    /* const optionsForMouseEvents = {
      handleMouseMove: (event) => { },
      handleMouseUp: (event) => { },
      mousePositionInsideHandle,
    };
    const handleMouseMove = handleMouseMove.bind(this, optionsForMouseEvents);
    optionsForMouseEvents.handleMouseMove = handleMouseMove;

    const handleMouseUp = handleMouseUp.bind(this, optionsForMouseEvents);
    optionsForMouseEvents.handleMouseUp = handleMouseUp; */

    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    document.addEventListener('touchmove', this.handleMouseMove);
    document.addEventListener('touchend', this.handleMouseUp);

    const position = this.calculateMousePosition(event);
    this.canvasManager.beginDrawing(position);
  };

  handleMouseMove = (event: UIEvent): void => {
    const position = this.calculateMousePosition(event);
    this.canvasManager.draw(position);
  };

  handleMouseUp = (): void => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    document.removeEventListener('touchmove', this.handleMouseMove);
    document.removeEventListener('touchend', this.handleMouseUp);

    this.canvasManager.endDrawing();
  };

  calculateMousePosition(event: UIEvent): Vector {
    let x;
    let y;
    if (event instanceof TouchEvent) {
      x = event.changedTouches[0].pageX;
      y = event.changedTouches[0].pageY;
    } else if (event instanceof MouseEvent) {
      x = event.clientX;
      y = event.clientY;
    }
    // y = (document.documentElement.clientHeight + window.pageYOffset) - y;

    /* return new Vector(x, y); */
    return new Vector(x, y);
  }
}

export default Task;
