import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    eggCount: 0
}

const eggSlice = createSlice({
    name:'eggs',
    initialState,
    reducers:{
        reduceEggCount: state => {
            state.eggCount -= 1
        },
        setEggCount: (state, {payload}) => {
            state.eggCount = payload
        }
    }
})

export const {reduceEggCount, setEggCount} = eggSlice.actions
export default eggSlice.reducer