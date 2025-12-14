import React from "react";

function Student_life() {
  const images = [
     "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698130/WhatsApp_Image_2025-12-14_at_13.04.26_0b0ad7a8_uzbj1t.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698213/WhatsApp_Image_2025-12-14_at_13.04.29_7ba866dd_v8tvxm.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698111/WhatsApp_Image_2025-12-14_at_13.04.25_49aae1e8_mdflsz.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697980/WhatsApp_Image_2025-12-14_at_13.04.21_7a1e7c5f_sragew.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698227/WhatsApp_Image_2025-12-14_at_13.04.31_7f386abd_uleme2.jpg",
    "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698145/WhatsApp_Image_2025-12-14_at_13.04.26_6f362e48_sco4mw.jpg",
   
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764409470/herlambang-tinasih-gusti-Axwia92agr0-unsplash_odobh0.jpg"
          alt="Student Life"
          className="w-full h-[350px] object-cover"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Student Life
          </h1>
        </div>
      </div>

      {/* Intro Content */}
      <div className="max-w-6xl mx-auto px-6 py-14">
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          Student life at Sri Nataraja Primary School is joyful, engaging, and
          enriching. Along with academics, students participate in sports,
          cultural programs, creative activities, and group learning that help
          build confidence, leadership, and lifelong friendships.
        </p>

        {/* Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-14">
          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Activities & Clubs
            </h3>
            <p className="text-gray-600">
              Art, music, storytelling, drawing, and cultural programs that
              encourage creativity and self-expression.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Sports & Fitness
            </h3>
            <p className="text-gray-600">
              Games and physical activities that promote fitness, teamwork,
              discipline, and healthy habits.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow hover:shadow-xl transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Care & Well-Being
            </h3>
            <p className="text-gray-600">
              A safe, caring, and supportive environment where every child feels
              valued, confident, and happy.
            </p>
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mt-20">
          <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
            Life at Our School
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div
                key={index}
                className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
              >
                <img
                  src={img}
                  alt="School activity"
                  className="w-full h-60 object-cover hover:scale-110 transition duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Student_life;
