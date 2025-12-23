import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Mail, Linkedin, Github, FileText } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          Let's <span className="bg-gradient-primary bg-clip-text text-transparent">Connect</span>
        </h2>
        <p className="text-muted-foreground mb-12 max-w-2xl mx-auto text-lg">
          Ready to turn caffeine into code and data into insights. Available for internships and freelance projects.
        </p>
        
        <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-primary/30 mb-8">
          <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
          <div className="grid sm:grid-cols-2 gap-4 mb-6">
            <Button 
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </Button>
            <Button 
              size="lg"
              variant="outline"
              className="border-accent text-accent hover:bg-accent/10"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </Button>
          </div>
          <div className="flex justify-center gap-4">
            <Button 
              variant="outline"
              className="border-secondary text-secondary hover:bg-secondary/10"
            >
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </Button>
            <Button 
              variant="outline"
              className="border-primary text-primary hover:bg-primary/10"
            >
              <FileText className="w-5 h-5 mr-2" />
              Resume
            </Button>
          </div>
        </Card>
        
        <div className="text-sm text-muted-foreground">
          <p className="mb-2">Open to opportunities in:</p>
          <div className="flex flex-wrap justify-center gap-2">
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Data Engineering</span>
            <span className="px-3 py-1 bg-accent/10 text-accent rounded-full">Machine Learning</span>
            <span className="px-3 py-1 bg-secondary/10 text-secondary rounded-full">Backend Development</span>
            <span className="px-3 py-1 bg-primary/10 text-primary rounded-full">Data Analysis</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
