import React from "react";

function Gallery() {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="relative">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764410845/cheng-qi-huang-L58875oF03w-unsplash_wczydt.jpg"
          alt="Gallery"
          className="w-full h-[320px] object-cover"
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <h1 className="text-white text-4xl md:text-5xl font-bold">
            School Gallery
          </h1>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <p className="text-lg text-gray-700 text-center max-w-4xl mx-auto leading-relaxed">
          Our school gallery captures joyful moments, learning experiences,
          cultural programs, sports activities, and celebrations that reflect
          the vibrant life of our students.
        </p>

        {/* Classroom Activities */}
        <Section title="Classroom Activities">
          <GalleryGrid images={[
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697794/WhatsApp_Image_2025-12-14_at_13.02.23_6eafa411_bmfder.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697029/WhatsApp_Image_2025-12-11_at_10.50.57_4965ef82_cjrrj0.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765696908/WhatsApp_Image_2025-12-11_at_10.31.22_47606962_feaw6j.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697127/WhatsApp_Image_2025-12-11_at_10.51.18_92eb58d1_qaalia.jpg",
          ]}/>
        </Section>

        {/* Cultural & Events */}
        <Section title="Cultural Programs & Events">
          <GalleryGrid images={[
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698130/WhatsApp_Image_2025-12-14_at_13.04.26_0b0ad7a8_uzbj1t.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698071/WhatsApp_Image_2025-12-14_at_13.04.23_353ded83_vrzwab.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698160/WhatsApp_Image_2025-12-14_at_13.04.27_5bad33b4_jbc3kf.jpg",
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698177/WhatsApp_Image_2025-12-14_at_13.04.28_d277be49_nailsw.jpg",
          ]}/>
        </Section>

        {/* Sports & Outdoor */}
        <Section title="Sports & Outdoor Activities">
          <GalleryGrid images={[
            "https://res.cloudinary.com/djlxdttvr/image/upload/v1765696927/WhatsApp_Image_2025-12-11_at_10.31.22_e86f06b5_takt8g.jpg",
            "IMAGE_URL_10",
            "IMAGE_URL_11",
            "IMAGE_URL_12",
          ]}/>
        </Section>
      </div>
    </div>
  );
}

/* Section Wrapper */
function Section({ title, children }) {
  return (
    <div className="mt-16">
      <h2 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6 text-center">
        {title}
      </h2>
      {children}
    </div>
  );
}

/* Image Grid */
function GalleryGrid({ images }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((img, index) => (
        <div
          key={index}
          className="overflow-hidden rounded-xl shadow hover:shadow-lg transition"
        >
          <img
            src={img}
            alt="School Gallery"
            className="w-full h-48 object-cover hover:scale-110 transition duration-300"
          />
        </div>
      ))}
    </div>
  );
}

export default Gallery;
