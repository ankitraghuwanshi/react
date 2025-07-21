import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Movies from './Movies'
import axios from 'axios'

const MOVIE_API_ENDPOINT ="https://api.themoviedb.org/3/trending/movie/day?api_key=00844fd8a0fd37ceb87c43614341f337"

function Home() {

  const [movies, setMovies]=useState([])
  const [watchList, setWatchList]=useState([])

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

const addToWatchList=(movie)=>{
    setWatchList([...watchList,movie])
}
const removeFromwatcList=(movie)=>{
    const filteredMovies=watchList.filter((item)=>{
      return item.id !== movie.id
    })
    setWatchList(filteredMovies)
}

  return (
    <div>
      <Banner name={movies[0]?.title} url={movies[0]?.backdrop_path}/>
      <div className='text-2xl font-bold text-center m-5'>
        Trending Movie
      </div>
      <Movies watchList={watchList} addToWatchList={addToWatchList} removeFromwatcList={removeFromwatcList} movies={movies}/>
    </div>
  )
}

export default Home