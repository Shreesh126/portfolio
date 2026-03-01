import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { PORTFOLIO_DATA } from "@/lib/data";
import { 
  Github, Linkedin, Twitter, Mail, Download, 
  ExternalLink, ChevronRight, GraduationCap, Award, Send
} from "lucide-react";
import heroImg from "../assets/shrish_1770745230928.jpeg";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "AI/ML", "Blockchain"];
  const filteredProjects = filter === "All" 
    ? PORTFOLIO_DATA.projects 
    : PORTFOLIO_DATA.projects.filter(p => p.category === filter);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section id="hero" className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[-10%] left-[-5%] w-[500px] h-[500px] bg-accent/20 rounded-full blur-[120px] pointer-events-none" />

        <div className="container max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-white/80">Available for work</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
              Hello, I'm <br/>
              <span className="text-gradient">{PORTFOLIO_DATA.hero.name}</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 font-light">
              {PORTFOLIO_DATA.hero.title}
            </p>
            
            <p className="text-lg text-muted-foreground/80 mb-10 max-w-lg leading-relaxed">
              {PORTFOLIO_DATA.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-4">
              <a href="#contact" className="px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors flex items-center gap-2">
                Let's Talk <ChevronRight className="w-4 h-4" />
              </a>
              <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 text-white font-bold rounded-full border border-white/10 hover:bg-white/10 transition-colors flex items-center gap-2">
                Download CV <Download className="w-4 h-4" />
              </a>
            </div>

            <div className="mt-12 flex gap-6">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  <Icon className="w-6 h-6" />
                </a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-72 h-72 md:w-96 md:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" />
              <img 
                src={heroImg} 
                alt="Profile" 
                className="w-full h-full object-cover rounded-full border-4 border-white/10 shadow-2xl relative z-10"
              />
            </div>
          </motion.div>
        </div>

        {/* Tech Ticker */}
        <div className="absolute bottom-0 w-full bg-white/5 border-t border-white/5 backdrop-blur-sm py-4 overflow-hidden">
          <div className="flex animate-scroll whitespace-nowrap">
            {[...PORTFOLIO_DATA.hero.techTicker, ...PORTFOLIO_DATA.hero.techTicker].map((tech, i) => (
              <span key={i} className="mx-8 text-white/40 font-display font-bold text-xl uppercase tracking-wider">
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-black/20">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeading title="About Me" subtitle="Who I Am" />
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass-card p-8 md:p-12 rounded-3xl text-center"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-light">
              {PORTFOLIO_DATA.about.summary}
            </p>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding relative">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading title="Technical Expertise" subtitle="My Arsenal" />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((skill, index) => (
              <motion.div
                key={skill.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-card p-8 rounded-2xl group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                  <skill.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-4">{skill.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skill.items.map((item) => (
                    <span key={item} className="px-3 py-1 bg-white/5 rounded-full text-sm text-muted-foreground border border-white/5">
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-padding bg-secondary/20">
        <div className="container max-w-4xl mx-auto px-4">
          <SectionHeading title="Professional Journey" subtitle="Experience" />
          
          <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-white/20 before:to-transparent">
            {PORTFOLIO_DATA.experience.map((exp, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-background bg-primary shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-2.5 h-2.5 bg-white rounded-full" />
                </div>
                
                <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] glass-card p-6 rounded-2xl">
                  <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                    <h3 className="font-bold text-xl text-primary">{exp.role}</h3>
                    <span className="text-sm font-mono text-muted-foreground bg-white/5 px-2 py-1 rounded">
                      {exp.period}
                    </span>
                  </div>
                  <h4 className="text-lg font-medium mb-3">{exp.company}</h4>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {exp.description}
                  </p>
                  {exp.highlights && (
                    <ul className="list-disc pl-5 space-y-2 text-sm text-muted-foreground/80">
                      {exp.highlights.map((highlight, i) => (
                        <li key={i}>{highlight}</li>
                      ))}
                    </ul>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding">
        <div className="container max-w-7xl mx-auto px-4">
          <SectionHeading title="Featured Work" subtitle="Portfolio" />
          
          {/* Project Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setFilter(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  filter === category 
                    ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25" 
                    : "bg-white/5 hover:bg-white/10 text-muted-foreground"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <motion.div 
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  layout
                  key={project.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-3xl overflow-hidden group flex flex-col h-full"
                >
                  <div className="h-48 relative flex items-center justify-center overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <project.icon className="w-12 h-12 text-white" />
                    </div>
                  </div>
                  
                  <div className="p-8 flex-1 flex flex-col">
                    <h3 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 flex-1 text-sm leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="space-y-6">
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map(t => (
                          <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* CERTIFICATIONS & EDUCATION */}
      <section className="section-padding bg-black/40">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm opacity-60">{edu.year}</span>
                      <span className="text-sm font-bold text-primary">{edu.details}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display font-bold">Certifications</h3>
              </div>
              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl flex items-center gap-4">
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground/90">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground">{cert.issuer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="section-padding relative overflow-hidden">
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="container max-w-6xl mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <SectionHeading title="Get In Touch" subtitle="Contact" align="left" />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say hi, my inbox is always open. I'll try my best to get back to you!
              </p>
              
              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <a href="https://wa.me/917483364040" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      +91 74833 64040
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a href="https://linkedin.com/in/shrishhegde4" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                      in/shrishhegde4
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div className="glass-card p-8 md:p-10 rounded-3xl border-t border-white/10 shadow-2xl">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-white/5 bg-black/60 text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} Shrish Vinayak Hegde. Built with React & Framer Motion.
        </p>
      </footer>
    </div>
  );
}
