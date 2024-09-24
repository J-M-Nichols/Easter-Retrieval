import { configureStore, combineReducers } from "@reduxjs/toolkit"
import eggReducer from '../features/eggSlice'
import healthReducer from '../features/healthSlice'
import levelReducer from '../features/levelSlice'
import mapReducer from '../features/mapSlice'
import positionReducer from "../features/positionSlice/positionSlice"
import scoreReducer from '../features/scoreSlice'
import dimensionsReducer from "../features/dimensionsSlice"
import henchmenReducer from "../features/henchmenSlice"

const rootReducer = combineReducers({
    eggs: eggReducer,
    health: healthReducer,
    level: levelReducer,
    map: mapReducer,
    position: positionReducer,
    score: scoreReducer,
    dimensions: dimensionsReducer,
    henchmen: henchmenReducer
})

export const store = configureStore({
    reducer: rootReducer,
})