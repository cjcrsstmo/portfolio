

const Skills = () => {
    return (
      <section className='min-h-screen' id='skills'>
          <div>
              <div className='text-center pt-10 xl:pt-20'>
                <div className='flex flex-col items-center justify-center pt-20 xl:pt-15 mb-2 w-fit mx-auto'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center w-fit mx-auto z-1' data-aos="zoom-in-up">SKILLS</h1>
                    <p className='border-b-15 border-primary-content -translate-y-3 w-2/3 z-0' data-aos="zoom-in-up"></p>
                </div>

                  <p data-aos="fade-up">I've learned about different tech tools in my studies, and right now, I'm still improving myself, especially Back-end Development.</p>
              </div>
  
  
              <div className='w-4/5 mt-20 mx-auto'>
                  {/* front-end */}
                  <div className='' data-aos="fade-up">
                      {/* <h1 className='text-2xl'>Front-End</h1> */}
                          <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-css3 text-7xl text-primary mb-2 opacity-80'/>CSS</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-javascript text-7xl text-primary mb-2 opacity-80'/>Javascript</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-typescript text-7xl text-primary mb-2 opacity-80'/>Typescript</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-bootstrap text-7xl text-primary mb-2 opacity-80'/>Bootstrap</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-tailwind-css text-7xl text-primary mb-2 opacity-80'/>TailwindCSS</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-angular text-7xl text-primary mb-2 opacity-80'/>Angular</li>
                              <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-react text-7xl text-primary mb-2 opacity-80'/>React</li>
                          </ul>
                  </div>
  <hr className='w-1/2 mx-auto mt-10' data-aos="fade-up"/>
  
                  {/* back-end */}
                  <div className='mt-10' data-aos="fade-up">
                  {/* <h1 className='text-2xl'>Back-End</h1> */}
                      <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                          <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-php text-7xl text-primary mb-2 opacity-80'/>Php</li>
                          <li className='flex flex-col text-primary opacity-80'><i className='fab fa-laravel text-7xl text-primary mb-2 opacity-80'/>Laravel</li>
                          <li className='flex flex-col text-primary opacity-80'><i className='fa-solid fa-database text-7xl text-primary mb-2 opacity-80'/>MySql</li>
                          <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-firebase text-7xl text-primary mb-2 opacity-80'/>Firebase</li>
                      </ul>
                  </div>
  <hr className='w-1/2 mx-auto mt-10' data-aos="fade-up"/>
                  {/* others */}
                  <div className='mt-10' data-aos="fade-up">
                  {/* <h1 className='text-2xl'>Others</h1> */}
                      <ul className='flex gap-10 mt-4 justify-evenly w-4/5 mx-auto text-center flex-wrap'>
                          <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-git text-7xl text-primary mb-2 opacity-80'/>Git</li>
                          <li className='flex flex-col text-primary opacity-80'><img src="https://img.icons8.com/?size=80&id=KIcFwp9MNQL5&format=png&color=0082ce" alt="" className="pb-1" />Postman</li> 
                          <li className='flex flex-col text-primary opacity-80'><i className='bx bxl-figma text-7xl text-primary mb-2 opacity-80'/>Figma</li>
                      </ul>
                  </div>
              </div>
          </div>
      </section>
    )
  }
  
  export default Skills