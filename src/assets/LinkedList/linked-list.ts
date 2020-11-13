/* eslint-disable prefer-const */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-restricted-syntax */
import ILink from './link-type';
import Iterator from './iterator';

class LinkedList<TValue> {
  public head: ILink<TValue>;
  public tail: ILink<TValue>;

  get length(): number {
    let result = 0;
    for (let item of this) {
      result += 1;
    }
    return result;
  }

  constructor(baseValue: TValue) {
    this.initialize(baseValue);
  }

  initialize(baseValue: TValue): void {
    this.head = {
      next: undefined,
      value: baseValue,
    };
    this.tail = this.head;
  }

  add(value: TValue): void {
    this.head.next = {
      next: undefined,
      value,
    };
    this.head = this.head.next;
  }

  [Symbol.iterator](): Iterator<TValue> {
    return new Iterator(this);
  }
}

export default LinkedList;
