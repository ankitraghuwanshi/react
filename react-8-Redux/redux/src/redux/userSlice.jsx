import { createSlice } from "@reduxjs/toolkit";

const userSlice=createSlice({
    name:"userSlice",
    initialState:{
        name:"zero"
    },
    reducers:{
        spiderman:(state)=>{
            state.name="badh gaya bhai"
        },
        ironman:(state)=>{
            state.name="kam ho gaya bhai"
        }
    }
})

export default userSlice