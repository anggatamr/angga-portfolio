import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const skills = [
  "Python", "R Programming", "SQL", "Excel", "Data Analysis", "Forecasting",
  "UI/UX Design", "React", "Digital Marketing", "Copywriting"
];

const experiences = [
  {
    number: "01",
    title: "Data Analytics Intern | Disdukcapil Bener Meriah",
    desc: "Developed an AI-powered administrative dashboard using Streamlit to optimize public service delivery. Built a 14-day time-series forecasting model to anticipate service demand spikes."
  },
  {
    number: "02",
    title: "Google Student Ambassador (Candidate)",
    desc: "Spearheaded digital content creation to communicate complex tech and data topics, bridging the gap between advanced technology and university students."
  },
  {
    number: "03",
    title: "Public Relations & Media | Forum Generasi Berencana",
    desc: "Managed public relations campaigns and visual communication strategies to effectively raise awareness for youth planning programs."
  },
  {
    number: "04",
    title: "Social Services Division | Math Dept. Association, UNIMED",
    desc: "Orchestrated national-level entrepreneurship initiatives and spearheaded impactful student social movements to drive community engagement."
  }
];

const projects = [
  {
    title: "UMKM Business Insights SaaS",
    tag: "Web App / Analytics",
    desc: "Developed a SaaS application designed to help MSMEs extract actionable insights from sales data, integrating SEO and targeted copywriting.",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://my-data-akucerita-layb7wpln-anggatamrs-projects.vercel.app/"
  },
  {
    title: "Dashboard Disdukcapil – Sistem notifikasi pengambilan KTP cerdas terintegrasi",
    tag: "Dashboard / App",
    desc: "An AI-powered administrative dashboard using Streamlit to optimize public service delivery with smart notifications for ID card retrieval.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://dashboardangga.streamlit.app/"
  },
  {
    title: "Tesla (TSLA) Stock Price Prediction",
    tag: "Machine Learning / Neural Networks",
    desc: "Conducted predictive modeling using standard Neural Networks, hyperparameter tuning, and RNN architectures to forecast market trends.",
    img: "/Gemini_Generated_Image_hyaxwkhyaxwkhyax.png"
  },
  {
    title: "Spatial Analysis Research",
    tag: "Data Science / Public Health",
    desc: "Authored a scientific article mapping the spatial distribution of Diabetes Mellitus in Aceh and North Sumatra to drive data-backed healthcare decisions.",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  }
];

const Reveal = ({ children, delay = 0, width = "100%" }) => (
  <div style={{ width, overflow: "hidden" }}>
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay }}
    >
      {children}
    </motion.div>
  </div>
);

function App() {
  return (
    <>
      {/* 1. Global Navigation */}
      <nav className="nav-blur">
        <div className="logo">ANGGA TAMARA</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>
        <a href="#contact" className="btn btn-red" style={{ padding: '0.75rem 1.5rem' }}>Let's Connect</a>
      </nav>

      {/* 2. Hero Section */}
      <section className="container hero-section">
        <div className="grid-2">
          <div>
            <Reveal>
              <span className="eyebrow">STATISTICS & DIGITAL STRATEGY</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="giant-text">
                DATA-DRIVEN <br /> CREATOR. <br /> SOLUTIONS <br /> BUILDER.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                "An Undergraduate Student in Statistics at Medan State University merging data analysis expertise with digital marketing to engineer scalable solutions and compelling narratives for the future of business."
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="#projects" className="btn btn-black">View My Work</a>
            </Reveal>
          </div>
          <motion.div
            className="hero-img-box image-container"
            initial={{ opacity: 0, scale: 0.95, y: 50 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* The user provided this image in the prompt, using a generic placeholder for now, but user can replace with their image */}
            <img src="/foto halaman depan.jpeg" alt="Angga Tamara sitting in a black suit" onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'}} />
          </motion.div>
        </div>
      </section>

      {/* 3. About Me Section */}
      <section id="about" className="container">
        <div className="divider" style={{ marginBottom: '6rem' }}></div>
        <div className="grid-2">
          <Reveal>
            <div className="image-container" style={{ aspectRatio: '3/4', borderRadius: '12px' }}>
              <img src="/foto about me.jpeg" alt="Angga Tamara mirror selfie" onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&q=80&w=800'}} />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h2 className="section-title">BEYOND THE NUMBERS.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ marginBottom: '2rem' }}>
                "I am committed to developing technical expertise and contributing through data-driven decision making, while leveraging creative storytelling to connect with diverse audiences. My approach bridges the gap between raw metrics and human-centric design."
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p>
                "With experience spanning public sector transformation and campus leadership, I actively translate complex data into actionable, user-centric solutions and compelling digital campaigns. I am currently seeking opportunities where statistical precision meets strategic digital impact."
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. Technical Skills Marquee */}
      <div className="marquee-container" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        <div className="marquee-content">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div className="skill-item" key={index}>
              <span>/</span> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* 5. Experience Section */}
      <section id="experience" className="container" style={{ paddingBottom: '8rem' }}>
        <Reveal>
          <h2 className="section-title" style={{ textAlign: 'center' }}>EXPERIENCE.</h2>
        </Reveal>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          {experiences.map((exp, idx) => (
            <Reveal delay={idx * 0.1} key={exp.number}>
              <div className="experience-item">
                <div className="number">{exp.number}</div>
                <div>
                  <h3 className="experience-title">{exp.title}</h3>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 6. Featured Projects Section */}
      <section id="projects" className="container" style={{ paddingBottom: '8rem' }}>
        <Reveal>
          <h2 className="section-title">FEATURED PROJECTS.</h2>
        </Reveal>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          {projects.map((project, idx) => (
            <Reveal delay={idx * 0.1} key={idx}>
              <a href={project.link || "#"} target={project.link ? "_blank" : undefined} rel={project.link ? "noreferrer" : undefined} className="viper-card">
                <div className="viper-card-img-container">
                  <img src={project.img} alt={project.title} />
                </div>
                <div className="viper-card-content">
                  <span className="viper-card-tag">{project.tag}</span>
                  <div className="viper-card-title">
                    <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{project.title}</h3>
                    <ArrowRight className="viper-arrow" size={24} />
                  </div>
                  <p style={{ fontSize: '1rem', color: '#555' }}>
                    {project.desc}
                  </p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </section>

      {/* 7. Contact & Footer Section */}
      <section id="contact" style={{ background: '#111', color: '#fff', padding: '8rem 2rem' }}>
        <div className="container">
          <Reveal>
            <h2 className="giant-text" style={{ color: '#fff' }}>LET'S BUILD <br /> SOMETHING GREAT.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: '1.5rem', color: '#aaa', maxWidth: '600px', marginBottom: '4rem' }}>
              Currently open for internships, leadership programs, and career opportunities.
            </p>
          </Reveal>

          <div className="footer-links">
            <Reveal delay={0.2}>
              <a href="mailto:anggatamara40@gmail.com">anggatamara40@gmail.com</a>
            </Reveal>
            <Reveal delay={0.3}>
              <a href="https://www.linkedin.com/in/angga-tamara-731ab4248" target="_blank" rel="noreferrer">LinkedIn</a>
            </Reveal>
            <Reveal delay={0.4}>
              <a href="https://github.com/anggatamr" target="_blank" rel="noreferrer">GitHub</a>
            </Reveal>
            <Reveal delay={0.5}>
              <a href="https://instagram.com/anggatamr" target="_blank" rel="noreferrer">Instagram</a>
            </Reveal>
          </div>

          <div className="footer-tag">
            © 2026 Angga Tamara. All Rights Reserved.
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
