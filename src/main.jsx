import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { ProductsProvider } from './contexts/Products.jsx'

createRoot(document.getElementById('root')).render(
  <ProductsProvider>
    <App />
  </ProductsProvider>,
)
