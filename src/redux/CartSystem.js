import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    carts: localStorage.getItem("carts") ? JSON.parse(localStorage.getItem("carts")) : [],
    quantity: 0,
    cartTotalAmount: 0,
};

const cartSystem = createSlice({
    name: "users",
    initialState,
    reducers: {
        AddCart: (state, action) => {
            const find = state.carts.findIndex(carts => carts.id === action.payload.id)
            if (find >= 0) {
                state.carts[find].quantity += 1;
            } else {
                const tempVar = { ...action.payload, quantity: 1 }
                state.carts.push(tempVar)
            }
            localStorage.setItem("carts", JSON.stringify(state.carts))
        },
        decCart: (state, action) => {
            const find = state.carts.findIndex(carts => carts.id === action.payload.id)
            if (state.carts[find].quantity > 1) {
                state.carts[find].quantity -= 1;
            }
            else if (state.carts[find].quantity === 1) {
                const nextfind = state.carts.filter(
                    (carts) => carts.id !== action.payload.id
                )
                state.carts = nextfind;
            }
            localStorage.setItem("carts", JSON.stringify(state.carts))
        }
    }
})

export const { AddCart, decCart } = cartSystem.actions;

export default cartSystem.reducer;