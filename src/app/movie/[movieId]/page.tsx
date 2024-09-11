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
  console.log(data)

  if (!data) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="p-8 w-5/6 text-white">
      <div className='flex gap-4'>
        <Image className="w-[400px]" src={`https://image.tmdb.org/t/p/w400${data.poster_path}`} alt={data.title} width={400} height={600}></Image>
        <div className='flex flex-col gap-3'>
          <div>
            <h1 className="text-3xl">{data.title}</h1>
            <span>{data.tagline}</span>
          </div>
          <div className='flex gap-6'>
            <span>{`${Math.round(data.vote_average)}/10`}</span>
            <span>{`${data.original_language.toUpperCase()} / ${data.runtime} MIN. / ${data.release_date.substring(0, 4)}`}</span>
          </div>
          <div>
            <h2 className="text-xl">Genres</h2>
            <ul className='gap-2.5 flex'>
              {data.genres.map((genre: Genre) => {
                return (<li key={genre.id}>
                  <Link href={`/genre/${genre.id}/page/1`}>{genre.name}</Link>
                </li> );
              })}
            </ul>
          </div>
          <div>
            <h2 className="text-xl">Synopsis</h2>
            <p>{data.overview}</p>
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
