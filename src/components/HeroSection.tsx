
import React, { useState, useEffect } from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 1000);
    
    return () => clearInterval(timer);
  }, []);

  const formatDate = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    };
    return date.toLocaleDateString(undefined, options);
  };

  const formatTime = (date: Date) => {
    const options: Intl.DateTimeFormatOptions = { 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit',
      hour12: true
    };
    return date.toLocaleTimeString(undefined, options);
  };

  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden pt-20">
      <div
        className="absolute inset-0 bg-gradient-terminal opacity-70 z-0"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="absolute top-24 right-8 bg-background/30 backdrop-blur-md px-4 py-2 rounded-lg border border-primary/20 text-sm font-montserrat">
          <div className="text-primary">{formatDate(currentDateTime)}</div>
          <div className="text-right font-montserrat text-xs">{formatTime(currentDateTime)}</div>
        </div>
        
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary">
            <span className="font-montserrat text-xs sm:text-sm">Full Stack Developer</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-montserrat leading-tight animate-pixel-fade-in">
            <span className="block">Designing and Developing</span>
            <span className="text-primary">Digital Solutions</span>
            <span className="block">That Inspire</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl font-montserrat mb-8 opacity-90 animate-pixel-slide-up">
            Explore. Create. Inspire.
          </p>
          
          <div className="terminal-container bg-black/50 p-6 rounded-lg mb-10 border-l-4 border-primary max-w-2xl mx-auto">
            <p className="terminal-text font-montserrat text-pixel-text-dark text-sm sm:text-base leading-relaxed text-left">
              <span className="text-primary">{'>'}</span> Greetings, I am Noel Regis, a full-stack developer dedicated to creating sophisticated digital experiences. I would be pleased to collaborate on bringing your concepts to fruition.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              className="pixel-button bg-primary hover:bg-primary/90 text-white font-montserrat"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Contact Me
            </Button>
            
            <Button
              variant="outline"
              className="pixel-button bg-transparent border-primary text-primary hover:bg-primary/10 font-montserrat"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Portfolio
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pixel-bounce">
        <button
          onClick={scrollToAbout}
          aria-label="View more information"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
