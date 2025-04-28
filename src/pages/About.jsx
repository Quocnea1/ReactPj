import React from 'react';
import 'aos/dist/aos.css'; // Đảm bảo rằng bạn đã cài đặt AOS
import Header from '../components/Header';

const About = () => {
  return (
    <section id="about" className="relative min-h-screen bg-white py-20">
      <Header className='fixed top-0 left-0 right-0 z-50' /> 
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Phần Kỹ Năng - Bên trái */}
          <div className="text-center md:text-left" data-aos="fade-right" data-aos-delay="200">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Skills</h2>
            
            {/* Các kỹ năng được chia thành các ô */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-2 gap-8">
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">React</h3>
                <p className="text-gray-700 mt-2">Experienced in building dynamic web apps</p>
              </div>
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg"
                  alt="CSS"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">CSS</h3>
                <p className="text-gray-700 mt-2">Able to create beautiful, responsive designs</p>
              </div>
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/6/69/JavaScript-logo.png"
                  alt="JavaScript"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">JavaScript</h3>
                <p className="text-gray-700 mt-2">Strong knowledge of ES6+ and asynchronous programming</p>
              </div>
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="600"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/4/48/Markdown-mark.svg"
                  alt="Markdown"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">Markdown</h3>
                <p className="text-gray-700 mt-2">Experienced in writing documentation and content</p>
              </div>
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="700"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/2/26/Node.js_logo.svg"
                  alt="Node.js"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">Node.js</h3>
                <p className="text-gray-700 mt-2">Backend development using Express and Node</p>
              </div>
              <div
                className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transform transition duration-300 hover:scale-105"
                data-aos="fade-up"
                data-aos-delay="800"
                data-aos-offset="150"  // Trigger animation after 1/3 is visible
              >
                <img
                  src="https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg"
                  alt="React Native"
                  className="w-16 h-16 mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-yellow-500">React Native</h3>
                <p className="text-gray-700 mt-2">Developing mobile applications with React Native</p>
              </div>
            </div>
          </div>

          {/* Phần Thông Tin - Bên phải */}
          <div className="text-center md:text-left" data-aos="fade-left" data-aos-delay="200">
            <h2 className="text-3xl font-semibold text-yellow-500 mb-6">About Me</h2>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              I'm a Front-End Developer with a passion for creating beautiful and interactive web applications.
              I enjoy working with modern technologies such as React, JavaScript, and CSS, and I constantly strive
              to improve my skills. I love problem-solving and building solutions that make users' lives easier.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              My journey in web development started a few years ago, and since then, I've developed a deep love for
              coding and creating interactive user experiences. I believe that code should be clean, efficient, and
              easy to maintain, and I apply these principles in all my projects.
            </p>

            <h3 className="text-2xl font-semibold text-yellow-500 mb-4">My Journey</h3>
            <p className="text-gray-700 text-lg leading-relaxed mb-6">
              Throughout my career, I’ve worked with many different technologies, and my goal is to continuously learn and improve.
              I’m currently focusing on expanding my knowledge in full-stack development, including working with Node.js
              and databases, to build end-to-end solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
