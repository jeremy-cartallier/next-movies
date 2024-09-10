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
    poster_path
  } = movie;

  return (
    <Link className="flex flex-col items-center gap-2.5" href={`/movie/${id}`}>
      <Image className="w-full auto" src={`https://image.tmdb.org/t/p/w400${poster_path}`} alt={title} width={400} height={600}></Image>
      <span>{title}</span>
    </Link>
  )
}

export default Movie
