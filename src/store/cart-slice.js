import {createSlice} from '@reduxjs/toolkit'

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        items: [],
        totalQuantity: 0,
    },
    reducers: {
        addItemToCart(state,action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++;
            if (!existingItem) {
                state.items.push({
                    id: newItem.id,
                    title: newItem.title,
                    price: newItem.price,
                    quanty: 1,
                    totalPrice: newItem.price,
                    name: newItem.title

                })
            } else {
                existingItem.quanty++ ;
                existingItem.totalPrice = existingItem.totalPrice + newItem.price;
            }
        },
        removeItemFromCart(state,action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            state.totalQuantity--;
            if (existingItem.quanty === 1) {
                state.items = state.items.filter(item => item.id !== id)
            } else {
                existingItem.quanty--;
                // existingItem.totalPrice = existingItem.totalPrice - existingItem.price;
            }

        }

    }
})
export const cartActions = cartSlice.actions;
export default cartSlice;