import { useState, useEffect, useRef } from "react";

// ============================================================
// JACOB BROWN — UX DESIGN PORTFOLIO
// Clean minimal, editorial typography, warm neutrals
// ============================================================

const IMG = "/images/";

const PROJECTS = [
  {
    id: "ocse",
    title: "OCSL Party Registration",
    subtitle: "CS + Social Good · UNC Chapel Hill",
    role: "UX Designer",
    timeline: "Fall 2025 – Spring 2026",
    tags: ["User Research", "Figma", "Information Architecture", "Responsive Design"],
    color: "#34495E",
    accent: "#5D7B9D",
    preview: `${IMG}Final_Draft.png`,
    figmaUrl: "https://www.figma.com/design/uPcsInkMUq5aCFSOUKkvNW/CS-SG-OCSL-Party-Reg?node-id=144-297&t=JXw3aNGCREt9WOP6-1",
    summary: "Redesigned the off-campus party registration system for UNC's Office of Campus Student Life, transforming a clunky spreadsheet-based admin view into a professional, accessible web application with Admin, Student, and Police views.",
    context: "Off-campus student life had requested an update to their party registration website from CS+SG. Party registration is a way for people living off campus to file their name, PID, and number/email, so if they become too loud instead of a police officer showing up, they would get a call to be quieter. The project at OCSL wanted a new Admin view and Police view, as well as an updated form for people to register their party.",
    process: [
      { heading: "Research & Personas", text: "I started with the personas, identifying two key user types: Chad Cloud (a student hosting parties who might not understand why registration is important) and Shreya Kakkar (an admin who needs efficient tools). This shaped our understanding of both sides of the system.", images: [{ src: `${IMG}Persona_1.png`, caption: "Persona 1 — Chad Chad (Student)" }, { src: `${IMG}Persona_2.png`, caption: "Persona 2 — Shreya Kakkar (Admin)" }] },
      { heading: "Initial Sketches & User Flow", text: "I created an initial sketch of what the admin table on the phone would look like before starting in Figma. We realized the admin table on the phone is not a priority because the admin never uses their phone when reviewing the data. We mapped out Student, Admin, and Police views to understand the full system before committing to lo-fi mocks.", images: [{ src: `${IMG}Intial_Sketch.png`, caption: "Hand-drawn initial sketch of admin table" }, { src: `${IMG}Screenshot_2026-01-15_at_12_03_40_AM_1.png`, caption: "User flow — Student, Admin, and Police views" }] },
      { heading: "Lo-Fi & Iteration", text: "The initial table designs used multiple colors that made them pop out too much. The revised designs looked better and matched the assets the programmers were using — shadows, white space, and consistent sizing across all tables. I also built in a sidebar that pops up to edit students and add new entries, replacing the old click-and-type spreadsheet approach.", images: [{ src: `${IMG}Hello.png`, caption: "Lo-fi table iterations with sidebar panels" }, { src: `${IMG}H.png`, caption: "Lo-fi admin search and student detail views" }] },
      { heading: "Hi-Fi Design & Style Guide", text: "I applied the style guide that OCSL provided with their specific fonts and colors, made each table the same size, added a custom filter, a new complaints feature, and blackout functionality for the tables. For things like the filter, I realized it makes more sense to put them in a sidebar instead of always having a side bar for each option.", images: [{ src: `${IMG}Final_Draft.png`, caption: "Final high-fidelity designs — all admin views" }, { src: `${IMG}Style_Guide.png`, caption: "Style guide with color palette, typography, and components" }] },
    ],
    outcome: "Delivered a responsive, professional admin interface that replaced the old spreadsheet system. Currently continuing work on Variable Compensation and other requests while abroad in Ireland.",
  },
  {
    id: "bua",
    title: "Bua",
    subtitle: "Study Abroad Dublin · Team Project",
    role: "UX Designer & Researcher",
    timeline: "Spring 2026",
    tags: ["User Interviews", "Competitive Audit", "Lo-Fi Prototyping", "Hi-Fi Prototyping"],
    color: "#C0392B",
    accent: "#E74C3C",
    preview: `${IMG}Bua_hifi_app.png`,
    summary: "Designed a mobile app where friends bet each other on healthy life choices — because our brains make better decisions when there are stakes involved. Bua is the Irish word for victory.",
    context: "While in Dublin, my class has been designing an app. The idea sparked from a bet with friends about having less screen time. I was put on the design and research aspect of the app. The concept: you can bet your friends on fun healthy life choices, and if you don't follow through, there are stakes.",
    process: [
      { heading: "User Interviews & Personas", text: "I started with interviews with friends and then moved on to a competitive audit comparing potential competitors. I created two personas — Rosanna Blackbird (a working adult trying to build better habits) and Benjamin Williams (a college student who responds to social motivation). These shaped the feature priorities.", images: [{ src: `${IMG}Persona_3.png`, caption: "Persona — Rosanna Blackbird" }, { src: `${IMG}Persona_4.png`, caption: "Persona — Benjamin Williams" }, { src: `${IMG}Competitve_Audit.png`, caption: "Competitive audit — comparing existing apps", maxHeight: "500px" }] },
      { heading: "User Flow & Lo-Fi Prototypes", text: "Built out the user flow and initial wireframes covering the full experience: login, group configuration, bet creation, league dashboard, challenges, draft, and shop. Established the color palette (reds, purples, blacks, oranges) and typography system using Bricolage Grotesque.", images: [{ src: `${IMG}User_Flow.png`, caption: "User flow mapping the full app journey" }, { src: `${IMG}Bua_app.png`, caption: "Lo-fi wireframes — full app flow" }] },
      { heading: "Hi-Fi Prototypes", text: "Moved into high-fidelity designs with the Global Bets feed, group creation flows, and a home dashboard showing active bets, streaks, and fitness goals. The dark theme with bold red accents creates energy and competitiveness that matches the app's personality.", images: [{ src: `${IMG}Bua_hifi_app.png`, caption: "Hi-fi prototypes — Global Bets, dashboard, and bet creation" }] },
    ],
    outcome: "Currently in active development with the team in Dublin. The app is being built using the designs and research I produced.",
  },
  {
    id: "tunedin",
    title: "TunedIn",
    subtitle: "App Team Apprenticeship · UNC Chapel Hill",
    role: "UX Designer",
    timeline: "Fall 2025",
    tags: ["Personas", "Problem Space Analysis", "Product Design", "Figma"],
    color: "#9B2C5E",
    accent: "#D4638C",
    preview: `${IMG}Home_Page.png`,
    summary: "Designed a personalized daily news digest app filtered by emotional impact — helping users stay informed on their terms without doom-scrolling burnout.",
    context: "TunedIn is an app I designed in the App Team apprenticeship. The core value proposition: \"Stay informed on your terms. News that respects your emotional bandwidth.\"",
    process: [
      { heading: "Personas & Problem Space", text: "Identified five key user pain points: doom-scrolling fatigue, all-or-nothing news consumption, unpredictable emotional hits, guilt about staying informed, and context collapse leading to burnout. Created two personas — Frank Schooler (a recent college grad overwhelmed by information) and Lauren Llama (a mom of three exhausted by negativity in traditional news).", images: [{ src: `${IMG}Persona_5.png`, caption: "Persona — Frank Schooler" }, { src: `${IMG}Persona_6.png`, caption: "Persona — Lauren Llama" }] },
      { heading: "Product Design", text: "Designed the full app experience: a capacity slider asking \"How do you feel?\" (Frustrated, Sad, Anxious, Happy), mood-matched content recommendations, reading streaks for gamification, and both list and card view layouts. The warm, muted pink palette deliberately avoids the high-contrast urgency of typical news apps.", images: [{ src: `${IMG}iPhone_13___14_-_1.png`, caption: "Login screen", narrow: true }, { src: `${IMG}Home_Page.png`, caption: "Home — capacity slider & mood selection", narrow: true }, { src: `${IMG}Feed_Page.png`, caption: "Feed page — categorized news", narrow: true }] },
      { heading: "Content Components", text: "Designed expandable content cards that show article previews with source attribution, and a list view for scanning headlines quickly. Each section (Recommended Reading, Local News, Recent News) can be expanded or collapsed to give users control over information density.", images: [{ src: `${IMG}Frame_4.png`, caption: "Card component — collapsed view", narrow: true }, { src: `${IMG}Frame_5.png`, caption: "List view — expanded content sections", narrow: true }] },
    ],
    outcome: "Completed the full design from concept through high-fidelity prototype during the App Team apprenticeship program.",
  },
  {
    id: "cancerlinc",
    title: "CancerLinc",
    subtitle: "CS + Social Good · UNC Chapel Hill",
    role: "UX Designer",
    timeline: "Fall 2025",
    tags: ["Referral System Design", "Mobile & Web", "Iteration", "Style Guide"],
    color: "#2D6A4F",
    accent: "#52B788",
    preview: `${IMG}CancerLinc_2.png`,
    figmaUrl: "https://www.figma.com/design/OkuxpPzg8eT2jLNCfPgJcw/CancerLINC?node-id=125-1796&t=zP2Eu57wehkcjEFy-1",
    summary: "Designed the referral pages for CancerLinc — a platform connecting cancer patients with doctors through a referral system, with both a patient-facing app and a volunteer-facing website.",
    context: "CancerLinc has two things needed: an app for patients to go on and a website for workers/volunteers to be on. The referral page on the app gives patients a list of doctors they can contact, and the referral page on the website allows workers to change the referrals as well as message the patients themselves.",
    process: [
      { heading: "Initial Designs & Research", text: "I wasn't sure if the referral page was going to include doctors' pictures because this app was mostly targeted for older people, and I thought it might be harder for them to recognize their doctors without pictures. I looked at several other referral pages for inspiration, but the initial draft looked a little clunky.", images: [{ src: `${IMG}CancerLinc_1.png`, caption: "Initial designs and early iterations" }] },
      { heading: "Iteration & Final Design", text: "I ended up spacing the words in the referrals better so it doesn't look as clunky, fixed the message timestamps, added an icon to indicate external links to the CancerLinc website, and removed redundant labeling. Applied the colors from the style guide, finalized both the mobile referral list view and the desktop referral + chat view. The design prioritizes readability and simplicity given the target audience.", images: [{ src: `${IMG}CancerLinc_2.png`, caption: "Final mobile and desktop designs" }] },
    ],
    outcome: "Delivered both mobile and desktop referral page designs ready for development, following the CancerLinc style guide.",
  },
  {
    id: "weeklyweirdo",
    title: "The Weekly Weirdo",
    subtitle: "UNC Chapel Hill · Club Publication",
    role: "Social Media Head, Editor-in-Chief & Web Developer",
    timeline: "Sep 2024 – Present",
    tags: ["Web Development", "Graphic Design", "HTML/CSS/JS", "Brand Identity"],
    color: "#3D3229",
    accent: "#8B7355",
    preview: `${IMG}ww-homepage.png`,
    liveUrl: "https://weeklyweirdo.pages.dev",
    tools: "HTML/CSS/JS, Figma, Photoshop, Illustrator, InDesign",
    summary: "Built the website from scratch and led the visual identity for UNC's only registered satire publication — a newspaper that reports real news about fake events.",
    context: "The Weekly Weirdo is UNC's only registered satire publication. It first debuted in November 2023 and has been published approximately every two weeks on 11-by-17-inch sheets. Using old-timey newspapers as inspiration, the Weekly Weirdo reports real news about fake events rather than the typical satire approach of fake news about real events.",
    process: [
      { heading: "Building the Website", text: "I built the entire site from scratch using HTML, CSS, and JavaScript — no frameworks, no templates. The design intentionally mirrors the look of a vintage broadsheet newspaper, with multi-column layouts, serif typography, and a cream/sepia palette. The site includes a home page with the latest issue, a crossword page, a comics section, an about page, and an ad request form.", images: [{ src: `${IMG}ww-homepage.png`, caption: "Weekly Weirdo homepage — vintage broadsheet layout" }, { src: `${IMG}ww-about.png`, caption: "About page" }, { src: `${IMG}ww-crossword.png`, caption: "Crossword page", maxHeight: "400px" }] },
      { heading: "Visual Identity & Graphic Design", text: "I created graphic design assets in Photoshop and Illustrator for the Weekly Weirdo's Instagram, growing the account to 500+ followers. The visual style balances the old-timey newspaper aesthetic with modern social media formats — maintaining brand consistency across print issues, the website, and Instagram.", images: [{ src: `${IMG}ww-insta-1.png`, caption: "Instagram post" }, { src: `${IMG}ww-insta-2.png`, caption: "Instagram post" }, { src: `${IMG}ww-insta-3.png`, caption: "Instagram post" }, { src: `${IMG}ww-insta-4.png`, caption: "SoleFest promotional flyer" }] },
      { heading: "Editorial & Content", text: "Beyond design, I've written 20+ articles and helped shape the publication's voice — absurdist humor grounded in the mundane. The site also features audiobooks, soundscapes, and a YouTube channel, expanding the Weirdo universe beyond print.", images: [] },
    ],
    outcome: "The site is live and actively maintained at weeklyweirdo.pages.dev, serving as the digital home for the publication.",
  },
];

