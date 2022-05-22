import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';


function App() {
  return (
    <div className='bg-neutral'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<Purchase></Purchase>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
