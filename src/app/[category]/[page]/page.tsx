import Movie from "@/components/Movie";
import Paging from "@/components/Paging";
import { notFound } from 'next/navigation';
import { Metadata } from 'next';
import { MovieType } from "@/types/movie";
import { fetchMoviesByCategories } from "@/lib/api";


type PageProps = {
  params: {
    category: string,
    page: string
  };
};

const Category = async ({ params }: PageProps) => {

  const {
    category,
    page
  } = params;

  if (category !== 'now_playing' && category !== 'popular' && category !== 'top_rated' && category !== 'upcoming') {
    notFound();
  }

  const title = (() => {
    switch (category) {
      case 'now_playing':
        return "En ce moment";
      case 'popular':
        return "Populaires";
      case 'top_rated':
        return "Les mieux notés";
      case 'upcoming':
        return "À venir";
      default:
        return "En ce moment";
    }
  })();


  const data = await fetchMoviesByCategories(category,page);

  if (!data.results) {
    return <p>Chargement...</p>;
  }

  return (
    <main className="flex-1 p-6 sm:p-8">
      <h1 className="mb-6 text-2xl font-bold sm:text-3xl">
        <span className="inline-block border-b-2 border-accent pb-1">{title}</span>
      </h1>
      <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5">
        {data.results?.length > 0 ? (
          data.results.map((movie: MovieType) => (
            <Movie key={movie.id} movie={movie} />
          ))
        ) : (
          <p className="text-muted">Aucun film trouvé pour cette catégorie.</p>
        )}
      </div>
      <Paging totalPages={data.total_pages} category={category} page={page} type="category"></Paging>
    </main>
  );
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const {
    category
  } = params;

  const title = (() => {
    switch (category) {
      case 'now_playing':
        return "En ce moment";
      case 'popular':
        return "Populaires";
      case 'top_rated':
        return "Les mieux notés";
      case 'upcoming':
        return "À venir";
      default:
        return "En ce moment";
    }
  })();

  return {
    title: title,
  };
}


export default Category;
