import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // npm install lucide-react

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const menuItems = [
    { name: "Home", href: "#" },
    { name: "Courses", href: "#courses" },
    { name: "Placements", href: "#placements" },
    { name: "Instructors", href: "#Instructors" },
    { name: "Contact", href: "#footer" },
  ];

  return (
    <nav
      className="sticky top-0 z-50 backdrop-blur-xl border-b border-border/20"
      style={{
        background: "linear-gradient(90deg, rgba(31,31,105,0.4), transparent)",
      }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex-shrink-0">
            <img src="/logo.png" alt="Ashpranix" className="h-12" />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="hover:text-blue-600 transition-colors px-3 py-2 text-lg font-medium text-blue-700"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Login/Register */}
          <div className="hidden lg:flex items-center gap-2 text-blue-700 font-medium">
            <a href="#" className="hover:underline">
              Login
            </a>
            <span>/</span>
            <a href="#" className="hover:underline">
              Register
            </a>
          </div>

          {/* Apply Now Button */}
          <div className="hidden lg:flex">
            <button className="px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all">
              Apply Now
            </button>
          </div>

          {/* Mobile Toggle Button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-blue-700 p-2 focus:outline-none"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden mt-2 bg-white shadow-md rounded-lg">
            <div className="px-4 py-3 space-y-2">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block text-blue-700 hover:text-blue-900 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}

              {/* Login/Register in Mobile */}
              <div className="flex items-center gap-2 pt-2 border-t border-gray-200">
                <a href="#" className="hover:underline text-blue-700">
                  Login
                </a>
                <span>/</span>
                <a href="#" className="hover:underline text-blue-700">
                  Register
                </a>
              </div>

              {/* Apply Now Button in Mobile */}
              <div className="pt-3">
                <button className="w-full px-5 py-2 bg-blue-700 hover:bg-blue-800 text-white font-semibold rounded-lg shadow-md transition-all">
                  Apply Now
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
