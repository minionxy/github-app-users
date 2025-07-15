import logo from './logo.svg';
import './App.css';
import Addgit from './components/Addgit';
import Viewgit from './components/Viewgit';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Searchgit from './components/Searchgit';
import Deletegit from './components/Deletegit';

function App() {
  return (
   <BrowserRouter>
   <Routes>
    <Route path='/' element={ <Addgit/> }/>
    <Route path='/search' element={ <Searchgit/> }/>
    <Route path='/delete' element={ <Deletegit/> }/>
    <Route path='/view' element={ <Viewgit/> }/>
   </Routes>
   </BrowserRouter>
  );
}

export default App;
