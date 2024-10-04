import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLevel } from "./levelSlice";
import { setEggCount } from "./eggSlice";
import { setHenchmen } from "./henchmenSlice";
import { setDimensions } from "./dimensionsSlice";
import { setMap } from "./mapSlice";
import { setPosition } from "./positionSlice/positionSlice";
import RecursiveGenerator from "../generator/RecursiveGenerator";
import { GitHubStorageHandler } from "github-localstorage-handler";

const levelHandler = new GitHubStorageHandler('level')

const loadGame = (dispatch, level) => {
    dispatch(setLevel(level))

    const henchmanCount = 4 + Number(level)
    const width = 10  + Math.floor(level/5)
    const height = 10  + Math.floor(level/5) 

    dispatch(setHenchmen(henchmanCount))
    dispatch(setDimensions({
        width: width,
        height: height,
    }))
    
    dispatch(setPosition({x:0, y:0}))

    const {map, eggsPlaced} = RecursiveGenerator(width, height, henchmanCount, level)

    let eggCount = eggsPlaced !== level? eggsPlaced : level
    
    dispatch(setEggCount(eggCount))

    dispatch(setMap(map))
}

export const initializeGame = createAsyncThunk(
    'level/startGame',
    async (_, {dispatch}) => {
        const level = levelHandler.getNumber(1)
        
        loadGame(dispatch, level)
    }
)

export const nextLevel = createAsyncThunk(
    'level/nextLevel',
    async (_, {getState, dispatch}) => {
        const state = getState()
        const {level} = state.level

        const newLevel = level+1

        levelHandler.setItem(newLevel)

        loadGame(dispatch, newLevel)
    }
)