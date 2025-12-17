import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import ParentDetail from "./ParentDetail";

function Home() {
  const slides = [
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697890/WhatsApp_Image_2025-12-14_at_13.02.29_32a96efa_xltfrn.jpg",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765698145/WhatsApp_Image_2025-12-14_at_13.04.26_6f362e48_sco4mw.jpg",
    },
    {
      type: "image",
      url: "https://res.cloudinary.com/djlxdttvr/image/upload/v1765697933/WhatsApp_Image_2025-12-14_at_13.03.04_a8b0d8b8_c6tfaz.jpg",
    },
  ];
  const [current, setCurrent] = useState(0);
  const [videoReadyToPlaySound, setVideoReadyToPlaySound] = useState(false);
  const [showSoundButton, setShowSoundButton] = useState(false);
  const videoRef = useRef(null);

  const navigate = useNavigate();
  //auto slide every 3 seconds
  useEffect(() => {
    if (slides[current].type === "video") return;
    const timer = setInterval(() => {
      setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, [current]);
  return (
    <div  className="relative w-full overflow-hidden">
      <div  className="h-[60vh] sm:h-[70vh] md:h-[85vh] max-h-[900px]">
        {/*   carousal wrapper */}
        <div
          className="flex h-full transition-transform duration-700 ease-in-out"
          style={{
            transform: `translateX(-${current * 100}%)`,
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-full h-full flex-shrink-0 relative">
              {slide.type === "video" ? (
                <>
                  <video
                    ref={videoRef}
                    src={slide.url}
                    autoPlay
                    muted={!videoReadyToPlaySound}
                    playsInline
                    onLoadedData={() => setShowSoundButton(true)}
                    onEnded={() => {
                      setShowSoundButton(false);
                      setCurrent((prev) => prev + 1);
                    }}
                    className="w-full h-full object-cover object-center"
                  />
                  {showSoundButton && current === 0 && (
                    <button
                      onClick={() => {
                        setVideoReadyToPlaySound(true);
                        videoRef.current.muted = false;
                        videoRef.current.play();
                        setShowSoundButton(false);
                      }}
                      className="absolute bottom-24 left-1/2 -translate-x-1/2 bg-white
            text-black px-5 py-3 rounded-full font-semibold shadow-lg z-[999]"
                    >
                      🔊 Enable Sound
                    </button>
                  )}
                </>
              ) : (
                <img
                  src={slide.url}
                  alt="school slide"
                  className="w-full h-full object-cover object-center"
                />
              )}
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2 z-10">
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
      {/*  about school */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
        <img
          src="https://res.cloudinary.com/djlxdttvr/image/upload/v1763977715/1_yxskqc.jpg"
          className="rounded-2xl shadow-lg"
          alt="School campus"
        />

        <div>
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            About Our School
          </h2>
          <p className="text-gray-700 leading-relaxed">
            Sri Nataraja Primary School provides a safe, caring, and disciplined
            environment where children build strong academic foundations and
            moral values. Our experienced teachers guide students to grow with
            confidence, curiosity, and creativity.
          </p>
          <button
            onClick={() => navigate("/about")}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* <div className="bg-blue-500 text-white text-center py-16 shadow-lg mt-4">
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
      </div> */}
      {/*  why choose our school */}
      <div className="bg-gray-100 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-12">
          Why Choose Our School
        </h2>

        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 px-6">
          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Qualified Teachers
            </h3>
            <p className="text-gray-600">
              Dedicated and experienced educators focused on every child’s
              growth.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Safe Environment
            </h3>
            <p className="text-gray-600">
              A secure, friendly campus where children feel happy and confident.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow hover:shadow-lg">
            <h3 className="text-xl font-semibold text-blue-700 mb-2">
              Holistic Learning
            </h3>
            <p className="text-gray-600">
              Academics, values, sports, arts, and life skills together.
            </p>
          </div>
        </div>
      </div>

      {/* Academic programs preview */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center text-blue-800 mb-10">
          Our Academic Programs
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Pre-Primary
            </h3>
            <p className="text-gray-600">
              Learning through play, stories, creativity, and joyful
              exploration.
            </p>
            <button
              onClick={() => navigate("/preprimary")}
              className="mt-4 text-blue-600 font-semibold"
            >
              View Program →
            </button>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-2xl font-semibold text-blue-700 mb-3">
              Primary
            </h3>
            <p className="text-gray-600">
              Strong academic foundation with discipline, values, and
              confidence.
            </p>
            <button
              onClick={() => navigate("/primary")}
              className="mt-4 text-blue-600 font-semibold"
            >
              View Program →
            </button>
          </div>
        </div>
      </div>
      {/* admission */}
      <div className="bg-blue-700 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Admissions Open for 2026–2027
        </h2>
        <p className="mb-6">
          Give your child the best start to a successful future.
        </p>
        <button
          onClick={() => navigate("/admissionform")}
          className="bg-white text-blue-700 px-8 py-4 rounded-full font-semibold hover:bg-gray-200"
        >
          Apply Now
        </button>
      </div>

      {/* role admin only show the below components */}
      <div>
        <ParentDetail />
      </div>
    </div>
  );
}

export default Home;
