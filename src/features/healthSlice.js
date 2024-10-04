import { createSlice } from "@reduxjs/toolkit"
import { GitHubStorageHandler } from "github-localstorage-handler"
import trackedPaths from "../helpers/trackedPaths"

const healthHandler = new GitHubStorageHandler(trackedPaths.health)

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
            healthHandler.setNumber(health)
            state.currentHealth = health
        }
    }
})

export const {changeHealth} = healthSlice.actions
export default healthSlice.reducer