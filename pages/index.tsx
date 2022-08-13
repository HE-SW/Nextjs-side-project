import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

export default function HomePage() {
  const featuredEvent = getFeaturedEvents();
  console.log(featuredEvent);
  return (
    <div className='bg-red-500'>
      <header>
        <nav></nav>
      </header>
      <EventList items={featuredEvent} />
    </div>
  );
}
