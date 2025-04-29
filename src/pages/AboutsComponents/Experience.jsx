import React, { useEffect, useRef, useState } from "react";
import Education from "./Education";

const experiences = [
  {
    year: "2022 - Present",
    title: "Front-End Developer",
    company: "ABC Company",
    description: "Building responsive, user-friendly web applications using React.js and TailwindCSS."
  },
  {
    year: "2020 - 2022",
    title: "Web Developer Intern",
    company: "XYZ Solutions",
    description: "Supported projects with clean code, optimized UI/UX, and learning industry best practices."
  },
  {
    year: "2018 - 2020",
    title: "Freelance Web Designer",
    company: "Self-employed",
    description: "Designed minimalist websites and branding for local businesses."
  }
];

const Experience = ({ scrollPosition }) => {
  const pathRef = useRef(null);
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) observer.unobserve(sectionRef.current);
    };
  }, []);

  const getBackgroundColor = () => {
    const startColor = { r: 254, g: 243, b: 199 }; // Vàng
    const endColor = { r: 173, g: 216, b: 230 };   // Xanh nhạt

    const r = Math.round(startColor.r + (endColor.r - startColor.r) * scrollPosition);
    const g = Math.round(startColor.g + (endColor.g - startColor.g) * scrollPosition);
    const b = Math.round(startColor.b + (endColor.b - startColor.b) * scrollPosition);

    return `rgb(${r}, ${g}, ${b})`;
  };

  return (
    <>
      <section
        ref={sectionRef}
        className="relative py-24 overflow-hidden transition-colors duration-500"
        style={{ backgroundColor: getBackgroundColor() }}
      >
        <div className="relative max-w-6xl mx-auto px-6">
          <h2
            className="text-4xl font-bold text-center mb-20 text-gray-800"
          >
            My Journey
          </h2>

          {/* SVG Path */}
          <svg
          className="absolute left-1/2 transform -translate-x-1/2"
          style={{ top: "120px", height: "800px" }}
          viewBox="0 0 200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            ref={pathRef}
            d="M100 0 Q 50 100 100 200 T 100 400 T 100 600 T 100 800"
            stroke="#7C3AED"
            strokeWidth="4"
            fill="transparent"
            style={{
              strokeDasharray: 1600,
              strokeDashoffset: isVisible ? 0 : 1600,
              opacity: isVisible ? 1 : 0,
              transition: "stroke-dashoffset 2s ease-out, opacity 1.5s ease-out",
            }}
          />
        </svg>

          {/* Timeline items */}
          <div className="flex flex-col space-y-24 mt-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? "justify-start" : "justify-end"} group`}
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? "translateY(0)" : "translateY(20px)",
                  transition: `opacity 0.8s ease ${0.5 + index * 0.3}s, transform 0.8s ease ${0.5 + index * 0.3}s`
                }}
              >
                <div className="bg-white shadow-2xl p-6 rounded-lg w-full max-w-md transform group-hover:scale-105 transition duration-300">
                  <span className="text-violet-500 font-semibold">{exp.year}</span>
                  <h3 className="text-xl font-bold mt-2">{exp.title}</h3>
                  <h4 className="text-gray-500 text-md mb-2">{exp.company}</h4>
                  <p className="text-gray-600 text-sm">{exp.description}</p>
                </div>

                {/* Dot */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-5 h-5 bg-violet-500 rounded-full border-4 border-white shadow-md"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Education />
    </>
  );
};

export default Experience;
