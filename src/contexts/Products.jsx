/* eslint-disable react/prop-types */
import { createContext, useReducer } from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const ProductContext = createContext()

const reducer = (state, action) => {
  if (action.type === 'ADD_PRODUCT') {
      const { itemToAdd, category } = action.payload
      if (state.length === 0) {
        let content = []
        content = [...content, itemToAdd]
        return [{category, content}]
      } else {
        const indexCategory = state.findIndex(item => item.category === category)
        if (indexCategory !== -1) {
          const newState = [...state]
          const content = structuredClone(newState[indexCategory].content)
          newState[indexCategory].content = [...content, itemToAdd]
          return newState
        } else {
          return [...state, {category, content: [itemToAdd]}]
        }
      }
  }
}

const useProductsReducer = () => {
  const [state, dispatch] = useReducer(reducer, [])

  const addProduct = item_category_ToAdd => dispatch({
    type: 'ADD_PRODUCT',
    payload: item_category_ToAdd
  })

  return {products: state, addProduct}
}

export const ProductsProvider = ({ children }) => {
  const { products, addProduct } = useProductsReducer()
  
  return (
    <ProductContext.Provider value={{ products, addProduct }}>{children}</ProductContext.Provider>
  )
}