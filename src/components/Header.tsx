import Image from "next/image";
import Search from './Search';
import Link from 'next/link';


export default function Header() {
  return (
    <header className='relative flex justify-between px-8 py-2'>
      <Link href='/now_playing/1'><Image alt='' src='/logo.svg' width={100} height={100}/></Link>
      <Search></Search>
    </header>
  )
}
