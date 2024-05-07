import { createSlice, configureStore } from '@reduxjs/toolkit'

export const sliderSlice = createSlice({
    name:"slider",
    initialState:{
        value:0,
        length:3
    },
    reducers:{
        nextSlide(state,action){
            console.log("action",action)
            console.log("state",state)
            state.value=action.payload > state.length ? 0 : action.payload;
        },
        prevSlide(state,action){
            state.value=action.payload < 0 ? state.length : action.payload;
        },
        dotSlide(state,action){
            const slide =action.payload;
            state.value=slide;
            console.log("dot",slide)
        }
    }
});

export const {nextSlide,prevSlide,dotSlide} =sliderSlice.actions;
export default sliderSlice.reducer;