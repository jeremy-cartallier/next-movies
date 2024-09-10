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
        const movies = await fetchMoviesBySearchName(search);
        setSearchMovies(movies);
      } else {
        setSearchMovies({});
      }
    };

    fetchMovies();
  }, [search]);


  return (
    <div className='flex'>
      <input value={search} placeholder="Rechercher un film" onChange={(e) => setSearch(e.target.value)}></input>
        {
          searchMovies.results && searchMovies.results?.length >= 3 &&
            <div className='absolute top-full p-5 flex gap-5 p-5 bg-white right-0'>
              <Movie movie={searchMovies.results[0]}></Movie>
              <Movie movie={searchMovies.results[1]}></Movie>
              <Movie movie={searchMovies.results[2]}></Movie>
            </div>
        }
    </div>
  )
}

export default Search
