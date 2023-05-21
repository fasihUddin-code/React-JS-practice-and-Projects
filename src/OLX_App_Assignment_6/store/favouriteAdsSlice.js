import { createSlice } from "@reduxjs/toolkit";

//favouriteAds Slice


const favouriteAdsSlice = createSlice({
    name: 'favouriteAds',
    initialState: [],
    reducers: {
        add(state,action){
            ///console.log(action.payload);
        state.push(action.payload)
        },
        removeItem(state,action){
            return state.filter((item)=>item.id !== action.payload)
        }
    }


});

export const {add,removeItem} = favouriteAdsSlice.actions;
export default favouriteAdsSlice.reducer;