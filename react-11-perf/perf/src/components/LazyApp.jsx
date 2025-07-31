import React, { Suspense,lazy } from 'react'
import { Route, Routes, Link } from 'react-router-dom'
import '../App.css'

function LazyApp() {
    
    const HomePage = lazy(()=>import('./Home'))
    const AboutPage= lazy(()=>import('./About'))
    const ContactPage= lazy(()=>import('./Contact'))

    return (
        <>
            <nav>
                <ul>
                <li>
                    <Link to="/" >Home</Link>
                </li>
                <li>
                    <Link to="/about" >About</Link>
                </li>
                <li>
                    <Link to="/contact" >Contact</Link>
                </li>
                </ul>
            </nav>

            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path='/' element={<HomePage/>}/> 
                    <Route path='/about' element={<AboutPage/>}/>
                    <Route path='/contact' element={<ContactPage/>}/>
                </Routes>
            </Suspense>
        </>
    )
}

export default LazyApp