import React from "react";

function About() {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1763977715/1_yxskqc.jpg"
          alt="school image"
        />
        <h1 className="text-4xl font-bold text-blue-800 mt-4 p-3 text-center">
          About Us
        </h1>
        <p className="text-xl bg-blue-100 p-6 m-6">
          We are committed to creating a learning environment where students
          feel inspired, confident, and supported. Through engaging classrooms,
          creative activities, and strong values, we help children grow
          academically and emotionally while preparing them for tomorrow.
        </p>
      </div>
    </div>
  );
}

export default About;
