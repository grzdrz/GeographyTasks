/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
export function formateNumber(number: number): string {
  return number.toString().replace(/(\d)(?=(\d{3})+$)/g, '$1 ');
}

export function makeDebounce(callback: Function, timeStamp: number) {
  let isCooldown = false;

  return () => {
    if (isCooldown) return;
    callback.apply(this, arguments);
    isCooldown = true;
    setTimeout(() => isCooldown = false, timeStamp);
  };
}