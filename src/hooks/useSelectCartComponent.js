import { useState } from "react"

export const useSelectCartComponent = () => {
  const [showCart, setShowCart] = useState(false)

  const switchComponent = () => {
    setShowCart(!showCart)
  }

  return {showCart, switchComponent}
}