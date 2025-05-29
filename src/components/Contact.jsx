import React, { useState } from 'react';

const Contact = () => {
  const [formMessage, setFormMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = {
      name: event.target.name.value,
      email: event.target.email.value,
      message: event.target.message.value,
    };

    try {
      const res = await fetch('https://formspree.io/f/xnndekqo', {
        method: 'POST',
        headers: { 'Accept': 'application/json', 'Content-Type': 'application/json' },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setFormMessage("Thank you! Your message has been sent.");
        event.target.reset();
      } else {
        setFormMessage("Something went wrong. Please try again.");
      }
    } catch {
      setFormMessage("Failed to submit. Check your internet.");
    }
  };

  return (
    <section className="contact" id="contact">
      <h2 className="heading">Contact <span>Me</span></h2>
      <form onSubmit={handleSubmit}>
        <div className="input-box">
          <input type="text" name="name" placeholder="Your Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
        </div>
        <textarea name="message" rows="6" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn">Send Message</button>
        <p style={{ marginTop: "15px" }}>{formMessage}</p>
      </form>
    </section>
  );
};

export default Contact;
