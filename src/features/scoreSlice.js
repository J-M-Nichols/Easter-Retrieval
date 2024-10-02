import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    score: Number(localStorage.getItem('score')) || 0
}

const scoreSlice = createSlice({
    name:'score',
    initialState,
    reducers:{
        addScore:(state, {payload})=>{
            const score = state.score + payload
            localStorage.setItem('score', score)
            state.score = score
        }
    }
})

export const {addScore} = scoreSlice.actions
export default scoreSlice.reducer