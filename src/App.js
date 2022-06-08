import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<ItemListContainer />} />
          <Route path='*' element={<h1>PAGE NOT FOUND 404</h1>} />
          <Route path='/detail/:productId' element={<ItemDetailContainer />} />
          <Route path='/category/:categoryId' element={<ItemListContainer />} />
          <Route path='/cart' element={<h1>CART</h1>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
