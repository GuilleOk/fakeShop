/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from 'react'
import { ProductContext } from '../contexts/Products'
import CategoryItem from './CategoryItem'
import { useCategorySelect } from '../hooks/useCategorySelect'
import ProductToShow from './ProductToShow'

const CategorysToShow = () => {
  const { products } = useContext(ProductContext)
  const { categorySelected, selectCategory } = useCategorySelect()
  const [indexCategoryToShow, setIndexCategoryToShow] = useState(null)
  
  useEffect(() => {
    console.log('categorySelected: ', categorySelected)
    if (categorySelected !== '') {
      const index = products.findIndex(item => item.category === categorySelected)
      setIndexCategoryToShow(index)
    } else {
      setIndexCategoryToShow(0)
    }
  }, [categorySelected])
  
  return (
    <div className='alignCategorysContainer2'>
      <div className='categorysContainer'>
        {products?.map(category => {
         return (
            <div key={category.category}>
              <CategoryItem category={category} selectCategory={selectCategory} />
            </div>
          )
        })}
      </div>
      <div className="actualCategoryToShow">
        {products.length !== 0
          ? <ProductToShow productsToShow={products[indexCategoryToShow]} />
          : ''
        }
      </div>
    </div>
  )
}

export default CategorysToShow
