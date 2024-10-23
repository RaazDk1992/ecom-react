import logo from './logo.svg';
import './App.css';
import EcomNavBar from './components/EcomNavBar';
import { BrowserRouter as Router } from 'react-router-dom';

import AppRoutes from './routes/AppRoutes';
import { CartDataProvider } from './provider/CartContextProvider';

function App() {
  return (
    <CartDataProvider>
      <Router>
      <EcomNavBar/>
      <AppRoutes/>
    </Router>
    </CartDataProvider>
  );
}

export default App;

