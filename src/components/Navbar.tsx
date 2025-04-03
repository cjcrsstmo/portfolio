import { useState } from 'react'
import Logo from '../assets/logo-2.png'
const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className='w-full p-5 absolute top-0 z-10 '>
        <nav className='flex flex-wrap justify-between items-center container' data-aos="fade-down" data-aos-duration="1000">
            <ul className='flex gap-2'>
                <li><a href="https://github.com/cjcrsstmo" ><i className='bx bxl-github text-xl'></i></a></li>
                <li><a href="https://www.linkedin.com/in/chrisjohn-crisostomo-8148162b7/"><i className='bx bxl-linkedin-square text-xl' ></i></a></li>
                <li><a href=""><i className='bx bxl-facebook-square text-xl' ></i></a></li>
            </ul>
            <img src={Logo} alt="logo" className='w-10' />
            <ul className='flex flex-wrap gap-5 hidden '> 
                <li><a href="#home" className='hover:underline hover:underline-offset-6'>HOME</a></li>
                <li><a href="#aboutme" className='hover:underline hover:underline-offset-6'>ABOUT ME</a></li>
                <li><a href="#skills" className='hover:underline hover:underline-offset-6'>SKILLS</a></li>
                <li><a href="#projects" className='hover:underline hover:underline-offset-6'>PROJECTS</a></li>
                <li><a href="#contact" className='hover:underline hover:underline-offset-6'>CONTACT</a></li>
            </ul>
            <p className='block '><i className='bx bx-menu text-4xl cursor-pointer' onClick={() => setMenuOpen(!isMenuOpen)}></i></p>

            <div className='relative w-screen '>

                {isMenuOpen && (
                    <nav className='flex flex-col text-center gap-5 absolute top-2 right-0 bg-white p-5 w-full md:w-1/4 rounded-lg'>
                        <a href="#home" className='hover:bg-gray-600 hover:text-white text-black p-2 rounded-lg'>HOME</a>
                        <a href="#aboutme" className='hover:bg-gray-600 hover:text-white text-black p-2 rounded-lg'>ABOUT ME</a>
                        <a href="#skills" className='hover:bg-gray-600 hover:text-white text-black p-2 rounded-lg'>SKILLS</a>
                        <a href="#skills" className='hover:bg-gray-600 hover:text-white text-black p-2 rounded-lg'>PROJECTS</a>
                        <a href="#skills" className='hover:bg-gray-600 hover:text-white text-black p-2 rounded-lg'>CONTACT</a>

                    </nav>)}
            </div>
        </nav>
    </div>
  )
}

export default Navbar