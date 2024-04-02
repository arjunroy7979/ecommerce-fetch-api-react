import { configureStore } from "@reduxjs/toolkit";
import CartSystem from "./redux/CartSystem";

const store = configureStore({
    reducer: {
        users: CartSystem
    }
})

export default store;