import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    henchmen: 0
}

const henchmenSlice = createSlice({
    name: 'henchmen',
    initialState,
    reducers:{
        setHenchmen: (state, {payload}) => {
            state.henchmen = payload
        }
    }
})

export const {setHenchmen} = henchmenSlice.actions
export default henchmenSlice.reducer