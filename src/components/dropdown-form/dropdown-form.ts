import './dropdown-form.scss';

class DropdownForm {
  public container: HTMLElement;

  public dropButton: HTMLButtonElement;
  public arrow: HTMLElement;
  public form: HTMLFormElement;

  public isOpened = false;

  constructor(container: HTMLElement) {
    this.container = container;

    this.initialize();
    this.setEventsHandlers();
    this.updateState();
  }

  initialize(): void {
    this.dropButton = this.container.querySelector('.dropdown-form__drop-button');
    this.arrow = this.container.querySelector('.dropdown-form__arrow');
    this.form = this.container.querySelector('.dropdown-form__form');
  }

  setEventsHandlers(): void {
    this.dropButton.addEventListener('click', this.handleArrowClick);
    document.addEventListener('click', this.handleDropdownLeave);
  }

  updateState(): void {
    this.arrow.classList.toggle('dropdown-form__arrow_opened', this.isOpened);
    this.form.classList.toggle('dropdown-form__form_opened', this.isOpened);
  }

  handleArrowClick = (): void => {
    this.isOpened = !this.isOpened;
    this.updateState();
  };

  handleDropdownLeave = (event: Event): void => {
    const target = <HTMLElement>(event.target);
    const dropwdown = target.closest('.dropdown-form');
    if (!dropwdown) {
      this.isOpened = false;
      this.updateState();
    }
  };
}

export default DropdownForm;
