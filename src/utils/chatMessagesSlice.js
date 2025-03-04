import { createSlice } from "@reduxjs/toolkit";
import { OFFSET_LIVE_CHAT } from "./Constants";
const chatMessagesSlice=createSlice({
name:'chat',
initialState:{
    messages:[],
},
reducers:{
    addMessage:(state,action)=>{
    state.messages.splice(OFFSET_LIVE_CHAT,1);
     state.messages.unshift(action.payload);
    },
},
});
export const { addMessage }=chatMessagesSlice.actions;
export default chatMessagesSlice.reducer;