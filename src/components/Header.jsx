import { Moon, Sun } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Use Link for page navigation

const Header = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [active, setActive] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    // Update active link based on current route
    const path = window.location.pathname;
    if (path === "/about") setActive("about");
    else if (path === "/skills") setActive("skill");
    else if (path === "/experience") setActive("experience");
    else setActive("home");
  }, []);

  const handleClick = (name) => {
    setActive(name);
  };

  return (
    <header className={`${className} bg-transparent dark:bg-gray-900 p-0 w-full`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between">
        <div>
          <img 
            src="/images/logo04.png" 
            alt="logo" 
            className="h-20 w-auto object-contain" 
          />
        </div>
        <div className="bg-white/55 dark:bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm">
          <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
            <li>
              <Link
                to="/"
                onClick={() => handleClick("home")}
                className={`cursor-pointer p-1.5 rounded-xl transition-all duration-200 ${
                  active === "home" ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                }`}
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={() => handleClick("about")}
                className={`cursor-pointer ${
                  active === "about" ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                }`}
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/skills"
                onClick={() => handleClick("skill")}
                className={`cursor-pointer ${
                  active === "skill" ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                }`}
              >
                Skills
              </Link>
            </li>
            <li>
              <Link
                to="/experience"
                onClick={() => handleClick("experience")}
                className={`cursor-pointer ${
                  active === "experience" ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                }`}
              >
                Experience
              </Link>
            </li>
          </ul>
        </div>

        <div className="flex items-center space-x-4">
          <span className="text-gray-800 dark:text-white">NPQ</span>
          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
