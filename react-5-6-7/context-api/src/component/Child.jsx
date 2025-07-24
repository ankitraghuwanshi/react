import React from 'react'
import GrandChild from './GrandChild'

function Child() {
  return (
    <div style={{ border: "1px solid green"}}>Child
        <GrandChild/>
    </div>
  )
}

export default Child