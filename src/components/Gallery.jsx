import React from "react";

function Gallery() {
  return (
    <div>
      <div>
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1764410845/cheng-qi-huang-L58875oF03w-unsplash_wczydt.jpg"
          alt="gallery image"
        />
        <h1 className="text-4xl font-bold text-blue-800 mt-4 p-3 text-center">
          Gallery
        </h1>
        <p className="text-xl bg-blue-100 p-6 m-6">
          Our school gallery showcases the joyful moments, learning experiences,
          and achievements of our students. From classroom activities to
          cultural programs, sports events, and celebrations, each picture
          reflects happiness, creativity, and growth.
        </p>
      </div>
    </div>
  );
}

export default Gallery;
