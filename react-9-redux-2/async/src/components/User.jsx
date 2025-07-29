import React, { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import fetchUser from '../middleWare/fetchUserMiddleware'

function User() {
    //distructuring all state from userSlice
    const {user, error, loading} = useSelector((store) => store.user)
    const dispatch = useDispatch()

    useEffect(function(){
        dispatch(fetchUser(1))
    },[dispatch]);

    const heading = <h2>User Example</h2>;

    if (loading) {
        return(
            <> 
                {heading}
                <h3>...Loading</h3>
            </>
        )
    }
 
    if (error) {
        return <> {heading}
            <h3>Error occurred</h3>
        </>
    }

    return (
        <>
            {heading}
            <h4>Name: {user.name}</h4>
            <h4>Phone: {user.phone}</h4>
        </>
    )
}

export default User