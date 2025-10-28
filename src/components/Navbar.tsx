"use client";

import { useState } from "react";
import clsx from "clsx";
import GlassSurface from "../../components/GlassSurface"; // adjust path if needed

interface NavbarProps {
  scrollToSection: (id: string) => void;
}

const Navbar = ({ scrollToSection }: NavbarProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("Home");

  const items = [
    { label: "Home", href: "#hero" },
    { label: "About", href: "#about" },
    { label: "Skills", href: "#skills" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const handleNavClick = (label: string, href: string) => {
    setActive(label);
    setIsOpen(false);
    const id = href.replace("#", "");
    scrollToSection(id);
  };

  return (
    <div className="fixed top-5 left-0 right-0 z-50 pointer-events-none font-poppins">
      {/* Left Corner Logo (Desktop Only) */}
      <div
        className="absolute left-5 top-0 pointer-events-auto hidden md:block"
        style={{ transform: "translateY(-2px)" }}
        onClick={() => scrollToSection("hero")}
      >
        <div className="text-lg font-poppins cursor-pointer text-white hover:opacity-80 transition-all tracking-wide font-thin">
          PORTFOLIO
        </div>
      </div>

      {/* Centered Glass Navbar */}
      <div className="mx-auto w-[90%] max-w-5xl pointer-events-auto">
        <GlassSurface
          width="100%"
          height={70}
          borderRadius={9999}
          displace={10}
          distortionScale={-120}
          redOffset={5}
          greenOffset={10}
          blueOffset={15}
          brightness={100}
          opacity={0.7}
          mixBlendMode="screen"
          className="px-6 py-3 flex items-center justify-between transition-all duration-300"
        >
          {/* Spacer for balance (Desktop) */}
          <div className="hidden md:block w-20" />

          {/* Desktop Nav */}
          <ul className="hidden md:flex space-x-8 text-base mx-auto font-medium tracking-wide text-white">
            {items.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={clsx(
                  "cursor-pointer relative transition-all duration-300 hover:text-gray-600",
                  active === item.label && "text-red-300 font-semibold"
                )}
              >
                {item.label}
                <span
                  className={clsx(
                    "absolute left-0 -bottom-1 h-[1.5px] bg-black transition-all duration-300",
                    active === item.label ? "w-full" : "w-0 group-hover:w-full"
                  )}
                />
              </li>
            ))}
          </ul>

          {/* Mobile Trigger */}
          <div className="flex items-center justify-center w-full md:hidden">
            <button
              className="flex items-center justify-center text-base font-semibold text-white tracking-wide"
              onClick={() => setIsOpen(!isOpen)}
            >
              PORTFOLIO
              <span
                className={`ml-1 transform transition-transform duration-300 ${
                  isOpen ? "rotate-180" : "rotate-0"
                }`}
              >
                ▼
              </span>
            </button>
          </div>
        </GlassSurface>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={clsx(
          "absolute top-[75px] left-1/2 -translate-x-1/2 w-[90%] backdrop-blur-lg bg-white/90 border border-gray-200 rounded-2xl text-center transition-all duration-300 md:hidden overflow-hidden",
          isOpen ? "max-h-[300px] opacity-100 scale-100" : "max-h-0 opacity-0 scale-95"
        )}
        style={{
          boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)",
        }}
      >
        <ul className="flex flex-col py-4 space-y-4 text-base font-medium tracking-wide text-black">
          {items.map((item) => (
            <li
              key={item.label}
              onClick={() => handleNavClick(item.label, item.href)}
              className={clsx(
                "cursor-pointer hover:text-gray-600 transition-all duration-300",
                active === item.label && "text-gray-900 font-semibold"
              )}
            >
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
