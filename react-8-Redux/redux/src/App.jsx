import React from 'react'
import './App.css'
import Counter from './normalComponent/Counter'
import CounterRedux from './reduxComponent/CounterRedux'

function App() {

  return (
    <>
      <Counter/>
      <CounterRedux/>
    </>
  )
}

export default App
