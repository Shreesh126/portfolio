import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { SectionHeading } from "@/components/SectionHeading";
import { ContactForm } from "@/components/ContactForm";
import { PORTFOLIO_DATA } from "@/lib/data";
import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Download,
  ExternalLink,
  ChevronRight,
  GraduationCap,
  Award,
  Send,
} from "lucide-react";
import heroImg from "../assets/shrish_1770745230928.jpeg";

export default function Home() {
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Full Stack", "AI/ML", "Blockchain"];
  const filteredProjects =
    filter === "All"
      ? PORTFOLIO_DATA.projects
      : PORTFOLIO_DATA.projects.filter((p) => p.category === filter);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <Navbar />

      {/* HERO SECTION */}
      <section
        id="hero"
        className="relative min-h-screen flex items-center justify-center pt-16 overflow-hidden"
      >
        {/* Updated for responsive profile image */}
        {/* Abstract Background Shapes */}
        <div className="absolute top-[-5%] right-[-3%] w-[280px] h-[280px] bg-primary/20 rounded-full blur-[80px] pointer-events-none sm:w-[320px] sm:h-[320px] sm:blur-[90px] lg:w-[400px] lg:h-[400px] lg:blur-[100px]"/>
        <div className="absolute bottom-[-5%] left-[-3%] w-[280px] h-[280px] bg-accent/20 rounded-full blur-[80px] pointer-events-none sm:w-[320px] sm:h-[320px] sm:blur-[90px] lg:w-[400px] lg:h-[400px] lg:blur-[100px]" />

        <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-muted/20 border border-muted/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              <span className="text-sm font-medium text-muted-foreground">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-4">
              Hello, I'm <br />
              <span className="text-gradient">{PORTFOLIO_DATA.hero.name}</span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-6 font-light">
              {PORTFOLIO_DATA.hero.title}
            </p>

            <p className="text-base md:text-lg text-muted-foreground/80 mb-8 max-w-lg leading-relaxed">
              {PORTFOLIO_DATA.hero.tagline}
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="#contact"
                className="px-6 py-3 bg-white text-primary font-medium rounded-full border border-primary/20 hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                Let's Talk <ChevronRight className="w-3 h-3" />
              </a>
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3 bg-white text-primary font-medium rounded-full border border-primary/20 hover:bg-primary/10 transition-colors flex items-center gap-2"
              >
                Download CV <Download className="w-3 h-3" />
              </a>
            </div>

            <div className="mt-8 flex flex-wrap gap-4">
              {[Github, Linkedin, Twitter, Mail].map((Icon, i) => {
                const labels = ['Github', 'Linkedin', 'Twitter', 'Mail'];
                return (
                  <a
                    key={i}
                    href="#"
                    className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-3 py-2 rounded hover:bg-muted/20"
                  >
                    <Icon className="w-5 h-5" />
                    <span className="text-sm">{labels[i]}</span>
                  </a>
                );
              })}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative w-20 h-20 md:w-32 md:h-32 lg:w-64 lg:h-64 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary to-accent rounded-full blur-2xl opacity-40 animate-pulse" />
              <img
                src={heroImg}
                alt="Profile"
                className="w-full h-full object-cover rounded-full border-3 border-white/10 shadow-xl relative z-10"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="section-padding bg-black/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="About Me" subtitle="Who I Am" />
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid gap-6 sm:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-display font-bold mb-4">
                  About Me
                </h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  {PORTFOLIO_DATA.about.paragraph}
                </p>
                <div className="flex flex-wrap gap-3">
                  {(PORTFOLIO_DATA.about?.techStack || []).map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-5">
                {(PORTFOLIO_DATA.about?.highlights || []).map((highlight, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <div>
                      <h4 className="font-medium">{highlight.title}</h4>
                      <p className="text-muted-foreground">{highlight.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SKILLS SECTION */}
      <section id="skills" className="section-padding">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Skills" subtitle="What I Do" />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {PORTFOLIO_DATA.skills.map((category, i) => (
              <div key={i} className="space-y-10">
                <h3 className="text-2xl font-display font-bold">{category.category}</h3>
                <div className="space-y-6">
                  {category.items.map((skill, j) => (
                    <div
                      key={`${i}-${j}`}
                      className="glass-card p-8 rounded-xl flex items-center gap-6"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <div>
                        <h4 className="font-medium text-lg">{skill}</h4>
                        <p className="text-sm text-muted-foreground">
                          Proficient
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section id="experience" className="section-padding bg-black/20">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Experience" subtitle="Where I've Worked" />
          <div className="space-y-6 sm:space-y-8">
            {PORTFOLIO_DATA.experience.map((exp, i) => (
              <div key={i} className="glass-card p-6 rounded-xl border-l-4 border-l-primary">
                <div className="mb-4">
                  <h3 className="text-xl font-display font-bold">{exp.role}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <div className="flex mt-1">
                    <span className="mr-2 text-sm opacity-60">{exp.duration}</span>
                    <span className="text-sm font-medium text-primary">{exp.location}</span>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  {exp.description}
                </p>
                {exp.techStack && (
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, j) => (
                      <span
                        key={j}
                        className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section id="projects" className="section-padding">
        <div className="container max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Projects" subtitle="What I've Built" />
          <div className="space-y-6">
            <div className="flex flex-wrap gap-4 mb-6">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category)}
                  className={`px-4 py-2 rounded-full font-medium transition-all ${
                    filter === category
                      ? "bg-primary text-primary-foreground"
                      : "bg-muted/20 text-muted-foreground hover:bg-muted/30"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredProjects.map((project) => (
                <div key={project.id} className="glass-card p-6 rounded-xl hover:shadow-xl transition-shadow">
                  <div className="mb-4">
                    <h3 className="text-xl font-display font-bold">{project.title}</h3>
                    <p className="text-muted-foreground">{project.category}</p>
                  </div>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {project.description}
                  </p>
                  {project.tech && (
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech) => (
                        <span
                          key={tech}
                          className="text-xs font-mono px-2 py-1 rounded bg-secondary text-secondary-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  <div className="flex justify-end">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 transition-colors"
                    >
                      Live Demo <ExternalLink className="ml-2" />
                    </a>
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="ml-4 text-muted-foreground hover:text-primary transition-colors"
                      >
                        Source Code <ExternalLink className="ml-2" />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CERTIFICATIONS & EDUCATION */}
      <section className="section-padding bg-black/40">
        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 sm:grid-cols-2 lg:gap-12">
            <div>
              <div className="flex items-center gap-4 mb-8">
                <GraduationCap className="w-8 h-8 text-primary" />
                <h3 className="text-2xl font-display font-bold">Education</h3>
              </div>
              <div className="space-y-6">
                {PORTFOLIO_DATA.education.map((edu, i) => (
                  <div
                    key={i}
                    className="glass-card p-6 rounded-xl border-l-4 border-l-primary"
                  >
                    <h4 className="text-lg font-bold">{edu.degree}</h4>
                    <p className="text-muted-foreground">{edu.school}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-sm opacity-60">{edu.year}</span>
                      <span className="text-sm font-bold text-primary">
                        {edu.details}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center gap-4 mb-8">
                <Award className="w-8 h-8 text-accent" />
                <h3 className="text-2xl font-display font-bold">
                  Certifications
                </h3>
              </div>
              <div className="space-y-4">
                {PORTFOLIO_DATA.certifications.map((cert, i) => (
                  <div
                    key={i}
                    className="glass-card p-4 rounded-xl flex items-center gap-4"
                  >
                    <div className="w-2 h-2 rounded-full bg-accent" />
                    <div className="flex-1">
                      <h4 className="font-medium text-foreground/90">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {cert.issuer}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="section-padding relative overflow-hidden"
      >
        {/* Background blobs */}
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="container max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid gap-16 sm:grid-cols-1 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Contact"
                align="left"
              />
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Whether you have a question, a project idea, or just want to say
                hi, my inbox is always open. I'll try my best to get back to
                you!
              </p>

              <div className="space-y-6 mb-12">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                    <Send className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">WhatsApp</h4>
                    <a
                      href="https://wa.me/917483364075"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +91 74833 64075
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-muted/20 flex items-center justify-center">
                    <Linkedin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-bold">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/shrishhegde4"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
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
          © {new Date().getFullYear()} Shrish Vinayak Hegde. Built with React &
          Framer Motion.
        </p>
      </footer>
    </div>
  );
}