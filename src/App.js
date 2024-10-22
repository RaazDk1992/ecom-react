import logo from './logo.svg';
import './App.css';
import EcomNavBar from './components/EcomNavBar';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import ProductManagement from './components/admin/ProductManagement';
import Products from './components/Products';

function App() {
  return (
    <Router>
      <EcomNavBar />
      <Routes>
        <Route path="/admin" element={<ProductManagement />} />
        <Route path="/products" element={<Products/>}/>
      
        {/* Add more routes as needed */}
      </Routes>
    </Router>
  );
}

export default App;

