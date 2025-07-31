import React, { useEffect, useState } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import './App.css'
// import Home from './components/Home'
// import About from './components/About'
// import Contact from './components/Contact'

function App() {

  const[homePage,setHomePage]=useState(null)
  const[aboutPage,setAboutPage]=useState(null)
  const[contactPage,setContactPage]=useState(null)

  useEffect(()=>{
    import('./components/Home').then((file)=>setHomePage(file.default))
  },[])

  const loadHomePage=()=>{
    import('./components/Home').then((file)=>setHomePage(file.default))
  }
  const loadAboutPage=()=>{
    import('./components/About').then((file)=>setAboutPage(file.default))
  }
  const loadContactPage=()=>{
    import('./components/Contact').then((file)=>setContactPage(file.default))
  }

  return (
    <>
      <nav>
        <ul>
            <li>
                <Link to="/" onClick={loadHomePage} >Home</Link>
            </li>
            <li>
                <Link to="/about" onClick={loadAboutPage}>About</Link>
            </li>
            <li>
                <Link to="/contact" onClick={loadContactPage}>Contact</Link>
            </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={homePage ? homePage: <div>Loading...</div>}/> 
        <Route path='/about' element={aboutPage ? aboutPage: <div>Loading...</div>}/>
        <Route path='/contact' element={contactPage ? contactPage: <div>Loading...</div>}/>
      </Routes>
    </>
  )
}

export default App
