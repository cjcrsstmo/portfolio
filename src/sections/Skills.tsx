

const Skills = () => {
    return (
      <section className='min-h-screen' id='skills'>
          <div>
              <div className='text-center pt-10 xl:pt-20'>
                  <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center mb-4' data-aos="zoom-in-up">SKI<span className="">LLS</span></h1>
                  <p data-aos="fade-up">I've learned about different tech tools in my studies, and right now, I'm still improving myself, especially Back-end Development.</p>
              </div>
  
  
              <div className='w-4/5 mt-20 mx-auto'>
                  {/* front-end */}
                  <div className='' data-aos="fade-up">
                      {/* <h1 className='text-2xl'>Front-End</h1> */}
                          <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-css3 text-7xl text-accent mb-2 opacity-80'/>CSS</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-javascript text-7xl text-accent mb-2 opacity-80'/>JAVASCRIPT</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-typescript text-7xl text-accent mb-2 opacity-80'/>TYPESCRIPT</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-bootstrap text-7xl text-accent mb-2 opacity-80'/>BOOTSTRAP</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-tailwind-css text-7xl text-accent mb-2 opacity-80'/>TAILWIND</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-angular text-7xl text-accent mb-2 opacity-80'/>ANGULAR</li>
                              <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-react text-7xl text-accent mb-2 opacity-80'/>REACT</li>
                          </ul>
                  </div>
  <hr className='w-1/2 mx-auto mt-10' data-aos="fade-up"/>
  
                  {/* back-end */}
                  <div className='mt-10' data-aos="fade-up">
                  {/* <h1 className='text-2xl'>Back-End</h1> */}
                      <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                          <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-php text-7xl text-accent mb-2 opacity-80'/>PHP</li>
                          <li className='flex flex-col text-accent opacity-80'><i className='fab fa-laravel text-7xl text-accent mb-2 opacity-80'/>LARAVEL</li>
                          <li className='flex flex-col text-accent opacity-80'><i className='fa-solid fa-database text-7xl text-accent mb-2 opacity-80'/>MYSQL</li>
                          <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-firebase text-7xl text-accent mb-2 opacity-80'/>FIREBASE</li>
                      </ul>
                  </div>
  <hr className='w-1/2 mx-auto mt-10' data-aos="fade-up"/>
                  {/* others */}
                  <div className='mt-10' data-aos="fade-up">
                  {/* <h1 className='text-2xl'>Others</h1> */}
                      <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                          <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-git text-7xl text-accent mb-2 opacity-80'/>GIT</li>
                          <li className='flex flex-col text-accent opacity-80'><img src="https://img.icons8.com/?size=80&id=KIcFwp9MNQL5&format=png&color=00D3BB" alt="" className="pb-1" />POSTMAN</li> 
                          <li className='flex flex-col text-accent opacity-80'><i className='bx bxl-figma text-7xl text-accent mb-2 opacity-80'/>FIGMA</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Skills