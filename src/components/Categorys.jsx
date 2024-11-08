/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect } from 'react'
import { ProductContext } from '../contexts/Products'
import { useSearchProduct } from '../hooks/useSearchProducts'
import CategorysToShow from './CategorysToShow'

const Categorys = () => {
  const { products, addProduct } = useContext(ProductContext)
  const {results, getProducts} = useSearchProduct()

  const load = async () => {
    await getProducts()
  }
  useEffect(() => {
    load()
  }, [])

  useEffect(() => {
    results.forEach(item => {
      const { category } = item
      addProduct({itemToAdd: item, category})
    })
  }, [results])

  return (
    <div className='alignCategorysContainer'>
      {products.length === 0
        ? ''
        : <CategorysToShow />
      }
    </div>
  )
}

export default Categorys
