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
    <main className="flex-1 p-6 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        <span className="inline-block border-b-2 border-accent pb-1">{name}</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {data.results?.length > 0 ? (
          data.results.map((movie: Movie) => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-muted">Aucun film trouvé pour cette catégorie.</p>
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
