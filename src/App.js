import React from 'react';
import Banner from './Components/Banner';
import Navbar from './Components/Navbar';
import About from './Components/About';
import Header from './Components/Header';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Contact from './Components/Contact';
import Animation from './Components/Animation/Animation';
function App() {
  return (
    <>
    <div className='bg-site bg-no-repeat bg-cover overflow-hidden'>
    <Navbar />
    <Header />
    <Banner />
    <About />
    <Skills />
    {/* <Animation /> */}
    <Projects />
    <Contact />
    </div>
    
    {/* <Navbar></Navbar> */}
    </>
  );
}

export default App;
