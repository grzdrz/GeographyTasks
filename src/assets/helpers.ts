/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable prefer-rest-params */
/* eslint-disable no-return-assign */
/* eslint-disable @typescript-eslint/ban-types */

import Vector from "./vector";

/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function formateNumber(number: number): string {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export function makeDebounce(callback: Function, timeStamp: number) {
  let isCooldown = false;

  return () => {
    if (isCooldown) return;
    callback(...arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, timeStamp);
  };
}

export function throttle(callback: (position: Vector, brushRadius: number) => void, timeStamp: number) {
  let isThrottled = false;
  let savedArgs: IArguments;
  let savedThis: any;

  function wrapper() {
    if (isThrottled) { // (2)
      savedArgs = arguments;
      savedThis = this;
      return;
    }

    callback.apply(this, arguments); // (1)

    isThrottled = true;

    // eslint-disable-next-line prefer-arrow-callback
    setTimeout(function () {
      isThrottled = false; // (3)
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs);
        // eslint-disable-next-line no-multi-assign
        savedArgs = savedThis = null;
      }
    }, timeStamp);
  }

  return wrapper;
}
