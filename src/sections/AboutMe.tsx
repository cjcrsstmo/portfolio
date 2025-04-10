import ProfilePic from '../assets/cj.jpg'

const AboutMe = () => {
  return (
    <>
    <section className='min-h-screen' id='aboutme' >
      {/* <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center pt-20 xl:pt-15 mb-10 sm:mb-10 lg:mb-15 xl:mb-20 w-fit mx-auto' data-aos="zoom-in-up">ABOUT <span className='border-b-4'>ME</span><span className='border-b-4'></span></h1> */}

      <div className='flex flex-col items-center justify-center pt-20 xl:pt-15 mb-10 lg:mb-15 xl:mb-20 w-fit mx-auto'>
        <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center  w-fit mx-auto z-1' data-aos="zoom-in-up">ABOUT ME</h1>
        <p className='border-b-15 border-accent-content -translate-y-3 w-2/3 z-0' data-aos="zoom-in-up"></p>
      </div>

      <div className='flex justify-center items-center w-3/5 px-auto mx-auto h-auto'>
        <div className='flex gap-20 sm:gap-30 justify-evenly items-center w-full flex-col xl:flex-row my-auto'>

          {/* Profile Picture */}
          <div className='w-40 sm:w-screen border-2 rounded-xl border-accent'data-aos="fade-right">
            <img  src={ProfilePic}  alt="profile" className='rounded-xl w-40 sm:w-82 translate-5' data-aos="fade-right"/>
          </div>
        

          {/* About Me Text */}
          <div className='flex flex-col items-center justify-center w-full sm:w-auto sm:mt-0' data-aos="fade-left">
            <p className="text-white text-lg sm:text-xl md:text-xl leading-10 text-justify opacity-90">
              Hello everyone, I'm <span className="text-accent font-bold">Chrisjohn Crisostomo</span>. As an aspiring full-stack developer, my journey in web development has been both enriching and exciting. I find satisfaction in constructing responsive websites and overseeing their backends.
            </p>
            <br />
            <p className="text-white text-lg sm:text-xl md:text-xl leading-10 text-justify opacity-90">
              My <span className="text-accent font-bold">eagerness</span> and <span className="text-accent font-bold">dedication</span> to mastering the art of full-stack development, combined with my <span className="text-accent font-bold">enthusiasm</span> for crafting engaging web interfaces, drive my desire to contribute meaningfully to the unending innovation in the field of web development.
            </p>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default AboutMe

