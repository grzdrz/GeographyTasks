import ILink from './link-type';
import LinkedList from './linked-list';

interface IIteratorResult<TValue> {
  done: boolean;
  value: ILink<TValue>;
}

class Iterator<TValue> {
  public list: LinkedList<TValue>;
  public current: ILink<TValue>;
  public isDone: boolean;

  constructor(list: LinkedList<TValue>) {
    this.list = list;
    this.current = this.list.tail;
    this.isDone = false;
  }

  next(): IIteratorResult<TValue> {
    const result = {
      value: this.current,
      done: this.isDone,
    };
    if (this.isDone) return result;

    this.current = this.current.next;
    this.isDone = this.current === undefined;
    return result;
  }
}

export default Iterator;
