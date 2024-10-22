import logo from './logo.svg';
import './App.css';
import EcomNavBar from './components/EcomNavBar';
import { BrowserRouter as Router } from 'react-router-dom';
import ProductManagement from './components/admin/ProductManagement';
import Products from './components/Products';
import AppRoutes from './routes/AppRoutes';

function App() {
  return (
    <Router>
      <EcomNavBar/>
      <AppRoutes/>
    </Router>
  );
}

export default App;

