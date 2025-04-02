import { useState } from 'react'

const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false)
  
  return (
    <div className='w-full p-5 absolute top-0 z-10 '>
        <nav className='flex flex-wrap justify-between items-center container' data-aos="fade-down" data-aos-duration="1000">
            <ul className='flex gap-2'>
                <li><i className='bx bxl-github text-xl'></i></li>
                <li><i className='bx bxl-linkedin-square text-xl' ></i></li>
                <li><i className='bx bxl-facebook-square text-xl' ></i></li>
            </ul>
            <p>LOGO</p>
            <ul className='flex flex-wrap gap-5 hidden lg:flex'>
                <li><a href="#home" className='hover:underline hover:underline-offset-6'>HOME</a></li>
                <li><a href="#aboutme" className='hover:underline hover:underline-offset-6'>ABOUT ME</a></li>
                <li><a href="#skills" className='hover:underline hover:underline-offset-6'>SKILLS</a></li>
                <li><a href="#projects" className='hover:underline hover:underline-offset-6'>PROJECTS</a></li>
                <li><a href="#contact" className='hover:underline hover:underline-offset-6'>CONTACT</a></li>
            </ul>
            <p className='block lg:hidden'><i className='bx bx-menu text-4xl cursor-pointer' onClick={() => setMenuOpen(!isMenuOpen)}></i></p>

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