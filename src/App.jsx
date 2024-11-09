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
        <div className='logo'><img src='Logo tienda.png' className='logoPhoto'/></div>
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
      <img src="Banner tienda.jpg" alt="Banner" className='banner' />  
      <Categorys />
    </CartContextProvider>
  )
}

export default App
