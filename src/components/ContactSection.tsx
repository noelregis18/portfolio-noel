
import React, { useState, useRef } from "react";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Linkedin, Github, Twitter, Mail, Phone, MapPin, Globe } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // In a real implementation, you would use an email service like EmailJS
      // Here's a simulated email sending with a delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      
      // Display success toast
      toast({
        title: "Message Sent Successfully",
        description: "Thank you for your inquiry. I will respond at the earliest opportunity.",
      });
      
      // Reset form
      setFormData({ name: "", email: "", message: "" });
      
      // In a real implementation with EmailJS, you would do:
      // await emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formRef.current, 'YOUR_USER_ID');
    } catch (error) {
      toast({
        title: "Message Failed to Send",
        description: "Please try again or contact directly via email.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const openGoogleMaps = () => {
    window.open("https://maps.google.com/?q=Asansol,West+Bengal,India", "_blank");
  };

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/noel-regis-aa07081b1/",
      icon: <Linkedin size={20} />,
    },
    {
      name: "GitHub",
      url: "https://github.com/noelregis18",
      icon: <Github size={20} />,
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
          <h2 className="section-title inline-block mx-auto font-montserrat font-bold">
            <span className="text-primary">&lt;</span> Correspondence <span className="text-primary">/&gt;</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto font-montserrat">
            I am always interested in learning about and collaborating on innovative projects.
            Please do not hesitate to reach out.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
            <h3 className="font-montserrat text-lg mb-6 font-bold">Communication Inquiry</h3>
            
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-1 font-montserrat">
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your full name"
                  className="bg-background/50 font-montserrat"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-1 font-montserrat">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your.email@example.com"
                  className="bg-background/50 font-montserrat"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-1 font-montserrat">
                  Message Content
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Please provide details about your inquiry..."
                  rows={5}
                  className="bg-background/50 font-montserrat"
                />
              </div>
              
              <Button
                type="submit"
                className="w-full bg-primary hover:bg-primary/90 text-white font-montserrat"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Submit Inquiry"}
              </Button>
            </form>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
              <h3 className="font-montserrat text-lg mb-4 font-bold">Contact Information</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium font-montserrat">Email Address</p>
                    <a
                      href="mailto:noel.regis04@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors font-montserrat"
                    >
                      noel.regis04@gmail.com
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <Phone className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium font-montserrat">Telephone</p>
                    <a
                      href="tel:+917319546900"
                      className="text-muted-foreground hover:text-primary transition-colors font-montserrat"
                    >
                      +91 7319546900
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start gap-3 cursor-pointer" onClick={openGoogleMaps}>
                  <MapPin className="text-primary shrink-0 mt-1" size={20} />
                  <div>
                    <p className="text-sm font-medium font-montserrat">Geographic Location</p>
                    <p className="text-muted-foreground hover:text-primary transition-colors group flex items-center font-montserrat">
                      Asansol, West Bengal, India
                    </p>
                  </div>
                </div>
              </div>
            </Card>

            <Card className="p-6 pixel-border bg-card/90 backdrop-blur-sm">
              <h3 className="font-montserrat text-lg mb-4 font-bold">Professional Network</h3>
              
              <div className="flex flex-wrap gap-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 rounded-lg border border-border hover:bg-primary/10 hover:border-primary transition-colors font-montserrat"
                    aria-label={`Visit ${social.name} profile`}
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
    </section>
  );
};

export default ContactSection;
