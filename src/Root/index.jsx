import React from 'react'
import Film from '../Components/film'
import MoviesAbout from '../Components/Movie-about'
import SearchPanel from '../Components/Search-panel'
import './style.css'
import { MoviesData } from '../Mock/movies'
import { useState } from 'react'

const Root = () => {
  const [films, setFilms] = useState(MoviesData)
  const [search, setSearch] = useState('')
  return (
    <div className='main'>
      <MoviesAbout films={films} />
      <SearchPanel setSearch={setSearch} />
      <Film search={search} films={films} setFilms={setFilms} />
    </div>
  )
}

export default Root