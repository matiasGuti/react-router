import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './views/Home';
import Contact from './views/Contact';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/contacto' element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
