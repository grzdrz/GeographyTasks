interface ILink<TValue> {
  next: ILink<TValue>;
  value: TValue;
}

export default ILink;
