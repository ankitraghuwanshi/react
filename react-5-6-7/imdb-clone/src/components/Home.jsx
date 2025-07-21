import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Movies from './Movies'
import axios from 'axios'

export const LOCALSTORAGE_KEY ="movies"

const MOVIE_API_ENDPOINT ="https://api.themoviedb.org/3/trending/movie/day?api_key=00844fd8a0fd37ceb87c43614341f337"

function Home() {

  const [movies, setMovies]=useState([])
  const watchListInLocalstorage=JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY) || "[]")
  const [watchList, setWatchList]=useState(watchListInLocalstorage)

  useEffect(()=>{
    axios.get(MOVIE_API_ENDPOINT)
        .then((res)=>{
          const results=res.data.results
          console.log(results)
          if(results){
            setMovies(results)
          }
        })
         .catch((error)=>console.log(error))
  },[])

  return (
    <div>
      <Banner name={movies[0]?.title} url={movies[0]?.backdrop_path}/>
      <div className='text-2xl font-bold text-center m-5'>
        Trending Movie
      </div>
      <Movies watchList={watchList} setWatchList={setWatchList} movies={movies}/>
    </div>
  )
}

export default Home