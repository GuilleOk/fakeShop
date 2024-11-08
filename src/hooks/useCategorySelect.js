import { useState } from "react"

export const useCategorySelect = () => {
  const [categorySelected, setCategorySelected] = useState('')

  const selectCategory = ({ category }) => {
    setCategorySelected(category)
  }

  return {categorySelected, selectCategory}
}