import React, { useState } from 'react'
import { AddMovie, Count } from './style.js'
const AddMovies = ({ films, setFilms }) => {
  const [name,setName] = useState('')
  const [count, setCount] = useState(0)

  const onAdd = () => {
    let res = { id: films.length ? films[films.length - 1].id + 1 :1 , name: name, views: count }
    console.log(res);
    setFilms([...films,res])
  }
  return (
    <div className='container'>
      <Count fontSize={22}>Yangi Kino qo'shish</Count>
      <AddMovie>
        <input onChange={(e)=>setName(e.target.value)} placeholder='Qanday kino?' type="text" />
        <input onChange={(e)=>setCount(e.target.value)}  placeholder={`Necha marotaba ko'rilgan?`} type="number" />
        <div onClick={onAdd} className="add">Qo'shish</div>
      </AddMovie>
    </div>
  )
}

export default AddMovies