import Link from 'next/link';
import { ReactNode } from 'react';

type ButtonProps = {
  link: string;
  children: ReactNode;
  onClick?: (event: MouseEvent) => void;
};

export default function Button(props: any) {
  if (props.link) {
    return (
      <Link href={props.link}>
        <a className=' block no-underline cursor-pointer border-solid border border-emerald-300 bg-emerald-500 rounded-md text-emerald-200 py-2 px-6 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-500 active:border-teal-500'>
          {props.children}
        </a>
      </Link>
    );
  }

  return (
    <button
      onClick={props.onClick}
      className=' block no-underline cursor-pointer border-solid border border-emerald-300 bg-emerald-500 rounded-md text-emerald-200 py-2 px-6 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-500 active:border-teal-500'
    >
      {props.children}
    </button>
  );
}
