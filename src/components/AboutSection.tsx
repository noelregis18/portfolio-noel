
import React from "react";
import { Card } from "@/components/ui/card";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-montserrat font-bold">
            <span className="text-primary">&lt;</span> Professional Summary <span className="text-primary">/&gt;</span>
          </h2>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-1 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 h-full pixel-border bg-card/90 backdrop-blur-sm">
            <div className="space-y-4">
              <p className="text-base leading-relaxed font-montserrat">
                I have developed numerous innovative projects utilizing technologies such as Node.js, 
                JavaScript, and AWS, demonstrating my proficiency in both frontend and backend development.
              </p>
              
              <p className="text-base leading-relaxed font-montserrat">
                My technical expertise is complemented by well-developed interpersonal skills in leadership and public speaking, 
                making me a comprehensive professional candidate. Additionally, I have achieved notable success in financial trading, 
                with significant returns on investments across various instruments.
              </p>
              
              <p className="text-base leading-relaxed font-montserrat">
                My specialized expertise encompasses critical business analytics, comprehensive market research, 
                detailed data analysis, and advanced problem-solving methodologies.
              </p>
            </div>
          </Card>
        </div>
      </div>
      
      <div className="absolute top-1/2 left-0 w-48 h-48 bg-primary/20 rounded-full filter blur-3xl -z-10 transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary/20 rounded-full filter blur-3xl -z-10 transform translate-x-1/2"></div>
    </section>
  );
};

export default AboutSection;
