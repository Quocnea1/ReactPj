import React from 'react';

const Loader = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white z-[9999] transition-opacity duration-500 ease-in-out">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo Glow Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 animate-ping opacity-75"></div>
          <div className="w-full h-full rounded-full bg-gradient-to-tr from-purple-600 to-indigo-600 shadow-xl" />
        </div>
        <div className="text-xl font-semibold text-gray-700 animate-pulse">
          Đang tải trang...
        </div>
      </div>
    </div>
  );
};

export default Loader;
