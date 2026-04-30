import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/27d058df-1613-40ce-a859-9f969b97a803.jpg";
const PROJECT_1 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/27d058df-1613-40ce-a859-9f969b97a803.jpg";
const PROJECT_2 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/7bbec009-7e0a-418e-bf19-2be219177c1c.jpg";
const PROJECT_3 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/24e30f65-4fa6-4a56-8cd8-5ba326c6db45.jpg";

const projects = [
  { image: PROJECT_1, type: "Частная резиденция", area: "1 200 м²", duration: "14 мес.", location: "Рублёво-Успенское шоссе", idx: "01" },
  { image: PROJECT_2, type: "Офисный центр класса А", area: "4 800 м²", duration: "18 мес.", location: "Москва-Сити", idx: "02" },
  { image: PROJECT_3, type: "Загородный дом", area: "850 м²", duration: "11 мес.", location: "Новорижское шоссе", idx: "03" },
];

const steps = [
  { num: "01", title: "Анализ и проект", text: "Изучаем объект, цели и ограничения. Формируем концепцию и предварительный расчёт." },
  { num: "02", title: "Планирование", text: "Детальный план работ, спецификации материалов, согласование с заказчиком." },
  { num: "03", title: "Реализация", text: "Строгое следование проекту. Собственные бригады и проверенные подрядчики." },
  { num: "04", title: "Контроль качества", text: "Пофазная проверка. Сдача объекта без замечаний — наш стандарт." },
];

function useScrollReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Reveal({ children, delay = 0, className = "" }: { children: React.ReactNode; delay?: number; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? "translateY(0)" : "translateY(24px)",
      transition: `opacity 0.85s ease ${delay}ms, transform 0.85s ease ${delay}ms`,
    }}>
      {children}
    </div>
  );
}

