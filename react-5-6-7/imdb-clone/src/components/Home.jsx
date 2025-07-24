import React, { useEffect, useState } from 'react'
import Banner from './Banner'
import Movies from './Movies'
import axios from 'axios'
import Pagination from './Pagination'

const MOVIE_API_ENDPOINT=(page) =>`https://api.themoviedb.org/3/trending/movie/day?api_key=00844fd8a0fd37ceb87c43614341f337&language=en-US&page=${page}`

function Home({watchList, setWatchList}) {

  const [movies, setMovies]=useState([])
  const [page, setPage]=useState(1)

  useEffect(()=>{
    axios.get(MOVIE_API_ENDPOINT(page))
        .then((res)=>{
          const results=res.data.results
          console.log(results)
          if(results){
            setMovies(results)
          }
        })
         .catch((error)=>console.log(error))
  },[page])

  return (
    <div className='flex flex-col gap-10'>
      <Banner name={movies[0]?.title} url={movies[0]?.backdrop_path} type={movies[0]?.media_type} />
      <div className='text-2xl font-bold text-center m-5'>
        Trending Movie
      </div>
      <Movies watchList={watchList} setWatchList={setWatchList} movies={movies}/>
      <Pagination page={page} setPage={setPage}/>
    </div>
  )
}

export default Home