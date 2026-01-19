import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Company_Logo from "../assets/company_logo.png";

const navigation = [
  { name: "Home", href: "#home" },
  { name: "Product", href: "#product" },
  { name: "Features", href: "#feature" },
  { name: "About", href: "#about" },
  { name: "Testimonial", href: "#testimonial" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(window.location.hash || "#home");

  useEffect(() => {
    const handleHashChange = () => {
      setActiveLink(window.location.hash || "#home");
      setMobileMenuOpen(false);
    };

    window.addEventListener("hashchange", handleHashChange);
    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  const handleNavigation = (href) => {
    setActiveLink(href);
    setMobileMenuOpen(false);
  };

  return (
    <nav className="w-full bg-[#7497f0] shadow-md">
      <div className="container mx-auto px-5 lg:px-24 py-4 flex items-center justify-between">
        <img src={Company_Logo} alt="Company Logo" className="h-12 w-auto" />

        <div className="hidden lg:flex space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`text-lg font-bold cursor-pointer ${
                activeLink === item.href ? "text-red-600" : "text-black"
              }`}
              onClick={() => handleNavigation(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>

        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#A3BBF9] px-10 py-2">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className={`block w-full text-left py-2 text-md font-bold ${
                activeLink === item.href ? "text-red-600" : "text-black"
              }`}
              onClick={() => handleNavigation(item.href)}
            >
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
