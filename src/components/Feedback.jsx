import React from "react";
import Announcement from "./Announcement";

function Feedback() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764411397/cytonn-photography-GJao3ZTX9gU-unsplash_mak29k.jpg"
          alt="Feedback"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Feedback
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          Feedback helps us understand what we are doing well and where we can
          improve. We value the opinions of parents, students, and well-wishers,
          as they help us create a better learning environment. Your feedback
          supports continuous improvement in teaching quality, student care, and
          school facilities.
        </p>

        {/* Feedback Importance Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Improve Learning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Your feedback helps us enhance teaching methods, classroom
              activities, and academic support for students.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Better Facilities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Suggestions from parents help us improve infrastructure, safety,
              and school facilities.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Student Well-Being
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Feedback ensures every child feels safe, supported, and happy in
              our learning environment.
            </p>
          </div>
        </div>

        {/* Trust Message */}
        <div className="mt-16 bg-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            We Value Your Voice
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            All feedback is treated with respect and confidentiality. Your
            thoughts help us build a stronger, more caring school community for
            every child.
          </p>
        </div>

        {/* Announcement Section */}
        <div className="mt-16">
          <Announcement />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
