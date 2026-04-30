import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";
import SEO, { SCHEMA_BREADCRUMB } from "@/components/SEO";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const FILTERS = [
  { key: "all", label: "ВСЕ" },
  { key: "residential", label: "ЧАСТНЫЕ" },
  { key: "commercial", label: "КОММЕРЧЕСКИЕ" },
];

export default function Projects() {
  const navigate = useNavigate();
  const [filter, setFilter] = useState("all");
  const filtered = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.type === filter);

  return (
    <Layout>
      <SEO
        title="Портфолио — реализованные проекты ремонта квартир и домов"
        description="Портфолио ТОД Строй: реализованные проекты дизайнерского ремонта квартир, загородных домов и офисов в Москве. Фото работ, описания объектов, сроки и площади."
        canonical="/projects"
        keywords="портфолио ремонт квартир, примеры ремонта, фото ремонта квартиры"
        schema={SCHEMA_BREADCRUMB([{ name: "Главная", url: "/" }, { name: "Проекты", url: "/projects" }])}
      />
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 56px 64px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>
                TOD STROY — портфолио
              </div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.1 }}>
                РЕАЛИЗОВАННЫЕ<br /><span style={{ color: G }}>ОБЪЕКТЫ</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, maxWidth: "480px" }}>
                Каждый проект — это задача со своим масштабом, требованиями и уровнем ответственности. Мы не усредняем — мы решаем.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Filter */}
        <section style={{ padding: "40px 56px 0", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "flex", gap: "0", borderBottom: "1px solid rgba(184,160,106,0.1)", marginBottom: "64px" }}>
            {FILTERS.map(f => (
              <button key={f.key} onClick={() => setFilter(f.key)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600,
                letterSpacing: "0.25em", padding: "14px 28px 14px 0",
                color: filter === f.key ? G : "rgba(226,217,200,0.3)",
                borderBottom: filter === f.key ? `1px solid ${G}` : "1px solid transparent",
                marginBottom: "-1px", transition: "all 0.3s",
              }}>{f.label}</button>
            ))}
          </div>
        </section>

        {/* Grid */}
        <section style={{ padding: "0 56px 120px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))", gap: "2px" }}>
            {filtered.map((p, i) => (
              <Reveal key={p.id} delay={i * 80}>
                <div
                  onClick={() => navigate(`/projects/${p.id}`)}
                  style={{ position: "relative", height: i === 0 ? "560px" : "420px", overflow: "hidden", cursor: "pointer" }}
                >
                  <img src={p.cover} alt={`${p.title} — ${p.typeLabel} ремонт в ${p.location}, ТОД Строй`}
                    style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s cubic-bezier(0.25,0.46,0.45,0.94)" }}
                    onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                    onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                  />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.1) 55%)" }} />

                  {/* Hover overlay */}
                  <div className="project-hover-overlay" style={{
                    position: "absolute", inset: 0,
                    background: "rgba(13,13,13,0.0)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    transition: "background 0.4s",
                  }}
                    onMouseEnter={e => (e.currentTarget.style.background = "rgba(13,13,13,0.35)")}
                    onMouseLeave={e => (e.currentTarget.style.background = "rgba(13,13,13,0.0)")}
                  >
                    <span style={{
                      fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600,
                      letterSpacing: "0.3em", color: G, textTransform: "uppercase",
                      border: `1px solid ${G}`, padding: "10px 24px", opacity: 0,
                      transition: "opacity 0.3s",
                    }}
                      onMouseEnter={e => { (e.currentTarget.style.opacity = "1"); (e.currentTarget.parentElement!.style.background = "rgba(13,13,13,0.45)"); }}
                      onMouseLeave={e => { (e.currentTarget.style.opacity = "0"); }}
                    >СМОТРЕТЬ ПРОЕКТ</span>
                  </div>

                  <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "28px 28px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
                      <div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "8px" }}>
                          {p.typeLabel} · {p.location}
                        </div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "0.04em", textTransform: "uppercase", color: "#e2d9c8" }}>{p.title}</div>
                        <div style={{ display: "flex", gap: "24px", marginTop: "10px" }}>
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>{p.area}</span>
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>{p.duration}</span>
                        </div>
                      </div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "36px", fontWeight: 800, color: "rgba(184,160,106,0.15)", letterSpacing: "-0.02em" }}>{p.idx}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section style={{ padding: "80px 56px", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Следующий шаг</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 24px" }}>
                ГОТОВЫ ОБСУДИТЬ<br /><span style={{ color: G }}>ВАШ ОБЪЕКТ?</span>
              </h2>
              <button onClick={() => navigate("/contacts")} style={{
                background: "transparent", border: `1px solid ${G}`, color: G,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "16px 48px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >СВЯЗАТЬСЯ С НАМИ</button>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}