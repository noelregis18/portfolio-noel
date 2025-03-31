
import React, { useEffect } from "react";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Navbar from "@/components/Navbar";
import ChatAssistant from "@/components/ChatAssistant";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    document.title = "Noel Regis | Full Stack Developer";
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background pattern */}
      <div
        className="fixed inset-0 z-[-1] opacity-30"
        style={{
          background: "linear-gradient(to bottom right, #121212, #1e1e1e, #2d2d2d)",
          backgroundSize: "20px 20px",
          backgroundImage:
            "linear-gradient(to right, rgba(155, 135, 245, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(155, 135, 245, 0.1) 1px, transparent 1px)",
        }}
      ></div>

      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      <ChatAssistant />
    </div>
  );
};

export default Index;
