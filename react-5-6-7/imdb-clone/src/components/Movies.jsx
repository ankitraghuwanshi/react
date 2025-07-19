import React from 'react'
import Movie from './Movie'

function Movies({movies}) {
  return (
    <div className='flex justify-evenly flex-wrap gap-8'>
      {movies.map((moviesObj)=>{
        return(
          <Movie key={moviesObj.title} url={moviesObj.url} title={moviesObj.title}/>
        )
      })}
    </div>
  )
}

export default Movies