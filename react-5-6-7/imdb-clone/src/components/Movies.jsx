import React from 'react'
import Movie from './Movie'

function Movies({movies, addToWatchList, removeFromwatcList, watchList}) {

  return (
    <div className='flex justify-evenly flex-wrap gap-8'>
      {movies.map((moviesObj)=>{
        const isMoviePresentOnWatchList=watchList.find((item)=>{
          return item.id === moviesObj.id
        })
        return(
          <Movie key={moviesObj.title} movie={moviesObj} addToWatchList={addToWatchList} removeFromwatcList={removeFromwatcList} isMoviePresentOnWatchList={isMoviePresentOnWatchList} />
        )
      })}
    </div>
  )
}

export default Movies