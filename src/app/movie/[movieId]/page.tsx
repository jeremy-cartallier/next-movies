import { fetchMovieById } from '@/lib/api';
import { Genre } from '@/types/genre';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

type PageProps = {
  params: {
    movieId: string
  };
};

const Movie = async ({ params }: PageProps) => {

  const {
    movieId
  } = params;


  const data = await fetchMovieById(movieId);

  if (!data) {
    return <p>Chargement...</p>;
  }

  const year = data.release_date ? data.release_date.substring(0, 4) : "";
  const rating = data.vote_average ? data.vote_average.toFixed(1) : null;

  return (
    <main className="relative flex-1">
      {data.backdrop_path && (
        <div className="pointer-events-none absolute inset-x-0 top-0 h-80 overflow-hidden">
          <Image
            className="h-full w-full object-cover opacity-20"
            src={`https://image.tmdb.org/t/p/w1280${data.backdrop_path}`}
            alt=""
            width={1280}
            height={720}
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/70 to-background" />
        </div>
      )}

      <div className="relative z-10 p-6 sm:p-8">
        <div className="flex flex-col gap-8 md:flex-row">
          <Image
            className="w-full max-w-[300px] shrink-0 self-center rounded-2xl border border-border shadow-card md:self-start"
            src={`https://image.tmdb.org/t/p/w400${data.poster_path}`}
            alt={data.title}
            width={400}
            height={600}
          />
          <div className="flex flex-col gap-5">
            <div>
              <h1 className="text-3xl font-bold sm:text-4xl">{data.title}</h1>
              {data.tagline && <p className="mt-1 text-lg italic text-muted">{data.tagline}</p>}
            </div>

            <div className="flex flex-wrap items-center gap-3 text-sm">
              {rating && (
                <span className="inline-flex items-center gap-1.5 rounded-full bg-surface px-3 py-1 font-semibold text-accent">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
                    <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401Z" clipRule="evenodd" />
                  </svg>
                  {rating}
                  <span className="font-normal text-muted">/ 10</span>
                </span>
              )}
              <span className="text-muted">
                {[data.original_language?.toUpperCase(), data.runtime ? `${data.runtime} min` : null, year]
                  .filter(Boolean)
                  .join("  •  ")}
              </span>
            </div>

            {Array.isArray(data.genres) && data.genres.length > 0 && (
              <div>
                <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">Genres</h2>
                <ul className="flex flex-wrap gap-2">
                  {data.genres.map((genre: Genre) => (
                    <li key={genre.id}>
                      <Link
                        href={`/genre/${genre.id}/page/1`}
                        className="inline-block rounded-full border border-border bg-surface px-3 py-1 text-sm transition-colors hover:border-primary hover:bg-surface-hover"
                      >
                        {genre.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div>
              <h2 className="mb-2 text-sm font-semibold uppercase tracking-wider text-muted">Synopsis</h2>
              <p className="max-w-2xl leading-relaxed text-text/90">{data.overview || "Aucun synopsis disponible."}</p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {
    movieId
  } = params;

  const data = await fetchMovieById(movieId);

  return {
    title: data.title,
  };
}


export default Movie;
