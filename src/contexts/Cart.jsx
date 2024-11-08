/* eslint-disable react/prop-types */
import { createContext, useReducer } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CartContext = createContext()

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART": {
      const { id, title, price, description, image } = action.payload
      if (state.length === 0) {
        return [{id , title, price, description, image, amount: 1}]
      } else {
        const indexVerification = state.findIndex(item => item.id === id)
        if (indexVerification === -1) {
          return [...state, {id , title, price, description, image, amount: 1}]
        } else {
          const newState = structuredClone(state)
          const cantidad = newState[indexVerification].amount
          newState[indexVerification].amount = cantidad + 1
          return newState
        }
      }
    }
      
    case "REMOVE_FROM_CART": {
      const { id } = action.payload
      const index = state.findIndex(item => item.id === id)
      const newState = structuredClone(state)
      if (state[index].amount === 1) {
        return newState.filter(item => item.id !== id)        
      } else {
        newState[index].amount -= 1
        return newState        
      }
    }
      
    case "CLEAN_CART": {
      return []
    }
  }
}

const useCartReducer = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const addToCart = newItem => dispatch(
    {
      type: 'ADD_TO_CART',
      payload: newItem
    }
  )

  const removeFromCart = idFromItem => dispatch({
    type: 'REMOVE_FROM_CART',
    payload: idFromItem
  })

  const cleanCart = () => dispatch({
    type: 'CLEAN_CART'
  })

  return {cart: state, addToCart, removeFromCart, cleanCart}
}

export const CartContextProvider = ({ children }) => {
  const {cart, addToCart, removeFromCart, cleanCart} = useCartReducer()

  return (
    <CartContext.Provider value={{cart, addToCart, removeFromCart, cleanCart}}>{ children }</CartContext.Provider>
  )
}