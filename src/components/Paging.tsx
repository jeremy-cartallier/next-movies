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
    <div className='flex items-center justify-between pt-4'>
      {Number(page) > 1 ? (
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:bg-surface-hover"
          href={getLinkHref(Number(page) - 1)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M12.79 5.23a.75.75 0 0 1-.02 1.06L8.832 10l3.938 3.71a.75.75 0 1 1-1.04 1.08l-4.5-4.25a.75.75 0 0 1 0-1.08l4.5-4.25a.75.75 0 0 1 1.06.02Z" clipRule="evenodd" />
          </svg>
          Page {Number(page) - 1}
        </Link>
      ) : <span />}

      <span className="text-sm text-muted">
        Page <span className="font-semibold text-text">{page}</span>{totalPages ? ` / ${totalPages}` : ""}
      </span>

      {Number(page) < totalPages ? (
        <Link
          className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-sm font-medium text-text transition-colors hover:border-primary hover:bg-surface-hover"
          href={getLinkHref(Number(page) + 1)}
        >
          Page {Number(page) + 1}
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
            <path fillRule="evenodd" d="M7.21 14.77a.75.75 0 0 1 .02-1.06L11.168 10 7.23 6.29a.75.75 0 1 1 1.04-1.08l4.5 4.25a.75.75 0 0 1 0 1.08l-4.5 4.25a.75.75 0 0 1-1.06-.02Z" clipRule="evenodd" />
          </svg>
        </Link>
      ) : <span />}
    </div>
  )
}

export default Paging
