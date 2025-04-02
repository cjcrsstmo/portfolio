
const Landing = () => {
    return (
      <section className='min-h-screen text-white' id='home'>
        <div className='flex flex-col justify-center items-center h-screen p-5'>
            <p data-aos="zoom-in-up" data-aos-duration="900">Hi, I'm</p><br />
            <h1 className='text-5xl sm:text-6xl md:text-8xl font-bold leading-[.7]' data-aos="zoom-in">CHRISJOHN</h1><br />
            <h1 className='text-5xl sm:text-6xl md:text-8xl text-gray-500 font-bold leading-[.7]' data-aos="zoom-in">CRISOSTOMO</h1><br />
            <p className='text-xl' data-aos="zoom-in-down" data-aos-duration="900">A Web Developer</p>
        </div>
  
        <div className='fixed bottom-10 right-10 cursor-pointer z-10'>
          <a href="#home"><i className='bx bxs-arrow-to-top text-4xl opacity-70 hover:opacity-100' ></i></a>
        </div>
      </section>
    )
  }
  
  export default Landing
  
  // <h1 className='text-8xl/15 font-bold'>CHRISJOHN</h1><br />
  //           <h1 className='text-8xl/20 text-gray-500 font-bold'>CRISOSTOMO</h1><br />
  //           <p className='text-xl'>A Web Developer</p>