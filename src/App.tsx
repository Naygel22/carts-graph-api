import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SelectCart } from './components/SelectCart'
import { CartId } from './components/CartId';
import { AddCart } from './components/AddCart';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<SelectCart />} />
          <Route path="/:id" element={<CartId />} />
          <Route path='/add' element={<AddCart />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