// ============================================================
// COMPONENTS
// ============================================================

function ImageGallery({ images }) {
  const [lightbox, setLightbox] = useState(null);
  if (!images || images.length === 0) return null;
  const hasNarrow = images.some((img) => img.narrow);

  return (
    <>
      <div style={{ display: "flex", gap: "12px", flexWrap: hasNarrow ? "nowrap" : "wrap", overflowX: hasNarrow ? "auto" : "visible", padding: "20px 0 8px", WebkitOverflowScrolling: "touch" }}>
        {images.map((img, i) => (
          <div
            key={i}
            onClick={() => setLightbox(img)}
            style={{ flex: hasNarrow ? "0 0 auto" : images.length === 1 ? "1 1 100%" : "1 1 calc(50% - 6px)", minWidth: hasNarrow ? "180px" : "auto", maxWidth: hasNarrow ? "220px" : "none", cursor: "pointer", transition: "transform 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")}
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          >
            <img src={img.src} alt={img.caption} style={{ width: "100%", maxHeight: img.maxHeight || "none", objectFit: img.maxHeight ? "contain" : "initial", display: "block", border: "1px solid rgba(0,0,0,0.08)", background: "#f0efec" }} />
            {img.caption && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#999", marginTop: "6px", lineHeight: 1.4 }}>{img.caption}</p>}
          </div>
        ))}
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", cursor: "zoom-out" }}>
          <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
            <img src={lightbox.src} alt={lightbox.caption} style={{ maxWidth: "100%", maxHeight: "85vh", display: "block", boxShadow: "0 20px 80px rgba(0,0,0,0.4)" }} />
            {lightbox.caption && <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textAlign: "center", marginTop: "12px" }}>{lightbox.caption}</p>}
          </div>
        </div>
      )}
    </>
  );
}

