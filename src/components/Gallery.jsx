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
            "IMAGE_URL_1",
            "IMAGE_URL_2",
            "IMAGE_URL_3",
            "IMAGE_URL_4",
          ]}/>
        </Section>

        {/* Cultural & Events */}
        <Section title="Cultural Programs & Events">
          <GalleryGrid images={[
            "IMAGE_URL_5",
            "IMAGE_URL_6",
            "IMAGE_URL_7",
            "IMAGE_URL_8",
          ]}/>
        </Section>

        {/* Sports & Outdoor */}
        <Section title="Sports & Outdoor Activities">
          <GalleryGrid images={[
            "IMAGE_URL_9",
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
