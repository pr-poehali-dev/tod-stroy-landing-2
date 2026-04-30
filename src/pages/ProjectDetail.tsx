import { useParams, useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { PROJECTS } from "@/data/projects";
import Icon from "@/components/ui/icon";
import SEO, { SCHEMA_BREADCRUMB, SCHEMA_ARTICLE } from "@/components/SEO";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = PROJECTS.find(p => p.id === id);

  if (!project) {
    return (
      <Layout>
        <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column", gap: "24px", paddingTop: "68px" }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.3em", color: G }}>404</div>
          <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "32px", fontWeight: 700, color: "#e2d9c8" }}>Проект не найден</h1>
          <button onClick={() => navigate("/projects")} style={{ background: "none", border: `1px solid ${G}`, color: G, padding: "12px 32px", fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.2em", cursor: "pointer" }}>К ПРОЕКТАМ</button>
        </div>
      </Layout>
    );
  }

  const otherProjects = PROJECTS.filter(p => p.id !== project.id).slice(0, 2);

  return (
    <Layout>
      <SEO
        title={`${project.title} — ${project.typeLabel} в Москве`}
        description={`${project.title}: ${project.task} Площадь ${project.area}, срок ${project.duration}. Посмотрите фото и этапы работ ТОД Строй.`}
        canonical={`/projects/${project.id}`}
        ogImage={project.cover}
        ogType="article"
        keywords={`${project.title}, ${project.typeLabel}, ремонт ${project.location}, ${project.tags.join(", ")}`}
        schema={[
          SCHEMA_BREADCRUMB([
            { name: "Главная", url: "/" },
            { name: "Проекты", url: "/projects" },
            { name: project.title, url: `/projects/${project.id}` },
          ]),
          SCHEMA_ARTICLE(project.title, project.task, project.cover, `${project.year}-01-01`),
        ]}
      />
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Cover — full screen */}
        <section style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
          <img src={project.cover} alt={project.title} style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,1) 0%, rgba(13,13,13,0.3) 50%, rgba(13,13,13,0.1) 100%)" }} />

          {/* Back */}
          <button onClick={() => navigate("/projects")} style={{
            position: "absolute", top: "96px", left: "56px", zIndex: 2,
            background: "none", border: "none", cursor: "pointer",
            display: "flex", alignItems: "center", gap: "10px",
            fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 500,
            letterSpacing: "0.2em", color: "rgba(226,217,200,0.4)", textTransform: "uppercase",
            transition: "color 0.3s",
          }}
            onMouseEnter={e => (e.currentTarget.style.color = G)}
            onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.4)")}
          >
            <Icon name="ArrowLeft" size={14} />
            Все проекты
          </button>

          {/* Project info overlay */}
          <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "64px 56px", zIndex: 2 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: "32px" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>
                  {project.idx} / {project.typeLabel}
                </div>
                <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(32px, 5vw, 64px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: 0, lineHeight: 1.1 }}>
                  {project.title}
                </h1>
              </div>
              <div style={{ display: "flex", gap: "48px" }}>
                {[["Площадь", project.area], ["Срок", project.duration], ["Год", project.year]].map(([k, v]) => (
                  <div key={k}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", letterSpacing: "0.25em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase", marginBottom: "6px" }}>{k}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 600, color: G, letterSpacing: "0.04em" }}>{v}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Task */}
        <section style={{ padding: "80px 56px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "80px", alignItems: "start" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "16px" }}>Задача</div>
                <div style={{ width: "28px", height: "1px", background: G, marginBottom: "28px" }} />
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px" }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{
                      fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 500,
                      letterSpacing: "0.15em", color: "rgba(184,160,106,0.6)",
                      border: "1px solid rgba(184,160,106,0.2)", padding: "6px 14px",
                      textTransform: "uppercase",
                    }}>{tag}</span>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(226,217,200,0.75)", lineHeight: 1.8, margin: 0 }}>
                  {project.task}
                </p>
                <div style={{ marginTop: "24px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 400, color: "rgba(226,217,200,0.25)", letterSpacing: "0.1em" }}>
                  {project.location}
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Gallery */}
        <section style={{ padding: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2px" }}>
            {project.images.slice(1).map((img, i) => (
              <div key={i} style={{ height: "480px", overflow: "hidden" }}>
                <img src={img} alt={`${project.title} — фото ${i + 2}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Stages */}
        <section style={{ padding: "100px 56px" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "16px" }}>Этапы реализации</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", color: "#e2d9c8", margin: "0 0 64px" }}>КАК МЫ РАБОТАЛИ<br /><span style={{ color: G }}>НАД ЭТИМ ОБЪЕКТОМ</span></h2>

              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {project.stages.map((s, i) => (
                  <Reveal key={i} delay={i * 80}>
                    <div style={{ background: BG, padding: "40px 28px", position: "relative" }}>
                      <div style={{ position: "absolute", top: "16px", right: "20px", fontFamily: "'Montserrat', sans-serif", fontSize: "52px", fontWeight: 800, color: "rgba(184,160,106,0.05)", lineHeight: 1 }}>
                        {String(i + 1).padStart(2, "0")}
                      </div>
                      <div style={{ width: "24px", height: "1px", background: G, marginBottom: "20px" }} />
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", color: "#e2d9c8", marginBottom: "12px" }}>{s.title}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85 }}>{s.text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Other projects */}
        <section style={{ padding: "0 0 0", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ padding: "64px 56px 48px", maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "40px" }}>Другие проекты</div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "2px" }}>
                {otherProjects.map(p => (
                  <div key={p.id} onClick={() => navigate(`/projects/${p.id}`)} style={{ position: "relative", height: "320px", overflow: "hidden", cursor: "pointer" }}>
                    <img src={p.cover} alt={p.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease", filter: "brightness(0.6) saturate(0.7)" }}
                      onMouseEnter={e => { (e.currentTarget.style.transform = "scale(1.05)"); (e.currentTarget.style.filter = "brightness(0.8) saturate(1)"); }}
                      onMouseLeave={e => { (e.currentTarget.style.transform = "scale(1)"); (e.currentTarget.style.filter = "brightness(0.6) saturate(0.7)"); }}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.85) 0%, transparent 55%)", pointerEvents: "none" }} />
                    <div style={{ position: "absolute", bottom: "24px", left: "24px" }}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", color: G, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "6px" }}>{p.typeLabel}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 700, textTransform: "uppercase", color: "#e2d9c8", letterSpacing: "0.04em" }}>{p.title}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}