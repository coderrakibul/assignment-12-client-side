import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home';
import Reviews from './Pages/Reviews/Reviews';
import Purchase from './Pages/Purchase/Purchase';
import Footer from './Pages/Shared/Footer';
import Navbar from './Pages/Shared/Navbar';
import Login from './Pages/Login/Login';
import SignUp from './Pages/Login/SignUp';
import RequireAuth from './Pages/Login/RequireAuth';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className='bg-gray-100'>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/purchase' element={<RequireAuth><Purchase></Purchase></RequireAuth>}></Route>
        <Route path='/reviews' element={<Reviews></Reviews>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/signup' element={<SignUp></SignUp>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
