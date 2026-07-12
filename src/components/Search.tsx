'use client'

import { useEffect, useState } from 'react';
import Movie from "@/components/Movie";
import { fetchMoviesBySearchName } from '@/lib/api';

type arraySearchMovies = {
  results?: Array<Movie>;
};

const Search = () => {

  const [search, setSearch] = useState('');
  const [searchMovies, setSearchMovies] = useState<arraySearchMovies>({});

  useEffect(() => {
    const fetchMovies = async () => {
      if (search.length >= 3) {
        const movies = await fetchMoviesBySearchName(search, '1');
        setSearchMovies(movies);
      } else {
        setSearchMovies({});
      }
    };

    fetchMovies();
  }, [search]);


  return (
    <form action={`/search/${search}/page/1`} className='relative flex w-full max-w-md items-center'>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.8}
        stroke="currentColor"
        className="pointer-events-none absolute left-4 h-5 w-5 text-muted"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
      </svg>
      <input
        value={search}
        placeholder="Rechercher un film..."
        onChange={(e) => setSearch(e.target.value)}
        className="w-full rounded-full border border-border bg-surface py-2.5 pl-11 pr-4 text-sm text-text placeholder:text-muted outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/40"
      />
      {
        searchMovies.results && searchMovies.results?.length >= 3 &&
          <div className='absolute right-0 top-[calc(100%+0.75rem)] z-40 flex gap-4 rounded-xl border border-border bg-surface p-4 shadow-card'>
            <div className='w-28'><Movie movie={searchMovies.results[0]}></Movie></div>
            <div className='w-28'><Movie movie={searchMovies.results[1]}></Movie></div>
            <div className='w-28'><Movie movie={searchMovies.results[2]}></Movie></div>
          </div>
      }
    </form>
  )
}

export default Search
