import Link from 'next/link';
import Image from "next/image";
import Search from './Search';

export default function Header() {
  return (
    <header>
      <Image alt='' src='logo.svg' width={100} height={100}/>
      <Search></Search>
    </header>
  )
}
