import React from "react";

function Contact() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764411519/markus-winkler-48CkLuEGgWU-unsplash_uriciv.jpg"
          alt="Contact Sri Nataraja Primary School"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Contact Us
          </h1>
        </div>
      </div>

      {/* Intro Text */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          We are happy to assist you with admissions, academics, and general
          enquiries. Please feel free to reach out to Sri Nataraja Primary School
          during school hours. Your questions and feedback are always welcome.
        </p>

        {/* Contact Info + Form */}
        <div className="grid md:grid-cols-2 gap-10 mt-14">
          
          {/* Contact Information */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              School Contact Information
            </h2>

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">📍 Address:</span><br />
              Sri Nataraja Primary School,<br />
              Your Area, Your City, Tamil Nadu
            </p>

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">📞 Phone:</span><br />
              +91 9XXXXXXXXX
            </p>

            <p className="text-gray-700 mb-4">
              <span className="font-semibold">✉ Email:</span><br />
              srinatarajaschool@gmail.com
            </p>

            <p className="text-gray-700">
              <span className="font-semibold">🕘 School Hours:</span><br />
              Monday – Friday | 9:00 AM – 4:00 PM
            </p>
          </div>

          {/* Contact Form */}
          <div className="bg-white p-8 rounded-xl shadow">
            <h2 className="text-2xl font-bold text-blue-800 mb-6">
              Send Us a Message
            </h2>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />

              <textarea
                rows="4"
                placeholder="Your Message"
                className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-blue-700 text-white py-2 rounded-lg font-semibold hover:bg-blue-800 transition"
              >
                Submit Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
