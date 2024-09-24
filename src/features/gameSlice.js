import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLevel } from "./levelSlice";
import { setEggCount } from "./eggSlice";
import { setHenchmen } from "./henchmenSlice";
import { setDimensions } from "./dimensionsSlice";
import { setMap } from "./mapSlice";
import { setPosition } from "./positionSlice/positionSlice";
import RecursiveGenerator from "../generator/RecursiveGenerator";

export const initializeGame = createAsyncThunk(
    'level/startGame',
    async (_, {dispatch}) => {
        dispatch(setLevel(1))

        //initial level has 1 egg, 5 henchmen, 10 width, 10 height
        dispatch(setEggCount(1))
        dispatch(setHenchmen(5))
        dispatch(setDimensions({
            width: 10,
            height: 10,
        }))

        const {map} = RecursiveGenerator(10, 10, 5, 1)

        dispatch(setMap(map))
    }
)

export const nextLevel = createAsyncThunk(
    'level/nextLevel',
    async (_, {getState, dispatch}) => {
        const state = getState()
        const {level} = state.level

        const newLevel = level+1

        dispatch(setLevel(newLevel))

        const henchmanCount = 4 + newLevel
        const width = 10  + Math.floor(newLevel/5)
        const height = 10  + Math.floor(newLevel/5) 

        dispatch(setHenchmen(henchmanCount))
        dispatch(setDimensions({
            width: width,
            height: height,
        }))
        
        dispatch(setPosition({x:0, y:0}))

        const {map, eggsPlaced} = RecursiveGenerator(width, height, henchmanCount, newLevel)

        let eggCount = eggsPlaced !== newLevel? eggsPlaced : newLevel
        
        dispatch(setEggCount(eggCount))

        dispatch(setMap(map))
    }
)