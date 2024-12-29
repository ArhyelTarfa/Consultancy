// src/pages/Contact.js
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const formRef = useRef();
  const [successMessage, setSuccessMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "YOUR_SERVICE_ID", // Replace with your EmailJS service ID
        "YOUR_TEMPLATE_ID", // Replace with your EmailJS template ID
        formRef.current,
        "YOUR_PUBLIC_KEY" // Replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          setSuccessMessage("Thank you! Your message has been sent.");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
          setSuccessMessage("Oops! Something went wrong. Please try again.");
        }
      );
  };

  return (
    <div
      id="contact"
      className="bg-gray-100 min-h-screen flex items-center justify-center py-10 px-6"
    >
      <div className="bg-white rounded-lg shadow-lg max-w-4xl w-full flex flex-col md:flex-row">
        {/* Left Section: Heading */}
        <div className="flex-1 p-6 md:p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Contact Us</h1>
          <p className="text-gray-600 mb-6">
            Have any questions? We'd love to hear from you! Please fill out the
            form, and we’ll get back to you as soon as possible.
          </p>
        </div>

        {/* Right Section: Form */}
        <div className="flex-1 p-6 md:p-8">
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-4"
          >
            <div>
              <label
                htmlFor="name"
                className="block text-gray-800 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="user_name"
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                placeholder="Your name"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-800 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="user_email"
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                placeholder="Your email"
                required
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-gray-800 font-medium mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                className="w-full p-3 border border-gray-300 rounded-lg text-base"
                placeholder="Your message"
                rows="4"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg text-base hover:bg-blue-700"
            >
              Send Message
            </button>
            {successMessage && (
              <p className="text-center text-green-600 mt-4">{successMessage}</p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
