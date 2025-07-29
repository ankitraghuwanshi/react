import React from 'react'
import './App.css'
import User from './components/User'
import NotAsyncUser from './components/NotAsyncUser'

function App() {
  return (
    <>
      <NotAsyncUser/>
      <User/>
    </>
  )
}

export default App