// Architectural grid lines SVG background
const GridBg = () => (
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.07 }} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
    <line x1="0" y1="120" x2="800" y2="120" stroke="#b8a06a" strokeWidth="0.5" />
    <line x1="0" y1="380" x2="800" y2="380" stroke="#b8a06a" strokeWidth="0.5" />
    <line x1="200" y1="0" x2="200" y2="500" stroke="#b8a06a" strokeWidth="0.5" />
    <line x1="600" y1="0" x2="600" y2="500" stroke="#b8a06a" strokeWidth="0.5" />
    <circle cx="400" cy="250" r="160" stroke="#b8a06a" strokeWidth="0.5" fill="none" />
    <circle cx="400" cy="250" r="80" stroke="#b8a06a" strokeWidth="0.3" fill="none" />
    <line x1="340" y1="60" x2="460" y2="60" stroke="#b8a06a" strokeWidth="0.4" />
    <line x1="380" y1="40" x2="380" y2="80" stroke="#b8a06a" strokeWidth="0.4" />
    <line x1="420" y1="40" x2="420" y2="80" stroke="#b8a06a" strokeWidth="0.4" />
    <text x="342" y="55" fill="#b8a06a" fontSize="7" fontFamily="monospace" opacity="0.8">55.751244</text>
    <text x="342" y="75" fill="#b8a06a" fontSize="7" fontFamily="monospace" opacity="0.8">37.618423</text>
  </svg>
);

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const G = "hsl(43,40%,60%)"; // gold
  const BG = "#0d0d0d";
  const BG2 = "#111111";

  return (
    <div style={{ background: BG, minHeight: "100vh", color: "#e2d9c8" }}>

      {/* ── NAV ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "68px", padding: "0 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled ? "rgba(13,13,13,0.96)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? `1px solid rgba(184,160,106,0.12)` : "none",
        transition: "all 0.5s ease",
      }}>
        {/* Logo */}
        <div style={{ display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "0.22em", color: G }}>TOD</span>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "6.5px", fontWeight: 400, letterSpacing: "0.28em", color: "rgba(184,160,106,0.55)", textTransform: "uppercase", marginTop: "2px" }}>Architecture of Control</span>
        </div>

        {/* Desktop links */}
        <div className="hidden md:flex" style={{ gap: "44px" }}>
          {[["projects", "ПРОЕКТЫ"], ["about", "УСЛУГИ"], ["process", "О КОМПАНИИ"], ["contact", "КОНТАКТЫ"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.2em", color: "rgba(226,217,200,0.55)",
              transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.55)")}
            >{label}</button>
          ))}
        </div>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: G, cursor: "pointer" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {/* Mobile overlay */}
      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(13,13,13,0.98)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px" }}>
          {[["projects", "ПРОЕКТЫ"], ["about", "УСЛУГИ"], ["process", "О КОМПАНИИ"], ["lead", "ОБСУДИТЬ ПРОЕКТ"], ["contact", "КОНТАКТЫ"]].map(([id, label]) => (
            <button key={id} onClick={() => scrollTo(id)} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600,
              letterSpacing: "0.25em", color: "#e2d9c8",
            }}>{label}</button>
          ))}
        </div>
      )}

      {/* ── HERO ── split layout */}
      <section style={{ position: "relative", height: "100vh", display: "flex", overflow: "hidden" }}>

        {/* Left: text half */}
        <div style={{
          position: "relative", zIndex: 2,
          width: "48%", height: "100%",
          background: BG,
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "0 56px 0 56px",
          overflow: "hidden",
        }}>
          <GridBg />
          <div style={{ position: "relative", zIndex: 2 }}>
            {/* Coordinates top-right inside left panel */}
            <div style={{
              position: "absolute", top: "-180px", right: "0",
              fontFamily: "monospace", fontSize: "9px", lineHeight: 1.7,
              color: "rgba(184,160,106,0.4)", textAlign: "right", letterSpacing: "0.05em"
            }}>
              55.751244<br />37.618423
            </div>

            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "32px" }}>
              Architecture of Control
            </div>

            <h1 style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "clamp(36px, 4.5vw, 58px)",
              fontWeight: 700,
              lineHeight: 1.12,
              letterSpacing: "0.04em",
              color: "#e2d9c8",
              textTransform: "uppercase",
              margin: "0 0 6px",
            }}
              className="animate-fade-up"
            >
              АРХИТЕКТУРА.<br />
              СТРОИТЕЛЬСТВО.<br />
              <span style={{ color: G }}>КОНТРОЛЬ.</span>
            </h1>

            <p style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300,
              lineHeight: 1.85, color: "rgba(226,217,200,0.5)", margin: "28px 0 40px",
              maxWidth: "320px", letterSpacing: "0.03em",
            }}
              className="animate-fade-up delay-200"
            >
              Реализуем сложные проекты премиум-класса для частных и коммерческих клиентов.
            </p>

            <button
              className="animate-fade-up delay-400"
              onClick={() => scrollTo("projects")}
              style={{
                background: "transparent",
                border: `1px solid ${G}`,
                color: G,
                fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px", fontWeight: 600,
                letterSpacing: "0.25em", textTransform: "uppercase",
                padding: "14px 36px", cursor: "pointer",
                transition: "all 0.3s",
                opacity: 0,
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
            >
              СМОТРЕТЬ ПРОЕКТЫ
            </button>

            {/* Bottom tag line */}
            <div style={{
              position: "absolute", bottom: "-180px", left: 0,
              fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 400,
              letterSpacing: "0.3em", color: "rgba(226,217,200,0.2)", textTransform: "uppercase",
              display: "flex", gap: "24px",
            }}>
              <span>СТРОИТЕЛЬСТВО</span>
              <span style={{ color: "rgba(184,160,106,0.3)" }}>|</span>
              <span>РЕМОНТ</span>
              <span style={{ color: "rgba(184,160,106,0.3)" }}>|</span>
              <span>УПРАВЛЕНИЕ ПРОЕКТАМИ</span>
            </div>
          </div>
        </div>

        {/* Right: image half */}
        <div style={{ position: "relative", flex: 1, overflow: "hidden" }}>
          <img src={HERO_IMAGE} alt="TOD STROY" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.1) 40%, rgba(13,13,13,0.2) 100%)" }} />

          {/* Slide counter */}
          <div style={{
            position: "absolute", bottom: "48px", right: "40px",
            fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300,
            color: "rgba(226,217,200,0.5)", letterSpacing: "0.1em",
            display: "flex", alignItems: "center", gap: "6px",
          }}>
            <span style={{ fontSize: "20px", fontWeight: 600, color: G }}>01</span>
            <span style={{ fontSize: "14px" }}>/</span>
            <span>06</span>
          </div>

          {/* Vertical line accent */}
          <div style={{ position: "absolute", left: 0, top: "20%", width: "1px", height: "60%", background: `linear-gradient(to bottom, transparent, ${G}, transparent)`, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <Reveal>
        <div style={{ borderTop: `1px solid rgba(184,160,106,0.12)`, borderBottom: `1px solid rgba(184,160,106,0.12)`, padding: "44px 56px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "32px", maxWidth: "1000px", margin: "0 auto" }}>
            {[["12+", "лет на рынке"], ["200+", "реализованных объектов"], ["450 000", "м² построено"], ["98%", "проектов сданы в срок"]].map(([num, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "38px", fontWeight: 700, color: G, lineHeight: 1, letterSpacing: "-0.02em" }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── ABOUT / SERVICES ── */}
      <section id="about" style={{ padding: "100px 56px", background: BG2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: "80px", alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>О компании</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.15 }}>
                  МЫ СОЗДАЁМ<br />ПРОСТРАНСТВА,<br /><span style={{ color: G }}>КОТОРЫЕ<br />ВЫДЕРЖИВАЮТ<br />ВРЕМЯ.</span>
                </h2>
                <div style={{ width: "40px", height: "1px", background: G, marginBottom: "28px" }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.9, color: "rgba(226,217,200,0.55)" }}>
                  Контролируем каждый этап — от концепции до реализации. Работаем с объектами, где важна точность, сроки и уровень исполнения.
                </p>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {[
                  ["КОНТРОЛЬ", "Единый руководитель на весь цикл проекта"],
                  ["КАЧЕСТВО", "Только материалы высшего класса"],
                  ["РЕЗУЛЬТАТ", "98% объектов сданы в срок"],
                  ["КОМАНДА", "Архитекторы, инженеры, технадзор"],
                ].map(([title, text]) => (
                  <div key={title} style={{ background: BG2, padding: "32px 24px", borderBottom: "1px solid rgba(184,160,106,0.08)" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.22em", color: G, marginBottom: "12px" }}>{title}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.7 }}>{text}</div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROJECTS ── */}
      <section id="projects" style={{ padding: "100px 56px 0", background: BG }}>
        <Reveal>
          <div style={{ maxWidth: "1100px", margin: "0 auto 48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Реализованные объекты</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: 0 }}>ПРОЕКТЫ</h2>
            </div>
            <button onClick={() => scrollTo("lead")} style={{
              background: "none", border: "none", cursor: "pointer",
              fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500,
              letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase",
              transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.35)")}
            >ВСЕ ПРОЕКТЫ →</button>
          </div>
        </Reveal>

        {/* Featured project big + small list */}
        <div style={{ maxWidth: "1100px", margin: "0 auto 100px", display: "grid", gridTemplateColumns: "1fr 320px", gap: "2px" }}>
          <Reveal>
            <div style={{ position: "relative", height: "560px", overflow: "hidden", cursor: "pointer" }}>
              <img src={projects[activeProject].image} alt={projects[activeProject].type}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.1) 60%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px 36px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "10px" }}>{projects[activeProject].location}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "16px" }}>{projects[activeProject].type}</div>
                <div style={{ display: "flex", gap: "40px" }}>
                  {[["Площадь", projects[activeProject].area], ["Срок", projects[activeProject].duration]].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase", marginBottom: "4px" }}>{k}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 600, color: G, letterSpacing: "0.05em" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              {/* Index */}
              <div style={{ position: "absolute", top: "28px", right: "28px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, color: "rgba(226,217,200,0.2)", letterSpacing: "0.1em" }}>
                <span style={{ fontSize: "28px", color: "rgba(184,160,106,0.25)", fontWeight: 700 }}>{projects[activeProject].idx}</span>
              </div>
            </div>
          </Reveal>

          {/* Side list */}
          <Reveal delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", height: "560px" }}>
              {projects.map((p, i) => (
                <div key={i} onClick={() => setActiveProject(i)} style={{
                  flex: 1, position: "relative", overflow: "hidden", cursor: "pointer",
                  border: i === activeProject ? `1px solid rgba(184,160,106,0.35)` : "1px solid transparent",
                  transition: "border-color 0.3s",
                }}>
                  <img src={p.image} alt={p.type} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", filter: i === activeProject ? "none" : "brightness(0.35) saturate(0)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.3)" }} />
                  <div style={{ position: "absolute", bottom: "16px", left: "16px", right: "16px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: i === activeProject ? G : "rgba(226,217,200,0.3)", textTransform: "uppercase", marginBottom: "4px" }}>{p.idx}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 600, letterSpacing: "0.06em", textTransform: "uppercase", color: i === activeProject ? "#e2d9c8" : "rgba(226,217,200,0.4)" }}>{p.type}</div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "100px 56px", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ marginBottom: "64px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Как мы работаем</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: 0 }}>
                СИСТЕМА,<br />А НЕ <span style={{ color: G }}>СЛУЧАЙНОСТЬ</span>
              </h2>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ background: "#0a0a0a", padding: "40px 28px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "48px", fontWeight: 800, color: "rgba(184,160,106,0.05)", lineHeight: 1, letterSpacing: "-0.02em" }}>{s.num}</div>
                  <div style={{ width: "28px", height: "1px", background: G, marginBottom: "24px" }} />
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "14px" }}>{s.title}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85 }}>{s.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── LEAD MAGNET ── */}
      <section id="lead" style={{ padding: "100px 56px", background: BG2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
          <GridBg />
        </div>
        <Reveal>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Бесплатно</div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 20px", lineHeight: 1.15 }}>
              ПОЛУЧИТЕ РАСЧЁТ<br />СТОИМОСТИ ПРОЕКТА
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.9, letterSpacing: "0.04em", marginBottom: "52px" }}>
              Бесплатная консультация по вашему объекту.<br />Выезд специалиста и предварительный расчёт — без обязательств.
            </p>

            {sent ? (
              <div style={{ padding: "52px 40px", border: `1px solid rgba(184,160,106,0.25)` }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: "12px" }}>ЗАЯВКА ПРИНЯТА</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>Свяжемся с вами в течение 2 часов</div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: "380px", margin: "0 auto" }}>
                {["name", "phone"].map((field, i) => (
                  <div key={field} style={{ borderBottom: `1px solid rgba(184,160,106,0.2)`, marginBottom: "28px" }}>
                    <input
                      style={{
                        background: "transparent", border: "none", outline: "none",
                        width: "100%", padding: "12px 0",
                        fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300,
                        letterSpacing: "0.06em", color: "#e2d9c8",
                      }}
                      placeholder={i === 0 ? "Ваше имя" : "Телефон"}
                      type={i === 1 ? "tel" : "text"}
                      value={field === "name" ? form.name : form.phone}
                      onChange={e => setForm({ ...form, [field]: e.target.value })}
                      required
                      onFocus={ev => (ev.currentTarget.parentElement!.style.borderBottomColor = G)}
                      onBlur={ev => (ev.currentTarget.parentElement!.style.borderBottomColor = "rgba(184,160,106,0.2)")}
                    />
                  </div>
                ))}
                <button type="submit" style={{
                  background: G, border: `1px solid ${G}`, color: BG,
                  fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.25em", textTransform: "uppercase",
                  padding: "16px 40px", cursor: "pointer", marginTop: "8px",
                  transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                >ПОЛУЧИТЬ РАСЧЁТ БЕСПЛАТНО</button>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: "rgba(226,217,200,0.2)", letterSpacing: "0.05em", marginTop: "16px" }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </section>

      {/* ── CONTACTS ── */}
      <section id="contact" style={{ padding: "72px 56px", borderTop: "1px solid rgba(184,160,106,0.1)", background: "#090909" }}>
        <Reveal>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px", marginBottom: "48px" }}>
              {/* Logo */}
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "28px", fontWeight: 800, letterSpacing: "0.15em", color: G, lineHeight: 1 }}>TOD</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "rgba(226,217,200,0.25)", marginTop: "4px" }}>STROY</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", letterSpacing: "0.25em", color: "rgba(184,160,106,0.35)", textTransform: "uppercase", marginTop: "2px" }}>Architecture of Control</div>
              </div>

              <div>
                <a href="tel:+74951234567" style={{
                  fontFamily: "'Montserrat', sans-serif", fontSize: "26px", fontWeight: 300,
                  letterSpacing: "0.06em", color: "#e2d9c8", textDecoration: "none",
                  display: "block", marginBottom: "8px", transition: "color 0.3s",
                }}
                  onMouseEnter={e => (e.currentTarget.style.color = G)}
                  onMouseLeave={e => (e.currentTarget.style.color = "#e2d9c8")}
                >+7 (495) 123-45-67</a>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(226,217,200,0.3)" }}>ПН–ПТ, 9:00–19:00</div>
              </div>

              <button onClick={() => scrollTo("lead")} style={{
                background: "transparent", border: `1px solid ${G}`,
                color: G, fontFamily: "'Montserrat', sans-serif",
                fontSize: "9px", fontWeight: 700, letterSpacing: "0.25em",
                textTransform: "uppercase", padding: "14px 36px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >СВЯЗАТЬСЯ</button>
            </div>

            {/* Bottom bar */}
            <div style={{ borderTop: "1px solid rgba(184,160,106,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(226,217,200,0.18)" }}>© 2024 TOD STROY. Все права защищены.</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(226,217,200,0.18)" }}>МОСКВА, РОССИЯ</div>
            </div>
          </div>
        </Reveal>
      </section>

    </div>
  );
}
