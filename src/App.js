import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Footer from './components/Footer';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import About from './components/About';
import Resume from './components/Resume';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';


import './App.css';


function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App">
     <Routes>
      <Route path='/'element = {<Hero/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/resume' element={ <Resume/>}/>
       <Route path='/skills' element={ <Skills/>}/>
       <Route path='/projects' element={ <Projects/>}/>
       <Route path='/contact' element={ <Contact/>}/>


     </Routes>
      
      <Footer/>
    </div>



    </Router>
    
  );
}

export default App;
