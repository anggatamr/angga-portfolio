import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ExternalLink } from 'lucide-react';

/* ─────────────────────────────────────────────
   DATA ARRAYS
   ───────────────────────────────────────────── */

const navLinks = [
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Research', href: '#research' },
  { name: 'Contact', href: '#contact' },
];

const skills = [
  "Python", "R Programming", "SQL", "Machine Learning", "Deep Learning",
  "NumPy", "Pandas", "Scikit-learn", "TensorFlow", "Streamlit",
  "Geospatial Analysis", "Time Series", "Statistical Modeling",
  "React", "Data Visualization", "XGBoost"
];

const experiences = [
  {
    number: "01",
    title: "Industrial Data Science Intern | Disdukcapil Kab. Bener Meriah",
    period: "Jan 2026 – Feb 2026",
    desc: "Engineered an AI-powered administrative dashboard using Streamlit. Implemented K-Means clustering for regional segmentation, Holt-Winters forecasting for 14-day demand prediction with seasonal decomposition, and Random Forest classification for document pickup time prediction — validated via MAPE metrics."
  },
  {
    number: "02",
    title: "Public Relations & Media | Forum Generasi Berencana",
    period: "Apr 2021 – Aug 2022",
    desc: "Managed public relations campaigns and visual communication strategies to effectively raise awareness for youth planning programs across regional channels."
  },
  {
    number: "03",
    title: "Social Services Division | Math Dept. Association, UNIMED",
    period: "Apr 2024 – Jul 2025",
    desc: "Coordinated the National Entrepreneurship Webinar, managed the Social Student Movement and Mathematics Research Club initiatives to drive academic development within the department."
  }
];

const stats = [
  { number: "10+", label: "Projects Shipped" },
  { number: "38", label: "Provinces Mapped" },
  { number: "6", label: "ML Models Deployed" },
];

const categories = [
  { key: 'all', label: 'All' },
  { key: 'ml', label: 'ML / AI' },
  { key: 'dashboard', label: 'Dashboard' },
  { key: 'saas', label: 'SaaS' },
  { key: 'research', label: 'Research' },
];

