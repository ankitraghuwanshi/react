import {createSlice} from '@reduxjs/toolkit'

const counterSlice=createSlice({
    name:"counterSlice",
    initialState:{
        count:0
    },
    reducers:{
        incrementState: (state)=>{
            state.count=state.count+1
        },
        decrementState: (state)=>{
            if(state.count>0){
                state.count=state.count-1
            }
        }
    }
})

export default counterSlice