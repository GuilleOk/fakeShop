/* eslint-disable react/prop-types */
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../contexts/Cart'
import { CartIcon, ClearCartIcon } from './Icons'
import CartItem from './CartItem'

const CartContent = ({ handleClicIconCart }) => {
  const {cart, cleanCart} = useContext(CartContext)
  const [counter, setCounter] = useState(0)
  useEffect(() => {
    setCounter(0)
    if (cart !== undefined && cart?.length !== 0) {
      cart.forEach(item => setCounter(prevState => prevState += item.amount))
    }
  }, [cart])
  

  return (
    <div className='cartContent'>
      <div className='cartIconContainer' onClick={handleClicIconCart}>
        <div className='carticon'><CartIcon /> <span>{counter}</span></div>
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
