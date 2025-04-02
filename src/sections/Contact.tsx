import { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<'success' | 'error' | ''>('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const isValidEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async () => {
    if (!isValidEmail(formData.email)) {
      setStatus('error');
      return;
    }

    try {
      await fetch('https://script.google.com/macros/s/AKfycbyduY-P2uv-b4kX_sWWkyMjB7qENQkBM3VTzi9hVWJSb3zjxCCKcKh9oomE6W1G-hnFnQ/exec', {
        method: 'POST',
        mode: 'no-cors', // For development
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      // With 'no-cors', response.json() won't work, so assume success if no error
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('error');
    }
  };

  const closeAlert = () => {
    setStatus('');
  };

  return (
    <section className='min-h-screen' id="contact">
      <h1 className='text-3xl sm:text-4xl md:text-5xl text-center pt-30 mb-10 sm:mb-10 lg:mb-20 xl:mb-30' data-aos="zoom-in-up">CONTACT ME</h1>
      
      <div className='flex flex-col lg:flex-row text-center xl:text-left justify-center items-center gap-8 sm:gap-20 '>
        <div className='flex flex-col justify-around h-60' data-aos="fade-right">
          <p>Let's talk about everything!</p>
          <p>I am here to engage with you and offer my assistance. <br /><br /> Addressing any queries or concerns you may have.</p>
          <ul className='flex gap-5 mx-auto'>
            <li><i className='bx bxl-github text-2xl'></i></li>
            <li><i className='bx bxl-linkedin-square text-2xl'></i></li>
            <li><i className='bx bxl-facebook-square text-2xl'></i></li>
          </ul>
        </div>  
        <div className='text-black flex flex-col items-center gap-3 w-full max-w-md' data-aos="fade-left">
          <input 
            type="text" 
            name="name" 
            className='input input-accent w-3/4' 
            placeholder="Your name" 
            value={formData.name}
            onChange={handleChange}
            required 
          />
          <input 
            type="email" 
            name="email" 
            className='input input-accent w-3/4' 
            placeholder="Email" 
            value={formData.email}
            onChange={handleChange}
            required 
          />
          <textarea 
            name="message" 
            className='textarea textarea-accent w-3/4' 
            cols={30} 
            rows={5} 
            placeholder="Write your message" 
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button 
            className='btn btn-accent w-3/4' 
            onClick={handleSubmit}
          >
            Send
          </button>
          {status === 'success' && (
            <div className="alert alert-success mt-3 w-3/4 flex justify-between items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="ml-2">Message sent successfully!</span>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost" onClick={closeAlert}>
                ✕
              </button>
            </div>
          )}
          {status === 'error' && (
            <div className="alert alert-error mt-3 w-3/4 flex justify-between items-center">
              <div className="flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span className="ml-2">{formData.email && !isValidEmail(formData.email) ? 'Please enter a valid email.' : 'Error sending message. Please try again.'}</span>
              </div>
              <button className="btn btn-sm btn-circle btn-ghost" onClick={closeAlert}>
                ✕
              </button>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;