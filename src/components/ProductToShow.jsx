/* eslint-disable react/prop-types */
import { correctNameCategory } from '../helpers/correctNameCategory'
import ProductContainer from './ProductContainer'

const ProductToShow = ({ productsToShow }) => {
  const getName = ({ productsToShow }) => {
    if (productsToShow !== undefined) {
      const { category } = productsToShow
      return correctNameCategory({ name: category})
    } else {
      return ''
    }
  }
  const name = getName({productsToShow})
  return (
    <div>
      <h1 className='h1ProductToShow'>{name}</h1>
      <div className='productsToShowContainer'>
        <div className='productsContainer'>
          {
            productsToShow?.content.map(itemToShow => {
              return (
                <div key={itemToShow.id} style={{display: 'flex', minHeight: '34rem', maxHeight: '44rem'}}>
                  <ProductContainer itemToShow={itemToShow} />
                </div>
              )
             })
          }
        </div>
      </div>
    </div>
  )
}

export default ProductToShow
