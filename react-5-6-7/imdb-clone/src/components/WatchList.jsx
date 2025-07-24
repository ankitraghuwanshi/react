import React, { useEffect, useState } from 'react'
import { LOCALSTORAGE_KEY } from '../App'
import { genreids } from '../utils/utils'

function WatchList({watchList, setWatchList}) {
  const [search, setSearch]=useState("")
  const [genreList, setGenreList]=useState([])
  const [currentGenre, setCurrentGenre]=useState("All Genres")

  useEffect(()=>{
    const genreStringList=watchList.map((item)=>genreids[item.genre_ids[0]])
    const genreStringListSet=new Set(genreStringList)
    setGenreList(["All Genres", ...genreStringListSet,])
  },[watchList])

  const handleAscendingRating=()=>{
    //sort the current watchlist and store it in new array
    const sortedArray=watchList.sort((a,b)=>
      a.vote_average - b.vote_average
    )
    setWatchList([...sortedArray])
  }
  const handleDescendingRating=()=>{
    //sort the current watchlist and store it in new array
    const sortedArray=watchList.sort((a,b)=>
      b.vote_average - a.vote_average
    )
    setWatchList([...sortedArray])
  }
  const handleSearch=(e)=>{
    setSearch(e.target.value)
  }

  const filteredWatchList=watchList.filter((movie)=>
    movie.title.toLowerCase().includes(search.toLowerCase())
  )
  .filter((movie)=>
    currentGenre==="All Genres" ? true : genreids[movie.genre_ids[0]]===currentGenre
  )

  const handleGenreClick=(genre)=>{
    setCurrentGenre(genre)
  }

  const removeFromWatchList=(movie)=>{
    const filteredList=watchList.filter((item)=>item.id !== movie.id)
    setWatchList(filteredList)
    localStorage.setItem(LOCALSTORAGE_KEY,JSON.stringify(filteredList))
  }

  return (
    <>
      <div className='flex justify-center m-4'>
        {genreList.map((genre)=>{
          return(
            <div
              key={genre}
              onClick={() => handleGenreClick(genre)}
              className={
                currentGenre == genre
                  ? "mx-4 flex justify-center items-center bg-blue-400 h-[3rem] w-[9rem] text-white font-bold border rounded-xl hover:cursor-not-allowed"
                  : "flex justify-center items-center h-[3rem] w-[9rem] bg-gray-400/50 rounded-xl text-white font-bold mx-4 hover:cursor-pointer"
              }
            >
              {genre}
            </div>
          )
        })}
      </div>
      <div className='flex justify-center my-10'>
        <input 
          className='h-[3rem] w-[18rem] bg-gray-200 px-4 outline-none border border-slate-600'
          placeholder='search movies'
          type="text" 
          onChange={handleSearch}
          value={search}
        />
      </div>
      <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
        <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 font-medium text-gray-900">Name</th>
              <th>
                <div className="flex gap-3">
                  <i className="fa-solid fa-arrow-up hover:cursor-pointer align-baseline" onClick={handleDescendingRating}></i>
                  <div>Rating</div>
                  <i className="fa-solid fa-arrow-down hover:cursor-pointer align-baseline" onClick={handleAscendingRating}></i>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Popularity</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Genre</div>
                </div>
              </th>
              <th>
                <div className="flex">
                  <div>Delete</div>
                </div>
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 border-t border-gray-100">
            {filteredWatchList.map((movie)=>(
              <tr className="hover:bg-gray-50" key={movie.id}>
                <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                  <img
                    className="h-[6rem] w-[10rem] object-contain"
                    src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                    alt=""
                  />
                  <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
                </td>
                <td className="pl-6 py-4">{movie.vote_average}</td>
                <td className="pl-6 py-4">{movie.popularity} views</td>
                <td className="pl-2 py-4">
                  {
                    // showing first genre from movie
                    genreids[movie.genre_ids[0]]
                    //showing all genre from movie
                    // getGenreString(movie.genre_ids)
                  }
                </td>
                <td onClick={()=>removeFromWatchList(movie)} className='text-red-500'>
                  <i className="fa-solid fa-trash-can hover:cursor-pointer"></i>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default WatchList