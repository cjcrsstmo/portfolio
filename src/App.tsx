
import Navbar from './components/Navbar'
// import Landing from './sections/Landing';
// import AboutMe from './sections/AboutMe';
// import Skills from './sections/Skills';
// import Projects from './sections/Projects';
// import Footer from './components/Footer';
// import Contact from './sections/Contact';

import AOS from 'aos';
import 'aos/dist/aos.css';  
import { useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import Background from './assets/opoy7.jpg'

function App() {
  
  useEffect(()=> {
    AOS.init({duration: 1200}),
    AOS.refresh();

  })

  return (
    <>
      <div className='bg-cover bg-center bg-fixed	min-h-screen bg-no-repeat' style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${Background})` }}>
          <Navbar/>

          <p className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'>New Link: <a href="https://cjcrsstmo.vercel.app" target='_blank' className='text-underline'>cjcrsstmo.vercel.app</a></p>
          {/* <Landing/>
          <AboutMe/>
          <Skills/>
          <Projects/>
          <Contact />
          <Footer /> */}
      </div>
    </>
  )
}

export default App
