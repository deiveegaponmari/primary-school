import React from "react";

function Achievement() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764409567/muhammad-shakir-k-fBdU_TdSo-unsplash_1_qp5cix.jpg"
          alt="Achievements"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Our Achievements
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          At Sri Nataraja Primary School, every achievement is a celebration of
          hard work, talent, and dedication. Our students consistently excel in
          academics, sports, cultural activities, and leadership, making us
          proud every day.
        </p>

        {/* Achievement Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Academic */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Academic Excellence
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Outstanding performance in examinations, subject competitions,
              and continuous improvement through strong academic foundations.
            </p>
          </div>

          {/* Sports */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Sports & Physical Activities
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Achievements in athletics, games, and physical activities that
              promote teamwork, discipline, and healthy lifestyles.
            </p>
          </div>

          {/* Cultural */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Cultural & Creative Talents
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Recognition in drawing, music, dance, storytelling, and cultural
              programs that nurture creativity and confidence.
            </p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Celebrating Every Child’s Success
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            We believe that encouragement and recognition inspire students to
            reach greater heights. Our achievements reflect the combined efforts
            of students, teachers, and parents working together.
          </p>
        </div>

        {/* Optional: Achievement Images */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mt-12">
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765698160/WhatsApp_Image_2025-12-14_at_13.04.27_5bad33b4_jbc3kf.jpg"
            alt="Achievement 1"
            className="rounded-xl shadow object-cover h-56 w-full"
          />
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765698213/WhatsApp_Image_2025-12-14_at_13.04.29_7ba866dd_v8tvxm.jpg"
            alt="Achievement 2"
            className="rounded-xl shadow object-cover h-56 w-full"
          />
          <img
            src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765698145/WhatsApp_Image_2025-12-14_at_13.04.26_6f362e48_sco4mw.jpg"
            alt="Achievement 3"
            className="rounded-xl shadow object-cover h-56 w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Achievement;
