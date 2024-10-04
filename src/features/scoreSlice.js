import { GitHubStorageHandler } from "github-localstorage-handler"
import { createSlice } from "@reduxjs/toolkit"
import trackedPaths from "../helpers/trackedpaths"

const handler = new GitHubStorageHandler(trackedPaths.score)

const initialState = {
    score: handler.getNumber(0)
}

const scoreSlice = createSlice({
    name:'score',
    initialState,
    reducers:{
        addScore:(state, {payload})=>{
            const score = state.score + payload
            handler.setItem(score)
            state.score = score
        }
    }
})

export const {addScore} = scoreSlice.actions
export default scoreSlice.reducer