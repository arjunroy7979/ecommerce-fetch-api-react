import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Products from './components/Products';
import Navbar from './components/navbar/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Products />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
