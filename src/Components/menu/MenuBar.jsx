import React, { useState } from "react";
import { Home, Info, FileText, Mail, Globe } from "lucide-react";
import { Link } from "react-router-dom";

const MenuBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const menuItems = [
    { name: "Home", href: "/", icon: Home },
    { name: "About", href: "/about", icon: Info },
    { name: "Latest", href: "/latest", icon: FileText },
    { name: "Contact", href: "/contact", icon: Mail },
    { name: "Choose Global Chapter", href: "#global", icon: Globe },
  ];

  return (
    <div className="fixed bottom-5 right-5 z-50">
      <div
        className={`bg-gray-200 transition-all duration-300 ease-in-out ${
          isMenuOpen ? "w-80" : "w-64"
        }`}
      >
        <div className="flex items-center justify-between border border-black">
          <h2 className="text-xl font-semibold text-gray-800 px-4">Menu</h2>
          <button
            onClick={toggleMenu}
            className="border px-3 py-2 border-black flex items-center justify-center text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            <span
              className={`text-2xl font-light transform transition-transform duration-300 ${
                isMenuOpen ? "rotate-45" : "rotate-0"
              }`}
            >
              {isMenuOpen ? "×" : "+"}
            </span>
          </button>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="py-2">
            {menuItems.map((item, index) => {
              const IconComponent = item.icon;
              const isInternal = item.href.startsWith("/");

              const commonClass =
                "flex items-center px-4 py-3 text-gray-700 hover:underline transition-all duration-200 transform " +
                (isMenuOpen
                  ? "translate-x-0 opacity-100"
                  : "translate-x-4 opacity-0");

              const transitionStyle = {
                transitionDelay: isMenuOpen ? `${index * 50}ms` : "0ms",
              };

              return isInternal ? (
                <Link
                  key={index}
                  to={item.href}
                  className={commonClass}
                  style={transitionStyle}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  <IconComponent className="w-5 h-5 mr-3 text-gray-600" />
                  <span className="text-sm font-medium">{item.name}</span>
                </Link>
              ) : (
                <a
                  key={index}
                  href={item.href}
                  className={commonClass}
                  style={transitionStyle}
                  onClick={() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                    setIsMenuOpen(false);
                  }}
                >
                  <IconComponent className="w-5 h-5 mr-3 text-gray-600" />
                  <span className="text-sm font-medium">{item.name}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Declare Now Button */}
        <div className="p-2 border-t text-xl border-black">
          <button className="w-full text-start bg-textColor py-2 px-4 rounded-md font-semibold transition-colors duration-200 transform hover:scale-105">
            Declare Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default MenuBar;
