import React from "react";
import "./contact.css";
import {AiOutlineMail} from "react-icons/ai"
import {PiMessengerLogoBold} from "react-icons/pi"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"

const Contact = ()=>{
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_s0kpfvz', 'template_bi3jyqs', form.current, 'A19DumiQtXZnSF3P4')
       
        e.target.reset();
      };
    return(
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className="contact_option-icon"/>
                        <h4>Email</h4>
                        <h5>harishkathula201@gmail.com</h5>
                        <a href="mailto:harishkathula201@gmail.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <PiMessengerLogoBold className="contact_option-icon"/>
                        <h4>Messenger</h4>
                        <h5>kathulaharish</h5>
                        <a href="https://facebook.com" target="_blank">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <BsWhatsapp className="contact_option-icon"/>
                        <h4>WhatsApp</h4>
                        <h5>+123445555</h5>
                        <a href="htttps://api.whatsapp.com/send?phone+917893797889" target="_blank">Send a message</a>
                    </article>
                </div>
                {/* End of Contact Options */}
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder="Your Full Name" required/>
                    <input type="email" name="email" placeholder="Your Email" required />
                    <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact;