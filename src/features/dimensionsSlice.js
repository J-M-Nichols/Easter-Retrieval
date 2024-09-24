import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    width: 10,
    height: 10,
}

const dimensionsSlice = createSlice({
    name:'dimensions',
    initialState,
    reducers:{
        setWidth: (state, {payload}) => {
            state.width = payload
        },
        setHeight: (state, {payload}) => {
            state.height = payload
        },
        setDimensions: (state, {payload}) => {
            const {height, width} = payload
            state.width = width
            state.height = height
        }
    }
})

export const {setWidth, setHeight, setDimensions} = dimensionsSlice.actions
export default dimensionsSlice.reducer