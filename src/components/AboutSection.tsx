
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-pixel">
            <span className="text-primary">&lt;</span> About Me <span className="text-primary">/&gt;</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card className="p-6 h-full pixel-border bg-card/90 backdrop-blur-sm">
              <div className="space-y-4">
                <p className="text-base leading-relaxed">
                  I have developed several innovative projects utilizing technologies such as Node.js, 
                  JavaScript, and AWS, showcasing my proficiency in both frontend and backend development.
                </p>
                
                <p className="text-base leading-relaxed">
                  My technical skills are complemented by soft skills in leadership and public speaking, 
                  making me a well-rounded candidate. Additionally, I have achieved notable success in trading, 
                  with significant returns on investments in various financial instruments.
                </p>
                
                <p className="text-base leading-relaxed">
                  My expertise lies in critical business analytics, market research, number crunching, and problem-solving.
                </p>
              </div>
            </Card>
          </div>
          
          <div className="lg:col-span-1">
            <Card className="p-6 h-full pixel-border bg-card/90 backdrop-blur-sm">
              <div className="space-y-6">
                <div>
                  <h3 className="text-lg font-bold font-pixel mb-2">
                    <span className="text-primary">#</span> Location
                  </h3>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Asansol, West Bengal, India
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold font-pixel mb-2">
                    <span className="text-primary">#</span> Education
                  </h3>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Computer Science Engineering
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-bold font-pixel mb-2">
                    <span className="text-primary">#</span> Experience
                  </h3>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Full Stack Development
                  </p>
                  <p className="flex items-center gap-2">
                    <span className="inline-block w-2 h-2 bg-primary rounded-full"></span>
                    Business Analytics
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl -z-10 transform translate-x-1/2"></div>
    </section>
  );
};

export default AboutSection;
