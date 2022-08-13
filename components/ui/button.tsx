import Link from 'next/link';

export default function Button(props: any) {
  return (
    <Link href={props.link}>
      <a className=' block no-underline cursor-pointer border-solid border border-emerald-300 bg-emerald-500 rounded-md text-emerald-200 py-2 px-6 hover:bg-teal-500 hover:border-teal-500 active:bg-teal-500 active:border-teal-500'>
        {props.children}
      </a>
    </Link>
  );
}
