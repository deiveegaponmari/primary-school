import React from "react";

function FreeService() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764410413/pandhuya-niking-TYW0G4_m0TQ-unsplash_amvr1x.jpg"
          alt="Free Services"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            Free Services
          </h1>
        </div>
      </div>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center leading-relaxed max-w-4xl mx-auto">
          Sri Nataraja Primary School is committed to supporting every child’s
          education by providing essential free services. These initiatives
          ensure equal opportunities for all students and help families feel
          confident and supported.
        </p>

        {/* Services Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-12">
          {/* Card 1 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Free Learning Materials
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Textbooks, notebooks, and essential learning materials are
              provided free of cost to ensure every child can focus on education
              without financial stress.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Health & Wellness Care
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Regular health check-ups, hygiene awareness, and basic medical
              support help students stay healthy, active, and ready to learn.
            </p>
          </div>

          {/* Card 3 – UPDATED FREE FOOD CONTENT */}
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              Free Nutritious Food
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Nutritious meals are provided free of cost to support children’s
              physical growth, concentration, and overall well-being, ensuring
              no child learns on an empty stomach.
            </p>
          </div>
        </div>

        {/* Highlight Section */}
        <div className="mt-16 bg-blue-100 rounded-2xl p-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-4">
            Equal Care. Equal Education. Equal Opportunity.
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Our free services reflect our strong commitment to inclusive
            education. By caring for students’ academic, physical, and emotional
            needs, we help every child grow with confidence and dignity.
          </p>
        </div>
        {/* related images */}
        {/* Related Images Section */}
        <div className="mt-16">
          <h2 className="text-2xl md:text-3xl font-bold text-blue-800 text-center mb-8">
            Free Services in Action
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <img
              src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697767/WhatsApp_Image_2025-12-14_at_13.02.21_12be73f8_jk86e9.jpg"
              alt="Free Food Service"
              className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition duration-300"
            />

            <img
              src="https://res.cloudinary.com/djlxdttvr/image/upload/v1765697908/WhatsApp_Image_2025-12-14_at_13.03.03_5d8edd20_j9ldzd.jpg"
              alt="Student Support Services"
              className="w-full h-64 object-cover rounded-xl shadow-md hover:shadow-xl transition duration-300"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeService;
