

const Contact = () => {
    return (
      <section className='min-h-screen' id="contact">
        <h1 className='text-3xl sm:text-4xl md:text-5xl text-center pt-30 mb-10 sm:mb-10 lg:mb-20 xl:mb-30' data-aos="zoom-in-up">CONTACT ME</h1>
        
        <div className='flex flex-col sm:flex-row text-center sm:text-left justify-center items-center gap-8 sm:gap-20'>
            <div className='flex flex-col justify-around h-60' data-aos="fade-right">
              <p>Let's talk about everything!</p>
              <p>I am here to engage with you and offer my assistance. <br /><br /> Addressing any queries or concerns you may have.</p>
              <ul className='flex gap-5 mx-auto'>
                  <li><i className='bx bxl-github text-2xl'></i></li>
                  <li><i className='bx bxl-linkedin-square text-2xl' ></i></li>
                  <li><i className='bx bxl-facebook-square text-2xl' ></i></li>
              </ul>
            </div>  
            <div>
              <form name="contact" method="POST" data-netlify="true" className='text-black flex flex-col gap-3' data-aos="fade-left">
                <input type="text" name="name" className='input input-accent' placeholder="Your name" required />
                <input type="email" name="email" className='input input-accent' placeholder="Email" required />
                <textarea name="message" className='textarea textarea-accent' cols={30} rows={5} placeholder="Write your message" required></textarea>
                <input type="submit" className='btn btn-accent' value="Send" />
              </form>
              </div>
           </div>
      </section>
    )
  }
  
  export default Contact