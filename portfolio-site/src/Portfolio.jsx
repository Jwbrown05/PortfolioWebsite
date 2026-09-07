import { useState, useEffect, useRef } from "react";

// ============================================================
// JACOB BROWN — UX DESIGN PORTFOLIO
// Clean minimal, editorial typography, warm neutrals
// ============================================================

const IMG = "/images/";

const PROJECTS = [
  {
    id: "invictus",
    title: "Invictus Bakery",
    subtitle: "UI/UX Designer · NYC Nonprofit",
    role: "UI/UX Designer",
    timeline: "2026 – Present",
    tags: ["Figma", "Admin Tooling", "Access & Permissions", "Contractor Pipeline"],
    color: "#8B5A2B",
    accent: "#C68B4E",
    figmaUrl: "https://www.figma.com/design/XWpDUfkT0FveHSegLtgjmp/Invictus-Bakery-Dashboard?node-id=12-956&t=VhndRB5tCyem6gXm-1",
    summary: "Designing an internal operations dashboard for Invictus Bakery, a NYC-based nonprofit, replacing a manual spreadsheet workflow with a proper admin tool — while also helping build out the org's technical contractor pipeline.",
    context: "Invictus Bakery needed a way to manage day-to-day operations that didn't rely on passing spreadsheets back and forth. Staff needed different levels of access depending on their role, and the org needed a lightweight but reliable way to bring on designers, developers, and data contractors to keep building the product.",
    process: [
      { heading: "User Flows & Wireframes", text: "Started by mapping out the core user flows for staff and admins, then moved into wireframes covering the main dashboard views before jumping into high-fidelity Figma work.", images: [] },
      { heading: "High-Fidelity UI & Interaction Specs", text: "Took the wireframes through to high-fidelity UI, writing out interaction specs so the design intent translated cleanly for whoever picked up development. This is still ongoing as new requests come in.", images: [] },
      { heading: "Access, Permissions & Contractor Pipeline", text: "Behind the scenes, helped get the org's web app up and running — setting up secure logins and different permission levels for staff, which gave a close view of how a design actually gets built. Also worked on building out the organization's contractor pipeline, sourcing and coordinating designers, developers, and data talent to support the product.", images: [] },
    ],
    outcome: "The operations dashboard is in active, ongoing development, with new requests like Variable Compensation views continuing to come in. The contractor pipeline work continues in parallel to support the build.",
  },
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
    outcome: "Delivered a responsive, professional admin interface that replaced the old spreadsheet system. Currently continuing work on Variable Compensation and other requests for OCSL.",
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
    outcome: "The app moved into active development with the team in Dublin, built using the designs and research I produced during the program.",
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
            <img src={img.src} alt={img.caption} style={{ width: "100%", maxHeight: img.maxHeight || "none", objectFit: img.maxHeight ? "contain" : "initial", display: "block", border: "1px solid rgba(42,36,32,0.12)", background: "#E8DFC9" }} />
            {img.caption && <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#9C8F7C", marginTop: "6px", lineHeight: 1.4 }}>{img.caption}</p>}
          </div>
        ))}
      </div>
      {lightbox && (
        <div onClick={() => setLightbox(null)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", cursor: "zoom-out" }}>
          <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
            <img src={lightbox.src} alt={lightbox.caption} style={{ maxWidth: "100%", maxHeight: "85vh", display: "block", boxShadow: "0 20px 80px rgba(0,0,0,0.4)" }} />
            {lightbox.caption && <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textAlign: "center", marginTop: "12px" }}>{lightbox.caption}</p>}
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
    <nav style={{ position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: scrolled ? "12px 32px" : "20px 32px", background: scrolled ? "rgba(242,234,216,0.95)" : "transparent", backdropFilter: scrolled ? "blur(12px)" : "none", borderBottom: scrolled ? "1px solid rgba(42,36,32,0.10)" : "none", transition: "all 0.3s ease", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <span onClick={() => onNavigate("hero")} style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "20px", color: "#2A2420", cursor: "pointer", letterSpacing: "-0.02em" }}>Jacob Brown</span>
      <div style={{ display: "flex", gap: "32px", alignItems: "center" }} className="desktop-nav">
        {["Work", "About", "Contact"].map((item) => (
          <span key={item} onClick={() => onNavigate(item.toLowerCase())} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: activeSection === item.toLowerCase() ? "#2A2420" : "#9C8F7C", cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500, transition: "color 0.2s" }}>{item}</span>
        ))}
      </div>
      <div className="mobile-nav-toggle" onClick={() => setMobileOpen(!mobileOpen)} style={{ display: "none", cursor: "pointer", padding: "8px" }}>
        <div style={{ width: 20, height: 2, background: "#2A2420", marginBottom: 5, transition: "all 0.3s", transform: mobileOpen ? "rotate(45deg) translate(3px,3px)" : "none" }} />
        <div style={{ width: 20, height: 2, background: "#2A2420", marginBottom: 5, opacity: mobileOpen ? 0 : 1, transition: "all 0.3s" }} />
        <div style={{ width: 20, height: 2, background: "#2A2420", transition: "all 0.3s", transform: mobileOpen ? "rotate(-45deg) translate(3px,-3px)" : "none" }} />
      </div>
      {mobileOpen && (
        <div style={{ position: "absolute", top: "100%", left: 0, right: 0, background: "rgba(242,234,216,0.98)", padding: "16px 32px", display: "flex", flexDirection: "column", gap: "16px", borderBottom: "1px solid rgba(42,36,32,0.10)" }}>
          {["Work", "About", "Contact"].map((item) => (
            <span key={item} onClick={() => { onNavigate(item.toLowerCase()); setMobileOpen(false); }} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: "#2A2420", cursor: "pointer", letterSpacing: "0.04em", textTransform: "uppercase", fontWeight: 500 }}>{item}</span>
          ))}
        </div>
      )}
    </nav>
  );
}

