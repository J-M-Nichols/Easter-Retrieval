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
        }
    }
})

export const {setLevel} = levelSlice.actions
export default levelSlice.reducer