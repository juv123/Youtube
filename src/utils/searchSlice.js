import { createSlice } from "@reduxjs/toolkit";

const searchSlice=createSlice({
    name:'search',
    initialState:{
        IsOpenSearch:false,
        
    },
     
    reducers:{
        cacheResults:(state,action)=>{
            Object.assign(state,action.payload)
            
        },
        toggleSearch:(state)=>{
            state.IsOpenSearch=!state.IsOpenSearch
        }
    }
});
export const { cacheResults,toggleSearch }=searchSlice.actions;
export default searchSlice.reducer;