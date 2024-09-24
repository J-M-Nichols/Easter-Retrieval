import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    level: 0
}

const levelSlice = createSlice({
    name:'level',
    initialState,
    reducers:{
        setLevel: (state, {payload})=>{
            state.level = payload
        },
        increaseLevel: state => {
            state.level += 1
        }
    }
})

export const {setLevel, increaseLevel} = levelSlice.actions
export default levelSlice.reducer