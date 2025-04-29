import React from "react";

const educationData = [
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Logo_HCMUT_official.png",
    degree: "HCM UTE",
    school: "University of Technology",
    description: "Focus on software engineering, algorithms, and front-end development.",
  },
  {
    image: "https://upload.wikimedia.org/wikipedia/commons/4/49/Coursera-Logo.png",
    degree: "Certificate: Full-Stack Web Development",
    school: "Coursera",
    description: "Learned modern web development: React, Node.js, MongoDB.",
  },
];

const Education = () => {
  return (
    <section className="relative py-24 overflow-hidden transition-colors duration-500">
      <div className="relative max-w-6xl mx-auto px-6">
        <h2
          className="text-4xl font-bold text-center mb-20 text-gray-800"
          data-aos="fade-down"
        >
          Education & Certificates
        </h2>

        <div className="flex flex-col gap-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-center bg-white rounded-2xl shadow-lg p-6 gap-8"
              data-aos="fade-up"
              data-aos-delay={index * 200}
            >
              {/* Bên trái: Ảnh logo */}
              <div className="flex-shrink-0">
                <img
                  src={edu.image}
                  alt={edu.school}
                  className="w-40 h-40 object-contain"
                />
              </div>

              {/* Bên phải: Nội dung bằng cấp */}
              <div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">{edu.degree}</h3>
                <h4 className="text-xl text-orange-500 mb-4">{edu.school}</h4>
                <p className="text-gray-600">{edu.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
