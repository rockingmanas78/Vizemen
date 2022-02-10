import './contact.css';
import React, { useState, useRef } from "react";

const FORM_ENDPOINT = ""; // TODO - fill on the later step

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);
  const name = useRef(null);
  const email = useRef(null);
  const subject = useRef(null);
  const message = useRef(null);

  const handleSubmit = (e) => {
    setTimeout(() => {
        e.preventDefault();

        const data = {
            name: name.current.value,
            email: email.current.value,
            subject: subject.current.value,
            message: message.current.value,
        }



        setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <div className='contact'>
            <h2>Thank you!</h2>
            <div>We'll be in touch soon.</div>
        </div>
        
      </>
    );
  }

  return (
      <div className="container">
      <img className="ContactImg" src="https://cdn-cjgag.nitrocdn.com/zgAnfiYahaKcKmycARpsSAoefyUzDAng/assets/static/optimized/rev-d7c115d/wp-content/uploads/2021/04/WhatsApp-Image-2021-04-29-at-19.20.49.jpeg" alt="" />
        <div className='contact'>
        
        <div className="contactBox">
            <div className="contactBoxHeading">
                <h1>Contact</h1>
                <h2>Reach Out To Us</h2>
                <p>We won't share your email with anyone else.</p>
            </div>
            <ul className="contactBoxList">
                <li className="phone">Phone number: +91-9534136595</li>
                <li className="email">Email: info@vizemen.com</li>
            </ul>
            <h1 className="contactBoxFooter">WE ARE VIZEMEN</h1>
        </div>
            <form
                action={FORM_ENDPOINT}
                onSubmit={handleSubmit}
                method="POST"
                target="_blank"
                >
                <div className="contactForm">
                        <input 
                            type="text" 
                            ref={name}
                            placeholder="Your name" 
                            className="inputField"
                            name="name" 
                            required
                        />
                        <input 
                            type="email"
                            ref={email} 
                            placeholder="Email" 
                            className="inputField"
                            name="email" 
                            required 
                        />
                        <input
                            type="subject" 
                            ref={subject} 
                            placeholder="Subject"
                            className="inputField" 
                            name="subject" 
                            required 
                        />
                        <textarea 
                            placeholder="Your message" 
                            ref={message} 
                            name="message" 
                            className="inputField" 
                            required 
                        />
                        <button className="contactFormButton" type="submit"> SEND </button>
                </div>
                
            </form>
            
    </div>
    </div>
    
  );
};

export default Contact;

