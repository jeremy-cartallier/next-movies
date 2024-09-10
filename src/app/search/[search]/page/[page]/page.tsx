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
    <main className="p-8 text-white">
      <h1 className="text-3xl">{`Recherche: ${decodeURIComponent(search)}`}</h1>
      <div className="grid grid-cols-5 gap-4 py-5">
        {data.results?.length > 0 ? (
          data.results.map((movie: Movie) => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p>Aucun film trouvé pour cette recherche.</p>
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
