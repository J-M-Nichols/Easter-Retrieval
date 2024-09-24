import { createSlice } from "@reduxjs/toolkit"
import RecursiveGenerator from "../generator/RecursiveGenerator"
import spaceIndexing from "../helpers/spaceIndexing"

const initialState = {
    map: []
}

const mapSlice = createSlice({
    name:'map',
    initialState,
    reducers:{
        generateMap: (state, {payload}) => {
            const {width, height, henchmanCount, eggCount} = payload
            state.map = RecursiveGenerator(width, height, henchmanCount, eggCount)
        },
        resetMark: (state, {payload}) => {
            const {x, y} = payload
            
            const newMap = []
            state.map.forEach(row=>{
                const newRow = []
                row.forEach(col => {
                    newRow.push(col)
                })
                newMap.push(newRow)
            })

            newMap[y][x] = spaceIndexing.walkable
            state.map = newMap
        }
    }
})

export const {generateMap, resetMark} = mapSlice.actions
export default mapSlice.reducer