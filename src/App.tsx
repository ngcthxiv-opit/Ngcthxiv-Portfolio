import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import {
  ArrowUpRight,
  BarChart3,
  BookOpen,
  BriefcaseBusiness,
  CheckCircle2,
  ChevronRight,
  Download,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Menu,
  Phone,
  Presentation,
  Sparkles,
  X,
} from 'lucide-react';

type PageId = 'about' | 'projects' | 'work' | 'contact';

const navLinks: { id: PageId; label: string }[] = [
  { id: 'about', label: 'About' },
  { id: 'projects', label: 'Projects' },
  { id: 'work', label: 'Experience' },
  { id: 'contact', label: 'Contact' },
];

const projects = [
  {
    title: 'Iceland Stocks Screener',
    category: 'Investment analytics',
    description: 'A focused equity-screening workflow for exploring and comparing companies in the Icelandic market.',
    context: 'Personal project',
    problem: 'Need for a comprehensive tool to analyze all companies listed on the Iceland stock market with efficient data processing and multi-strategy screening capabilities.',
    approach: 'Built an end-to-end financial data pipeline: processing Excel data sources, cleaning and standardizing key fields, then loading them into a SQLite data warehouse with a star schema. Developed a financial analysis engine and a full-stack web application.',
    contributions: [
      'Built an end-to-end financial data pipeline, reducing manual data preparation time by 70%.',
      'Generated 50+ financial metrics across 8 categories and enabled multi-condition screening with 7 predefined strategies, improving stock-search speed by 50%.',
      'Delivered real-time filtering, technical indicators, multi-strategy models, metadata APIs, autocomplete search, and Excel export matched to user-selected views.',
    ],
    metrics: ['70% less preparation time', '50+ financial metrics', '50% faster stock search'],
    url: 'https://github.com/ngcthxiv-opit/iceland_stocks_screener',
    cover: '/pic/12.png',
    icon: '/pic/19.png',
    fit: 'object-contain',
    tags: ['Python', 'Financial data', 'Screening'],
    source: 'GitHub',
  },
  {
    title: 'Retail Credit Portfolio Dashboard',
    category: 'Risk intelligence',
    description: 'A decision-ready dashboard that turns retail credit portfolio data into clear risk and performance signals.',
    context: 'Personal project',
    problem: 'Need for a unified credit portfolio analytics tool that can ingest raw CSV data, perform data cleaning, and provide advanced analytical features for risk management and performance optimization.',
    approach: 'Built a Streamlit-based retail credit dashboard with data ingestion, validation, cleaning, and transformation. Developed key credit metrics with segmentation capabilities and advanced analytical features.',
    contributions: [
      'Built a workflow that ingests and validates raw CSV data, then performs data cleaning and transformation.',
      'Enabled segmentation across 2 branch hierarchies and 4+ dimensions, increasing analysis flexibility and speed by 40%.',
      'Designed branch-level risk drill-downs, profit forecasting, and automated insight generation for risk management, performance optimization, and customer growth.',
    ],
    metrics: ['40% faster analysis', '4+ segmentation dimensions', 'Automated insights'],
    url: 'https://github.com/ngcthxiv-opit/dashboard_Tin_Dung_KHCN',
    cover: '/pic/13.png',
    icon: '/pic/19.png',
    fit: 'object-cover',
    tags: ['Power BI', 'Credit risk', 'Dashboard'],
    source: 'GitHub',
  },
  {
    title: 'Financial Statement Analysis',
    category: 'Business intelligence',
    description: 'An interactive financial analysis report designed to surface trends, ratios, and company performance.',
    context: 'Personal project',
    problem: 'Need for a comprehensive multi-page financial dashboard that allows seamless navigation and consistent analysis across different report pages.',
    approach: 'Designed a Power BI dashboard with icon-based page navigators, synchronized global slicers, and a clean star schema structure for financial reporting.',
    contributions: [
      'Delivered a seamless dashboard across 5 report pages, reducing navigation time by 40%.',
      'Improved consistency across 100% of report pages, eliminating manual re-filtering and reducing analysis time by 30%.',
      'Designed a clean star schema that reduced measure complexity by 25% and improved report responsiveness.',
    ],
    metrics: ['40% faster navigation', '30% less analysis time', '25% less measure complexity'],
    url: 'https://admin.onhandbi.com/view/report/TVRRNE9BPT0=',
    cover: '/pic/14.png',
    icon: '/pic/18.png',
    fit: 'object-cover',
    tags: ['BI', 'Financial analysis', 'Reporting'],
    source: 'OnHandBI',
  },
];

