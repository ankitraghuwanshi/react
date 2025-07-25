import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counterSlice",
    initialState:{
        count:0
    }
})

export default counterSlice