const projects = [
  {
    title: "UMKM Business Insights SaaS",
    category: "saas",
    tag: "Web App / Analytics",
    desc: "A SaaS application helping Indonesian MSMEs extract actionable insights from sales data. Integrates AI-driven narrative generation, SEO analysis, and targeted copywriting via the Claude API.",
    stack: ["Next.js", "TypeScript", "Supabase", "Claude API"],
    impact: "Narrating data for 1000+ Indonesian SMEs",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    link: "https://my-data-akucerita-layb7wpln-anggatamrs-projects.vercel.app/"
  },
  {
    title: "Sistem Cerdas Pemetaan Risiko Demografi Pemuda",
    category: "ml",
    tag: "Geospatial AI / Public Policy",
    desc: "Intelligent risk-mapping system classifying demographic vulnerability of youth across all 38 Indonesian provinces using supervised ML on BPS census data, with interactive choropleth visualizations and policy-grade risk tiering.",
    stack: ["Python", "GeoPandas", "Folium", "Random Forest", "BPS Data"],
    impact: "38 provinsi · Data 270 juta penduduk · Tier risiko siap kebijakan",
    img: "https://images.unsplash.com/photo-1569025743873-ea3a9ade89f9?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/anggatamr/Sistem-Cerdas-Pemetaan-Risiko-Demografi-Pemuda-di-38-Provinsi-Indonesia"
  },
  {
    title: "Dashboard Analisis Capil — Kab. Bener Meriah",
    category: "dashboard",
    tag: "Gov-Tech / Analytics Dashboard",
    desc: "AI-powered administrative analytics platform built during a government internship. Integrates Random Forest, K-Means, and Holt-Winters forecasting to optimize civil registration services for 140,000+ residents.",
    stack: ["Python", "Streamlit", "Random Forest", "K-Means", "Holt-Winters"],
    impact: "Melayani 140,000+ penduduk · Akurasi prediksi 14 hari 89%",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800",
    link: "https://dashboardangga.streamlit.app/",
    github: "https://github.com/anggatamr/Dashboard---Analisis-Capil-Kab.-Bener-Meriah"
  },
  {
    title: "Decision Support System with Kiro",
    category: "ml",
    tag: "Decision Intelligence / DSS",
    desc: "Production-grade DSS featuring an AI-assisted recommendation engine. Applies multi-criteria decision analysis (MCDA) with an overhauled glassmorphism UI, prepared for academic presentation.",
    stack: ["Python", "Streamlit", "MCDA", "Kiro AI", "Glassmorphism"],
    impact: "Menyederhanakan keputusan kompleks multi-variabel",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/anggatamr/Decision-Support-System---With-Kiro"
  },
  {
    title: "SARAS — AI Research Integrity Platform",
    category: "ml",
    tag: "AI System / Research Tech",
    desc: "A research integrity platform auditing data authenticity and detecting academic misconduct. Features ARIA Engine (Z-score + Benford's Law) for numerical anomaly detection and SIGMA Engine for automated statistical testing with Gemini AI narrative generation.",
    stack: ["Python", "Go", "Next.js", "Gemini AI", "BPS WebAPI"],
    impact: "Menjembatani integritas riset untuk akademisi Indonesia",
    img: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/anggatamr/Saras"
  },
  {
    title: "Big Data & Data Mining Pipeline",
    category: "ml",
    tag: "Big Data / Data Mining",
    desc: "End-to-end data mining pipeline covering association rule mining, C4.5, Naïve Bayes, and SVM classification on large-scale datasets. Includes full Jupyter notebooks with statistical validation and visual EDA.",
    stack: ["Python", "Scikit-learn", "Weka", "Jupyter", "Association Rules"],
    impact: "Pipeline penuh: ingest → preprocess → model → evaluasi",
    img: "https://images.unsplash.com/photo-1518186285589-2f7649de83e0?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/anggatamr/Tugas-Big-Data---Data-Mining-PSS-23B"
  },
  {
    title: "Project DSS — Decision Modeling Toolkit",
    category: "ml",
    tag: "Decision Science / Modeling",
    desc: "Rigorous mathematical platform combining TOPSIS, SAW, and AHP with Monte Carlo simulation (10K+ iterations), MLE distribution fitting, and bootstrap confidence intervals. Validated with 279 property-based tests and 73 unit tests.",
    stack: ["Python", "FastAPI", "SciPy", "NumPy", "Streamlit"],
    impact: "Toolkit keputusan: AHP + TOPSIS + Monte Carlo · 352 tests",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=800",
    github: "https://github.com/anggatamr/Project-DSS-Angga"
  },
  {
    title: "Tesla (TSLA) Stock Price Prediction",
    category: "ml",
    tag: "Machine Learning / Neural Networks",
    desc: "Predictive modeling using standard Neural Networks, hyperparameter tuning, and RNN architectures to forecast TSLA market trends with rigorous train/test split and performance benchmarking.",
    stack: ["Python", "TensorFlow", "RNN", "LSTM", "NumPy"],
    impact: "Membandingkan NN standar vs RNN untuk prediksi time-series pasar",
    img: "/Gemini_Generated_Image_hyaxwkhyaxwkhyax.png"
  },
  {
    title: "Spatial Analysis — Diabetes Mellitus Distribution",
    category: "research",
    tag: "Data Science / Public Health",
    desc: "Scientific research mapping the spatial distribution of Diabetes Mellitus in Aceh and North Sumatra using GIS methods and statistical clustering to drive data-backed healthcare resource allocation.",
    stack: ["R", "GIS", "Spatial Stats", "ggplot2", "Cluster Analysis"],
    impact: "Analisis spasial untuk pengambilan keputusan kesehatan berbasis data",
    img: "https://images.unsplash.com/photo-1576086213369-97a306d36557?auto=format&fit=crop&q=80&w=800"
  }
];

const research = [
  {
    year: "2026",
    title: "Temporal Fusion Transformer untuk Klasifikasi Kerentanan Kemiskinan Multidimensi",
    venue: "In Progress · Target: Jurnal Sinta-indexed",
    type: "Publication Draft",
    tags: ["Deep Learning", "TFT", "Poverty", "Panel Data", "514 Kabupaten"]
  },
  {
    year: "2026",
    title: "Klasifikasi Risiko Kredit Menggunakan Regresi Logistik Biner",
    venue: "Laporan Akademik · Statistika UNIMED",
    type: "Applied Research",
    tags: ["Logistic Regression", "Credit Risk", "Python", "ML"]
  },
  {
    year: "2025",
    title: "Analisis Distribusi Spasial Penyakit Diabetes Mellitus di Aceh dan Sumatera Utara",
    venue: "Karya Ilmiah · Universitas Negeri Medan",
    type: "Research Paper",
    tags: ["Spatial Analysis", "Public Health", "GIS", "R"]
  },
  {
    year: "2025",
    title: "Valuasi Saham ADRO dengan Metode DCF dan DDM dalam Keputusan Investasi",
    venue: "Karya Ilmiah · Statistika UNIMED",
    type: "Research Paper",
    tags: ["DCF", "DDM", "Econometrics", "RMSE", "Investment"]
  }
];

