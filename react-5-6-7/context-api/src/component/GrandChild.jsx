import React, { useContext } from 'react'
import FamilyContext from '../context/FamilyContext'

function GrandChild() {
    const {familyName, setFamilyName}=useContext(FamilyContext)
    setFamilyName("raghu")
  return (
    <div style={{ border: "1px solid blue"}}>GrandChild {familyName}</div>
  )
}

export default GrandChild