import { BrowserRouter as Routers, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Home from './pages/Home';
import Cart from './pages/Cart';
import Product from './pages/Product';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <CartProvider>
      <div className='App'>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/Cart' element={<Cart />} />
          <Route path='/product/:id' element={<Product />} />
        </Routes>
      </div>
    </CartProvider>
  );
}

export default App;
