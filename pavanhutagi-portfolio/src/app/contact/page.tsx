"use client";

import "./style.css";
import { useState, FormEvent } from "react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`Name: ${name}\nEmail: ${email}\nMessage: ${message}`);
    // You can add your own logic here to submit the form data
  };

  return (
    <>
      <div className="contact-container">
        <div className="title-container">
          I am super pumped to connect with you! <br />
          Are you ready to get started?
        </div>

        <form className="form-container" onSubmit={handleSubmit}>
          <div className="text-input-container">
            <div className="name">
              <label htmlFor="name">Name:</label>
              <br />
              <input
                type="text"
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
              />
            </div>

            <div className="email">
              <label htmlFor="email">Email:</label>
              <br />
              <input
                type="email"
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
              />
            </div>
          </div>

          <div className="text-area-container">
            <label htmlFor="message">Message:</label>
            <br />
            <textarea
              id="message"
              value={message}
              onChange={(event) => setMessage(event.target.value)}
            />
          </div>

          <button type="submit" className="submit-button-container">
            Send
          </button>
        </form>
      </div>
    </>
  );
}
