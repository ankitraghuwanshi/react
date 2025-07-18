import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const FETCH_DETAILS_URL="https://fakestoreapi.com/users"

function User() {
    const [user, setUser]=useState({})

    const params=useParams()
    //console.log(params)   //{id:2}

    useEffect(()=>{
        async function fetchUserData(){
            const responce=await fetch(`${FETCH_DETAILS_URL}/${params.id}`)
            const data=await responce.json()
            setUser(data)
        }
        fetchUserData()
    },[params.id])

    if(!user.phone){
        return(
            <p>Loading...</p>
        )
    }

    return (
        <>
            <div>Username {user?.name?.firstname}</div>
            <div>user phone {user?.phone}</div>
        </>
    )
}

export default User