import './App.css'
import Home from './components/Home'
import NavBar from './components/NavBar'
import {Route, Routes} from 'react-router-dom'
import WatchList from './components/WatchList'

function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/watchlist' element={<WatchList/>}/>
      </Routes>
    </>
  )
}

export default App