function Hero({ onNavigate }) {
  return (
    <section id="hero" style={{ minHeight: "100vh", display: "flex", alignItems: "center", padding: "140px 32px 80px", maxWidth: "1080px", margin: "0 auto" }}>
      <div style={{ display: "flex", gap: "64px", flexWrap: "wrap", alignItems: "center", width: "100%" }}>
        <div style={{ flex: "1 1 520px", minWidth: "280px" }}>
          <span style={{ display: "inline-block", fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#F2EAD8", background: "#B5502B", letterSpacing: "0.04em", padding: "5px 12px", borderRadius: "3px", marginBottom: "22px", fontWeight: 600 }}>UX Designer & Developer</span>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(40px, 6.4vw, 68px)", color: "#2A2420", lineHeight: 1.1, marginBottom: "28px", letterSpacing: "-0.02em", fontWeight: 500 }}>
            I design products that feel{" "}
            <span style={{ position: "relative", display: "inline-block", fontStyle: "italic" }}>
              intuitive
              <svg viewBox="0 0 220 14" style={{ position: "absolute", left: 0, bottom: "-6px", width: "100%", height: "14px", overflow: "visible" }}>
                <path d="M3 9 C 50 2, 170 2, 217 9" fill="none" stroke="#B5502B" strokeWidth="4" strokeLinecap="round" pathLength="1" style={{ strokeDasharray: 1, strokeDashoffset: 1, animation: "draw 0.9s 0.5s cubic-bezier(0.65,0,0.35,1) forwards" }} />
              </svg>
            </span>
            {" "}& intentional.
          </h1>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "18px", lineHeight: 1.7, color: "#6E6355", maxWidth: "480px", marginBottom: "40px" }}>Computer Science & English student at UNC Chapel Hill. I turn user research into polished interfaces, from wireframes to high-fidelity prototypes.</p>
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
            <button onClick={() => onNavigate("work")} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "#2A2420", color: "#F2EAD8", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.target.style.background = "#4A3F33")} onMouseLeave={(e) => (e.target.style.background = "#2A2420")}>View Work</button>
            <a href="mailto:fillerjwbrown@gmail.com" style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "transparent", color: "#2A2420", border: "1.5px solid #2A2420", textDecoration: "none" }}>Get in Touch</a>
          </div>
        </div>
        <div className="hero-masthead" style={{ flex: "0 0 auto", borderLeft: "1px solid rgba(42,36,32,0.16)", paddingLeft: "40px", minWidth: "220px" }}>
          {[
            { label: "Based in", value: "Chapel Hill, NC" },
            { label: "Studying", value: "CS & English" },
            { label: "Grad year", value: "2027" },
            { label: "Currently", value: "Invictus Bakery, App Team, CS + Social Good" },
          ].map((f) => (
            <div key={f.label} style={{ marginBottom: "22px" }}>
              <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "#9C8F7C", letterSpacing: "0.08em", marginBottom: "4px" }}>{f.label}</p>
              <p style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "17px", color: "#2A2420", maxWidth: "220px", lineHeight: 1.4 }}>{f.value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, featured, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div onClick={onClick} onMouseEnter={() => setHovered(true)} onMouseLeave={() => setHovered(false)} style={{ cursor: "pointer" }}>
      <div style={{ background: project.color, minHeight: featured ? "300px" : "240px", display: "flex", flexDirection: featured ? "row" : "column", position: "relative", overflow: "hidden", transition: "transform 0.3s ease, box-shadow 0.3s ease", transform: hovered ? "translateY(-4px)" : "none", boxShadow: hovered ? "0 20px 60px rgba(42,36,32,0.20)" : "0 4px 20px rgba(42,36,32,0.10)" }}>
        {/* Text side */}
        <div style={{ flex: featured ? "1 1 55%" : "1 1 auto", padding: featured ? "48px 40px" : "32px 28px", display: "flex", flexDirection: "column", justifyContent: "flex-end", zIndex: 1 }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: "8px" }}>{project.subtitle}</p>
          <h3 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: featured ? "clamp(24px, 4vw, 32px)" : "22px", color: "#fff", fontWeight: 500, marginBottom: "12px" }}>{project.title}</h3>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: featured ? "15px" : "14px", color: "rgba(255,255,255,0.7)", lineHeight: 1.6, maxWidth: featured ? "500px" : "none" }}>{project.summary}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "20px" }}>
            {project.tags.slice(0, featured ? project.tags.length : 3).map((tag) => (<span key={tag} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.6)", letterSpacing: "0.04em", padding: "4px 10px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{tag}</span>))}
          </div>
        </div>
        {/* Image side */}
        {project.preview && (
          <div style={{ flex: featured ? "0 0 40%" : "0 0 auto", display: "flex", alignItems: "center", justifyContent: "center", padding: featured ? "24px 24px 24px 0" : "0 20px 20px", overflow: "hidden" }} className="card-preview">
            <img
              src={project.preview}
              alt={`${project.title} preview`}
              style={{
                maxWidth: "100%",
                maxHeight: featured ? "260px" : "160px",
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
        <div style={{ position: "absolute", bottom: "20px", right: "20px", width: "36px", height: "36px", display: "flex", alignItems: "center", justifyContent: "center", border: "1px solid rgba(255,255,255,0.25)", borderRadius: "50%", opacity: hovered ? 1 : 0.4, transform: hovered ? "translate(0,0)" : "translate(-4px,4px)", transition: "all 0.3s ease" }}>
          <svg width="13" height="13" viewBox="0 0 14 14" fill="none"><path d="M1 13L13 1M13 1H3M13 1V11" stroke="white" strokeWidth="1.5" /></svg>
        </div>
      </div>
    </div>
  );
}

function CaseStudy({ project, onBack }) {
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return (
    <div style={{ minHeight: "100vh", background: "#F2EAD8" }}>
      <div style={{ background: project.color, padding: "64px 32px 80px" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto" }}>
          <button onClick={onBack} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.6)", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.06em", textTransform: "uppercase", marginBottom: "32px", display: "flex", alignItems: "center", gap: "8px" }}>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M10 12L6 8L10 4" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" /></svg>Back to Projects
          </button>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.5)", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "12px" }}>{project.subtitle} · {project.timeline}</p>
          <h1 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(32px, 6vw, 52px)", color: "#fff", fontWeight: 400, marginBottom: "20px", letterSpacing: "-0.02em" }}>{project.title}</h1>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "17px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, maxWidth: "600px" }}>{project.summary}</p>
          <div style={{ display: "flex", gap: "8px", flexWrap: "wrap", marginTop: "24px" }}>
            {project.tags.map((tag) => (<span key={tag} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "rgba(255,255,255,0.55)", letterSpacing: "0.04em", padding: "5px 12px", border: "1px solid rgba(255,255,255,0.2)", textTransform: "uppercase" }}>{tag}</span>))}
          </div>
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", fontFamily: "'Work Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 24px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}>
              Visit Live Site<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" /></svg>
            </a>
          )}
          {project.figmaUrl && (
            <a href={project.figmaUrl} target="_blank" rel="noopener noreferrer" style={{ display: "inline-flex", alignItems: "center", gap: "8px", marginTop: "20px", marginLeft: project.liveUrl ? "12px" : "0", fontFamily: "'Work Sans', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "12px 24px", background: "rgba(255,255,255,0.15)", color: "#fff", border: "1px solid rgba(255,255,255,0.3)", textDecoration: "none", transition: "all 0.2s" }} onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.25)"; }} onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.15)"; }}>
              View Figma<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M1 11L11 1M11 1H3M11 1V9" stroke="white" strokeWidth="1.5" /></svg>
            </a>
          )}
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "40px 32px", display: "flex", gap: "48px", flexWrap: "wrap", borderBottom: "1px solid rgba(42,36,32,0.10)" }}>
        {[{ label: "Role", value: project.role }, { label: "Timeline", value: project.timeline }, { label: "Tools", value: project.tools || "Figma" }].map((m) => (
          <div key={m.label}>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "#9C8F7C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px" }}>{m.label}</p>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "15px", color: "#2A2420", fontWeight: 500 }}>{m.value}</p>
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 32px 0" }}>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "28px", color: "#2A2420", marginBottom: "16px", fontWeight: 400 }}>Context</h2>
        <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", color: "#6E6355", lineHeight: 1.8 }}>{project.context}</p>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "48px 32px" }}>
        <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "28px", color: "#2A2420", marginBottom: "32px", fontWeight: 400 }}>Process</h2>
        {project.process.map((step, i) => (
          <div key={i} style={{ marginBottom: "48px", paddingLeft: "24px", borderLeft: `2px solid ${project.accent}` }}>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "#9C8F7C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>Step {i + 1}</p>
            <h3 style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "18px", color: "#2A2420", fontWeight: 600, marginBottom: "10px" }}>{step.heading}</h3>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "15px", color: "#6E6355", lineHeight: 1.75 }}>{step.text}</p>
            <ImageGallery images={step.images} />
          </div>
        ))}
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 64px" }}>
        <div style={{ background: "#E8DFC9", padding: "32px" }}>
          <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "22px", color: "#2A2420", marginBottom: "12px", fontWeight: 400 }}>Outcome</h2>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "15px", color: "#6E6355", lineHeight: 1.75 }}>{project.outcome}</p>
        </div>
      </div>
      <div style={{ maxWidth: "800px", margin: "0 auto", padding: "0 32px 80px", display: "flex", justifyContent: "center" }}>
        <button onClick={onBack} style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", fontWeight: 600, letterSpacing: "0.04em", textTransform: "uppercase", padding: "14px 32px", background: "#2A2420", color: "#F2EAD8", border: "none", cursor: "pointer" }} onMouseEnter={(e) => (e.target.style.background = "#4A3F33")} onMouseLeave={(e) => (e.target.style.background = "#2A2420")}>← Back to All Projects</button>
      </div>
    </div>
  );
}

