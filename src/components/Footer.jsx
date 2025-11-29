import React from "react";

function Footer() {
  return (
    <>
      <footer>
        <h2 className="mt-3 text-3xl font-extrabold text-blue-800 mb-3 
        text-center">Visit Our Location</h2>
        <div style={{ width: "100%", height: "300px" }}>
          <iframe
            title="school-location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3942.8927859298883!2d77.42831257479968!3d8.796142592590897!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b043b2c123ed7b1%3A0xf7a6d614f4aac331!2sSri%20Nadaraja%20Primary%20School!5e0!3m2!1sen!2sin!4v1763976264736!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </footer>
    </>
  );
}

export default Footer;
