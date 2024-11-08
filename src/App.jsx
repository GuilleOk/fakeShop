/* eslint-disable react/no-unescaped-entities */
import { CartContextProvider } from './contexts/Cart'
import Categorys from './components/Categorys'
import { useSelectCartComponent } from './hooks/useSelectCartComponent'
import { CartIcon } from './components/Icons'
import CartContent from './components/CartContent'

function App() { 
  const { showCart, switchComponent } = useSelectCartComponent()
  const handleClicIconCart = () => {
    switchComponent()
  }
  return (
    <CartContextProvider>
      <div className='header'>
        <div className='logo'><h3>Sky's Product</h3></div>
        {
          !showCart ? <div className='hiddenCart' onClick={handleClicIconCart}><CartIcon /></div> : ''
        }
      </div>
      <div>
        {showCart
          ? <div><CartContent handleClicIconCart={handleClicIconCart} /></div>
          : ''
        }
      </div>
      <Categorys />
    </CartContextProvider>
  )
}

export default App
