import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import WatchList from './components/WatchList'
import { useEffect, useState } from 'react'

export const LOCALSTORAGE_KEY="movies"

function App() {
  const [watchList, setWatchList]=useState([])

  useEffect(()=>{
    if(localStorage.getItem(LOCALSTORAGE_KEY)){
      setWatchList(JSON.parse(localStorage.getItem(LOCALSTORAGE_KEY)))
    }
  },[])

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home watchList={watchList} setWatchList={setWatchList}/>}/>
        <Route path='/watchlist' element={<WatchList watchList={watchList} setWatchList={setWatchList}/>}/>
      </Routes>
    </>
  )
}

export default App
