import React from 'react'
import { Count } from './style'

const MoviesAbout = ({films = 0}) => {
  return (
      <div className='container'>
      <Count fontSize={28}>Barcha Kinolar Soni: {films.length || films} </Count>
      <Count fontSize={24}>Ko'rilgan kinolar:  {films.length || films}</Count>
      </div>
  )
}

export default MoviesAbout