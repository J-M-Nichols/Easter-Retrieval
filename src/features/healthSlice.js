import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    maxHealth: 3,
    currentHealth: 3,
}

const healthSlice = createSlice({
    name: 'health',
    initialState,
    reducers:{
        changeHealth: (state, {payload}) => {
            state.currentHealth += payload 
        },
        resetHealth: state => {
            state.currentHealth = state.maxHealth
        }
    }
})

export const {changeHealth, resetHealth} = healthSlice.actions
export default healthSlice.reducer