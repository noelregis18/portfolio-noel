
import React, { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, Send, X, Minimize, Maximize } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useToast } from "@/components/ui/use-toast";

type Message = {
  content: string;
  role: "user" | "assistant";
  timestamp: number;
};

const ChatAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: "Hi there! I'm Noel's AI assistant. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    if (isOpen && messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
    if (isOpen && !isMinimized && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, isMinimized, messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!message.trim()) return;

    // Add user message
    const userMessage: Message = {
      role: "user",
      content: message,
      timestamp: Date.now(),
    };
    setMessages((prev) => [...prev, userMessage]);
    setMessage("");
    setIsLoading(true);

    try {
      // In a real implementation, you would call the OpenAI API here
      // For now, we'll simulate a response after a short delay
      setTimeout(() => {
        const assistantMessage: Message = {
          role: "assistant",
          content: getSimulatedResponse(message),
          timestamp: Date.now(),
        };
        setMessages((prev) => [...prev, assistantMessage]);
        setIsLoading(false);
      }, 1000);
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Error",
        description: "Failed to send message. Please try again.",
        variant: "destructive",
      });
      setIsLoading(false);
    }
  };

  const getSimulatedResponse = (userMessage: string): string => {
    const lowerCaseMessage = userMessage.toLowerCase();
    
    if (lowerCaseMessage.includes("hello") || lowerCaseMessage.includes("hi")) {
      return "Hello! How can I assist you with Noel's portfolio today?";
    } else if (lowerCaseMessage.includes("skills") || lowerCaseMessage.includes("experience")) {
      return "Noel is skilled in JavaScript, React, Node.js, and many other technologies. Check out the Skills section for a complete list!";
    } else if (lowerCaseMessage.includes("contact") || lowerCaseMessage.includes("email")) {
      return "You can contact Noel via email at noel.regis04@gmail.com or through the contact form on this site.";
    } else if (lowerCaseMessage.includes("project") || lowerCaseMessage.includes("work")) {
      return "Noel has worked on several projects including FundLaunch, SmartPark, and Gas Help Center. You can find more details in the Projects section!";
    } else {
      return "Thanks for your message! Noel will get back to you soon. Feel free to explore the portfolio to learn more about his work and skills.";
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setIsMinimized(false);
  };

  const minimizeChat = () => {
    setIsMinimized(!isMinimized);
  };

  return (
    <div className="fixed bottom-24 right-4 z-40 flex flex-col items-end">
      {isOpen && (
        <div
          className={`w-80 sm:w-96 bg-card border border-border shadow-lg rounded-lg transition-all duration-300 pixel-border overflow-hidden ${
            isMinimized ? "h-14" : "h-96"
          }`}
        >
          <div className="flex items-center justify-between p-3 bg-primary text-primary-foreground">
            <h3 className="font-pixel text-sm">AI Assistant</h3>
            <div className="flex gap-2">
              <button
                onClick={minimizeChat}
                className="text-primary-foreground hover:text-white transition-colors"
                aria-label={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? <Maximize size={14} /> : <Minimize size={14} />}
              </button>
              <button
                onClick={toggleChat}
                className="text-primary-foreground hover:text-white transition-colors"
                aria-label="Close chat"
              >
                <X size={14} />
              </button>
            </div>
          </div>
          
          {!isMinimized && (
            <>
              <ScrollArea className="h-[calc(100%-104px)] p-4">
                <div className="flex flex-col gap-3">
                  {messages.map((msg, index) => (
                    <div
                      key={index}
                      className={`flex ${
                        msg.role === "user" ? "justify-end" : "justify-start"
                      }`}
                    >
                      <div
                        className={`max-w-[80%] px-3 py-2 rounded-lg ${
                          msg.role === "user"
                            ? "bg-primary text-primary-foreground"
                            : "bg-secondary/20 text-foreground"
                        }`}
                      >
                        <p className="text-sm">{msg.content}</p>
                        <p className="text-xs opacity-70 mt-1">
                          {new Date(msg.timestamp).toLocaleTimeString([], {
                            hour: "2-digit",
                            minute: "2-digit",
                          })}
                        </p>
                      </div>
                    </div>
                  ))}
                  {isLoading && (
                    <div className="flex justify-start">
                      <div className="max-w-[80%] px-3 py-2 rounded-lg bg-secondary/20 text-foreground">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce"></div>
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce" style={{ animationDelay: "0.2s" }}></div>
                          <div className="w-2 h-2 rounded-full bg-foreground animate-bounce" style={{ animationDelay: "0.4s" }}></div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              </ScrollArea>
              
              <form onSubmit={handleSubmit} className="p-3 border-t border-border flex gap-2 bg-card">
                <Input
                  ref={inputRef}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type a message..."
                  className="flex-1"
                  disabled={isLoading}
                />
                <Button 
                  type="submit" 
                  size="icon" 
                  disabled={isLoading || !message.trim()}
                  className="bg-primary hover:bg-primary/90"
                >
                  <Send size={16} />
                </Button>
              </form>
            </>
          )}
        </div>
      )}
      
      {!isOpen && (
        <button
          onClick={toggleChat}
          className="h-12 w-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:bg-primary/90 transition-colors pixel-border"
          aria-label="Open chat"
        >
          <MessageCircle size={20} />
        </button>
      )}
    </div>
  );
};

export default ChatAssistant;
