import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    maxHealth: 3,
    currentHealth: Number(localStorage.getItem('health')) || 3,
}

const healthSlice = createSlice({
    name: 'health',
    initialState,
    reducers:{
        changeHealth: (state, {payload}) => {
            const health = state.currentHealth + payload
            localStorage.setItem('health', health)
            state.currentHealth = health
        }
    }
})

export const {changeHealth} = healthSlice.actions
export default healthSlice.reducer