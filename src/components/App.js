import '../styles/App.css';
//components
import Navigation from './Navigation';
import Home from './Home';
import Products from './Products';
import Product from './Product';
import Cart from './Cart';

//dependencies
import { Route, Routes } from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}

export default App;
