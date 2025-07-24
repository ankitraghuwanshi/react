import React from 'react'
import Child from './Child'

function Parent() {
  return (
    <div style={{ border: "1px solid red"}}>Parent
        <Child/>    
    </div>
  )
}

export default Parent