type Genre = {
  id: number;
  name: string;
};

const API_PATH = "https://api.themoviedb.org/3/"

const API_TOKEN = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1MGY1MmIxYmU0NTVlZjIxMTE5NzMyYWI1OGQyOWZhYiIsIm5iZiI6MTcyNTUwMzg5Mi4wODA4MjksInN1YiI6IjY2ZDdhZmFlMjI2NzcyMDU0YTE4MTIyMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.XAPkcvZv-qSIdKqsBopEZ41vT0WjyH7Ucl_u_yHhBrM'

const API_HEADERS = {
  accept: 'application/json',
  Authorization: `Bearer ${API_TOKEN}`
};

export const fetchMoviesBySearchName = async (searchName: string, page = "1") => {
  const url = `${API_PATH}search/movie?query=${searchName}&page=${page}&language=fr-FR&include_adult=false`;
  const options = {
    method: 'GET',
    headers: API_HEADERS
  };

  const res = await fetch(url, options);
  return res.json();
};


export const fetchMoviesByGenre = async (genreId: string, page: string) => {
  const url = `${API_PATH}discover/movie?with_genres=${genreId}&language=fr&page=${page}`;
  const options = {
    method: 'GET',
    headers: API_HEADERS
  };

  const res = await fetch(url, options);
  return res.json();
};

export const fetchMoviesByCategories = async (category: string, page: string) => {
  const url = `${API_PATH}movie/${category}?language=fr&page=${page}`;
  const options = {
    method: 'GET',
    headers: API_HEADERS
  };

  const res = await fetch(url, options);
  return res.json();
};

export const fetchGenreName = async () => {
  const url = `${API_PATH}/genre/movie/list?language=fr`;

  const options = {
    method: 'GET',
    headers: API_HEADERS
  };
  const response = await fetch(url, options);

  return response.json();
}

export const fetchGenreNameById = async (genreId: string): Promise<string | undefined> => {
  const data = await fetchGenreName();

  const genre = data.genres.find((g: Genre) => g.id === Number(genreId));
  return genre ? genre.name : undefined;
};
