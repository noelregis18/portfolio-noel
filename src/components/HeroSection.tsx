
import React from "react";
import { ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-terminal opacity-70 z-0"
        style={{
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255, 255, 255, 0.05) 1px, transparent 1px)",
        }}
      ></div>

      <div className="container mx-auto px-4 z-10 py-24">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-primary/20 text-primary animate-pulse">
            <span className="font-pixel text-xs sm:text-sm">Full Stack Developer</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-pixel leading-tight animate-pixel-fade-in">
            <span className="block">Designing and Developing</span>
            <span className="text-primary">Digital Solutions</span>
            <span className="block">That Inspire</span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl font-montserrat mb-8 opacity-90 animate-pixel-slide-up">
            Explore. Create. Inspire.
          </p>
          
          <div className="terminal-container bg-black/50 p-6 rounded-lg mb-10 border-l-4 border-primary max-w-2xl mx-auto">
            <p className="terminal-text font-mono text-pixel-text-dark text-sm sm:text-base leading-relaxed text-left">
              <span className="text-primary">{'>'}</span> Hi, I'm Noel Regis, a full-stack developer passionate about creating impactful digital experiences. Let's bring your ideas to life.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center justify-center">
            <Button
              className="pixel-button bg-primary hover:bg-primary/90 text-white"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </Button>
            
            <Button
              variant="outline"
              className="pixel-button bg-transparent border-primary text-primary hover:bg-primary/10"
              onClick={() => {
                const projectsSection = document.getElementById("projects");
                if (projectsSection) {
                  projectsSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View Projects
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-pixel-bounce">
        <button
          onClick={scrollToAbout}
          aria-label="Scroll to About section"
          className="text-primary hover:text-primary/80 transition-colors"
        >
          <ArrowDown size={24} />
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
