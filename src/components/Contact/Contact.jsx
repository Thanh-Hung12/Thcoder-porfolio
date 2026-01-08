import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_88lzn56",
        "template_0qy05a8",
        form.current,
        "u4zgdJJxVffmZ4B2J"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message. Error: " + error.text);
        }
      );
  };

  return (
    <section id="contact" className="contact">
      <h2 className="section-title">
        Let's Work <span>Together</span>
      </h2>
      <form className="contact__form" ref={form} onSubmit={sendEmail}>
        <div className="contact__row">
          <div className="contact__field">
            <label htmlFor="user_name">Your Name</label>
            <input
              type="text"
              id="user_name"
              name="user_name"
              placeholder="John Doe"
              required
            />
          </div>

          <div className="contact__field">
            <label htmlFor="user_email">Your Email</label>
            <input
              type="email"
              id="user_email"
              name="user_email"
              placeholder="john@example.com"
              required
            />
          </div>
        </div>

        <div className="contact__field">
          <label htmlFor="subject">Subject</label>
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Project Inquiry"
            required
          />
        </div>

        <div className="contact__field">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            placeholder="Tell me about your project..."
            required
          ></textarea>
        </div>

        <button type="submit" className="contact__submit">
          Submit
        </button>
      </form>
    </section>
  );
};

export default Contact;
