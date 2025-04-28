import React from 'react';

const Skill = () => (
  <section
    id="skill"
    className="min-h-screen flex flex-col items-center justify-center bg-gray-100 relative"
  >
    <h2 className="text-3xl font-semibold mb-8">s</h2>
    
    {/* Container for the rotating circle */}
    <div className="relative w-64 h-64">
      <div className="absolute w-full h-full flex justify-center items-center">
        {/* Skill Icons */}
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '0s' }}>
          <i className="fab fa-react text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '0.2s' }}>
          <i className="fab fa-js-square text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '0.4s' }}>
          <i className="fab fa-html5 text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '0.6s' }}>
          <i className="fab fa-css3-alt text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '0.8s' }}>
          <i className="fab fa-node text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '1s' }}>
          <i className="fab fa-python text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '1.2s' }}>
          <i className="fab fa-git-alt text-4xl"></i>
        </div>
        <div className="skill-icon animate-spinOrbit" style={{ animationDelay: '1.4s' }}>
          <i className="fab fa-vuejs text-4xl"></i>
        </div>
      </div>
    </div>
  </section>
);

export default Skill;
