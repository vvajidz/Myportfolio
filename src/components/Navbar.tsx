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
    
    // First close the menu
    setIsOpen(false);
    
    // Wait a tiny bit for the menu animation to start, then scroll
    setTimeout(() => {
      const id = href.replace("#", "");
      scrollToSection(id);
    }, 100);
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
      {/* Glass navbar (hidden on mobile) */}
      <div className="mx-auto w-[70%] pointer-events-auto hidden md:block">
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
          className="px-4 sm:px-6 py-2 sm:py-3 flex items-center justify-between transition-all duration-300"
        >
          {/* Spacer for balance (Desktop) */}
          <div className="hidden md:block w-20" />

          {/* Navigation Links (desktop only) */}
          <ul className="flex space-x-8 text-base mx-auto font-medium tracking-wide text-white">
            {items.map((item) => (
              <li
                key={item.label}
                onClick={() => handleNavClick(item.label, item.href)}
                className={clsx(
                  "cursor-pointer relative transition-all duration-300 hover:text-gray-600 whitespace-nowrap",
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

          <div className="hidden md:block w-20" />
        </GlassSurface>
      </div>
    </div>
  );
};

export default Navbar;
