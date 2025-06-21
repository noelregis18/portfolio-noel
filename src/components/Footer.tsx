
import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-border">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4">
          <div className="inline-block font-montserrat text-lg font-bold">
            <span className="text-primary">Noel</span> Regis
          </div>
        </div>
        
        <p className="text-muted-foreground text-sm">
          © {currentYear} Noel Regis. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
