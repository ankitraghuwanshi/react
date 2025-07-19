import React from 'react'
import { Link } from 'react-router-dom'
import mylogo from '../MovieLogo.jpeg'

function NavBar() {
  return (
    <div className="flex space-x-8 items-center pl-3 py-4">
        <Link to="/">
            <img className="w-[100px] h-[50px]" src={mylogo} alt="movielogo" />
        </Link>
        <Link className="text-blue-500 text-3xl font-bold" to="/">Home</Link>
        <Link className="text-blue-500 text-3xl font-bold" to="/watchlist">WatchList</Link>
    </div>
  )
}

export default NavBar