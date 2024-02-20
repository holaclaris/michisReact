import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import Carrito from './Carrito';
import Adopt from './Adopt';
import NoPage from './NoPage';

function App() {

  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='Contact' element={<Contact />} />
        <Route path='Carrito' element={<Carrito />} />
        <Route path='Adopt' element={<Adopt />} />
        <Route path='*' element={<NoPage />} />
      </Routes>
    </div>
  );
}

export default App;
