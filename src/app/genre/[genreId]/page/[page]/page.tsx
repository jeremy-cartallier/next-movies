import Movie from "@/components/Movie";
import Paging from "@/components/Paging";
import { fetchGenreNameById, fetchMoviesByGenre } from "@/lib/api";
import { Metadata } from 'next';

type PageProps = {
  params: {
    genreId: string,
    page: string
  };
};

const Genre = async ({ params }: PageProps) => {

  const {
    genreId,
    page
  } = params;

  const data = await fetchMoviesByGenre(genreId, page);

  const name = await fetchGenreNameById(genreId);

  if (!data.results) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="p-8 text-white">
      <h1 className="text-3xl">{name}</h1>
      <div className="grid grid-cols-5 gap-4 py-5">
        {data.results?.length > 0 ? (
          data.results.map((movie: Movie) => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Aucun film trouvé pour cette catégorie.</p>
        )}
      </div>
      <Paging totalPages={data.total_pages} category={genreId} page={page} type="genre"></Paging>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const {
    genreId
  } = params;

  const name = await fetchGenreNameById(genreId);

  return {
    title: name,
  };
}


export default Genre;