function WorkSection({ onProjectClick }) {
  const [featured, ...rest] = PROJECTS;
  return (
    <section id="work" style={{ padding: "80px 32px", maxWidth: "1080px", margin: "0 auto" }}>
      <span style={{ display: "inline-block", fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#F2EAD8", background: "#B5502B", letterSpacing: "0.04em", padding: "5px 12px", borderRadius: "3px", marginBottom: "16px", fontWeight: 600 }}>Selected Work</span>
      <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#2A2420", marginBottom: "40px", fontWeight: 500, letterSpacing: "-0.01em" }}>Projects</h2>
      <div style={{ marginBottom: "24px" }}>
        <ProjectCard project={featured} featured onClick={() => onProjectClick(featured)} />
      </div>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "24px" }}>
        {rest.map((project) => (<ProjectCard key={project.id} project={project} onClick={() => onProjectClick(project)} />))}
      </div>
    </section>
  );
}

function About() {
  const [showLightbox, setShowLightbox] = useState(false);
  return (
    <section id="about" style={{ padding: "80px 32px", maxWidth: "900px", margin: "0 auto" }}>
      <span style={{ display: "inline-block", fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#F2EAD8", background: "#B5502B", letterSpacing: "0.04em", padding: "5px 12px", borderRadius: "3px", marginBottom: "16px", fontWeight: 600 }}>About</span>
      <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#2A2420", marginBottom: "24px", fontWeight: 400 }}>A bit about me</h2>
      <img src="/images/headshot.jpg" alt="Jacob Brown at the summit of Mt. Fuji" onClick={() => setShowLightbox(true)} style={{ width: "340px", height: "auto", objectFit: "cover", borderRadius: "4px", marginBottom: "32px", border: "1px solid rgba(42,36,32,0.12)", cursor: "pointer", transition: "transform 0.2s" }} onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.01)")} onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")} />
      {showLightbox && (
        <div onClick={() => setShowLightbox(false)} style={{ position: "fixed", top: 0, left: 0, right: 0, bottom: 0, background: "rgba(0,0,0,0.85)", zIndex: 1000, display: "flex", alignItems: "center", justifyContent: "center", padding: "32px", cursor: "zoom-out" }}>
          <div style={{ maxWidth: "90vw", maxHeight: "90vh" }}>
            <img src="/images/headshot.jpg" alt="Jacob Brown at the summit of Mt. Fuji" style={{ maxWidth: "100%", maxHeight: "85vh", display: "block", boxShadow: "0 20px 80px rgba(0,0,0,0.4)" }} />
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: "rgba(255,255,255,0.7)", textAlign: "center", marginTop: "12px" }}>At the top of Mount Fuji, Japan</p>
          </div>
        </div>
      )}
      <div style={{ display: "flex", gap: "60px", flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ flex: "1 1 400px" }}>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", color: "#6E6355", lineHeight: 1.8, marginBottom: "16px" }}>I'm Jacob Brown, a rising junior at UNC Chapel Hill pursuing a double major in Computer Science and English with a concentration in Creative Writing, graduating in 2027. I recently completed a semester abroad in Dublin, Ireland, where I built apps on cross-functional teams and studied entrepreneurship.</p>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", color: "#6E6355", lineHeight: 1.8, marginBottom: "16px" }}>At UNC, I'm a UX Developer on App Team and a UI/UX Designer with CS + Social Good, where I design websites and apps for local nonprofits. I'm also a UI/UX Designer for Invictus Bakery, a NYC-based nonprofit, where I'm designing their internal operations dashboard and helping build out their contractor pipeline. I've also won "Most Creative Design" at hackathons and placed <a href="https://www.solhacks.com/" target="_blank" rel="noopener noreferrer" style={{ color: "#2A2420", textDecoration: "underline" }}>third at SolHacks 2025</a> building React/Next.js apps.</p>
          <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", color: "#6E6355", lineHeight: 1.8 }}>I care about making things that are creative, perspicuous, and awesome. When I'm not designing, I'm writing, reading, or traveling. The picture of me is at the top of Mount Fuji while visiting Japan.</p>
        </div>
        <div style={{ flex: "0 0 auto" }}>
          {[{ label: "Design", items: "Figma, Wireframing, Prototyping, Product Design, User Research, Information Architecture" }, { label: "Development", items: "React, Next.js, HTML/CSS, JavaScript, Java, Python, Git" }, { label: "Methods", items: "Agile, Design Critiques, Usability Testing, Cross-Functional Collaboration" }].map((s) => (
            <div key={s.label} style={{ marginBottom: "24px" }}>
              <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "#9C8F7C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "6px" }}>{s.label}</p>
              <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: "#6E6355", lineHeight: 1.6, maxWidth: "240px" }}>{s.items}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" style={{ padding: "80px 32px 120px", maxWidth: "900px", margin: "0 auto", borderTop: "1px solid rgba(42,36,32,0.10)" }}>
      <span style={{ display: "inline-block", fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#F2EAD8", background: "#B5502B", letterSpacing: "0.04em", padding: "5px 12px", borderRadius: "3px", marginBottom: "16px", fontWeight: 600 }}>Contact</span>
      <h2 style={{ fontFamily: "'Fraunces', Georgia, serif", fontSize: "clamp(28px, 5vw, 40px)", color: "#2A2420", marginBottom: "24px", fontWeight: 400 }}>Let's connect</h2>
      <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "16px", color: "#6E6355", lineHeight: 1.8, marginBottom: "32px", maxWidth: "500px" }}>I'm currently looking for a UX Design internship for Summer 2027. If you'd like to chat about design, collaboration, or opportunities — I'd love to hear from you.</p>
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {[{ label: "Email", value: "fillerjwbrown@gmail.com", href: "mailto:fillerjwbrown@gmail.com" }, { label: "LinkedIn", value: "jake-brown-74a133278", href: "https://www.linkedin.com/in/jake-brown-74a133278/" }, { label: "Phone", value: "(910) 685-5066", href: "tel:9106855066" }].map((c) => (
          <a key={c.label} href={c.href} target={c.label === "LinkedIn" ? "_blank" : undefined} rel={c.label === "LinkedIn" ? "noopener noreferrer" : undefined} style={{ textDecoration: "none", padding: "16px 24px", border: "1px solid rgba(42,36,32,0.14)", transition: "all 0.2s", flex: "1 1 180px" }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = "#2A2420"; e.currentTarget.style.background = "#2A2420"; e.currentTarget.querySelector("p:last-child").style.color = "#fff"; e.currentTarget.querySelector("p:first-child").style.color = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = "rgba(42,36,32,0.14)"; e.currentTarget.style.background = "transparent"; e.currentTarget.querySelector("p:last-child").style.color = "#2A2420"; e.currentTarget.querySelector("p:first-child").style.color = "#9C8F7C"; }}>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "11px", color: "#9C8F7C", letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: "4px", transition: "color 0.2s" }}>{c.label}</p>
            <p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "14px", color: "#2A2420", fontWeight: 500, transition: "color 0.2s" }}>{c.value}</p>
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
        @import url('https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;1,9..144,400;1,9..144,500&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        html { scroll-behavior: smooth; }
        body { background: #F2EAD8; -webkit-font-smoothing: antialiased; position: relative; }
        body::before { content: ""; position: fixed; inset: 0; pointer-events: none; z-index: 0; opacity: 0.035; mix-blend-mode: multiply; background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='140' height='140'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E"); }
        ::selection { background: rgba(181,80,43,0.18); }
        @keyframes draw { to { stroke-dashoffset: 0; } }
        @media (max-width: 768px) { .desktop-nav { display: none !important; } .mobile-nav-toggle { display: block !important; } .card-preview { display: none !important; } .hero-masthead { border-left: none !important; border-top: 1px solid rgba(42,36,32,0.16) !important; padding-left: 0 !important; padding-top: 28px !important; margin-top: 8px !important; } }
        @media (min-width: 769px) { .mobile-nav-toggle { display: none !important; } }
      `}</style>
      {!activeProject && <Nav activeSection={activeSection} onNavigate={navigateTo} />}
      {activeProject ? <CaseStudy project={activeProject} onBack={() => setActiveProject(null)} /> : (
        <main><Hero onNavigate={navigateTo} /><WorkSection onProjectClick={setActiveProject} /><About /><Contact /></main>
      )}
      {!activeProject && <footer style={{ padding: "24px 32px", textAlign: "center", borderTop: "1px solid rgba(42,36,32,0.08)" }}><p style={{ fontFamily: "'Work Sans', sans-serif", fontSize: "12px", color: "#A79A87" }}>© 2026 Jacob Brown. Designed & built with care.</p></footer>}
    </>
  );
}
