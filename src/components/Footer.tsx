import { Code2 } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex justify-center items-center gap-2 mb-4">
          <Code2 className="w-5 h-5 text-primary" />
          <span className="font-mono text-lg">CS Portfolio</span>
        </div>
        <p className="text-sm text-muted-foreground mb-2">
          Built with React, TypeScript & Tailwind CSS
        </p>
        <p className="text-xs text-muted-foreground">
          © 2024 · Agadir, Morocco · Available for Internships & Freelance
        </p>
      </div>
    </footer>
  );
};

export default Footer;
