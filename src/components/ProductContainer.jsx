/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { correctNameCategory } from '../helpers/correctNameCategory'
import { AddToCartIcon } from './Icons'
import { CartContext } from '../contexts/Cart'

const ProductContainer = ({ itemToShow }) => {
  const name = correctNameCategory({ name: itemToShow.title })
  const {addToCart} = useContext(CartContext)
  const handleAdd = () => {
    const newItem = itemToShow
    addToCart(newItem)
  }

  return (
    <div className='product'>
      <div className='productPictureContainer'>
        <img src={itemToShow.image} alt={itemToShow.category} className='categoryPicture' />
      </div>
      <div>
        <h3 className='categoryName'>{name}</h3>
      </div>
      <div style={{margin: '0 .8rem'}}>
        <p style={{textAlign: 'justify', fontSize: '.85rem'}}>{itemToShow.description}</p>
      </div>
      <div className='costAndAdd'>
        <div className='cost'><strong>Cost:</strong> ${itemToShow.price}</div>
        <div className='addProduct' onClick={handleAdd}><AddToCartIcon /></div>
      </div>
    </div>
  )
}

export default ProductContainer
