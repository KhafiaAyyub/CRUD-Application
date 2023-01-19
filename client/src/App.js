import logo from './logo.svg';
import './App.css';

//components
import AddUser from './components/AddUser';
import NavBar from './components/NavBar';
import Code from './components/Code';
import AllUser from './components/AllUser';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
  <BrowserRouter>
    <NavBar/>
    <Routes>       {/* wraping with route */}
      <Route path='/' element={<Code />} />
      <Route path='/all' element={<AllUser />} />
      <Route path='/add' element={<AddUser />} />
    </Routes>
   </BrowserRouter>
  );
}

export default App;
