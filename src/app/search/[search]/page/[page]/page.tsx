import Movie from "@/components/Movie";
import Paging from "@/components/Paging";
import { fetchMoviesBySearchName } from "@/lib/api";
import { Metadata } from 'next';

type PageProps = {
  params: {
    search: string,
    page: string
  };
};

const Search = async ({ params }: PageProps) => {

  const {
    search,
    page
  } = params;

  const data = await fetchMoviesBySearchName(search, page);

  if (!data.results) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="flex-1 p-6 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        <span className="text-muted">Recherche : </span>
        <span className="inline-block border-b-2 border-accent pb-1">{decodeURIComponent(search)}</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {data.results?.length > 0 ? (
          data.results.map((movie: Movie) => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-muted">Aucun film trouvé pour cette recherche.</p>
        )}
      </div>
      <Paging totalPages={data.total_pages} category={search} page={'1'} type="search"></Paging>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {

  const {
    search
  } = params;

  return {
    title: `Recherche : ${decodeURIComponent(search)}`,
  };
}


export default Search;
