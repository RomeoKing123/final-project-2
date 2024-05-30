// components/Contact.js
import React from 'react';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>
      <form>
        <label>Name:</label>
        <input type="text" />
        <label>Email:</label>
        <input type="email" />
        <label>Message:</label>
        <textarea></textarea>
        <button type="submit">Send</button>
      </form>
    </section>
  );
}

export default Contact;
