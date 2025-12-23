import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Distributed Data Processing Pipeline",
      description: "Built a scalable data pipeline using Apache Spark to process large datasets. Implemented ETL processes and optimized for performance across distributed systems.",
      tags: ["Apache Spark", "Python", "Big Data"],
      color: "primary"
    },
    {
      title: "ML Model for Predictive Analytics",
      description: "Developed a machine learning model for predictive analysis using TensorFlow. Experimented with different neural network architectures to optimize accuracy.",
      tags: ["TensorFlow", "Python", "Deep Learning"],
      color: "accent"
    },
    {
      title: "Real-time Data Streaming System",
      description: "Created a real-time data streaming application using Kafka. Processed and analyzed data streams with low latency for actionable insights.",
      tags: ["Kafka", "Stream Processing", "Distributed Systems"],
      color: "secondary"
    }
  ];

  const getColorClasses = (color: string) => {
    const colors = {
      primary: "border-primary/30 hover:border-primary/50 hover:shadow-[0_0_20px_rgba(72,202,228,0.2)]",
      accent: "border-accent/30 hover:border-accent/50 hover:shadow-[0_0_20px_rgba(52,211,153,0.2)]",
      secondary: "border-secondary/30 hover:border-secondary/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
    };
    return colors[color as keyof typeof colors];
  };

  return (
    <section id="projects" className="py-24 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Featured <span className="bg-gradient-primary bg-clip-text text-transparent">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Projects that push my understanding of Big Data and Machine Learning forward
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`p-6 bg-card transition-all duration-300 ${getColorClasses(project.color)}`}
            >
              <div className="mb-4">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>
              </div>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <span 
                    key={tag}
                    className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground border border-border"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <div className="flex gap-2">
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-primary/30 text-primary hover:bg-primary/10"
                >
                  <Github className="w-4 h-4 mr-1" />
                  Code
                </Button>
                <Button 
                  size="sm" 
                  variant="outline"
                  className="flex-1 border-accent/30 text-accent hover:bg-accent/10"
                >
                  <ExternalLink className="w-4 h-4 mr-1" />
                  Demo
                </Button>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            More projects coming soon as I continue my learning journey
          </p>
          <Button 
            variant="outline"
            className="border-primary text-primary hover:bg-primary/10"
          >
            View All on GitHub
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
