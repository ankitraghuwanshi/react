import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function User() {
    const [error, setError]=useState(null)
    const [loading, setLoading]=useState(true)
    const [user, setUser]=useState({})


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
        console.log("hello")
        fetchData()
    },[])

    if(error){
        return <>some error occured</>
    }

    return (
        <div>{loading ? "Loading" : user.name}</div>
    )
}

export default User