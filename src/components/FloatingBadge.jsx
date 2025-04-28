const FloatingBadge = () => {
  return (
    <div className="fixed bottom-5 left-5 w-32 h-32 flex items-center justify-center">

      <div className="absolute w-12 h-12 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center shadow-lg z-10">
        <img src="/images/logo04.png" alt="icon" className="w-6 h-6 object-contain" />
      </div>

      
      <svg
        className="w-32 h-32 rotate-slow"
        viewBox="0 0 100 100"
      >
        <defs>
          <path
            id="circlePath"
            d="M50,50 m-35,0 a35,35 0 1,1 70,0 a35,35 0 1,1 -70,0"
          />
        </defs>
        <text fill="#333" fontSize="8" fontWeight="bold" letterSpacing="2px">
          <textPath href="#circlePath">
            WEB DEVELOPER • WEB DEVELOPER • WEB DEVELOPER
          </textPath>
        </text>
      </svg>
    </div>
  );
};

export default FloatingBadge;
