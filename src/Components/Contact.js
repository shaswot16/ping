import React, { useRef } from 'react'
import '../Components/css/Contact.css'
import emailjs from '@emailjs/browser';

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_oihi2he', 'template_6ia3na3', form.current, 'FAAaueuMoLfjbK-19')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };
    return (
        <div className="contact-container">
            <h2 className="contact-heading">Contact Us</h2>
            <form onSubmit={sendEmail}>
                <label>Name</label>
                <input type="text" name="from_name" required />
                <label>Email</label>
                <input type="text" name="from_number" required />
                <label>Message</label>
                <textarea name="message" required />
                <input type="submit" value="Send" className="submit-button" />
            </form>
        </div>
    );

}

export default Contact