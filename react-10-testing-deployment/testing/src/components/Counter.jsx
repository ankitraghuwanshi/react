import React, { useState } from 'react'

function Counter() {
    const [count,setCount]=useState(0)

    return (
        <div>
            Counter {count}
            <button onClick={()=>setCount(count+1)}>increase</button>
            <button disabled={count<1} onClick={()=>setCount(count-1)}>decrease</button>
        </div>
    )
}

export default Counter