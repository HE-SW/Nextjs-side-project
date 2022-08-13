import { Dummy_EventType } from '../../dummy-data';
import EventItem from './event-item';

export default function EventList(props: any) {
  const { items } = props;

  return (
    <ul className=' w-11/12 max-w-2xl my-20 mx-auto'>
      {items &&
        items.map((event: Dummy_EventType) => (
          <EventItem
            key={event.id}
            id={event.id}
            title={event.title}
            location={event.location}
            date={event.location}
            image={event.image}
          />
        ))}
    </ul>
  );
}
