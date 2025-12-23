import { Button } from "@/components/ui/button";
import { Code2, Database, BrainCircuit, ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-20" />
      
      {/* Floating tech icons */}
      <div className="absolute top-20 left-10 animate-float">
        <Database className="w-16 h-16 text-primary opacity-20" />
      </div>
      <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: "1s" }}>
        <BrainCircuit className="w-20 h-20 text-accent opacity-20" />
      </div>
      <div className="absolute top-40 right-20 animate-float" style={{ animationDelay: "2s" }}>
        <Code2 className="w-12 h-12 text-secondary opacity-20" />
      </div>
      
      <div className="max-w-5xl mx-auto text-center z-10">
        <div className="inline-block mb-4 px-4 py-2 bg-card rounded-full border border-primary/30 text-sm text-muted-foreground animate-glow">
          <span className="text-primary font-mono">Available for Internships & Freelance</span>
        </div>
        
        <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          Turning Data Into Insights,
          <br />
          Coffee Into Code
        </h1>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-4 max-w-3xl mx-auto">
          4th Year CS Student | Big Data Enthusiast | Machine Learning Explorer
        </p>
        
        <p className="text-lg text-foreground/80 mb-8 max-w-2xl mx-auto">
          I get excited about data pipelines and neural networks—yes, I know how that sounds, but someone's got to be! 
          Currently on a journey to master Big Data and ML, one algorithm at a time.
        </p>
        
        <div className="flex flex-wrap gap-4 justify-center mb-12">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Get In Touch
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
            onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
          >
            View Projects
          </Button>
        </div>
        
        <div className="flex justify-center items-center gap-8 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-primary" />
            <span>Big Data</span>
          </div>
          <div className="flex items-center gap-2">
            <BrainCircuit className="w-5 h-5 text-accent" />
            <span>Machine Learning</span>
          </div>
          <div className="flex items-center gap-2">
            <Code2 className="w-5 h-5 text-secondary" />
            <span>Clean Code</span>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
