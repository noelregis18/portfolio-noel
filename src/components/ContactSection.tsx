
import React, { useState } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { LinkedIn, GitHub, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thanks for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1500);
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/noel-regis-aa07081b1/",
      icon: <LinkedIn size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/noelregis18",
      icon: <GitHub size={20} />,
    },
    {
      name: "Twitter",
      url: "https://x.com/NoelRegis8",
      icon: <Twitter size={20} />,
    },
    {
      name: "Topmate",
      url: "http://topmate.io/noel_regis",
      icon: <Globe size={20} />,
    },
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="section-title inline-block mx-auto font-pixel">
            <span className="text-primary">&lt;</span> Contact <span className="text-primary">/&gt;</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            I'm always eager to learn and collaborate on new projects.
            Feel free to reach out to me 🙂
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
            <h3 className="font-pixel text-lg mb-6">Get in touch</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1">
                  Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1">
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Your message here..."
                  rows={5}
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
              <h3 className="font-pixel text-lg mb-4">Contact Details</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium">Email</p>
                    <a
                      href="mailto:noel.regis04@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      noel.regis04@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium">Phone</p>
                    <a
                      href="tel:+917319546900"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 7319546900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium">Location</p>
                    <p className="text-muted-foreground">
                      Asansol, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
              <h3 className="font-pixel text-lg mb-4">Connect with me</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-colors"
                    aria-label={`Visit ${social.name}`}
                  >
                    <span className="text-primary">{social.icon}</span>
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent"></div>
    </section>
  );
};

export default ContactSection;
