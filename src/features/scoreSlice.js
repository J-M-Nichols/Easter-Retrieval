import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    score: 0
}

const scoreSlice = createSlice({
    name:'score',
    initialState,
    reducers:{
        addScore:(state, {payload})=>{
            state.score += payload
        },
        resetScore: state => {
            state.score = 0
        }
    }
})

export const {addScore, resetScore} = scoreSlice.actions
export default scoreSlice.reducer