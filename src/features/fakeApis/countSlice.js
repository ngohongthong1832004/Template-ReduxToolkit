import  { createSlice } from '@reduxjs/toolkit' 

const initialState = {
    value : 0
}

export const countSLice = createSlice({
    name : 'countNumber',

    initialState,

    reducers : {
        addNumber :  state  => {
            state.value = state.value + 1
        },
        subtractNumber : state => {
            state.value = state.value -1
        },
        addValue : (state, action) => {
            console.log('action : ',action)
            state.value = action.payload
        }
    } 

})

export const selectCountNumber = (state) => state.count.value
export const { addNumber, subtractNumber, addValue } = countSLice.actions 