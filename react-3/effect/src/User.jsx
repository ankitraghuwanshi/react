import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function User() {
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(true)
    const [user, setUser]=useState({})
    const [count, setCount]=useState(0)

    useEffect(()=>{
        //make api request
        const fetchData = async ()=>{
            try {
                const responce=await fetch("https://jsonplaceholder.typicode.com/users/1");
                const data= await responce.json()

                setLoading(false)
                setUser(data)
            } catch (error) {
                setError(error)
            }
        }

        //example of why we use cleanup function (because to remove this timer if useeffect re-run)
        const timer=setInterval(() => {
            console.log("timer ran")
            setCount((prevcount)=>prevcount+1)
        },1000)

        console.log("calling from useEffect function")
        fetchData()

        //this cleanup function will run just before useEffect is re-run
        return ()=>{
            console.log("calling fron cleanup function")
            clearInterval(timer)
        }
    },[])

    if(error){
        return <>some error occured</>
    }

    return (
        <>
            <div>{loading ? "Loading" : user.name}</div>
            <div>timer : {count} sec</div>
        </>
    )
}

export default User