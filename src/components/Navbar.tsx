
import React, { useState, useEffect } from "react";
import { useTheme } from "./ThemeProvider";
import { Moon, Sun, Home, User, Code, Briefcase, Mail } from "lucide-react";

const Navbar = () => {
  const { theme, toggleTheme } = useTheme();
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll event to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      const scrollPosition = window.scrollY + 100;

      sections.forEach((section) => {
        const sectionTop = (section as HTMLElement).offsetTop;
        const sectionHeight = (section as HTMLElement).offsetHeight;
        const sectionId = section.getAttribute("id") || "";

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });

      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { id: "home", label: "Home", icon: <Home size={20} /> },
    { id: "about", label: "About", icon: <User size={20} /> },
    { id: "skills", label: "Skills", icon: <Code size={20} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={20} /> },
    { id: "contact", label: "Contact", icon: <Mail size={20} /> },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: "smooth",
      });
    }
  };

  return (
    <nav
      className={`fixed bottom-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-6 transition-all duration-300 ${
        isScrolled ? "mb-4" : "mb-8"
      }`}
    >
      <div
        className={`flex items-center gap-1 sm:gap-2 px-2 py-2 sm:px-4 sm:py-3 bg-background/80 backdrop-blur-lg rounded-full border-2 border-border transition-all duration-300 shadow-lg ${
          isScrolled ? "scale-90" : "scale-100"
        }`}
      >
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={`relative flex flex-col items-center justify-center p-2 sm:p-3 rounded-full transition-all duration-300 ${
              activeSection === item.id
                ? "bg-primary text-primary-foreground scale-110"
                : "hover:bg-accent/20 text-foreground"
            }`}
            aria-label={item.label}
          >
            {item.icon}
            <span
              className={`text-[8px] sm:text-xs mt-1 font-pixel transition-opacity duration-300 ${
                activeSection === item.id ? "opacity-100" : "opacity-0"
              }`}
            >
              {item.label}
            </span>
          </button>
        ))}
        <button
          onClick={toggleTheme}
          className="flex items-center justify-center p-2 sm:p-3 rounded-full hover:bg-accent/20 transition-all duration-300 ml-1"
          aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
        >
          {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
