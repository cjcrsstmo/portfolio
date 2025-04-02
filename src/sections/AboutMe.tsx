import ProfilePic from '../assets/cj.jpg'

const AboutMe = () => {
  return (
    <>
    <section className='min-h-screen' id='aboutme' >
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center pt-20 xl:pt-15 mb-10 sm:mb-10 lg:mb-15 xl:mb-20' data-aos="zoom-in-up">ABOUT ME</h1>

      <div className='flex justify-center items-center w-3/5 px-auto mx-auto h-auto'>
        <div className='flex gap-10 sm:gap-20 justify-evenly items-center w-full flex-col xl:flex-row my-auto'>

          {/* Profile Picture */}
          <img  src={ProfilePic}  alt="profile" className='rounded-xl w-60 sm:w-90' data-aos="fade-right"/>

          {/* About Me Text */}
          <div className='flex flex-col items-center justify-center w-full sm:w-auto sm:mt-0' data-aos="fade-left">
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-10 text-justify">
              Hello everyone, I'm <span className="text-gray-600 font-bold">Chrisjohn Crisostomo</span>. As an aspiring full-stack developer, my journey in web development has been both enriching and exciting. I find satisfaction in constructing responsive websites and overseeing their backends.
            </p>
            <br />
            <p className="text-white text-lg sm:text-xl md:text-2xl leading-10 text-justify">
              My <span className="text-gray-600 font-bold">eagerness</span> and <span className="text-gray-600 font-bold">dedication</span> to mastering the art of full-stack development, combined with my <span className="text-gray-600 font-bold">enthusiasm</span> for crafting engaging web interfaces, drive my desire to contribute meaningfully to the unending innovation in the field of web development.
            </p>
          </div>
        </div>
      </div>
    </section>


    </>
  )
}

export default AboutMe

