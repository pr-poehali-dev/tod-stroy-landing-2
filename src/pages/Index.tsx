import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Nav, Footer } from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { PROJECTS, IMGS } from "@/data/projects";
import SEO from "@/components/SEO";
import ProjectWizard from "@/components/ProjectWizard";

const HERO_IMAGE = IMGS.p1;
const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";
const BG2 = "#111111";

const GridBg = () => (
  <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: 0.18 }} viewBox="0 0 800 500" preserveAspectRatio="xMidYMid slice">
    {/* Main grid lines */}
    <line x1="0" y1="120" x2="800" y2="120" stroke="#b8a06a" strokeWidth="0.8" />
    <line x1="0" y1="380" x2="800" y2="380" stroke="#b8a06a" strokeWidth="0.8" />
    <line x1="200" y1="0" x2="200" y2="500" stroke="#b8a06a" strokeWidth="0.8" />
    <line x1="600" y1="0" x2="600" y2="500" stroke="#b8a06a" strokeWidth="0.8" />
    {/* Diagonal accent lines */}
    <line x1="0" y1="0" x2="200" y2="120" stroke="#b8a06a" strokeWidth="0.4" opacity="0.5" />
    <line x1="600" y1="0" x2="800" y2="120" stroke="#b8a06a" strokeWidth="0.4" opacity="0.5" />
    {/* Circles */}
    <circle cx="400" cy="250" r="160" stroke="#b8a06a" strokeWidth="0.8" fill="none" />
    <circle cx="400" cy="250" r="80" stroke="#b8a06a" strokeWidth="0.5" fill="none" />
    <circle cx="400" cy="250" r="4" fill="#b8a06a" opacity="0.6" />
    {/* Corner marks */}
    <line x1="0" y1="0" x2="40" y2="0" stroke="#b8a06a" strokeWidth="1" />
    <line x1="0" y1="0" x2="0" y2="40" stroke="#b8a06a" strokeWidth="1" />
    <line x1="760" y1="0" x2="800" y2="0" stroke="#b8a06a" strokeWidth="1" />
    <line x1="800" y1="0" x2="800" y2="40" stroke="#b8a06a" strokeWidth="1" />
    {/* Coord labels */}
    <text x="342" y="48" fill="#b8a06a" fontSize="8" fontFamily="monospace" opacity="0.9">55.751244</text>
    <text x="342" y="62" fill="#b8a06a" fontSize="8" fontFamily="monospace" opacity="0.9">37.618423</text>
    {/* Cross-hair at center */}
    <line x1="390" y1="250" x2="410" y2="250" stroke="#b8a06a" strokeWidth="0.6" />
    <line x1="400" y1="240" x2="400" y2="260" stroke="#b8a06a" strokeWidth="0.6" />
  </svg>
);

const steps = [
  { num: "01", title: "Анализ и проект", text: "Изучаем объект, цели и ограничения. Формируем концепцию и предварительный расчёт." },
  { num: "02", title: "Планирование", text: "Детальный план работ, спецификации материалов, согласование с заказчиком." },
  { num: "03", title: "Реализация", text: "Строгое следование проекту. Собственные бригады и проверенные подрядчики." },
  { num: "04", title: "Контроль качества", text: "Пофазная проверка. Сдача объекта без замечаний — наш стандарт." },
];

