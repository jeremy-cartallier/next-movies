import Link from 'next/link';

type Category = {
  name: string;
  href: string;
};

type Gender = {
  name: string;
  href: string;
};


type SidebarProps = {
  categories: Category[];
  genders: Gender[];
};

const Sidebar: React.FC<SidebarProps> = ({ categories, genders }) => {
  return (
    <aside>
      <nav>
        {categories.map((category) => {
          return <Link key={category.name} href={category.href}>{category.name}</Link>
        })
        }
        <hr/>
        {genders.map((gender) => {
          return <Link key={gender.name} href={gender.href}>{gender.name}</Link>
        })
        }
      </nav>
    </aside>
  )
}

export default Sidebar
