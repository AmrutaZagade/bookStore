import React from 'react'
import Home from './home/Home';
import {Route, Routes} from "react-router-dom";
import Books from "./books/Books";
import Signup from './components/Signup';
import Contact from './components/Contact'; 
import { Toaster } from "react-hot-toast";
import About from './components/About';

const App = () => {
  return (
  <>
     <div>
     <Routes className="dark:bg-slate-900 dark:text-white">
       <Route path="/" element={<Home/>}/>
       <Route path="/book" element={<Books/>}/>
       <Route path="/signup" element={<Signup/>}/>
       <Route path="/about" element={<About />} />
       <Route path="/contact" element={<Contact/>}/>
     </Routes>
     <Toaster />
     </div>
  </>
  );
}

export default App;