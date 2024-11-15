import React, { useState, useEffect, useRef } from "react";

function Navbar({ language, setLanguage, translations }) {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null); 


  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-gray-800 p-4">
      <div className="flex justify-between items-center">
      
        <a className="text-white text-3xl font-bold" href="https://www.ignitesol.com/">Ignite Solutions </a>

        <div className="flex items-center text-white text-2xl">
          <div className="mr-4">
            <a href="/" className="text-white">
              {translations[language]?.navbar?.home || "Home"} 
            </a>
          </div>
          <div className="relative inline-block text-left">
            <button
              className="bg-gray-700 text-white px-4 py-2 rounded-md"
              id="languageButton"
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
              {translations[language].navbar.language}
            </button>

            {isDropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white z-10"
              >
                <div className="py-1">
                 {/* english langugae */}
                  <button
                    onClick={() => setLanguage("en")}
                    className="text-gray-700 block px-4 py-2 text-sm rounded-full flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    English-EN
                  </button>

                  {/* hindi langugae -font english  */}
                  <button
                    onClick={() => setLanguage("hii")}
                    className="text-gray-700 block px-4 py-2 text-sm rounded-full flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    HINDI-HI
                  </button>
                  {/* hindi langugae */}
                  <button
                    onClick={() => setLanguage("hi")}
                    className="text-gray-700 block px-4 py-2 text-sm rounded-full flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    हिंदी-HI
                  </button>
                  {/* french langugae */}
                  <button
                    onClick={() => setLanguage("fr")}
                    className="text-gray-700 block px-4 py-2 text-sm rounded-full flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    Français-FR
                  </button>
{/* marathi langugae */}
                  <button
                    onClick={() => setLanguage("mr")}
                    className="text-gray-700 block px-4 py-2 text-sm rounded-full flex items-center"
                  >
                    <span className="w-3 h-3 rounded-full bg-blue-500 mr-2"></span>
                    मराठी-MR
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;