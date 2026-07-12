import Link from "next/link";
import Image from "next/image";

type MovieProps = {
  movie: Movie;
};

type Movie = {
  "adult": boolean,
  "backdrop_path": string,
  "genre_ids": Array<number>
  "id": number,
  "original_language": string,
  "original_title": string,
  "overview": string,
  "popularity": number,
  "poster_path": string,
  "release_date": string,
  "title": string,
  "video": boolean,
  "vote_average": number,
  "vote_count": number
}

const Movie:React.FC<MovieProps> = ({movie}) => {

  const {
    id,
    title,
    poster_path,
    vote_average,
    release_date
  } = movie;

  const year = release_date ? release_date.substring(0, 4) : "";
  const rating = vote_average ? vote_average.toFixed(1) : null;

  return (
    <Link
      className="group flex w-full flex-col gap-2.5"
      href={`/movie/${id}`}
    >
      <div className="relative aspect-[2/3] w-full overflow-hidden rounded-xl border border-border bg-surface shadow-card transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-glow">
        {poster_path ? (
          <Image
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            src={`https://image.tmdb.org/t/p/w400${poster_path}`}
            alt={title}
            width={400}
            height={600}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center text-xs text-muted">
            Pas d&apos;affiche
          </div>
        )}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        {rating && (
          <span className="absolute right-2 top-2 flex items-center gap-1 rounded-full bg-black/70 px-2 py-0.5 text-xs font-semibold text-accent backdrop-blur-sm">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3 w-3">
              <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
            </svg>
            {rating}
          </span>
        )}
      </div>
      <div className="flex flex-col px-0.5">
        <span className="line-clamp-2 text-sm font-medium leading-tight text-text transition-colors group-hover:text-white">{title}</span>
        {year && <span className="text-xs text-muted">{year}</span>}
      </div>
    </Link>
  )
}

export default Movie
