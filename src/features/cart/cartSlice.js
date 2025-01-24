import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    cart: []
    // cart: [{
    //     pizzaId: 12,
    //     name: 'banana',
    //     quantity: 2,
    //     unitPrice: 100,
    //     totalPrice: 205,
    // }]
}
const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addItem(state, action) {
            // payload=newItem
            state.cart.push(action.payload)
        },
        deleteItem(state, action) {
            // payload=pizzaId
            state.cart = state.cart.filter(item => item.pizzaId !== action.payload)
        },
        increaseItemQuantity(state, action) {
            const item = state.card.find(item => item.pizzaId === action.payload);
            item.quantity++;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        decreaseItemQuantity(state, action) {
            const item = state.card.find(item => item.pizzaId === action.payload);
            item.quantity--;
            item.totalPrice = item.quantity * item.unitPrice;
        },
        clearCart(state) {
            state.cart = []
        },
    }
})

export const { addItem, deleteItem, increaseItemQuantity, decreaseItemQuantity, clearCart } = cartSlice.actions;

export default cartSlice.reducer

export const getCart = (state) => state.cart.cart

export const getTotalCartQuantity = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.quantity, 0)
}

export const getTotalCartPrice = (state) => {
    return state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0)
}