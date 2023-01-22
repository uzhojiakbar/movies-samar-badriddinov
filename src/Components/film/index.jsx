import React from 'react'
import { useState } from 'react'
import { MoviesData } from '../../Mock/movies'
import { Container, FilmInfo } from './style'

const Film = ({ films, setFilms, search = '' }) => {
  const [edited, setEdited] = useState({})
  const onDelete = (id) => {
    let res = films.filter((movie) => movie.id !== id)
    setFilms(res)
  }
  const onEdit = (movie) => {
    setEdited(movie)
  }
  const onCloseEdit = () => {
    setEdited({})
  }
  const onViewsChange = (id, views) => {
      setEdited({ ...edited, views: views })
      let res = films.filter((movie) => movie?.id == id ? movie.views = views : movie)
      setFilms(res)
  }
  const onEnter = () => {
    setEdited({})
  }
  return (
    <div className='container'>
      <Container>
        {
          films.length ?
            films.map(({ id, name, views }) =>
              name.toLowerCase().includes(search.toLowerCase()) && (
                <FilmInfo key={id}>
                  <div className="name"> {name} </div>
                  <div className="options">
                    <div onMouseEnter={() => onEdit({ id, name, views })}
                      onMouseLeave={() => onCloseEdit()}
                      className="views">
                      {
                        edited?.id == id ?
                          <input
                            min={1}
                            onChange={({ target: { value } }) => onViewsChange(id, value)}
                            onKeyDown={({ key }) => key == 'Enter' ? onEnter(id) : ''}
                            className='count'
                            type="number"
                            defaultValue={views}
                            placeholder={'view'}
                          />
                          :
                          views
                      }
                    </div>
                    <div className="controls">
                      <div onClick={() => onDelete(id)} className="btn">Del</div>
                    </div>
                  </div>
                </FilmInfo>
              )
            )
            :
            <FilmInfo>
              <div className="name">Film mavjud emas... </div>
            </FilmInfo>
        }
      </Container>

    </div>
  )
}

export default Film


  // || <FilmInfo>
  //   <div className="name">Film mavjud emas... </div>
  // </FilmInfo>