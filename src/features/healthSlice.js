import { createSlice } from "@reduxjs/toolkit"
import { GitHubStorageHandler } from "github-localstorage-handler"

const healthHandler = new GitHubStorageHandler('health')

const initialState = {
    maxHealth: 3,
    currentHealth: healthHandler.getNumber(3),
}

const healthSlice = createSlice({
    name: 'health',
    initialState,
    reducers:{
        changeHealth: (state, {payload}) => {
            const health = state.currentHealth + payload
            healthHandler.setItem(health)
            state.currentHealth = health
        }
    }
})

export const {changeHealth} = healthSlice.actions
export default healthSlice.reducer