const pageMotion = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -8 },
  transition: { duration: 0.24, ease: 'easeOut' as const },
};

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('about');
  const [mobileOpen, setMobileOpen] = useState(false);
  const [expandedProject, setExpandedProject] = useState<number | null>(null);

  const showPage = (pageId: PageId) => {
    setActivePage(pageId);
    setMobileOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    document.title = `${navLinks.find((link) => link.id === activePage)?.label} — The Trinh`;
  }, [activePage]);

  return (
    <div className="app-shell">
      <a className="skip-link" href="#main-content">Skip to content</a>

      <header className="site-header">
        <nav className="nav-container" aria-label="Primary navigation">
          <button className="brand" onClick={() => showPage('about')} aria-label="The Trinh, home">
            <span className="brand-mark">TT</span>
            <span className="brand-copy">
              <strong>The Trinh</strong>
              <small>Finance × Data</small>
            </span>
          </button>

          <div className="desktop-nav">
            <div className="nav-links" role="list">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => showPage(link.id)}
                  className={activePage === link.id ? 'nav-link active' : 'nav-link'}
                  aria-current={activePage === link.id ? 'page' : undefined}
                >
                  {link.label}
                </button>
              ))}
            </div>
            <a
              className="button button-primary button-small"
              href="https://drive.google.com/file/d/12Ye6nGKLyoYyCPMxcnMPbWAOKhyNHsG2/view?usp=sharing"
              target="_blank"
              rel="noreferrer"
            >
              Résumé <Download size={16} aria-hidden="true" />
            </a>
          </div>

          <button
            className="mobile-toggle"
            onClick={() => setMobileOpen((open) => !open)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileOpen ? <X aria-hidden="true" /> : <Menu aria-hidden="true" />}
          </button>
        </nav>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              id="mobile-navigation"
              className="mobile-nav"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
            >
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  className={activePage === link.id ? 'mobile-link active' : 'mobile-link'}
                  onClick={() => showPage(link.id)}
                >
                  {link.label}<ChevronRight size={18} />
                </button>
              ))}
              <a
                className="button button-primary"
                href="https://drive.google.com/file/d/12Ye6nGKLyoYyCPMxcnMPbWAOKhyNHsG2/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                View résumé <ArrowUpRight size={18} />
              </a>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      <main id="main-content" className="main-container">
        <AnimatePresence mode="wait">
          {activePage === 'about' && (
            <motion.div key="about" {...pageMotion}>
              <section className="hero">
                <div className="hero-copy">
                  <div className="eyebrow"><span className="status-dot" /> Available for opportunities</div>
                  <h1>Transform data into <span>real business impact.</span></h1>
                  <p className="hero-summary">
                    I’m <strong>The Trinh</strong> — a data-driven aspiring Data Analyst with hands-on experience in
                    <strong> financial analytics, dashboard development, and end-to-end data projects.</strong>
                  </p>
                  <div className="hero-actions">
                    <button className="button button-primary" onClick={() => showPage('projects')}>
                      Explore my work <ArrowUpRight size={18} />
                    </button>
                    <button className="button button-secondary" onClick={() => showPage('contact')}>
                      Let’s connect <Mail size={18} />
                    </button>
                  </div>
                  <div className="hero-proof" aria-label="Career highlights">
                    <div><strong>3×</strong><span>Academic scholarship</span></div>
                    <div><strong>2</strong><span>Conference presentations</span></div>
                    <div><strong>1</strong><span>Published research paper</span></div>
                  </div>
                </div>

                <div className="hero-visual">
                  <div className="visual-grid" aria-hidden="true" />
                  <img src="/pic/1.png" alt="The Trinh presenting data-driven business analysis" />
                  <div className="floating-card">
                    <span className="floating-icon"><BarChart3 size={20} /></span>
                    <div><small>Focus area</small><strong>Financial analytics</strong></div>
                  </div>
                </div>
              </section>

              <section className="section">
                <div className="section-heading split-heading">
                  <div>
                    <p className="kicker">Profile</p>
                    <h2>Business context first.<br />Data with a purpose.</h2>
                  </div>
                  <p>
                    I turn complex data into actionable insights through analytics, visualization, and
                    data-driven solutions that support smarter business decisions.
                  </p>
                </div>

                <div className="profile-grid">
                  <article className="profile-card portrait-card">
                    <img src="/pic/2.png" alt="Portrait of The Trinh" />
                    <div className="portrait-overlay">
                      <span>Hi, The’s here!</span>
                      <strong>Aspiring Data Analyst</strong>
                    </div>
                  </article>

                  <article className="profile-card education-card">
                    <div className="card-icon"><GraduationCap /></div>
                    <p className="kicker">Education</p>
                    <h3>Bachelor of Financial Technology</h3>
                    <p className="muted">University of Economics and Law · 2022 – Present</p>
                    <div className="education-detail">
                      <img src="/pic/UEL_Logo final-xanh.png" alt="University of Economics and Law logo" />
                      <div><strong>GPA: 8.38/10 (3.48/4.0)</strong><span>Ranking: Very Good </span></div>
                    </div>
                    <div className="achievement">
                      <CheckCircle2 size={18} /> Received Academic Scholarship for 3 consecutive terms (2025 - 2026) – Top 8% of the Fintech program.
                    </div>
                  </article>

                  <article className="profile-card research-card">
                    <div className="card-icon"><Presentation /></div>
                    <p className="kicker">Research & speaking</p>
                    <h3>Presentations</h3>
                    <div className="research-list">
                      <div><span>2025</span><p>“Predicting Audit Opinion Using Firm Financials: A Machine Learning Approach for Vietnam Market,” VCAA 2025, Nha Trang, July 27, 2025.</p></div>
                      <div><span>2024</span><p>“How Corruption Influences Credit Information Sharing and Financial Development,” ICFAA 2024, Hanoi, December 21, 2024.</p></div>
                    </div>
                  </article>

                  <article className="profile-card research-card">
                    <div className="card-icon"><BookOpen /></div>
                    <p className="kicker">Published research</p>
                    <h3>Publications</h3>
                    <div className="research-list">
                      <div><span>2025</span><p>“Oil Price Shocks and Stock Market Reactions: Insights from Impulse Response Functions,” Global Economic Perspectives, Vol. 3, Issue 4 (2025), Omniscient Pte. Ltd.</p></div>
                    </div>
                    <a href="https://ojs.omniscient.sg/index.php/gep/article/view/64166" target="_blank" rel="noreferrer">
                      <BookOpen size={17} /> Read published research <ArrowUpRight size={15} />
                    </a>
                  </article>
                </div>
              </section>

              <section className="section">
                <div className="section-heading">
                  <p className="kicker">Capabilities</p>
                  <h2>Tools I use to move from question to insight.</h2>
                </div>
                <div className="capability-grid">
                  <article className="capability-card">
                    <span className="capability-number">01</span>
                    <h3>Analyze</h3>
                    <p>Explore, model, mine, and validate financial and operational data with a practical analytical toolkit.</p>
                    <div className="tool-icons">
                      {['/pic/4.png', '/pic/7.png', '/pic/6.png', '/pic/9.png', '/pic/8.png'].map((src, index) => (
                        <img key={src} src={src} alt={['Python', 'SQL', 'Stata', 'R', 'Power BI'][index]} />
                      ))}
                    </div>
                    <div className="skill-list">
                      {['Data analysis & mining', 'Critical thinking', 'Problem-solving'].map((skill) => (
                        <span key={skill}><CheckCircle2 size={16} />{skill}</span>
                      ))}
                    </div>
                  </article>
                  <article className="capability-card featured">
                    <span className="capability-number">02</span>
                    <h3>Visualize</h3>
                    <p>Build clear dashboards and visual narratives that connect performance signals to decisions.</p>
                    <div className="mini-chart" aria-hidden="true">
                      {[46, 68, 54, 82, 72, 94].map((height, index) => <i key={index} style={{ height: `${height}%` }} />)}
                    </div>
                    <div className="skill-list">
                      {['Data visualization', 'Dashboard development', 'Data storytelling'].map((skill) => (
                        <span key={skill}><CheckCircle2 size={16} />{skill}</span>
                      ))}
                    </div>
                  </article>
                  <article className="capability-card">
                    <span className="capability-number">03</span>
                    <h3>Deliver</h3>
                    <p>Frame the problem, communicate findings, use AI effectively, and keep projects moving.</p>
                    <div className="tool-icons">
                      {[
                        ['/pic/5.png', 'ChatGPT'],
                        ['/pic/10.png', 'Perplexity AI'],
                        ['/pic/11.png', 'Trello'],
                      ].map(([src, label]) => <img key={src} src={src} alt={label} />)}
                    </div>
                    <div className="skill-list">
                      {['Project management', 'Leadership', 'Communication'].map((skill) => (
                        <span key={skill}><CheckCircle2 size={16} />{skill}</span>
                      ))}
                    </div>
                  </article>
                </div>
              </section>

              <section className="section certification-section">
                <div className="section-heading">
                  <h2>Certifications</h2>
                </div>
                <div className="certification-list">
                  {[
                    ['Google Data Analytics Professional', 'Google · 2024', '/pic/16.png'],
                    ['NVIDIA Certificate: Getting Started with Deep Learning', 'NVIDIA · 2025', '/pic/17.png'],
                    ['Financial Data Analysis and Decision-Making in the Advent of AI', '2026', '/pic/15.png'],
                  ].map(([title, meta, logo]) => (
                    <div className="certification" key={title}>
                      <img src={logo} alt="" />
                      <div><strong>{title}</strong><span>{meta}</span></div>
                      <CheckCircle2 size={20} aria-label="Completed" />
                    </div>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.div key="projects" {...pageMotion} className="page">
              <header className="page-header">
                <p className="kicker">Selected work</p>
                <h1>Projects built around real financial questions.</h1>
                <p>From screening equities to monitoring credit risk, each project turns data into a clearer next step.</p>
              </header>
              <div className="project-list">
                {projects.map((project, index) => (
                  <article className="project-card" key={project.title}>
                    <button
                      className="project-summary"
                      type="button"
                      aria-expanded={expandedProject === index}
                      aria-controls={`project-details-${index}`}
                      onClick={() => setExpandedProject(expandedProject === index ? null : index)}
                    >
                      <span className="project-image">
                        <span className="project-index">0{index + 1}</span>
                        <img className={project.fit} src={project.cover} alt={`${project.title} interface preview`} />
                      </span>
                      <span className="project-content">
                        <span className="kicker">{project.category}</span>
                        <span className="project-title-row">
                          <strong>{project.title}</strong>
                          <ChevronRight className={expandedProject === index ? 'expanded' : ''} size={24} aria-hidden="true" />
                        </span>
                        <span className="project-description">{project.description}</span>
                        <span className="tag-row">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</span>
                        <span className="education-detail">
                          <img src={project.icon} alt={`${project.source} icon`} />
                          <span><strong>{project.source}</strong><small>Open project details</small></span>
                        </span>
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {expandedProject === index && (
                        <motion.div
                          id={`project-details-${index}`}
                          className="project-explanation"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.24, ease: 'easeOut' }}
                        >
                          <div><span>Context</span><p>{project.context}</p></div>
                          <div><span>Problem</span><p>{project.problem}</p></div>
                          <div><span>Approach</span><p>{project.approach}</p></div>
                          <div>
                            <span>Key contributions</span>
                            <ul>{project.contributions.map((item) => <li key={item}>{item}</li>)}</ul>
                          </div>
                          <div>
                            <span>Impact</span>
                            <div className="tag-row">{project.metrics.map((metric) => <span key={metric}>{metric}</span>)}</div>
                          </div>
                          <a className="text-link project-external-link" href={project.url} target="_blank" rel="noreferrer">
                            {project.source === 'GitHub' ? <Github size={20} /> : <BarChart3 size={20} />}
                            View {project.source} <ArrowUpRight size={18} />
                          </a>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </article>
                ))}
              </div>
            </motion.div>
          )}

          {activePage === 'work' && (
            <motion.div key="work" {...pageMotion} className="page">
              <header className="page-header">
                <p className="kicker">Experience</p>
                <h1>Where analysis, communication, and execution meet.</h1>
                <p>
                  After studying Financial Technology at the University of Economics and Law, I discovered my passion
                  for combining business and technology to improve operational efficiency. Academic projects in finance
                  and data analysis strengthened my analytical and problem-solving skills, while teamwork, communication,
                  and systems thinking prepared me to contribute, learn, and grow alongside experienced professionals.
                </p>
              </header>
              <div className="timeline">
                <article className="timeline-item">
                  <div className="timeline-meta"><span>2023 - 2025</span><small>Remote</small></div>
                  <div className="timeline-card">
                    <div className="timeline-title">
                      <div className="card-icon"><Sparkles /></div>
                      <div><p>Outlier</p><h2>AI Trainer</h2></div>
                    </div>
                    <ul>
                      <li>Tested and validated hundreds of AI-generated responses using structured evaluation guidelines across diverse prompts, identifying edge cases and improving response quality.</li>
                      <li>Completed high-volume annotation and labeling tasks across text-based datasets, including response grading, rewriting, and categorization.</li>
                    </ul>
                  </div>
                </article>
                <article className="timeline-item">
                  <div className="timeline-meta"><span>2023 – 2024</span><small>Ho Chi Minh City</small></div>
                  <div className="timeline-card">
                    <div className="timeline-title">
                      <div className="card-icon"><BriefcaseBusiness /></div>
                      <div><p>Finance and Banking Club</p><h2>External Relations Associate</h2></div>
                    </div>
                    <ul>
                      <li>Coordinated and promoted the “Wave Your Future” campus-wide stock-trading competition, engaging 200+ participants.</li>
                      <li>Organized the “Web3 Career Innovation” blockchain talk show.</li>
                      <li>Managed a securities-company partnership to formalize internship recognition.</li>
                    </ul>
                  </div>
                </article>
              </div>
              <section className="work-principles">
                <p className="kicker">How I work</p>
                <div>
                  {[
                    ['01', 'Start with the decision', 'Understand what action the analysis needs to support.'],
                    ['02', 'Make complexity legible', 'Find the signal and communicate it without unnecessary noise.'],
                    ['03', 'Improve through feedback', 'Test assumptions, listen closely, and iterate with intent.'],
                  ].map(([number, title, text]) => (
                    <article key={number}><span>{number}</span><h3>{title}</h3><p>{text}</p></article>
                  ))}
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div key="contact" {...pageMotion} className="page contact-page">
              <section className="contact-hero">
                <div>
                  <p className="eyebrow"><span className="status-dot" /> Open to analyst opportunities</p>
                  <h1>Have a financial question worth exploring?</h1>
                  <p>Let’s talk about how thoughtful analysis and clear data storytelling can help your team make a better decision.</p>
                  <div className="contact-actions">
                    <a className="button button-primary" href="mailto:ngcthxiv@gmail.com">
                      Email me <Mail size={18} />
                    </a>
                    <a className="button button-secondary" href="https://www.linkedin.com/in/ngcthxiv/" target="_blank" rel="noreferrer">
                      LinkedIn <Linkedin size={18} />
                    </a>
                  </div>
                </div>
                <div className="contact-photo">
                  <img src="/pic/3.jpg" alt="The Trinh" />
                  <div><strong>Let’s build something useful.</strong><span>Finance · Analytics · Decision support</span></div>
                </div>
              </section>
              <section className="contact-details" aria-label="Contact details">
                <a href="mailto:ngcthxiv@gmail.com">
                  <span><Mail /></span><div><small>Email</small><strong>ngcthxiv@gmail.com</strong></div><ArrowUpRight />
                </a>
                <a href="tel:+84327786597">
                  <span><Phone /></span><div><small>Phone</small><strong>+84 32 778 6597</strong></div><ArrowUpRight />
                </a>
                <a href="https://www.linkedin.com/in/ngcthxiv/" target="_blank" rel="noreferrer">
                  <span><Linkedin /></span><div><small>LinkedIn</small><strong>Trinh Ngoc The</strong></div><ArrowUpRight />
                </a>
              </section>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="site-footer">
        <div>
          <button className="brand footer-brand" onClick={() => showPage('about')}>
            <span className="brand-mark">TT</span>
            <span className="brand-copy"><strong>The Trinh</strong><small>Finance × Data</small></span>
          </button>
          <p>Turning complex financial data into clear, useful decisions.</p>
        </div>
        <div className="footer-links">
          <a href="mailto:ngcthxiv@gmail.com">Email</a>
          <a href="https://www.linkedin.com/in/ngcthxiv/" target="_blank" rel="noreferrer">LinkedIn</a>
          <a href="https://github.com/ngcthxiv-opit" target="_blank" rel="noreferrer">GitHub</a>
        </div>
        <p className="copyright">© 2026 The Trinh. Built with care.</p>
      </footer>
    </div>
  );
}
