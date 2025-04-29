import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = ({ className = "" }) => {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  useEffect(() => {
    const path = window.location.pathname;
    if (path === "/about") setActive("about");
    else if (path === "/skills") setActive("skill");
    else if (path === "/experience") setActive("experience");
    else setActive("home");
  }, []);

  const handleClick = (name) => {
    setActive(name);
    setMenuOpen(false); // Đóng menu khi chọn mục
  };

  return (
    <header className={`${className} bg-transparent dark:bg-gray-900 p-0 w-full`}>
      <div className="max-w-5xl mx-auto flex items-center justify-between px-4 py-3">
        {/* Logo */}
        <div className="flex items-center">
          <img 
            src="/images/logo04.png" 
            alt="logo" 
            className="h-16 w-auto object-contain" 
          />
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex bg-white/55 dark:bg-white/10 p-2.5 rounded-2xl backdrop-blur-sm">
          <ul className="flex space-x-6 text-gray-800 dark:text-gray-200">
            {["home", "about", "experience", "skill"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === "home" ? "/" : `/${item === "skill" ? "contact" : item}`}
                  onClick={() => handleClick(item)}
                  className={`cursor-pointer p-1.5 rounded-xl transition-all duration-200 ${
                    active === item ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Dark Mode + Menu button */}
        <div className="flex items-center space-x-4">
          <span className="hidden md:block text-gray-800 dark:text-white">NPQ</span>

          {/* Dark Mode Toggle */}
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

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 rounded-b-2xl shadow-lg mx-4 mt-2 py-4 px-6">
          <ul className="flex flex-col space-y-4 text-gray-800 dark:text-gray-200">
            {["home", "about", "experience", "skill"].map((item, idx) => (
              <li key={idx}>
                <Link
                  to={item === "home" ? "/" : `/${item === "skill" ? "contact" : item}`}
                  onClick={() => handleClick(item)}
                  className={`block text-lg ${
                    active === item ? "text-blue-600 font-semibold" : "hover:text-blue-500"
                  }`}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