export default function Index() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [activeProject, setActiveProject] = useState(0);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div style={{ background: BG, minHeight: "100vh", color: "#e2d9c8" }}>
      <Nav />

      <SEO
        title="ТОД Строй — Дизайнерский ремонт квартир в Москве | С 2008 года"
        description="ТОД Строй — дизайнерский и капитальный ремонт квартир, офисов, загородных домов в Москве. Полный цикл под ключ. От 20 000 руб/м². Опыт с 2008 года. Консультация бесплатна."
        canonical="/"
        keywords="ремонт квартир Москва, дизайнерский ремонт, капитальный ремонт, ремонт под ключ, ТОД строй"
      />

      {/* ── HERO ── split layout */}
      <section className="hero-split">
        {/* Left text */}
        <div className="hero-left">
          <GridBg />
          <div style={{ position: "relative", zIndex: 2 }}>
            <div className="hero-coords" style={{ position: "absolute", top: "-180px", right: "0", fontFamily: "monospace", fontSize: "9px", lineHeight: 1.7, color: "rgba(184,160,106,0.4)", textAlign: "right", letterSpacing: "0.05em" }}>
              55.751244<br />37.618423
            </div>

            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "24px" }}>
              Architecture of Control
            </div>

            <h1 className="animate-fade-up" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 58px)", fontWeight: 700, lineHeight: 1.12, letterSpacing: "0.04em", color: "#e2d9c8", textTransform: "uppercase", margin: "0 0 6px", opacity: 0 }}>
              АРХИТЕКТУРА.<br />СТРОИТЕЛЬСТВО.<br /><span style={{ color: G }}>КОНТРОЛЬ.</span>
            </h1>

            <p className="animate-fade-up delay-200" style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(12px, 1.5vw, 13px)", fontWeight: 300, lineHeight: 1.85, color: "rgba(226,217,200,0.5)", margin: "20px 0 32px", maxWidth: "320px", letterSpacing: "0.03em", opacity: 0 }}>
              Реализуем сложные проекты премиум-класса для частных и коммерческих клиентов.
            </p>

            <button className="animate-fade-up delay-400" onClick={() => navigate("/projects")} style={{
              background: "transparent", border: `1px solid ${G}`, color: G,
              fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600,
              letterSpacing: "0.25em", textTransform: "uppercase",
              padding: "14px 36px", cursor: "pointer", transition: "all 0.3s", opacity: 0,
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
            >СМОТРЕТЬ ПРОЕКТЫ</button>

            <div className="hero-bottom-text" style={{ position: "absolute", bottom: "-180px", left: 0, fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 400, letterSpacing: "0.3em", color: "rgba(226,217,200,0.2)", textTransform: "uppercase", display: "flex", gap: "24px" }}>
              <span>СТРОИТЕЛЬСТВО</span><span style={{ color: "rgba(184,160,106,0.3)" }}>|</span><span>РЕМОНТ</span><span style={{ color: "rgba(184,160,106,0.3)" }}>|</span><span>УПРАВЛЕНИЕ ПРОЕКТАМИ</span>
            </div>
          </div>
        </div>

        {/* Right image */}
        <div className="hero-right">
          <img src={HERO_IMAGE} alt="Дизайнерский ремонт квартир в Москве — ТОД Строй, реализованный объект" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(90deg, rgba(13,13,13,0.6) 0%, rgba(13,13,13,0.1) 40%, rgba(13,13,13,0.2) 100%)" }} />
          <div style={{ position: "absolute", bottom: "48px", right: "40px", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.5)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "6px" }}>
            <span style={{ fontSize: "20px", fontWeight: 600, color: G }}>01</span>
            <span style={{ fontSize: "14px" }}>/</span>
            <span>06</span>
          </div>
          <div style={{ position: "absolute", left: 0, top: "20%", width: "1px", height: "60%", background: `linear-gradient(to bottom, transparent, ${G}, transparent)`, opacity: 0.4 }} />
        </div>
      </section>

      {/* ── STATS ── */}
      <Reveal>
        <div style={{ borderTop: "1px solid rgba(184,160,106,0.12)", borderBottom: "1px solid rgba(184,160,106,0.12)", padding: "clamp(28px,5vw,44px) clamp(16px,5vw,56px)" }}>
          <div className="stats-grid" style={{ maxWidth: "1000px", margin: "0 auto" }}>
            {[["16+", "лет на рынке"], ["200+", "реализованных объектов"], ["2008", "год основания"], ["98%", "проектов сданы в срок"]].map(([num, label]) => (
              <div key={label} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "38px", fontWeight: 700, color: G, lineHeight: 1, letterSpacing: "-0.02em" }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* ── ABOUT ── */}
      <section id="about" style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", background: BG2 }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div className="grid-2col">
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>О компании</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.15 }}>
                  МЫ СОЗДАЁМ<br />ПРОСТРАНСТВА,<br /><span style={{ color: G }}>КОТОРЫЕ<br />ВЫДЕРЖИВАЮТ<br />ВРЕМЯ.</span>
                </h2>
                <div style={{ width: "40px", height: "1px", background: G, marginBottom: "28px" }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, lineHeight: 1.9, color: "rgba(226,217,200,0.55)", marginBottom: "32px" }}>
                  Полный спектр работ по ремонту помещений — от разработки дизайн-проекта до установки освещения, расстановки мебели и генеральной уборки. На рынке с 2008 года.
                </p>
                <button onClick={() => navigate("/about")} style={{
                  background: "none", border: "none", cursor: "pointer",
                  fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600,
                  letterSpacing: "0.2em", color: G, textTransform: "uppercase",
                  display: "flex", alignItems: "center", gap: "10px", padding: 0,
                }}>О КОМПАНИИ →</button>
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

      {/* ── PROJECTS PREVIEW ── */}
      <section id="projects" style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px) 0", background: BG }}>
        <Reveal>
          <div style={{ maxWidth: "1100px", margin: "0 auto 48px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Реализованные объекты</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: 0 }}>ПРОЕКТЫ</h2>
            </div>
            <button onClick={() => navigate("/projects")} style={{
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

        <div style={{ maxWidth: "1100px", margin: "0 auto clamp(48px,8vw,100px)", display: "grid", gridTemplateColumns: "1fr min(320px, 35%)", gap: "2px" }} className="projects-preview-grid">
          <Reveal>
            <div style={{ position: "relative", height: "560px", overflow: "hidden", cursor: "pointer" }} onClick={() => navigate(`/projects/${PROJECTS[activeProject].id}`)}>
              <img src={PROJECTS[activeProject].cover} alt={`Ремонт квартиры — проект ${PROJECTS[activeProject].title}, ${PROJECTS[activeProject].location}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, rgba(13,13,13,0.1) 60%)" }} />
              <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "36px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "10px" }}>{PROJECTS[activeProject].location}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 700, letterSpacing: "0.06em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "16px" }}>{PROJECTS[activeProject].title}</div>
                <div style={{ display: "flex", gap: "40px" }}>
                  {[["Площадь", PROJECTS[activeProject].area], ["Срок", PROJECTS[activeProject].duration]].map(([k, v]) => (
                    <div key={k}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase", marginBottom: "4px" }}>{k}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 600, color: G, letterSpacing: "0.05em" }}>{v}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ position: "absolute", top: "28px", right: "28px", fontFamily: "'Montserrat', sans-serif", fontSize: "28px", fontWeight: 800, color: "rgba(184,160,106,0.15)" }}>{PROJECTS[activeProject].idx}</div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: "flex", flexDirection: "column", gap: "2px", height: "560px" }}>
              {PROJECTS.map((p, i) => (
                <div key={i} onClick={() => setActiveProject(i)} style={{
                  flex: 1, position: "relative", overflow: "hidden", cursor: "pointer",
                  border: i === activeProject ? `1px solid rgba(184,160,106,0.35)` : "1px solid transparent",
                  transition: "border-color 0.3s",
                }}>
                  <img src={p.cover} alt={`Портфолио ТОД Строй — ${p.title}`} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s ease", filter: i === activeProject ? "none" : "brightness(0.35) saturate(0)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "rgba(13,13,13,0.2)" }} />
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

      {/* ── SERVICES PREVIEW ── */}
      <section id="services" style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", background: BG2 }}>
        <Reveal>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "56px" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Что мы делаем</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: 0 }}>УСЛУГИ</h2>
              </div>
              <button onClick={() => navigate("/services")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.35)")}
              >ПОДРОБНЕЕ →</button>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
              {[
                { num: "01", title: "Дизайнерский ремонт", text: "Авторский интерьер с дизайн-проектом — от 35 000 руб/м²." },
                { num: "02", title: "Капитальный ремонт", text: "Полный цикл под ключ: от демонтажа до финишной отделки — от 32 000 руб/м²." },
                { num: "03", title: "Ремонт офисов", text: "Коммерческие объекты в срок и в бюджет — от 20 000 руб/м²." },
                { num: "04", title: "Косметический ремонт", text: "Быстрое обновление без перестройки — от 25 000 руб/м²." },
              ].map((s, i) => (
                <div key={i} onClick={() => navigate("/services")} style={{ background: BG2, padding: "40px 28px", cursor: "pointer", position: "relative", overflow: "hidden", transition: "background 0.3s" }}
                  onMouseEnter={e => (e.currentTarget.style.background = "rgba(184,160,106,0.04)")}
                  onMouseLeave={e => (e.currentTarget.style.background = BG2)}
                >
                  <div style={{ position: "absolute", top: "16px", right: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "44px", fontWeight: 800, color: "rgba(184,160,106,0.05)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ width: "24px", height: "1px", background: G, marginBottom: "20px" }} />
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "12px" }}>{s.title}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85 }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      {/* ── PROCESS ── */}
      <section id="process" style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", background: "#0a0a0a" }}>
        <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
          <Reveal>
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", marginBottom: "64px" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Как мы работаем</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: 0 }}>
                  СИСТЕМА,<br />А НЕ <span style={{ color: G }}>СЛУЧАЙНОСТЬ</span>
                </h2>
              </div>
              <button onClick={() => navigate("/process")} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500, letterSpacing: "0.2em", color: "rgba(226,217,200,0.35)", textTransform: "uppercase", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.35)")}
              >ПОДРОБНЕЕ →</button>
            </div>
          </Reveal>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
            {steps.map((s, i) => (
              <Reveal key={i} delay={i * 80}>
                <div style={{ background: "#0a0a0a", padding: "40px 28px", position: "relative", overflow: "hidden" }}>
                  <div style={{ position: "absolute", top: "20px", right: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "48px", fontWeight: 800, color: "rgba(184,160,106,0.05)", lineHeight: 1 }}>{s.num}</div>
                  <div style={{ width: "28px", height: "1px", background: G, marginBottom: "24px" }} />
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "14px" }}>{s.title}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85 }}>{s.text}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section style={{ padding: "0" }}>
        <div className="comm-grid">
          {[
            { img: IMGS.p1, title: "Частные резиденции", sub: "Дома и особняки от 300 м²", path: "/residential" },
            { img: IMGS.p2, title: "Коммерческие объекты", sub: "Офисы, торговые центры, гостиницы", path: "/commercial" },
          ].map(item => (
            <div key={item.path} onClick={() => navigate(item.path)} style={{ position: "relative", height: "clamp(220px, 40vw, 440px)", overflow: "hidden", cursor: "pointer" }}>
              <img src={item.img} alt={`${item.title} — ремонт в Москве, ТОД Строй`}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.1) 55%)" }} />
              <div style={{ position: "absolute", bottom: "36px", left: "36px" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "24px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", marginBottom: "8px" }}>{item.title}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── PROJECT WIZARD ── */}
      <ProjectWizard />

      {/* ── LEAD FORM ── */}
      <section id="lead" style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", background: BG2, position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
          <GridBg />
        </div>
        <Reveal>
          <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center", position: "relative", zIndex: 2 }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Бесплатная консультация</div>
            <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 4vw, 48px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 20px", lineHeight: 1.15 }}>
              ПОЛУЧИТЕ РАСЧЁТ<br />СТОИМОСТИ ПРОЕКТА
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.9, letterSpacing: "0.04em", marginBottom: "52px" }}>
              Выезд специалиста и предварительный расчёт — без обязательств.<br />Консультация бесплатна. Ответим в течение <span style={{ color: G }}>15 минут.</span>
            </p>

            {sent ? (
              <div style={{ padding: "52px 40px", border: `1px solid rgba(184,160,106,0.25)` }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase", color: G, marginBottom: "12px" }}>ЗАЯВКА ПРИНЯТА</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>Свяжемся с вами в течение 15 минут</div>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setSent(true); }} style={{ display: "flex", flexDirection: "column", gap: "0", maxWidth: "380px", margin: "0 auto" }}>
                {["name", "phone"].map((field, i) => (
                  <div key={field} style={{ borderBottom: "1px solid rgba(184,160,106,0.2)", marginBottom: "28px" }}>
                    <input
                      style={{ background: "transparent", border: "none", outline: "none", width: "100%", padding: "12px 0", fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, letterSpacing: "0.06em", color: "#e2d9c8" }}
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
                  padding: "16px 40px", cursor: "pointer", marginTop: "8px", transition: "all 0.3s",
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

      <Footer />
    </div>
  );
}