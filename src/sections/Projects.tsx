import CJ from '../assets/cj.png'
const Projects = () => {
  return (
    <section className='min-h-screen pt-10 xl:pt-20' id='projects'>
                <h1 className='text-3xl sm:text-4xl md:text-5xl text-center mb-4' data-aos="zoom-in-up">PROJECTS</h1>
                <p className='text-center' data-aos="zoom-in-up">Explore the projects I've worked on so far</p>

                <div className='flex flex-col sm:flex-row justify-center items-center mx-auto w-2/3 gap-10 sm:gap-20 md:gap-30 lg:gap-40 mt-10 xl:mt-20'>
                        <img src={CJ} alt="" className='w-2/7 rounded-xl' data-aos="fade-right"/>

                    <div className='w-2/5 h-50' data-aos="fade-left">
                        <hr /> <br />
                        <hr />
                        <div className='flex items-center justify-center sm:justify-around p-4'>
                            <p className='hidden sm:block'><i className='bx bx-arrow-back text-lg sm:text-2xl' /></p>
                            <p className='text-xl sm:text-2xl'>Obejctiva</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-center sm:justify-around p-4'>
                            <p className='hidden sm:block'><i className='bx bx-arrow-back text-lg sm:text-2xl' /></p>
                            <p className='text-xl sm:text-2xl'>Obejctiva</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-center sm:justify-around p-4'>
                            <p className='hidden sm:block'><i className='bx bx-arrow-back text-lg sm:text-2xl' /></p>
                            <p className='text-xl sm:text-2xl'>Obejctiva</p>
                        </div>
                        <hr />

                        <div className='flex items-center justify-center sm:justify-around p-4'>
                            <p className='hidden sm:block'><i className='bx bx-arrow-back text-lg sm:text-2xl' /></p>
                            <p className='text-xl sm:text-2xl'>Obejctiva</p>
                        </div>
                    </div>
                </div>
    </section>
  )
}

export default Projects