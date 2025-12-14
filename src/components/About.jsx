import React from "react";

function About() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1763977715/1_yxskqc.jpg"
          alt="Sri Nataraja Primary School"
          className="w-full h-[360px] object-cover"
        />
        <div className="absolute inset-0 bg-blue-900/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold text-center">
           About Us
          </h1>
        </div>
      </div>

      {/* Who We Are Section */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Who We Are
            </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Sri Nataraja Primary School is a nurturing educational institution
              dedicated to building a strong academic and moral foundation for
              young children. We provide a safe, caring, and disciplined
              environment where students are encouraged to learn, explore, and
              grow with confidence.
            </p>
          </div>

          {/* Image */}
          <div>
            <img
              src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697869/WhatsApp_Image_2025-12-14_at_13.02.28_46001d3f_agk9lc.jpg"
              alt="School Campus"
              className="rounded-2xl shadow-lg w-full h-[480px] object-cover"
            />
          </div>
        </div>

        {/* Mission Vision Values */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-7 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-600">
              To nurture young minds through quality education, creativity, and
              strong character building.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Our Vision
            </h3>
            <p className="text-gray-600">
              To develop confident, responsible, and lifelong learners who
              contribute positively to society.
            </p>
          </div>

          <div className="bg-white p-7 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Our Values
            </h3>
            <p className="text-gray-600">
              Discipline, Respect, Knowledge, Care, Teamwork, and Excellence.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
