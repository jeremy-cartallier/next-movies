import Image from "next/image";
import Search from './Search';

export default function Header() {
  return (
    <header className='relative flex justify-between px-8 py-2'>
      <Image alt='' src='/logo.svg' width={100} height={100}/>
      <Search></Search>
    </header>
  )
}
