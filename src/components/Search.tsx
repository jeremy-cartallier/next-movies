'use client'

import Link from 'next/link';
import { useState } from 'react';

const Search = () => {

  const [search, setSearch] = useState('');

  return (
    <>
      <input value={search} placeholder="Search for a movie" onChange={(e) => setSearch(e.target.value)}></input>
    </>
  )
}

export default Search
