import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import { SelectCart } from './components/SelectCart'
import { CartId } from './components/CartId';

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<SelectCart />} />
          <Route path="/:id" element={<CartId />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