function Nav({ activeSection, onNavigate }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  useEffect(() => { const h = () => setScrolled(window.scrollY > 60); window.addEventListener("scroll", h); return () => window.removeEventListener("scroll", h); }, []);

  return (
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "12px 32px" : "20px 32px", background: scrolled ? "rgba(252,251,249,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none", transition: "all 0.3s ease", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span onClick={() => onNavigate("hero")} style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "20px", color: "#1a1a1a", cursor: "pointer", letterSpacing: "-0.02em" }}>Jacob Brown</span>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
        {["Work", "About", "Contact"].map((item) => (
          <span key={item} onClick={() => onNavigate(item.toLowerCase())} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: activeSection === item.toLowerCase() ? "#1a1a1a" : "#888", cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500, transition: "color 0.2s" }}>{item}</span>
        ))}
      </div>
      <div className="mobile-nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", cursor: "pointer", padding: "8px" }}>
        <div style={{ width: 20, height: 2, background: "#1a1a1a", marginBottom: 5, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(3px,3px)" : "none" }} />
        <div style={{ width: 20, height: 2, background: "#1a1a1a", marginBottom: 5, opacity: mobileOpen ? 0 : 1, transition: "all 0.3s" }} />
        <div style={{ width: 20, height: 2, background: "#1a1a1a", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(3px,-3px)" : "none" }} />
      </div>
      {mobileOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(252,251,249,0.98)", padding: "16px 32px", display: "flex", flexDirection: "column", gap: "16px", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
          {["Work", "About", "Contact"].map((item) => (
            <span key={item} onClick={() => { onNavigate(item.toLowerCase()); setMobileOpen(false); }} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#1a1a1a", cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500 }}>{item}</span>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", padding: "120px 32px 80px", maxWidth: "900px", margin: "0 auto" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "16px", fontWeight: 500 }}>UX Designer & Developer</p>
      <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(40px, 7vw, 72px)", color: "#1a1a1a", lineHeight: 1.08, marginBottom: "28px", letterSpacing: "-0.03em", fontWeight: 400 }}>
        I design products{" "}<span style={{ color: "#999" }}>that feel</span><br /><span style={{ fontStyle: "italic" }}>intuitive</span><span style={{ color: "#999" }}> & intentional.</span>
      </h1>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", lineHeight: 1.7, color: "#666", maxWidth: "540px", marginBottom: "40px" }}>Computer Science & English student at UNC Chapel Hill, currently studying abroad in Dublin. I turn user research into polished interfaces — from wireframes to high-fidelity prototypes.</p>
      <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
        <button onClick={() => onNavigate("work")} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "#1a1a1a", color: "#FCFBF9", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.target.style.background = "#333")} onMouseLeave={(e) => (e.target.style.background = "#1a1a1a")}>View Work</button>
        <a href="mailto:fillerjwbrown@gmail.com" style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "transparent", color: "#1a1a1a", border: "1.5px solid #1a1a1a", textDecoration: "none" }}>Get in Touch</a>
      </div>
    </section>
  );
}

function ProjectCard({ project, index, onClick }) {
  const [hovered, setHovered] = useState(false);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => { const o = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.15 }); if (ref.current) o.observe(ref.current); return () => o.disconnect(); }, []);

  return (
    <div ref={ref} onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ cursor: "pointer", opacity: visible ? 1 : 0, transform: visible ? "translateY(0)" : "translateY(40px)", transition: `opacity 0.6s ease ${index * 0.12}s, transform 0.6s ease ${index * 0.12}s`, marginBottom: "24px" }}>
      <div style={{ background: project.color, minHeight: "280px", display: "flex", position: "relative", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 20px 60px rgba(0,0,0,0.15)" : "0 4px 20px rgba(0,0,0,0.06)" }}>
        {/* Text side */}
        <div style={{ flex: "1 1 55%", padding: "48px 40px", display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 1 }}>
          <div style={{ position: "absolute", top: "20px", left: "40px", fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.06em", textTransform: "uppercase" }}>{project.role}</div>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{project.subtitle}</p>
          <h3 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(24px, 4vw, 32px)", color: "#fff", fontWeight: 400, marginBottom: "12px" }}>{project.title}</h3>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: "500px" }}>{project.summary}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
            {project.tags.map((tag) => (<span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{tag}</span>))}
          </div>
        </div>
        {/* Image side */}
        {project.preview && (
          <div style={{ flex: "0 0 40%", display: "flex", alignItems: "center", justifyContent: "center", padding: "24px 24px 24px 0", overflow: "hidden" }} className="card-preview">
            <img
              src={project.preview}
              alt={`${project.title} preview`}
              style={{
                maxWidth: "100%",
                maxHeight: "260px",
                objectFit: "contain",
                borderRadius: "4px",
                boxShadow: "0 8px 32px rgba(0,0,0,0.3)",
                transition: "transform 0.4s ease",
                transform: hovered ? "scale(1.03) translateY(-4px)" : "scale(1)",
              }}
            />
          </div>
        )}
        {/* Arrow */}
        <div style={{ position: "absolute", bottom: "24px", right: "24px", width: "40px", height: "40px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%", opacity: hovered ? 1 : 0.4, transform: hovered ? "translate(0,0)" : "translate(-4px,4px)", transition: "all 0.3s ease" }}>
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="white" strokeWidth="1.5" /></svg>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ project, onBack }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#FCFBF9" }}>
      <div style={{ background: project.color, padding: "64px 32px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <button onClick={onBack} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" /></svg>Back to Projects
          </button>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{project.subtitle} · {project.timeline}</p>
          <h1 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", color: "#fff", fontWeight: 400, marginBottom: "20px", letterSpacing: "-0.02em" }}>{project.title}</h1>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "600px" }}>{project.summary}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "24px" }}>
            {project.tags.map((tag) => (<span key={tag} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{tag}</span>))}
          </div>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 24px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}>
              Visit Live Site<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" /></svg>
            </a>
          )}
          {project.figmaUrl && (
            <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", marginLeft: project.liveUrl ? "12px" : "0", fontFamily: "'DM Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 24px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}>
              View Figma<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" /></svg>
            </a>
          )}
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 32px", display: "flex", gap: "48px", flexWrap: "wrap", borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        {[{ label: "Role", value: project.role }, { label: "Timeline", value: project.timeline }, { label: "Tools", value: project.tools || "Figma" }].map((m) => (
          <div key={m.label}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>{m.label}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#1a1a1a", fontWeight: 500 }}>{m.value}</p>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 32px 0" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "16px", fontWeight: 400 }}>Context</h2>
        <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.8 }}>{project.context}</p>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 32px" }}>
        <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "28px", color: "#1a1a1a", marginBottom: "32px", fontWeight: 400 }}>Process</h2>
        {project.process.map((step, i) => (
          <div key={i} style={{ marginBottom: "48px", paddingLeft: "24px", borderLeft: `2px solid ${project.accent}` }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Step {i + 1}</p>
            <h3 style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "18px", color: "#1a1a1a", fontWeight: 600, marginBottom: "10px" }}>{step.heading}</h3>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#666", lineHeight: 1.75 }}>{step.text}</p>
            <ImageGallery images={step.images} />
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 64px" }}>
        <div style={{ background: "#f5f4f0", padding: "32px" }}>
          <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "22px", color: "#1a1a1a", marginBottom: "12px", fontWeight: 400 }}>Outcome</h2>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "15px", color: "#555", lineHeight: 1.75 }}>{project.outcome}</p>
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 80px", display: "flex", justifyContent: "center" }}>
        <button onClick={onBack} style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "#1a1a1a", color: "#FCFBF9", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.target.style.background = "#333")} onMouseLeave={(e) => (e.target.style.background = "#1a1a1a")}>← Back to All Projects</button>
      </div>
    </div>
  );
}

