import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import About from './pages/About';
import Header from './pages/Header';
import Home from './pages/Home';
import Order from './pages/Order';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path='/' element={<Home></Home>}></Route>
          <Route path='/home' element={<Home></Home>}></Route>
          <Route path='/order' element={<Order></Order>}></Route>
          <Route path='/about' element={<About></About>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
