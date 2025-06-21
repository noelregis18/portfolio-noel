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
    { id: "home", label: "Home", icon: <Home size={18} /> },
    { id: "about", label: "About", icon: <User size={18} /> },
    { id: "skills", label: "Skills", icon: <Code size={18} /> },
    { id: "projects", label: "Projects", icon: <Briefcase size={18} /> },
    { id: "contact", label: "Contact", icon: <Mail size={18} /> },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-lg shadow-md py-2" : "py-4"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="text-xl font-montserrat font-semibold tracking-wide">
            <span className="text-primary">Noel</span> <span className="font-normal">Regis</span>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-2 ${
                  activeSection === item.id
                    ? "bg-primary/20 text-primary"
                    : "hover:bg-accent/20 text-foreground"
                }`}
              >
                {item.icon}
                <span className="font-medium">{item.label}</span>
              </button>
            ))}
            
            <button
              onClick={toggleTheme}
              className="ml-2 p-2 rounded-md hover:bg-accent/20 transition-colors"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
          
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-md hover:bg-accent/20 transition-colors mr-2"
              aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            >
              {theme === "dark" ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile navigation at the bottom */}
      <div className="md:hidden fixed bottom-4 left-0 right-0 flex justify-center z-50">
        <div className="flex items-center gap-1 px-2 py-2 bg-background/80 backdrop-blur-lg rounded-full border border-border shadow-lg">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className={`relative flex flex-col items-center justify-center p-2 rounded-full transition-all duration-300 ${
                activeSection === item.id
                  ? "bg-primary text-primary-foreground scale-110"
                  : "hover:bg-accent/20 text-foreground"
              }`}
              aria-label={item.label}
            >
              {item.icon}
              <span
                className={`text-xs mt-1 font-medium transition-opacity duration-300 ${
                  activeSection === item.id ? "opacity-100" : "opacity-0"
                }`}
              >
                {item.label}
              </span>
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
