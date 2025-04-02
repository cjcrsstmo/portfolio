
import Navbar from './components/Navbar'
import Landing from './sections/Landing';
import AboutMe from './sections/AboutMe';
import Skills from './sections/Skills';
import Projects from './sections/Projects';
import Footer from './components/Footer';
import Contact from './sections/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import Background from './assets/bg-portfolio.jpg'

function App() {
  
  useEffect(()=> {
    AOS.init({duration: 1200}),
    AOS.refresh();

  })

  return (
    <>
      <div className='bg-cover bg-center bg-fixed	min-h-screen bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${Background})` }}>
          <Navbar/>
          <Landing/>
          <AboutMe/>
          <Skills/>
          <Projects/>
          <Contact />
          <Footer />
      </div>
    </>
  )
}

export default App
