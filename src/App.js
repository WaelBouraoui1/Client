import logo from './logo.svg';
import './App.css';
import { Route,Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Profile from './components/Profile';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/login' element={<Login/>}/>
      <Route path='/register' element={<Register/>}/>
      <Route path='/Profile' element={<Profile/>}/>
    </Routes>
    </>
    
  );
}




export default App;



