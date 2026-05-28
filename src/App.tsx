/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Mail, 
  Phone, 
  Linkedin, 
  ExternalLink, 
  Presentation, 
  BookOpen,
  Briefcase,
  Code
} from 'lucide-react';

type PageId = 'about' | 'work' | 'projects' | 'contact';

export default function App() {
  const [activePage, setActivePage] = useState<PageId>('about');

  const navLinks = [
    { id: 'about', label: 'ABOUT ME' },
    { id: 'projects', label: 'PROJECTS' },
    { id: 'work', label: 'WORK EXPERIENCE' },
    { id: 'contact', label: 'CONTACT' },
  ] as const;

  const showPage = (pageId: PageId) => {
    setActivePage(pageId);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* GLOBAL NAVIGATION BAR */}
      <nav className="sticky top-0 z-50 w-full bg-cyan-500 text-white shadow-md">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => showPage(link.id)}
                className={`text-sm font-semibold hover:text-cyan-100 transition-colors ${
                  activePage === link.id ? 'underline underline-offset-4 decoration-2' : ''
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
          <a
            href="https://drive.google.com/file/d/1yJItPKQHLXpsruSTQsvaUVtLnO_IXcWZ/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-cyan-500 px-6 py-2 rounded-full text-sm font-bold shadow-sm hover:bg-cyan-50 transition-colors"
          >
            RESUME
          </a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12">
        <AnimatePresence mode="wait">
          {activePage === 'about' && (
            <motion.div
              key="about"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-20"
            >
              {/* Hero Section */}
              <section className="grid md:grid-cols-2 gap-12 items-center py-10">
                <div className="space-y-6">
                  <h1 className="text-5xl font-bold text-slate-900 leading-tight">
                    <span className="text-[#00366d]">Transform Data into</span> <span className="text-red-500">Real Business Impact</span>
                  </h1>
                  <p className="text-xl text-slate-600 leading-relaxed">
                    I’m <span className="text-cyan-500 font-bold">The Trinh</span> — a data-driven aspiring Data Analyst with hands-on experience in <span className="text-cyan-500 font-bold">financial analytics, dashboard development and end-to-end data projects.</span>
                  </p>
                  <div className="flex space-x-4">
                    <button
                      onClick={() => showPage('contact')}
                      className="bg-cyan-500 text-white px-8 py-3 rounded-xl font-bold hover:bg-cyan-600 transition-all shadow-lg shadow-cyan-100"
                    >
                      Work With Me
                    </button>
                    <button
                      onClick={() => showPage('projects')}
                      className="bg-white text-cyan-500 border-2 border-cyan-500 px-8 py-3 rounded-xl font-bold hover:bg-cyan-50 transition-all"
                    >
                      See My Work
                    </button>
                  </div>
                </div>
                <div className="hidden md:block bg-slate-100 rounded-3xl aspect-[4/3] flex items-center justify-center overflow-hidden">
                  <img 
                    src="/pic/1.png" 
                    alt="Illustration" 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </section>

              {/* About Me Section */}
              <section className="space-y-12">
                <h2 className="text-center text-[#00366d] font-bold tracking-widest text-4xl">- ABOUT ME -</h2>
                <div className="flex flex-col md:flex-row gap-12">
                  <div className="md:w-1/3 flex justify-center">
                    <div className="w-64 h-64 rounded-full bg-slate-100 border-4 border-cyan-50 flex items-center justify-center overflow-hidden shadow-xl">
                       <img 
                        src="/pic/2.png" 
                        alt="Portrait" 
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                  <div className="md:w-2/3 space-y-8">
                    <p className="text-xl text-slate-700 leading-relaxed">
                      👋 Hi, <span className="text-cyan-500 font-bold">The</span>'s here!<br />
                      I turn complex data into actionable insights through analytics, visualization and data-driven solutions that support smarter business decisions.
                    </p>
                    
                    <div className="grid gap-6">
                      {/* Card 1: Education - Redesigned to match image layout */}
                      <div className="bg-white p-8 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex flex-wrap items-center gap-4 mb-8">
                          <h3 className="text-2xl font-bold text-cyan-500 uppercase tracking-tight">EDUCATION</h3>
                          <div className="bg-[#fff9e6] border-2 border-[#ffd700] rounded-2xl px-6 py-2 shadow-sm">
                            <span className="text-[#ff4d4d] font-bold text-[17px]">Bachelor of Financial Technology (Fintech)</span>
                          </div>
                        </div>

                        <div className="flex flex-col md:flex-row gap-10 items-start">
                          <div className="w-40 h-40 shrink-0 flex items-center justify-center">
                            <img 
                              src="/pic/UEL_Logo final-xanh.png" 
                              alt="UEL Logo" 
                              className="w-full h-full object-contain"
                              referrerPolicy="no-referrer"
                            />
                          </div>
                          
                          <div className="space-y-6 flex-1">
                            <div className="space-y-1">
                              <p className="text-slate-400 font-medium text-[13px] tracking-tight">2022 – PRESENT</p>
                              <h4 className="text-[17px] font-bold text-slate-900 leading-tight">University of Economics and Law</h4>
                              <p className="text-[17px] text-slate-700 mt-2">
                                GPA: 3.45/4.0 (Ranking: <span className="text-[#ff4d4d] font-bold">Very Good</span>)
                              </p>
                            </div>
                            
                            <ul className="space-y-4 text-slate-700 text-[17px] leading-relaxed">
                              <li className="flex gap-4 items-start">
                                <span className="text-slate-900 font-bold mt-1.5">•</span>
                                <div>Received the <strong>Academic Scholarship</strong> for Excellent Student (Term 3 - 2025; Term 1 - 2026) – Top 8% of the Fintech program.</div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>

                      {/* Card 2: Presentations */}
                      <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow flex flex-col h-full">
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600 shrink-0">
                            <Presentation size={20} />
                          </div>
                          <h3 className="font-bold text-cyan-500 uppercase text-2xl mt-1">PRESENTATIONS</h3>
                        </div>
                        <div className="text-[17px] space-y-4 flex-1">
                          <p className="text-slate-700 border-l-2 border-cyan-200 pl-3 leading-relaxed">
                            <i>"Predicting Audit Opinion Using Firm Financials: A Machine Learning Approach for Vietnam Market"</i>, VCAA 2025, Nha Trang, July 27, 2025.
                          </p>
                          <p className="text-slate-700 border-l-2 border-cyan-200 pl-3 leading-relaxed">
                            <i>"How Corruption Influences Credit Information Sharing and Financial Development"</i>, ICFAA 2024, Hanoi, Dec 21, 2024.
                          </p>
                        </div>
                      </div>

                      {/* Card 3: Publication */}
                      <a 
                        href="https://ojs.omniscient.sg/index.php/gep/article/view/64166" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="group bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md hover:border-cyan-200 transition-all flex flex-col h-full"
                      >
                        <div className="flex items-start gap-4 mb-4">
                          <div className="bg-cyan-100 p-3 rounded-xl text-cyan-600 group-hover:bg-cyan-500 group-hover:text-white transition-colors shrink-0">
                            <BookOpen size={20} />
                          </div>
                          <div className="mt-1 flex items-center gap-2">
                            <h3 className="font-bold text-cyan-500 uppercase text-2xl">PUBLICATION</h3>
                            <ExternalLink size={12} className="text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <p className="text-slate-700 group-hover:text-cyan-600 transition-colors text-[17px] leading-relaxed">
                            <i>“Oil Price Shocks and Stock Market Reactions: Insights from Impulse Response Functions”</i> Global Economic Perspectives, Vol. 3, Issue 4 (2025), Omniscient Pte. Ltd.
                          </p>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </section>

              {/* Skills, Tools & Certifications Section */}
              <section className="space-y-12">
                <h2 className="text-center text-[#00366d] font-bold tracking-widest text-4xl">- SKILLS -</h2>
                
                <div className="flex flex-wrap justify-center gap-3">
                  {['Data Analysis', 'Data Visualization', 'Problem-Solving', 'Critical Thinking', 'Data Mining', 'Project Management', 'Leadership', 'Communication'].map((skill) => (
                    <span key={skill} className="px-5 py-2 bg-slate-50 text-slate-700 rounded-full text-[17px] font-medium border border-slate-100">
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="grid lg:grid-cols-2 gap-6">
                  {/* TOOLS Section */}
                  <div className="bg-[#e3f2fd] p-8 rounded-[2rem] shadow-sm">
                    <h3 className="text-[#00366d] text-4xl font-bold uppercase mb-8 tracking-tight">TOOLS</h3>
                    
                    <div className="space-y-10">
                      {/* Analytics & Insights */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {['/pic/4.png', '/pic/7.png', '/pic/6.png', '/pic/9.png', '/pic/8.png'].map((src, i) => (
                            <div key={i} className="w-14 h-14 flex items-center justify-center">
                              <img src={src} alt="Tool" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                        <div className="inline-block bg-white rounded-full px-5 py-1.5 shadow-sm border border-slate-100">
                          <span className="text-slate-900 font-bold text-lg leading-none">Data Analytics Tools</span>
                        </div>
                        <ul className="grid grid-cols-2 gap-x-4 gap-y-1 text-slate-800 text-[19px] font-medium pl-2">
                          <li className="flex items-center gap-2">• Python</li>
                          <li className="flex items-center gap-2">• SQL</li>
                          <li className="flex items-center gap-2">• Stata</li>
                          <li className="flex items-center gap-2">• R</li>
                          <li className="flex items-center gap-2">• PowerBI</li>
                        </ul>
                      </div>

                      {/* AI & Project Management */}
                      <div className="space-y-4">
                        <div className="flex flex-wrap gap-2">
                          {['/pic/5.png', '/pic/10.png', '/pic/11.png'].map((src, i) => (
                            <div key={i} className="w-14 h-14 flex items-center justify-center">
                              <img src={src} alt="Tool" className="max-w-full max-h-full object-contain" referrerPolicy="no-referrer" />
                            </div>
                          ))}
                        </div>
                        <div className="inline-block bg-white rounded-full px-5 py-1.5 shadow-sm border border-slate-100">
                          <span className="text-slate-900 font-bold text-lg leading-none">AI & Project Management</span>
                        </div>
                        <ul className="space-y-1 text-slate-800 text-[19px] font-medium pl-2">
                          <li className="flex items-center gap-2">• ChatGPT</li>
                          <li className="flex items-center gap-2">• Perplexity.ai</li>
                          <li className="flex items-center gap-2">• Trello</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  {/* CERTIFICATIONS Section */}
                  <div className="bg-[#e3f2fd] p-8 rounded-[2rem] shadow-sm">
                    <h3 className="text-[#00366d] text-4xl font-bold uppercase mb-8 tracking-tight">CERTIFICATIONS</h3>
                    
                    <div className="space-y-6">
                      {[ 
                        { title: "Google Data Analytics Professional", date: "2024", logo: "/pic/16.png" },
                        { title: "Nvidia Certificate: Getting Started with Deep Learning", date: "2025", logo: "/pic/17.png" },
                        { title: "Financial Data Analysis and Decision-Making in the Advent of AI", date: "2026", logo: "/pic/15.png" }
                      ].map((cert, i) => (
                        <div key={i} className="flex items-center gap-6 group">
                          <div className="w-20 h-20 shrink-0 bg-white rounded-2xl shadow-sm p-2 flex items-center justify-center border border-slate-100">
                            <img src={cert.logo} alt={cert.title} className="w-full h-full object-contain" />
                          </div>
                          <div>
                            <h4 className="text-slate-900 font-bold text-lg leading-tight group-hover:text-[#00366d] transition-colors">{cert.title}</h4>
                            <p className="text-slate-500 font-medium">{cert.date}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </section>
            </motion.div>
          )}

          {activePage === 'work' && (
            <motion.div
              key="work"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <h2 className="text-center text-[#00366d] font-bold tracking-widest text-4xl">- WORK EXPERIENCE -</h2>
              
              <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
                <p className="text-slate-700 leading-relaxed text-justify">
                  After studying Financial Technology at the University of Economics and Law, I discovered my passion for <strong className="font-bold text-slate-900">combining business and technology to improve operational efficiency</strong>. I have strengthened my <strong className="font-bold text-slate-900">analytical and problem-solving skills</strong> through academic projects related to <strong className="font-bold text-slate-900">finance and data analysis</strong>. To better prepare for this role, I have also developed my <strong className="font-bold text-slate-900">teamwork, communication and system-thinking abilities</strong>. I am excited to apply for this position and gain experience working with professionals. Besides, I am confident that my energy and willingness to learn will contribute to your company's values.
                </p>
              </div>

              <div className="grid gap-8">
                {/* Job 1 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-cyan-500/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl tracking-wide">
                        <span className="font-bold text-cyan-500">AI TRAINER</span>
                        <span className="font-bold text-slate-900"> | OUTLIER</span>
                      </h3>
                    </div>
                    <Briefcase className="text-slate-200 group-hover:text-cyan-100 transition-colors" size={48} />
                  </div>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3">
                      <span className="text-cyan-500 shrink-0">•</span>
                      <span>Tested and validated AI-generated responses using structured evaluation guidelines, reviewing hundreds of outputs across diverse prompts, identifying edge cases and improving response quality.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-500 shrink-0">•</span>
                      <span>Completed high-volume annotation and labeling tasks across text-based datasets, including response grading, rewriting and categorization.</span>
                    </li>
                  </ul>
                </div>

                {/* Job 2 */}
                <div className="bg-white p-8 rounded-2xl border-2 border-cyan-500/10 shadow-sm relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full bg-cyan-500" />
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <h3 className="text-2xl tracking-wide">
                        <span className="font-bold text-cyan-500">EXTERNAL RELATIONS ASSOCIATE</span>
                        <span className="font-bold text-slate-900"> | FINANCE AND BANKING CLUB</span>
                      </h3>
                    </div>
                    <Briefcase className="text-slate-200 group-hover:text-cyan-100 transition-colors" size={48} />
                  </div>
                  <ul className="space-y-4 text-slate-600">
                    <li className="flex gap-3">
                      <span className="text-cyan-500 shrink-0">•</span>
                      <span>Coordinated and promoted a campus-wide stock trading competition “Wave Your Future” engaging 200+ participants.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-500 shrink-0">•</span>
                      <span>Organized the “Web3 Career Innovation” blockchain talkshow.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-cyan-500 shrink-0">•</span>
                      <span>Managed partnerships with a local securities company to formalize internship recognition.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          )}

          {activePage === 'projects' && (
            <motion.div
              key="projects"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <h2 className="text-center text-[#00366d] font-bold tracking-widest text-4xl">- PROJECTS -</h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Iceland Stocks Screener",
                    url: "https://github.com/ngcthxiv-opit/iceland_stocks_screener",
                    iconSrc: "/pic/19.png",
                    cover: "/pic/12.png",
                    objectFit: "object-contain",
                    bgColor: "bg-black"
                  },
                  {
                    title: "Retail Credit Portfolio Dashboard",
                    url: "https://github.com/ngcthxiv-opit/dashboard_Tin_Dung_KHCN",
                    iconSrc: "/pic/19.png",
                    cover: "/pic/13.png",
                    objectFit: "object-cover",
                    bgColor: "bg-slate-200"
                  },
                  {
                    title: "Financial Statement Analysis",
                    url: "https://admin.onhandbi.com/view/report/TVRRNE9BPT0=",
                    iconSrc: "/pic/18.png",
                    cover: "/pic/14.png",
                    objectFit: "object-cover",
                    bgColor: "bg-slate-200"
                  }
                ].map((project, index) => (
                  <a 
                    key={index}
                    href={project.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-white p-4 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col"
                  >
                    <div className={`h-40 rounded-xl mb-4 overflow-hidden ${project.bgColor}`}>
                      <img
                        src={project.cover}
                        alt={project.title}
                        className={`w-full h-full ${project.objectFit} group-hover:scale-105 transition-transform duration-300`}
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="flex justify-between items-end px-2 mt-auto pt-2">
                      <h3 className="font-bold text-slate-800 group-hover:text-cyan-600 transition-colors uppercase text-sm min-h-[2.5rem] flex items-end">
                        {project.title}
                      </h3>
                      <div className="text-slate-400 group-hover:text-cyan-500 scale-90 group-hover:scale-100 transition-all shrink-0 ml-2">
                        <img src={project.iconSrc} alt="link" className="w-6 h-6 object-contain" />
                      </div>
                    </div>
                  </a>
                ))}
              </div>
            </motion.div>
          )}

          {activePage === 'contact' && (
            <motion.div
              key="contact"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="space-y-12"
            >
              <div className="grid md:grid-cols-2 gap-16">
                <div className="space-y-8">
                  <div className="space-y-2">
                    <h2 className="text-5xl font-bold text-slate-900 leading-tight">Want to create new things together?</h2>
                    <p className="text-5xl font-bold text-cyan-500">Or just say hello.</p>
                  </div>
                  
                  <hr className="border-slate-100" />

                  <div className="space-y-6">
                    <div className="flex items-center gap-4 group">
                      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-cyan-50 transition-colors">
                        <Mail className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Email</p>
                        <p className="text-slate-800 font-medium">ngcthxiv@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 group">
                      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-cyan-50 transition-colors">
                        <Phone className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">Phone</p>
                        <p className="text-slate-800 font-medium">(+84) 32 77 86 597</p>
                      </div>
                    </div>

                    <a 
                      href="https://www.linkedin.com/in/ngcthxiv/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-4 group cursor-pointer"
                    >
                      <div className="bg-slate-50 p-4 rounded-2xl group-hover:bg-cyan-50 transition-colors">
                        <Linkedin className="text-slate-400 group-hover:text-cyan-500 transition-colors" />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 uppercase font-bold tracking-wider">LinkedIn</p>
                        <p className="text-slate-800 font-medium group-hover:text-cyan-600 transition-colors underline decoration-slate-200">Trinh Ngoc The</p>
                      </div>
                    </a>
                  </div>
                </div>

                <div className="rounded-3xl overflow-hidden flex items-center justify-center">
                  <img
                    src="/pic/3.jpg"
                    alt="Contact Illustration"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="mt-20 py-12 border-t border-slate-50 text-center">
        <p className="text-slate-400 text-sm">© 2026 Ngcthxiv's Portfolio. Built with passion and precision.</p>
      </footer>
    </div>
  );
}
