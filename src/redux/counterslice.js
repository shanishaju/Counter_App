import { createSlice } from "@reduxjs/toolkit";




export const counterSlice = createSlice({
    name:'counter',
    //initial value of the state
    initialState:{
        value:0
    },
    //action
    reducers:{
        increment:(state)=>{
            //logic
            state.value+=1
        },
        decrement:(state)=>{
            //logic
            state.value-=1
        },
        reset:(state)=>{
            //logic
            state.value=0

        }
    }
})

//actions are for components
export const{increment, decrement, reset}= counterSlice.actions

//reducer is for store
export default counterSlice.reducer  


