import React from 'react'
import Parent from './Parent'

function GrandParent() {
  return (
    <div style={{ border: "1px solid black"}}>GrandParent
        <Parent/>
    </div>
  )
}

export default GrandParent