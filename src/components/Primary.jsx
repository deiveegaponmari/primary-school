import React from "react";

function Primary() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697890/WhatsApp_Image_2025-12-14_at_13.02.29_32a96efa_xltfrn.jpg"
          alt="Primary School"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Primary School
          </h1>
        </div>
      </div>

      {/* Intro */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed">
          Our Primary School programme builds a strong academic foundation while
          nurturing confidence, discipline, and creativity. We focus on holistic
          development to help children grow into responsible and capable learners.
        </p>

        {/* Who We Are Section */}
        <div className="grid md:grid-cols-2 gap-10 mt-14 items-center">
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697743/WhatsApp_Image_2025-12-14_at_13.02.20_04a93b4b_reudk7.jpg"
            alt="Classroom Activity"
            className="rounded-2xl shadow-md w-full object-cover"
          />

          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-600 leading-relaxed">
              At Sri Nataraja Primary School, we believe that every child has
              unique potential. Our experienced teachers create an engaging and
              supportive environment where students develop academic skills,
              confidence, and positive values through joyful learning.
            </p>
          </div>
        </div>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-600">
              Strong focus on reading, writing, mathematics, science, and
              communication through interactive learning.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Skill Development
            </h3>
            <p className="text-gray-600">
              Encouraging creativity, problem-solving, teamwork, and critical
              thinking in daily classroom activities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Values & Discipline
            </h3>
            <p className="text-gray-600">
              Instilling respect, discipline, responsibility, and strong moral
              values for lifelong success.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Primary;
