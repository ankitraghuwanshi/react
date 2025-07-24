import { useState } from 'react'
import './App.css'
import GrandParent from './component/GrandParent'
import FamilyContext from './context/FamilyContext'

function App() {
  const [familyName, setFamilyName]=useState("wayne")

  return (
    <>
      <FamilyContext.Provider value={{familyName, setFamilyName}}>
        <GrandParent/>
      </FamilyContext.Provider>
    </>
  )
}

export default App
