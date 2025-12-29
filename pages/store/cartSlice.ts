import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { products } from "../types/product";
import { useEffect } from "react";

export interface CartItem {
    id:number,
    name:string,
    price:number,
    image:string,
    qty:number
}

interface CartState{
    cartItems:CartItem[]
}

const loadCartFromStorage = (): CartItem[] => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      return stored ? JSON.parse(stored) : [];
    }
    return [];
  }

  const saveCartToStorage = (items: CartItem[]) => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(items));
    }
  }

  const initialState:CartState={
    cartItems:loadCartFromStorage()
  }

const CartSlice=createSlice({
    name:'cart',
    initialState,
    reducers:{
        addToCart:(state,action:PayloadAction<CartItem>)=>{
            const items=state.cartItems.find(item=>item.id === action.payload.id)
            if(items){
                items.qty +=1
            }else{
                state.cartItems.push({...action.payload,qty:1})
            }
            saveCartToStorage(state.cartItems)
        },
        incrementQty:(state,action:PayloadAction<number>)=>{
            const items=state.cartItems.find(item=>item.id === action.payload)
            if(items){ items.qty ++ ;
         } else {
                const product = products.find(p => p.id === action.payload);
                if (product) {
                  state.cartItems.push({ ...product, qty: 1 });
                }
            saveCartToStorage(state.cartItems)
         }
        },
        decrementQty:(state,action:PayloadAction<number>)=>{
            const items=state.cartItems.find(item=>item.id === action.payload)
            if(!items) return;
            if(items.qty > 1){ items.qty --;
             } else{
                 state.cartItems=state.cartItems.filter(item=>item.id !== action.payload)
             }
             saveCartToStorage(state.cartItems)
        },
        updateQty:(state,action:PayloadAction<{id:number,qty:number}>)=>{
            const items=state.cartItems.find(item=>item.id === action.payload.id)
            if(items) items.qty=action.payload.qty
            saveCartToStorage(state.cartItems)
        },
        removeFromCart:(state,action:PayloadAction<number>)=>{
            state.cartItems=state.cartItems.filter(item=>item.id !== action.payload)
            saveCartToStorage(state.cartItems)
        },
        clearCart:(state)=>{
            state.cartItems=[];
            saveCartToStorage([])
        }
    }
    
})
export default CartSlice.reducer
export const {addToCart,incrementQty,decrementQty,updateQty,removeFromCart,clearCart}=CartSlice.actions