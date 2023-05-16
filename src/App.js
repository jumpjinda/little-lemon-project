import './App.css';
import Homepage from './pages/Homepage';
import Reservation from './pages/Reservation';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/reservation' element={<Reservation />} />
      </Routes>
    </div>
  );
};

export default App;
