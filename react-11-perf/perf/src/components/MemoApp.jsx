import React, { useMemo, useState } from 'react'

const generateLargeArray = () => {
    const largeArray = []
    for(let i = 0; i < 10000000; i ++) {
        largeArray.push(i)
    }
    return largeArray
}
const sumArray = (arr) => {
    return arr.reduce((acc, cur) => acc + cur)
}

// const largeArray=generateLargeArray()
// const sum=sumArray(largeArray)

function MemoApp() {

    const [count,setCount]=useState(0)

    const sum=useMemo(()=>{
        const largeArray=generateLargeArray()
        return sumArray(largeArray)
    },[])

    return (
        <div>MemoApp
            <p>count is {count}</p>
            <p>sum is {sum}</p>
            <button onClick={()=>setCount(count+1)}>increase</button>
        </div>
    )
}

export default MemoApp