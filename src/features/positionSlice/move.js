import { createAsyncThunk } from "@reduxjs/toolkit";
import spaceIndexing from "../../helpers/spaceIndexing";
import { setDirection, setPosition, setX, setY } from "./positionSlice";
import { addScore } from "../scoreSlice";
import { changeHealth } from "../healthSlice";
import { resetMark } from "../mapSlice";
import { reduceEggCount } from "../eggSlice";

export const moveX = createAsyncThunk(
    'position/moveX',
    async (payload, {getState, dispatch}) => {
        const state = getState()
        const {map} = state.map
        const {width} = state.dimensions
        const {x, y} = state.position
        const newX = x + payload
        const spaceIndex = map[y][newX]

        if(newX > width-1 || newX < 0 || spaceIndex===spaceIndexing.obstacle) return

        switch(spaceIndex){
            case spaceIndexing.egg:
                dispatch(addScore(1))
                dispatch(reduceEggCount())
                dispatch(resetMark({x:newX, y}))
                break
            case spaceIndexing.henchman:
                dispatch(changeHealth(-1))
                dispatch(setPosition({x:0, y:0}))
                return
            default: break
        }

        dispatch(setX(newX))
        dispatch(setDirection(payload>0?'right':'left'))
    }
)

export const moveY = createAsyncThunk(
    'position/moveY',
    async (payload, {getState, dispatch}) => {
        const state = getState()
        const {map} = state.map
        const {height} = state.dimensions
        const {x, y} = state.position
        const newY = y + payload
        const spaceIndex = map[newY][x]

        if(newY > height-1 || newY < 0 || spaceIndex===spaceIndexing.obstacle) return

        switch(spaceIndex){
            case spaceIndexing.egg:
                dispatch(addScore(1))
                dispatch(reduceEggCount())
                dispatch(resetMark({x, y:newY}))
                break
            case spaceIndexing.henchman:
                dispatch(changeHealth(-1))
                dispatch(setPosition({x:0, y:0}))
                return
            default: break
        }

        dispatch(setY(newY))
        dispatch(setDirection(payload>0?'down':'up'))
    }
)