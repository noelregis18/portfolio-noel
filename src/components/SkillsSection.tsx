
import React from "react";
import { Card } from "@/components/ui/card";

interface SkillCategoryProps {
  title: string;
  skills: string[];
  icon: string;
}

const SkillCategory = ({ title, skills, icon }: SkillCategoryProps) => {
  return (
    <Card className="p-6 pixel-border h-full bg-card/90 backdrop-blur-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
      <div className="text-center mb-4">
        <div className="inline-block text-2xl mb-2">{icon}</div>
        <h3 className="font-pixel text-lg">{title}</h3>
      </div>
      <div className="flex flex-wrap justify-center gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-md bg-primary/20 text-primary inline-block hover:bg-primary/40 transition-colors duration-200"
          >
            {skill}
          </span>
        ))}
      </div>
    </Card>
  );
};

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: ["JavaScript", "React.js", "Angular", "Tailwind", "HTML", "CSS", "SCSS", "Bootstrap"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: ["Node.js", "Express.js", "GraphQL", "REST API", "MongoDB", "MySQL", "Go"],
    },
    {
      title: "DevOps & Tools",
      icon: "🛠️",
      skills: ["AWS", "Docker", "Kubernetes", "Git", "GitHub", "Linux", "Vercel", "Netlify", "Postman", "VSCode"],
    },
    {
      title: "Programming Languages",
      icon: "💻",
      skills: ["JavaScript", "TypeScript", "Python", "Java", "C", "C++"],
    },
  ];

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-pixel">
            <span className="text-primary">&lt;</span> Skills <span className="text-primary">/&gt;</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Software and Tools I work with to build digital solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              skills={category.skills}
              icon={category.icon}
            />
          ))}
        </div>

        <div className="mt-16 max-w-3xl mx-auto text-center">
          <Card className="p-6 bg-primary/10 border-none">
            <h3 className="font-pixel text-lg mb-4">My Development Philosophy</h3>
            <p className="text-muted-foreground">
              I believe in creating clean, maintainable code that delivers exceptional user experiences.
              My approach combines technical expertise with a deep understanding of user needs,
              resulting in solutions that are both powerful and intuitive.
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
