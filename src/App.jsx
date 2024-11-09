import { CartContextProvider } from './contexts/Cart'
import Categorys from './components/Categorys'
import { useSelectCartComponent } from './hooks/useSelectCartComponent'
import { CartIcon } from './components/Icons'
import CartContent from './components/CartContent'
import Footer from './components/Footer'

function App() { 
  const { showCart, switchComponent } = useSelectCartComponent()
  const handleClicIconCart = () => {
    switchComponent()
  }
  return (
    <CartContextProvider>
      <img src="Banner tienda.jpg" alt="Banner" className='banner' />  
      <div className='header'>
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
      <h2 style={{color: 'white', textAlign: 'center', fontSize: '3rem', padding: '2rem', marginTop:'8rem', backgroundColor: 'rgb(1, 2, 44)'}}>Categories</h2>
      <Categorys />
      <Footer />
    </CartContextProvider>
  )
}

export default App
