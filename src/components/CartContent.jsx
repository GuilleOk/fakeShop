/* eslint-disable react/prop-types */
import { useContext } from 'react'
import { CartContext } from '../contexts/Cart'
import { CartIcon, ClearCartIcon } from './Icons'
import CartItem from './CartItem'

const CartContent = ({ handleClicIconCart }) => {
  const {cart, cleanCart} = useContext(CartContext)

  return (
    <div className='cartContent'>
      <div className='cartIconContainer' onClick={handleClicIconCart}>
        <div className='carticon'><CartIcon /></div>
      </div>
      {cart?.length === 0
        ? ''
        : <div>
          {
            cart.map(itemCart => {
              return (
                <CartItem key={itemCart.id} itemCart={itemCart} />
              )
            })
          }
        </div>
      }
      <div className='clearCartContainer'>
        <div onClick={cleanCart} className='clearCart'>
          <ClearCartIcon />
        </div>
      </div>
    </div>
  )
}

export default CartContent
