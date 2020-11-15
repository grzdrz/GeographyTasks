import EventArgs from './event-args';

interface EventHandler<TData> {
  (args: EventArgs<TData>): void;
}

export default EventHandler;
