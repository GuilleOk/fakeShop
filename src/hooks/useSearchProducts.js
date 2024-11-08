import { useState } from "react"

export const useSearchProduct = () => {
  const [results, setResults] = useState([])

  const getProducts = async () => {
    try {
      const response = await fetch('https://fakestoreapi.com/products')
      if (response.ok) {
        const data = await response.json()
        setResults(data)
      } else {
        throw new Error('error en el fetch')
      }
    } catch (error) {
      console.error(error)
    }
  }

  return {results, getProducts}
}