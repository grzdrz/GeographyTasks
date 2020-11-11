/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unnecessary-type-assertion */
import Task from '../../task/task';

import '../base/base';
import './demo.scss';

const container = <HTMLElement>document.querySelector('.demo');
const task = new Task(container);
