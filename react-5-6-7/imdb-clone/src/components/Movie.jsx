import React from 'react'

function Movie({movie, addToWatchList, removeFromwatcList, isMoviePresentOnWatchList}) {

  const showAddedMovie=(
    <div onClick={()=>{removeFromwatcList(movie)}} className='m-4 flex justify-center h-12 w-12 items-center rounded-lg bg-gray-900/60'>
      ❤️
    </div>
  )
  const showNotAddedMovie=(
    <div onClick={()=>{addToWatchList(movie)}} className='m-4 flex justify-center h-12 w-12 items-center rounded-lg bg-gray-900/60'>
      🤍
    </div>
  )

  return (
    <div style={{backgroundImage:`url(https://image.tmdb.org/t/p/original/${movie.poster_path})`}} className='h-[40vh] w-[200px]
        bg-center bg-cover rounded-xl hover:scale-110 duration-300 hover:cursor-pointer flex
        flex-col justify-between items-end'>
        <div className='text-white w-full text-center text-xl p-2 bg-gray-900/70 rounded-lg'>
            {movie.title}
        </div>
        {
          isMoviePresentOnWatchList ? showAddedMovie: showNotAddedMovie
        }
    </div>
  )
}

export default Movie