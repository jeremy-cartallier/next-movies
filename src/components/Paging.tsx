import Link from 'next/link';

type PagingProps = {
  "totalPages": number,
  "category": string,
  "page": string,
  "type": 'category' | 'genre' | 'search'
}

const Paging:React.FC<PagingProps> = ({totalPages, category, page, type}) => {

  const getLinkHref = (newPage: number) => {
    if (type === "category") {
      return `/${category}/${newPage}`;
    } else if (type === "genre") {
      return `/genre/${category}/page/${newPage}`;
    } else {
      return `/search/${category}/page/${newPage}`;
    }
  };


  return (
    <div className='flex justify-between h-6 relative'>
      {
        Number(page) > 1 && <Link className="absolute left-0" href={getLinkHref(Number(page) - 1)}>Page {Number(page) - 1}</Link>
      }
      {
        Number(page) < totalPages && <Link className="absolute right-0" href={getLinkHref(Number(page) + 1)}>Page {Number(page) + 1}</Link>
      }
    </div>
  )
}

export default Paging
