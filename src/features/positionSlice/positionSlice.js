import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    x:0,
    y:0,
    direction: 'down'
}

const positionSlice = createSlice({
    name:'position',
    initialState,
    reducers:{
        setPosition: (state, {payload}) => {
            const {x, y} = payload
            
            state.x = x
            state.y = y
            state.direction = 'down'
        },
        setX: (state, {payload}) => {
            state.x = payload
        },
        setY: (state, {payload}) => {
            state.y = payload
        },
        setDirection: (state, {payload}) => {
            state.direction = payload
        }
    }
})

export const {setDirection, setPosition, setX, setY} = positionSlice.actions
export default positionSlice.reducer