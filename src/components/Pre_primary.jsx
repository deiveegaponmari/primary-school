import React from "react";

function PrePrimary() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697127/WhatsApp_Image_2025-12-11_at_10.51.18_92eb58d1_qaalia.jpg"
          alt="Pre Primary Classroom"
          className="w-full h-[650px] object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Pre-Primary Education
          </h1>
        </div>
      </div>

      {/* About Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-blue-800 mb-4">
              Learning Through Play
            </h2>
            <p className="text-gray-700 text-lg leading-relaxed">
              Our Pre-Primary programme provides a joyful and meaningful learning
              experience for young children. Through stories, play, music,
              hands-on activities, and guided exploration, children develop early
              literacy, numeracy, fine motor skills, and positive social habits.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mt-4">
              We focus on creating a warm, caring, and safe environment where
              every child feels confident, happy, and excited to learn.
            </p>
          </div>

          {/* Image */}
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697005/WhatsApp_Image_2025-12-11_at_10.50.54_57d6e67f_ckaiwv.jpg"
            alt="Kids Learning"
            className="rounded-2xl shadow-lg"
          />
        </div>

        {/* Key Highlights */}
        <div className="grid md:grid-cols-4 gap-6 mt-14">
          {[
            "Play-Based Learning",
            "Early Literacy & Numeracy",
            "Creative Activities",
            "Safe & Caring Environment",
          ].map((item, index) => (
            <div
              key={index}
              className="bg-white p-5 rounded-xl shadow text-center hover:shadow-lg transition"
            >
              <p className="text-blue-700 font-semibold">{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default PrePrimary;
