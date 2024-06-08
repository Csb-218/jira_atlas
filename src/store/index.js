import { configureStore } from "@reduxjs/toolkit";
import PageSlice from "./PageSlice";


const store  = configureStore({
    reducer:{
        page : PageSlice.reducer
    }
})

export default store