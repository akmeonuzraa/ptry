import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";

const Skills = () => {
  const bigDataSkills = [
    "Apache Spark", "Hadoop", "Kafka", "Data Pipelines", 
    "Distributed Computing", "ETL Processes", "Data Warehousing"
  ];
  
  const mlSkills = [
    "Python", "TensorFlow", "PyTorch", "Scikit-learn",
    "Neural Networks", "Deep Learning", "Model Optimization",
    "Supervised Learning", "Unsupervised Learning"
  ];
  
  const otherSkills = [
    "JavaScript", "TypeScript", "SQL", "NoSQL",
    "Git", "Docker", "Linux", "Cloud Computing"
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-center">
          Technical <span className="bg-gradient-primary bg-clip-text text-transparent">Skills</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Building expertise in cutting-edge data technologies and machine learning frameworks
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="p-6 bg-card border-primary/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-primary animate-glow" />
              <h3 className="text-xl font-semibold">Big Data</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {bigDataSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-primary/10 text-primary border-primary/30 hover:bg-primary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 bg-card border-accent/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-accent animate-glow" />
              <h3 className="text-xl font-semibold">Machine Learning</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {mlSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-accent/10 text-accent border-accent/30 hover:bg-accent/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
          
          <Card className="p-6 bg-card border-secondary/30">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2 h-2 rounded-full bg-secondary animate-glow" />
              <h3 className="text-xl font-semibold">Other Technologies</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {otherSkills.map((skill) => (
                <Badge 
                  key={skill} 
                  variant="secondary"
                  className="bg-secondary/10 text-secondary border-secondary/30 hover:bg-secondary/20"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
