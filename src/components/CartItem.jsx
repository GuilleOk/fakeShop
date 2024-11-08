/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { AddToCartIcon, RemoveFromCartIcon } from './Icons'
import { CartContext } from '../contexts/Cart'

const CartItem = ({ itemCart }) => {
  const { addToCart, removeFromCart } = useContext(CartContext)
  
  const handleRemoveFromCart = () => {
    const iteToRemove = itemCart
    removeFromCart({ id: iteToRemove.id })
  }

  const handleAddAmount = () => {
    const newItem = itemCart
    addToCart(newItem)
  }
  return (
    <div className='itemCart'>
      <div className='photoCartContainer'>
        <img src={itemCart.image} alt={itemCart.title} className='imgItemCart' />
      </div>
      <div className='itemCartContent'>
        <div className='itemCartTitleContainer'>
          <h5 className='itemCartTitle'>{itemCart.title}</h5>
        </div>
        <div className='removeAddItem'>
          <div className='buttonRemoveFromCart' onClick={handleRemoveFromCart}><RemoveFromCartIcon /></div>
          <div className='amountCartItem'><strong>Amount:</strong> {itemCart.amount}</div>
          <div className='buttonAddToCart' onClick={handleAddAmount}><AddToCartIcon /></div>
        </div>
      </div>
    </div>
  )
}

export default CartItem
