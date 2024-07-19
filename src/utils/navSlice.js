import { createSlice } from "@reduxjs/toolkit";

const navSlice=createSlice({
    name:'nav',
    initialState:{
        IsOpenSidebar:true,
        IsOpenReplies:false,
    },
   reducers:{
    toggleSidebar:(state)=>{
        state.IsOpenSidebar=!state.IsOpenSidebar
    },
    toggleReplies:(state)=>{
        state.IsOpenReplies=!state.IsOpenReplies
    },
    closeSidebar:(state)=>{
        state.IsOpenSidebar=false
    }
   }
    
})
export const {toggleSidebar,closeSidebar,toggleReplies}=navSlice.actions;
export default navSlice.reducer;