/* ─────────────────────────────────────────────
   REVEAL ANIMATION COMPONENT
   ───────────────────────────────────────────── */

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

/* ─────────────────────────────────────────────
   MAIN APP COMPONENT
   ───────────────────────────────────────────── */

function App() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <>
      {/* ════════════ 1. NAVIGATION ════════════ */}
      <nav className="nav-blur">
        <div className="logo">ANGGA TAMARA</div>
        <div className="nav-links">
          {navLinks.map((link) => (
            <a key={link.name} href={link.href}>{link.name}</a>
          ))}
        </div>
        <a href="#contact" className="btn btn-red" style={{ padding: '0.75rem 1.5rem' }}>Let's Connect</a>
      </nav>

      {/* ════════════ 2. HERO SECTION ════════════ */}
      <section className="container hero-section">
        <div className="grid-2">
          <div>
            <Reveal>
              <div className="status-badge">Open to Work</div>
            </Reveal>
            <Reveal>
              <span className="eyebrow">STATISTICS &amp; DATA SCIENCE</span>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="giant-text">
                DATA-DRIVEN <br /> CREATOR. <br /> SOLUTIONS <br /> BUILDER.
              </h1>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ maxWidth: '600px', fontSize: '1.25rem', marginBottom: '2.5rem' }}>
                A Statistics undergraduate at Medan State University specializing in Data Science, Machine Learning, and creative tech storytelling — translating complex datasets into actionable, user-centric solutions.
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
            <img src="/foto halaman depan.jpeg" alt="Angga Tamara — Data Scientist" onError={(e) => {e.target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800'}} />
          </motion.div>
        </div>
      </section>

      {/* ════════════ 3. METRICS STRIP ════════════ */}
      <section className="container">
        <div className="stats-grid">
          {stats.map((stat, i) => (
            <Reveal delay={i * 0.1} key={i}>
              <div className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════ 4. ABOUT ME ════════════ */}
      <section id="about" className="container">
        <div className="divider" style={{ marginBottom: '6rem' }}></div>
        <div className="grid-2">
          <Reveal>
            <div className="image-container" style={{ aspectRatio: '3/4', borderRadius: '12px' }}>
              <img src="/angga-profile.jpg" alt="Angga Tamara portrait in batik shirt" onError={(e) => {e.target.src = '/foto about me.jpeg'}} />
            </div>
          </Reveal>
          <div>
            <Reveal delay={0.1}>
              <h2 className="section-title">BEYOND THE NUMBERS.</h2>
            </Reveal>
            <Reveal delay={0.2}>
              <p style={{ marginBottom: '2rem' }}>
                A highly analytical Statistics undergraduate (GPA: 3.51) with a proven track record in developing AI-powered public sector dashboards, econometric valuation models, and research integrity systems. I bridge the gap between raw metrics and human-centric design.
              </p>
            </Reveal>
            <Reveal delay={0.3}>
              <p style={{ marginBottom: '2rem' }}>
                With experience spanning government data transformation and campus leadership, I translate complex data into actionable solutions and compelling visual narratives. Proficient in Python, R, SQL, and modern ML frameworks.
              </p>
            </Reveal>
            <Reveal delay={0.4}>
              <div className="badge-stack">
                <span className="badge">IBM Data Science</span>
                <span className="badge badge-blue">Google Foundations</span>
                <span className="badge badge-neutral">ID Native · EN Fluent</span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ════════════ 5. SKILLS MARQUEE ════════════ */}
      <div className="marquee-container" style={{ marginTop: '8rem', marginBottom: '8rem' }}>
        <div className="marquee-content">
          {[...skills, ...skills, ...skills].map((skill, index) => (
            <div className="skill-item" key={index}>
              <span>/</span> {skill}
            </div>
          ))}
        </div>
      </div>

      {/* ════════════ 6. EXPERIENCE ════════════ */}
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
                  <span className="eyebrow" style={{ marginBottom: '0.75rem', display: 'block', fontSize: '0.75rem' }}>{exp.period}</span>
                  <p>{exp.desc}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ════════════ 7. FEATURED PROJECTS ════════════ */}
      <section id="projects" className="container" style={{ paddingBottom: '8rem' }}>
        <Reveal>
          <h2 className="section-title">FEATURED PROJECTS.</h2>
        </Reveal>

        {/* Filter Bar */}
        <Reveal delay={0.1}>
          <div className="filter-bar">
            {categories.map(cat => (
              <button
                key={cat.key}
                className={`filter-btn ${activeFilter === cat.key ? 'active-red' : ''}`}
                onClick={() => setActiveFilter(cat.key)}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Project Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="viper-card">
                  <div className="viper-card-img-container">
                    <img src={project.img} alt={project.title} loading="lazy" />
                  </div>
                  <div className="viper-card-content">
                    <span className="viper-card-tag">{project.tag}</span>
                    <div className="viper-card-title">
                      <h3 style={{ fontSize: '1.5rem', fontWeight: 800 }}>{project.title}</h3>
                    </div>
                    <p style={{ fontSize: '1rem', color: '#555' }}>
                      {project.desc}
                    </p>

                    {/* Stack Badges */}
                    {project.stack && (
                      <div className="badge-stack">
                        {project.stack.map((s, i) => (
                          <span className="badge badge-neutral" key={i}>{s}</span>
                        ))}
                      </div>
                    )}

                    {/* Impact Line */}
                    {project.impact && (
                      <p className="impact-line">{project.impact}</p>
                    )}

                    {/* Card Action Links */}
                    <div className="card-links">
                      {project.link && (
                        <a href={project.link} target="_blank" rel="noreferrer" className="card-link-btn primary" onClick={(e) => e.stopPropagation()}>
                          <ExternalLink size={14} /> Live Demo
                        </a>
                      )}
                      {project.github && (
                        <a href={project.github} target="_blank" rel="noreferrer" className="card-link-btn" onClick={(e) => e.stopPropagation()}>
                          <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" height="14" width="14" xmlns="http://www.w3.org/2000/svg" style={{ display: 'inline-block', verticalAlign: 'middle' }}><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"></path></svg> GitHub
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </section>

      {/* ════════════ 8. RESEARCH & PUBLICATIONS ════════════ */}
      <section id="research" className="container" style={{ paddingBottom: '8rem' }}>
        <Reveal>
          <h2 className="section-title">RESEARCH.</h2>
        </Reveal>
        <div className="research-bento-grid">
          {research.map((item, idx) => {
            const isTFT = idx === 0;
            const isADRO = idx === 3;
            
            let cardClass = "bento-item";
            if (isTFT) {
              cardClass += " featured bento-span-2 bento-span-2-tablet";
            } else if (isADRO) {
              cardClass += " bento-span-2 bento-span-2-tablet";
            } else {
              cardClass += " bento-span-1";
            }

            return (
              <Reveal delay={idx * 0.1} key={idx} width="100%">
                <div className={cardClass} style={{ height: '100%' }}>
                  <div style={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                        <span className="research-year">{item.year} · {item.type}</span>
                        {isTFT && <span className="badge badge-blue" style={{ fontSize: '0.65rem', background: 'rgba(51, 133, 255, 0.15)', color: '#3385ff', borderColor: 'rgba(51, 133, 255, 0.25)' }}>Featured</span>}
                      </div>
                      <h3 className="research-title" style={{ fontSize: isTFT ? '1.75rem' : '1.35rem', lineHeight: '1.2', marginBottom: '0.75rem' }}>
                        {item.title}
                      </h3>
                      <p className="research-journal" style={{ marginBottom: '1.5rem' }}>{item.venue}</p>
                    </div>
                    <div className="badge-stack" style={{ marginTop: 'auto' }}>
                      {item.tags.map((t, i) => (
                        <span className={`badge ${isTFT ? 'badge-blue' : 'badge-blue'}`} key={i}>{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* ════════════ 9. CONTACT & FOOTER ════════════ */}
      <section id="contact" style={{ background: '#111', color: '#fff', padding: '8rem 2rem' }}>
        <div className="container">
          <Reveal>
            <h2 className="giant-text" style={{ color: '#fff' }}>LET'S BUILD <br /> SOMETHING GREAT.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p style={{ fontSize: '1.5rem', color: '#aaa', maxWidth: '600px', marginBottom: '4rem' }}>
              Currently open for internships, data science roles, and collaborative research opportunities.
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
