
import React from "react";
import { Card } from "@/components/ui/card";

const SkillsSection = () => {
  const skills = [
    "JavaScript", "React.js", "Angular", "Tailwind", "HTML", "CSS", "SCSS", "Bootstrap",
    "Node.js", "Express.js", "GraphQL", "REST API", "MongoDB", "MySQL", "Go",
    "AWS", "Docker", "Kubernetes", "Git", "GitHub", "Linux", "Vercel", "Netlify", "Postman", "VSCode",
    "JavaScript", "TypeScript", "Python", "Java", "C", "C++"
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-pixel">
            <span className="text-primary">&lt;</span> Technical Expertise <span className="text-primary">/&gt;</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Technologies and methodologies utilized in the development of professional solutions
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm rounded-md bg-primary/10 text-primary inline-block hover:bg-primary/30 transition-colors duration-200 hover:scale-105 transform"
                >
                  {skill}
                </span>
              ))}
            </div>
          </Card>
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="p-6 bg-primary/10 border-none">
            <h3 className="font-pixel text-lg mb-4">Development Philosophy</h3>
            <p className="text-muted-foreground">
              I am committed to creating clean, maintainable code that delivers exceptional user experiences.
              My approach combines technical expertise with a comprehensive understanding of user requirements,
              resulting in solutions that are both sophisticated and intuitive.
            </p>
          </Card>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-background to-transparent pointer-events-none"></div>
      
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-primary/30 rounded-md filter blur-sm animate-pixel-pulse"></div>
      <div className="absolute top-2/3 left-1/4 w-4 h-4 bg-secondary/30 rounded-md filter blur-sm animate-pixel-pulse" style={{ animationDelay: "0.5s" }}></div>
      <div className="absolute bottom-1/4 right-1/3 w-8 h-8 bg-accent/30 rounded-md filter blur-sm animate-pixel-pulse" style={{ animationDelay: "1s" }}></div>
    </section>
  );
};

export default SkillsSection;
