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
    <aside className='w-1/6'>
      <nav className='flex flex-col text-white gap-2.5 p-8'>
        {categories.map((category) => {
          return <Link key={category.name} href={category.href}>{category.name}</Link>
        })
        }
        <hr/>
        {genres.map((genre) => {
          return <Link key={genre.name} href={`/genre/${genre.id}/page/1`}>{genre.name}</Link>
        })
        }
      </nav>
    </aside>
  )
}


export default Sidebar
