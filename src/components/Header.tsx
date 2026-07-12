import Image from "next/image";
import Search from './Search';
import Link from 'next/link';


export default function Header() {
  return (
    <header className='sticky top-0 z-30 flex items-center justify-between gap-4 border-b border-border bg-background/70 px-8 py-3 backdrop-blur-md'>
      <Link href='/now_playing/1' className='flex shrink-0 items-center gap-3 transition-opacity hover:opacity-80'>
        <Image alt='Next Movies' src='/logo-mark.svg' width={64} height={64} priority className='h-12 w-12' />
        <span className='hidden text-xl font-bold tracking-tight text-text sm:block'>
          Next<span className='text-accent'>Movies</span>
        </span>
      </Link>
      <Search></Search>
    </header>
  )
}
