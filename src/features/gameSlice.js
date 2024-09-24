import { createAsyncThunk } from "@reduxjs/toolkit";
import { setLevel } from "./levelSlice";
import { setEggCount } from "./eggSlice";
import { setHenchmen } from "./henchmenSlice";
import { setDimensions } from "./dimensionsSlice";
import { generateMap } from "./mapSlice";

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

        dispatch(generateMap({
            width: 10, 
            height: 10, 
            henchmanCount: 5, 
            eggCount: 1
        }))
    }
)

export const nextLevel = createAsyncThunk(
    'level/nextLevel',
    async (_, {getState, dispatch}) => {
        const state = getState()
    }
)