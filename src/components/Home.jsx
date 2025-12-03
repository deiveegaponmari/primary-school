import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const slides = [
    {
      type: "video",
      url: "https://res.cloudinary.com/djlxdttvr/video/upload/v1764743284/school_Intro_hago2h.mp4",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1763977715/1_yxskqc.jpg",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1763977801/2_efbj47.jpg",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1763977818/3_ftzkqa.jpg",
    },
  ];
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  //auto slide every 3 seconds
  useEffect(() => {
    if(current ===0)  return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);
  return (
    <div>
      <div className="w-full h-screen overflow-hidden relative">
        {/*   carousal wrapper */}
        <div
          className="flex transition-transform duration-700 h-full"
          style={{
            transform: `translateX(-${current * 100}%)`,
            width: `${slides.length * 100}%`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0">
              {slide.type === "video" ? (
                <video
                  src={slide.url}
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full h-full object-cover"
                />
              ) : (
                <img
                  src={slide.url}
                  alt="school slide"
                  className="w-full h-full object-cover"
                />
              )}
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-3 h-3 rounded-full ${
                current === index ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
        {/* Left button */}
        <button
          onClick={() =>
            setCurrent(current === 0 ? slides.length - 1 : current - 1)
          }
          className="absolute top-1/2 left-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full"
        >
          ‹
        </button>

        {/* Right button */}
        <button
          onClick={() =>
            setCurrent(current === slides.length - 1 ? 0 : current + 1)
          }
          className="absolute top-1/2 right-3 transform -translate-y-1/2 bg-black bg-opacity-40 text-white px-3 py-2 rounded-full"
        >
          ›
        </button>
      </div>
      <div className="bg-blue-500 text-white text-center py-16 shadow-lg mt-4">
        <h1 className="text-4xl font-extrabold tracking-wide">
          Welcome To Our School
        </h1>
        <p className="mt-4 font-medium text-lg">Admissions Open</p>
        <h2 className="mt-2 text-3xl font-semibold">2026-2027</h2>
        <button
          className="mt-6 bg-white text-blue-700 px-6 py-3 
        rounded-full shadow-lg font-semibold hover:bg-gray-200 transition"
          onClick={() => navigate("/admissionform")}
        >
          Apply Now
        </button>
      </div>
    </div>
  );
}

export default Home;
