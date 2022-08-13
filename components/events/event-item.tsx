import Link from 'next/link';
import styles from './event-item.module.css';
import { Dummy_EventType } from '../../dummy-data';
import Button from '../ui/button';
import DateIcon from '../icons/date-icon';
import AddressIcon from '../icons/address-icon';
import ArrowRightIcon from '../icons/arrow-right-icon';
export default function EventItem(props: Dummy_EventType) {
  const { title, image, date, location, id } = props;
  const humanReadableData = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
  const formattedAddress = location.replace(', ', '\n');
  const exploreLink = `/events/${id}`;
  return (
    <li className='overflow-hidden m-4 gap-4 flex-col flex bg-white rounded-lg mpm:flex-row'>
      <img
        src={'/' + image}
        alt={title}
        className='w-full object-cover h-56 mpm:w-2/5'
      />
      <div className='w-full p-0 px-4 text-center mpm:w-3/5 mpm:p-0 mpm:text-left'>
        <div>
          <h2 className='m-0 my-2 mpm:m-0 mpm:my-4'>{title}</h2>
          <div className='flex gap-2 items-center'>
            <DateIcon />
            <time className='text-gray-300 font-bold'>{humanReadableData}</time>
          </div>
          <div className='flex gap-2 items-center'>
            <AddressIcon />
            <address className='whitespace-pre m-0 my-2 text-gray-300'>
              {formattedAddress}
            </address>
          </div>
        </div>
        <div className='flex flex-col p-4 mpm:flex-row mpm:justify-end'>
          <Button link={exploreLink}>
            <span className=' align-middle'>Export Event</span>
            <span className=' ml-2 inline-flex justify-center items-center align-middle'>
              <ArrowRightIcon />
            </span>
          </Button>
        </div>
      </div>
    </li>
  );
}
