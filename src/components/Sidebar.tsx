import Link from 'next/link';

type Category = {
  href: string;
  name: string;
};

type Genre = {
  id: number;
  name: string;
};


type SidebarProps = {
  categories: Category[];
  genres: Genre[];
};

const Sidebar: React.FC<SidebarProps> = ({ categories, genres }) => {
  return (
    <aside className='sticky top-[73px] hidden h-[calc(100vh-73px)] w-64 shrink-0 overflow-y-auto border-r border-border bg-surface/40 p-5 md:block'>
      <nav className='flex flex-col gap-6 text-sm'>
        <div className='flex flex-col gap-1'>
          <h2 className='px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted'>Catégories</h2>
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className='rounded-lg px-3 py-2 font-medium text-text/90 transition-colors hover:bg-surface-hover hover:text-white'
            >
              {category.name}
            </Link>
          ))}
        </div>

        <div className='flex flex-col gap-1'>
          <h2 className='px-3 pb-2 text-xs font-semibold uppercase tracking-wider text-muted'>Genres</h2>
          {genres.map((genre) => (
            <Link
              key={genre.name}
              href={`/genre/${genre.id}/page/1`}
              className='rounded-lg px-3 py-2 text-text/80 transition-colors hover:bg-surface-hover hover:text-white'
            >
              {genre.name}
            </Link>
          ))}
        </div>
      </nav>
    </aside>
  )
}


export default Sidebar
