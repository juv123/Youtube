import { configureStore } from "@reduxjs/toolkit";
import navReducer from "./navSlice";
import searchReducer from "./searchSlice";
import chatReducer from "./chatMessagesSlice";

const Store=configureStore({
    reducer:{
        nav:navReducer,
        search:searchReducer,
        chat:chatReducer,
            },

});
export default Store;