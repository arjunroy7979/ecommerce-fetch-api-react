import { Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Navbar from './components/navbar/Navbar';
import Home from './components/Home';
import Cart from './components/Cart';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/products' element={<Products />} />
        <Route path='/cart' element={<Cart />} />
      </Routes>
    </>
  );
}

export default App;
