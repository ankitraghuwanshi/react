import './App.css'
import {Routes, Route, Link, Navigate} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Product from './pages/Product'
import NotFound from './pages/NotFound'
import User from './pages/User'

function Router(){
  return(
    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about' element={<About/>}></Route>
      <Route path='/product' element={<Product/>}></Route>
      <Route path='/user/:id' element={<User/>}></Route>
      {/* Whenever we land here, we should be redirected to the home page */}
      <Route path='/restricted' element={<Navigate to="/"/>}></Route>
      <Route path='*' element={<NotFound/>}></Route>
    </Routes>
  )
}

function App() {

  return (
    <>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/product">Product</Link></li>
          <li><Link to="/user/1">first user</Link></li>
          <li><Link to="/user/10">last user</Link></li>
        </ul>
      </nav>
      <Router/>
    </>
  )
}

export default App
