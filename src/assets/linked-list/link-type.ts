interface ILink<TValue> {
  next: ILink<TValue>;
  previous: ILink<TValue>;
  value: TValue;
}

export default ILink;