function WorkSection({ onProjectClick }) {
  return (
    <section id="work" style={{ padding: "80px 32px", maxWidth: "900px", margin: "0 auto" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>Selected Work</p>
      <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#1a1a1a", marginBottom: "48px", fontWeight: 400, letterSpacing: "-0.02em" }}>Projects</h2>
      {PROJECTS.map((project, i) => (<ProjectCard key={project.id} project={project} index={i} onClick={() => onProjectClick(project)} />))}
    </section>
  );
}

function About() {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <section id="about" style={{ padding: "80px 32px", maxWidth: "900px", margin: "0 auto" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>About</p>
      <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#1a1a1a", marginBottom: "24px", fontWeight: 400 }}>A bit about me</h2>
      <img src="/images/headshot.jpg" alt="Jacob Brown at the summit of Mt. Fuji" onClick={() => setShowLightbox(true)} style={{ width: "340px", height: "auto", objectFit: "cover", borderRadius: "4px", marginBottom: "32px", border: "1px solid rgba(0,0,0,0.08)", cursor: "pointer", transition: "transform 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
      {showLightbox && (
        <div onClick={() => setShowLightbox(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", cursor: "zoom-out" }}>
          <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
            <img src="/images/headshot.jpg" alt="Jacob Brown at the summit of Mt. Fuji" style={{ maxWidth: "100%", maxHeight: "85vh", display: "block", boxShadow: "0 20px 80px rgba(0,0,0,0.4)" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textAlign: "center", marginTop: "12px" }}>At the top of Mount Fuji, Japan</p>
          </div>
        </div>
      )}
      <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 400px" }}>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>I'm Jacob Brown, a rising junior at UNC Chapel Hill pursuing a double major in Computer Science and English with a concentration in Creative Writing, graduating in 2027. I'm currently studying abroad in Dublin, Ireland, where I'm building apps on cross-functional teams and studying entrepreneurship.</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "16px" }}>At UNC, I'm a UX Developer on App Team and a UI/UX Designer with CS + Social Good, where I design websites and apps for local nonprofits. I've also won "Most Creative Design" at hackathons and placed <a href="https://www.solhacks.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#1a1a1a", textDecoration: "underline" }}>third at SolHacks 2025</a> building React/Next.js apps.</p>
          <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.8 }}>I care about making things that are creative, perspicuous, and awesome. When I'm not designing, I'm writing, reading, or traveling. The picture of me is at the top of Mount Fuji while visiting Japan.</p>
        </div>
        <div style={{ flex: "0 0 auto" }}>
          {[{ label: "Design", items: "Figma, Wireframing, Prototyping, Product Design, User Research, Information Architecture" }, { label: "Development", items: "React, Next.js, HTML/CSS, JavaScript, Java, Python, Git" }, { label: "Methods", items: "Agile, Design Critiques, Usability Testing, Cross-Functional Collaboration" }].map((s) => (
            <div key={s.label} style={{ marginBottom: "24px" }}>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{s.label}</p>
              <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#555", lineHeight: 1.6, maxWidth: "240px" }}>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 32px 120px", maxWidth: "900px", margin: "0 auto", borderTop: "1px solid rgba(0,0,0,0.06)" }}>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "13px", color: "#999", letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: "12px", fontWeight: 500 }}>Contact</p>
      <h2 style={{ fontFamily: "'DM Serif Display', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#1a1a1a", marginBottom: "24px", fontWeight: 400 }}>Let's connect</h2>
      <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "16px", color: "#555", lineHeight: 1.8, marginBottom: "32px", maxWidth: "500px" }}>I'm currently looking for a UX Design internship for Summer 2026. If you'd like to chat about design, collaboration, or opportunities — I'd love to hear from you.</p>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {[{ label: "Email", value: "fillerjwbrown@gmail.com", href: "mailto:fillerjwbrown@gmail.com" }, { label: "LinkedIn", value: "jake-brown-74a133278", href: "https://www.linkedin.com/in/jake-brown-74a133278/" }, { label: "Phone (US)", value: "(910) 685-5066", href: "tel:9106855066" }, { label: "Phone (Ireland)", value: "+353 85 138 2417", href: "tel:+353851382417" }].map((c) => (
          <a key={c.label} href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined} style={{ textDecoration: "none", padding: "16px 24px", border: "1px solid rgba(0,0,0,0.1)", transition: "all 0.2s", flex: "1 1 180px" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#1a1a1a"; e.currentTarget.style.background = "#1a1a1a"; e.currentTarget.querySelector("p:last-child").style.color = "#fff"; e.currentTarget.querySelector("p:first-child").style.color = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.background = "transparent"; e.currentTarget.querySelector("p:last-child").style.color = "#1a1a1a"; e.currentTarget.querySelector("p:first-child").style.color = "#999"; }}>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#999", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px", transition: "color 0.2s" }}>{c.label}</p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px", color: "#1a1a1a", fontWeight: 500, transition: "color 0.2s" }}>{c.value}</p>
          </a>
        ))}
      </div>
    </section>
  );
}

// ============================================================
// MAIN APP
// ============================================================

export default function Portfolio() {
  const [activeProject, setActiveProject] = useState(null);
  const [activeSection, setActiveSection] = useState("hero");
  const navigateTo = (id) => { if (activeProject) setActiveProject(null); setTimeout(() => { const el = document.getElementById(id); if (el) el.scrollIntoView({ behavior: "smooth" }); }, activeProject ? 50 : 0); };

  useEffect(() => {
    if (activeProject) return;
    const sections = ["hero", "work", "about", "contact"];
    const observer = new IntersectionObserver((entries) => { entries.forEach((e) => { if (e.isIntersecting) setActiveSection(e.target.id); }); }, { threshold: 0.3 });
    sections.forEach((id) => { const el = document.getElementById(id); if (el) observer.observe(el); });
    return () => observer.disconnect();
  }, [activeProject]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=DM+Serif+Display:ital@0;1&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #FCFBF9; -webkit-font-smoothing: antialiased; }
        ::selection { background: rgba(26,26,26,0.12); }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav-toggle { display: block !important; } .card-preview { display: none !important; } }
        @media (min-width: 769px) { .mobile-nav-toggle { display: none !important; } }
      `}</style>
      {!activeProject && <Nav activeSection={activeSection} onNavigate={navigateTo} />}
      {activeProject ? <CaseStudy project={activeProject} onBack={() => setActiveProject(null)} /> : (
        <main><Hero onNavigate={navigateTo} /><WorkSection onProjectClick={setActiveProject} /><About /><Contact /></main>
      )}
      {!activeProject && <footer style={{ padding: "24px 32px", textAlign: "center", borderTop: "1px solid rgba(0,0,0,0.04)" }}><p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#bbb" }}>© 2026 Jacob Brown. Designed & built with care.</p></footer>}
    </>
  );
}
