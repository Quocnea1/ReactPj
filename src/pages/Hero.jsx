import FloatingBadge from "../components/FloatingBadge";
import Header from "../components/Header";

const Hero = ({ className = '' }) => {
  return (
    <>
    <Header className='fixed top-0 left-0 z-999' /> 
    <div className={`${className} min-h-[100vh] h-full flex items-center relative bg-amber-100`}>
      <section
        id="hero"
        className="w-full max-w-7xl mx-auto px-6 md:px-8 flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-12"
      >
        {/* Text content - Left side */}
        <div className="flex-1 flex flex-col items-center md:items-start text-center md:text-left space-y-4 md:space-y-6 animate-wiggleTop">
          <div className="inline-block bg-violet-100 px-4 py-1 rounded-full mb-2">
            <span className="text-violet-600 text-sm font-medium">Hello, I'm</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Nguyen Phu <span className="text-violet-600">Quoc</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-medium bg-clip-text text-transparent bg-gradient-to-r from-violet-500 to-pink-500">
            Front-End Developer
          </h2>
          <p className="text-gray-600 max-w-md text-lg leading-relaxed">
            Crafting beautiful, responsive digital experiences with modern web technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto pt-2"> 
            <button className="relative overflow-hidden group rounded-lg bg-violet-600 px-6 py-3 text-white font-medium shadow-lg hover:shadow-violet-400/30 transition-all duration-300">
              <span className="relative z-10">View Portfolio</span>
              <span className="absolute inset-0 bg-gradient-to-r from-violet-700 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </button>
            <button className="px-6 py-3 border-2 border-gray-300 rounded-lg font-medium hover:bg-gray-50 hover:border-violet-300 transition-colors duration-300 flex items-center gap-2">
              <span>Get In Touch</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        </div>

        {/* Image - Right side */}
        <div className="flex-1 flex justify-center relative animate-wiggle">
          <div className="w-64 h-64 md:w-80 md:h-80 lg:w-120 lg:h-120 relative">
            <div className="absolute inset-0 bg-violet-100 rounded-full blur-xl opacity-30 animate-pulse"></div>
            <div 
              className="relative w-full h-full bg-[url('/images/logo02.png')] bg-contain bg-no-repeat bg-center z-10 animate-float"
            ></div>
          </div>
        </div>
      </section>
      <FloatingBadge/>
    </div>
    </>
  );
};

export default Hero;
