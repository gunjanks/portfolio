
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Head from './Head'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Experiance from "./Components/Experiance";
import Projects from "./Components/Projects";
import Skills from "./Components/Skills";
import All from './All';
function App() {
  

  return (
    <>
    <BrowserRouter>
    <Head/>
    <Routes>
   <Route path='//portfolio' element={<All/>}/>
   <Route path='/Home' element={<All/>}/>
   <Route path='/About' element={<About/>}/>
   <Route path='/Experiance' element={<Experiance/>}/>
   <Route path='/Skills' element={<Skills/>}/>
   <Route path='/Projects' element={<Projects/>}/>
   <Route path='/Contact' element={<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
