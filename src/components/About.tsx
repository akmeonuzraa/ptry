import { Card } from "@/components/ui/card";
import { Lightbulb, Target, Smile } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          A learner with solid fundamentals, strong determination, and the kind of curiosity that keeps me coding past midnight
        </p>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Card className="p-6 bg-card border-primary/20 hover:border-primary/50 transition-all hover:shadow-glow">
            <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">My Approach</h3>
            <p className="text-muted-foreground">
              I bring technical curiosity and practical problem-solving to everything I do. Serious about clean code and understanding theory, but believing the best work happens when you enjoy the process.
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-accent/20 hover:border-accent/50 transition-all hover:shadow-glow">
            <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-semibold mb-2">Current Focus</h3>
            <p className="text-muted-foreground">
              Exploring distributed computing, data processing frameworks, and diving deep into supervised and unsupervised learning, neural networks, and model optimization.
            </p>
          </Card>
          
          <Card className="p-6 bg-card border-secondary/20 hover:border-secondary/50 transition-all hover:shadow-glow">
            <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
              <Smile className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-semibold mb-2">What Makes Me Different</h3>
            <p className="text-muted-foreground">
              I'm honest about my journey. Not claiming expertise—I'm a learner with strong fundamentals and curiosity that keeps me coding past midnight (usually because I forgot the time).
            </p>
          </Card>
        </div>
        
        <Card className="p-8 bg-gradient-to-br from-card to-muted/20 border-primary/30">
          <h3 className="text-2xl font-semibold mb-4">What I'm Looking For</h3>
          <p className="text-foreground/80 leading-relaxed">
            I'm seeking <span className="text-primary font-semibold">internship opportunities</span> and <span className="text-accent font-semibold">freelance projects</span> where I can apply my growing knowledge in Big Data and ML while learning from experienced professionals. I'm particularly interested in roles where I can contribute to real-world data challenges and machine learning solutions.
          </p>
          <p className="text-foreground/80 leading-relaxed mt-4">
            Whether you're looking for an intern who brings energy and dedication, or a freelancer who can tackle data challenges with both competence and creativity, I'd love to hear from you. I'm ready to turn caffeine into code and data into insights.
          </p>
          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground">
              📍 Based in <span className="text-primary">Agadir, Morocco</span>
            </p>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default About;
