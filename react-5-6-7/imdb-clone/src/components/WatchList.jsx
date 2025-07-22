import React, { useEffect, useState } from 'react'
import { LOCALSTORAGE_KEY } from './Home'
import { getGenreString } from '../utils/utils'

function WatchList() {
  const [watchList, setWatchList]=useState([])

  useEffect(()=>{
    if(localStorage.getItem(LOCALSTORAGE_KEY)){
      setWatchList(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
      console.log(watchList)
    }
  },[])

  return (
    <div className="overflow-hidden rounded-lg border border-gray-200 shadow-md m-5">
      <table className="w-full border-collapse bg-white text-left text-sm text-gray-500">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 font-medium text-gray-900">Name</th>
            <th>
              <div className="flex">
                <div>Rating</div>
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
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 border-t border-gray-100">
          {watchList.map((movie)=>(
            <tr className="hover:bg-gray-50" key={movie.title}>
              <td className="flex items-center px-6 py-4 font-normal text-gray-900">
                <img
                  className="h-[6rem] w-[10rem] object-contain"
                  src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                  alt=""
                />
                <div className="font-medium text-gray-700 text-sm">{movie.title}</div>
              </td>
              <td className="pl-6 py-4">{movie.vote_average}</td>
              <td className="pl-6 py-4">{movie.popularity}</td>
              <td className="pl-2 py-4">{getGenreString(movie.genre_ids)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default WatchList