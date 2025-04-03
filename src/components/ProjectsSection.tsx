
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { GitBranch, Globe, ExternalLink } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  website: string;
  github: string;
  image: string;
  tags: string[];
}

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects: Project[] = [
    {
      id: 1,
      title: "AI joke generator",
      description: "Fetch and display jokes to users, providing entertainment on demand.",
      website: "https://ai-joke-portal.vercel.app/",
      github: "https://github.com/noelregis18/ai-joke-portal",
      image: "https://images.squarespace-cdn.com/content/v1/62ec2bc76a27db7b37a2b32f/ba93663d-001e-4543-a7f4-cd06f7ef2f51/best-ai-joke-generator-2500.jpg",
      tags: ["React", "TypeScript", "SQL"],
    },
    {
      id: 2,
      title: "Wealth Compass Hub",
      description: "Financial Calculators",
      website: "https://wealth-compass-hub.vercel.app/",
      github: "https://github.com/noelregis18/wealth-compass-hub",
      image: "https://img.freepik.com/free-photo/futuristic-robot-interacting-with-money_23-2151612609.jpg?t=st=1743587727~exp=1743591327~hmac=35fbc5e9783bd05e55b5905151da145bce86a288c97b5939849573719563ae4f&w=1380",
      tags: ["TypeScript", "Express", "CSS"],
    },
    {
      id: 3,
      title: "Aarogya Bharat",
      description: "Securely store and manage patients' medical histories in the cloud",
      website: "https://aarogya-bharat-gilt.vercel.app/",
      github: "https://github.com/noelregis18/aarogya-bharat",
      image: "https://img.freepik.com/free-photo/doctors-wearing-vr-simulation-with-hologram-medical-technology_53876-96336.jpg?t=st=1743587657~exp=1743591257~hmac=ba515d609857e7514d8d578d7bd98355a6ba348c4defa2d8a8109a40c3a76068&w=1380",
      tags: ["React", "Node.js", "Tailwind"],
    },
    {
      id: 4,
      title: "ChefAssist",
      description: "AI Customer Service Chatbot",
      website: "https://chefassist-ai-chat-3g2e.vercel.app/",
      github: "https://github.com/noelregis18/chefassist-ai-chat",
      image: "https://img.freepik.com/free-photo/chef-using-ar-technology-his-profession_23-2151137470.jpg?t=st=1743587594~exp=1743591194~hmac=ccb6d11ee07ccad59a76548ebc9b095289f01917f6b243568d8ff37763fd414c&w=1380",
      tags: ["React", "AI", "Node.js"],
    },
    {
      id: 5,
      title: "Digital Ink",
      description: "Quick signatures within seconds",
      website: "https://digital-ink.vercel.app/",
      github: "https://github.com/noelregis18/Digital-Ink",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1",
      tags: ["TypeScript", "Canvas API", "React"],
    },
    {
      id: 6,
      title: "Dairy Digital Innovations",
      description: "IoT Implementation in AgriTech Sector",
      website: "https://dairy-digital-innovations.vercel.app/",
      github: "https://github.com/noelregis18/dairy-digital-innovations",
      image: "https://dollons.com/blog/wp-content/uploads/2021/09/dollons-How-AI-can-help-Indian-Dairy-Industry-2.jpg",
      tags: ["JavaScript", "CSS", "HTML"],
    },
  ];

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-montserrat font-bold">
            <span className="text-primary">&lt;</span> Projects <span className="text-primary">/&gt;</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-montserrat">
            Featured projects I've built and contributed to
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="overflow-hidden h-full pixel-border bg-card/90 backdrop-blur-sm hover:shadow-xl transition-all duration-300"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500"
                  style={{
                    transform: hoveredProject === project.id ? "scale(1.05)" : "scale(1)",
                  }}
                />
                <div
                  className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent transition-opacity duration-300"
                  style={{
                    opacity: hoveredProject === project.id ? 1 : 0.7,
                  }}
                ></div>
                <div className="absolute top-2 right-2">
                  <div className="px-2 py-1 bg-card/80 backdrop-blur-sm rounded text-xs font-montserrat inline-block border border-border">
                    Project #{project.id}
                  </div>
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-lg font-bold font-montserrat mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4 font-montserrat">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 text-xs rounded-md bg-primary/20 text-primary font-montserrat"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-montserrat"
                  >
                    <GitBranch size={16} className="mr-1" />
                    Code
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm text-muted-foreground hover:text-primary transition-colors font-montserrat"
                  >
                    <Globe size={16} className="mr-1" />
                    Live
                  </a>
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm"
                  >
                    <Button
                      size="sm"
                      className="h-8 px-3 bg-primary hover:bg-primary/90 text-white font-montserrat"
                    >
                      <ExternalLink size={14} className="mr-1" /> Visit
                    </Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Pixel art decorative elements */}
      <div
        className="absolute right-0 top-1/4 h-64 w-64 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(26, 188, 156, 0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>
      <div
        className="absolute left-0 bottom-1/4 h-64 w-64 opacity-20 pointer-events-none"
        style={{
          backgroundImage: `radial-gradient(circle, rgba(155, 135, 245, 0.3) 1px, transparent 1px)`,
          backgroundSize: "20px 20px",
        }}
      ></div>
    </section>
  );
};

export default ProjectsSection;
