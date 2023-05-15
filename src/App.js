import './App.css';
import Homepage from './pages/Homepage';
import OrderPage from './pages/OrderPage';
import { Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/order-page' element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
