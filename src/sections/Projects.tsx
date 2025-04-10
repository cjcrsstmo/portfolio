// import CJ from '../assets/cj.jpg'
import objectiva from '../assets/objectiva.jpg'
import dentalcare from '../assets/dentalcare.jpg'
import bookstore from '../assets/bookstore.jpg'
// import {useState} from 'react'


const Projects = () => {

    // const [isOpen, setIsOpen] = useState<boolean>(false)

    // const toggleProject = () => {
    //     setIsOpen(!isOpen)
    // }

  return (
    <section className='min-h-screen pt-10 xl:pt-20' id='projects'>
                <div className='flex flex-col items-center justify-center pt-20 xl:pt-15 mb-2 w-fit mx-auto'>
                    <h1 className='font-bold text-3xl sm:text-4xl md:text-5xl text-center w-fit mx-auto z-1' data-aos="zoom-in-up">PROJECTS</h1>
                    <p className='border-b-15 border-primary-content -translate-y-3 w-2/3 z-0' data-aos="zoom-in-up"></p>
                </div>

                <p className='text-center' data-aos="zoom-in-up">Explore the projects I've worked on so far</p>

                <div className='flex flex-col lg:flex-row justify-center items-center mx-auto w-full md:w-2/3 gap-8 sm:gap-10 md:gap:15 mt-10 xl:mt-20'>

                <div className='flex flex-col justify-around items-center bg-primary-content rounded-xl p-10 w-8/10 sm:w-5/10 md:w-3/4 lg:w-2/5 min-h-100 max-h-100' >
                <p className="mx-auto mb-3 text-xl font-bold">Objectiva</p>
                        <p className='text-justify'><strong>Description:</strong> Our capstone project which is an interactive learning platform for learning the 4 basic principles of OOP in Java</p>
                        <p className='mt-2 text-start w-full flex gap-2 items-center justify-start'>
                            <strong>Tech Stack:</strong> <i className='bx bxl-angular text-2xl text-primary '/> <i className='bx bxl-css3 text-2xl text-primary '/> <i className='bx bxl-bootstrap text-2xl text-primary '/> <i className='fab fa-laravel text-xl text-primary '/> <i className='fa-solid fa-database text-xl text-primary '/>
                        </p>
                        <div className="card-actions justify-end">
                            <a href='https://objectiva.tech' target='_blank' className="btn btn-outline btn-primary mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                        </div>
                    </div>

                    <div className='flex flex-col justify-around items-center bg-primary-content rounded-xl p-10 w-8/10 sm:w-5/10 md:w-3/4 lg:w-2/5 min-h-100 max-h-100 ' >
                        <p className="mx-auto mb-3 text-xl font-bold">Dental Care</p>
                        <p className='text-justify'><strong>Description:</strong> A dental care website that is offering an easy-to-use interface for booking appointments and submitting reviews.</p>
                        <p className='mt-2 text-start w-full flex gap-2 items-center justify-start'>
                            <strong>Tech Stack:</strong> <i className='bx bxl-html5 text-2xl text-primary '/> <i className='bx bxl-javascript text-2xl text-primary'/> <i className='bx bxl-bootstrap text-2xl text-primary '/> 
                        </p>
                        <div className="card-actions justify-end">
                            <a href='https://cjcrsstmo.github.io/DentalCare/' target='_blank' className="btn btn-outline btn-primary  mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                        </div>
                    </div>

                    <div className='flex flex-col justify-around items-center bg-primary-content rounded-xl p-10 w-8/10 sm:w-5/10 md:w-3/4 lg:w-2/5 min-h-100 max-h-100 ' >
                        <p className="mx-auto mb-3 text-xl font-bold">Bookstore201</p>
                        <p className='text-justify'><strong>Description:</strong> A library website for browsing books.</p>
                        <p className='mt-2 text-start w-full flex gap-2 items-center justify-start'>
                            <strong>Tech Stack:</strong> <i className='bx bxl-angular text-2xl text-primary '/> <i className='bx bxl-javascript text-2xl text-primary '/> <i className='bx bxl-tailwind-css text-2xl text-primary '/> 
                        </p>
                        <div className="card-actions justify-end">
                            <a href='https://cjcrsstmo.github.io/Bookstore201/' target='_blank' className="btn btn-outline btn-primary  mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                        </div>
                    </div>
                    {/* <div className="card bg-base-100 image-full w-96 shadow-sm" data-aos="zoom-in-up">
                        <figure>
                            <img
                            src={objectiva} alt="objectiva" className='rounded-lg'/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Objectiva</h2>
                            <p><strong>Description:</strong> Our capstone project which is an interactive learning platform for learning the 4 basic principles of OOP in Java</p><p className='mt-2'><strong>Tech Stack:</strong> Angular, CSS, Bootstrap, Laravel, MySql</p>
                            <div className="card-actions justify-end">
                            <a href='https://objectiva.tech' target='_blank' className="btn btn-outline btn-primary mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 image-full w-96 shadow-sm" data-aos="zoom-in-up">
                        <figure>
                            <img
                            src={dentalcare} alt="objectiva" className='rounded-lg'/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Dental Care</h2>
                            <p><strong>Description:</strong> A dental care website that is offering an easy-to-use interface for booking appointments and submitting reviews to enhance overall patient experience and care.</p><p className='mt-2'><strong>Tech Stack:</strong> HTML, Bootstrap, Javascript</p>
                            <div className="card-actions justify-end">
                            <a href='https://cjcrsstmo.github.io/DentalCare/' target='_blank' className="btn btn-outline btn-primary mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                            </div>
                        </div>
                    </div>

                    <div className="card bg-base-100 image-full w-96 shadow-sm" data-aos="zoom-in-up">
                        <figure>
                            <img src={bookstore} alt="objectiva" className=''/>
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title mx-auto">Bookstore201</h2>
                            <p><strong>Description:</strong> A library website for browsing books</p><p className='mt-2'><strong>Tech Stack:</strong> Angular, CSS, Bootstrap, Laravel, MySql</p>
                            <div className="card-actions justify-end">
                            <a href='https://cjcrsstmo.github.io/Bookstore201/' target='_blank' className="btn btn-outline btn-primary mx-auto mt-5"><i className='bx bx-link' ></i>Visit Site</a>
                            </div>
                        </div>
                    </div> */}
                </div>

               

    </section>
  )
}

export default Projects