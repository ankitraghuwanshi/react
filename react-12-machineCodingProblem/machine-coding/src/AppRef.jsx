import React, { useRef } from 'react'

function AppRef() {

    const inputRef=useRef(null)

    console.log({inputRef})

    const focusOnInput=()=>{
        inputRef.current.focus()
    }

    return (
        <div>
            <input ref={inputRef} type="text" />
            <button onClick={focusOnInput}>search</button>
        </div>
    )
}

export default AppRef