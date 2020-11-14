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

  constructor() {
    this.initialize();
  }

  initialize(): void {
    this.head = undefined;
    this.tail = this.head;
  }

  add(value: TValue): void {
    if (this.head === undefined || this.tail === undefined) {
      const link: ILink<TValue> = {
        next: undefined,
        previous: undefined,
        value,
      };
      this.head = link;
      this.tail = this.head;
    } else {
      const link: ILink<TValue> = {
        next: undefined,
        previous: this.head,
        value,
      };
      this.head.next = link;
      this.head = this.head.next;
    }
  }

  removeLast(): TValue | null {
    if (this.head) {
      const lastLink = this.head;
      this.head = this.head.previous;
      if (this.head) this.head.next = undefined;
      return lastLink.value;
    }
    return null;
  }

  removeFirst(): TValue | null {
    if (this.tail) {
      const firstLink = this.tail;
      this.tail = this.tail.next;
      if (this.tail) this.tail.previous = undefined;
      return firstLink.value;
    }
    return null;
  }

  [Symbol.iterator](): Iterator<TValue> {
    return new Iterator(this);
  }
}

export default LinkedList;
