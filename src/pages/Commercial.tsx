import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS, PROJECTS } from "@/data/projects";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const COMPETENCIES = [
  { title: "СОБЛЮДЕНИЕ СРОКОВ", text: "Срыв дедлайна — это простой арендаторов, штрафные санкции, репутационные потери. Мы строим графики с буфером и контролируем их ежедневно." },
  { title: "УПРАВЛЕНИЕ ПОДРЯДЧИКАМИ", text: "На крупных объектах работают десятки организаций. Мы координируем всех — от монолитчиков до отделочников — в рамках единого плана." },
  { title: "БЮДЖЕТНАЯ ДИСЦИПЛИНА", text: "Прозрачная смета, финансовый контроль, защита от перерасходов. Вы знаете, куда идёт каждый рубль." },
  { title: "СДАЧА ГОСУДАРСТВЕННЫМ КОМИССИЯМ", text: "Полное сопровождение при прохождении Госкомиссии: документация, технический надзор, исполнительная съёмка." },
];

const commercialProjects = PROJECTS.filter(p => p.type === "commercial");

export default function Commercial() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero */}
        <section style={{ position: "relative", height: "80vh", overflow: "hidden" }}>
          <img src={IMGS.p2} alt="Коммерческие объекты TOD STROY" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 35%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.93) 0%, rgba(13,13,13,0.35) 60%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 56px", zIndex: 2 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Коммерческая недвижимость</div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 24px", lineHeight: 1.1 }}>
                ОБЪЕКТЫ,<br />ГДЕ СРОКИ<br /><span style={{ color: G }}>НЕ ОБСУЖДАЮТСЯ.</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, maxWidth: "420px", margin: "0 0 40px" }}>
                Работаем с офисными центрами, торговой недвижимостью, гостиницами и производственными объектами. Там, где цена ошибки — деньги бизнеса.
              </p>
              <button onClick={() => navigate("/contacts")} style={{
                background: "transparent", border: `1px solid ${G}`, color: G,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "14px 40px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >ОБСУДИТЬ ОБЪЕКТ</button>
            </div>
          </div>
        </section>

        {/* Stats */}
        <Reveal>
          <div style={{ borderBottom: "1px solid rgba(184,160,106,0.1)", padding: "48px 56px" }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "32px" }}>
              {[["85 000+", "м² коммерческих объектов"], ["12", "проектов класса А"], ["18 мес", "макс. срок крупного проекта"], ["0", "срывов сдачи"]].map(([num, label]) => (
                <div key={label}>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "36px", fontWeight: 800, color: G, lineHeight: 1, marginBottom: "8px" }}>{num}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Competencies */}
        <section style={{ padding: "100px 56px", background: "#111" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Компетенции</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 64px", lineHeight: 1.1 }}>
                ЧТО МЫ УМЕЕМ<br /><span style={{ color: G }}>ЛУЧШЕ ДРУГИХ</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {COMPETENCIES.map((c, i) => (
                  <Reveal key={c.title} delay={i * 80}>
                    <div style={{ background: "#111", padding: "40px 28px" }}>
                      <div style={{ width: "24px", height: "1px", background: G, marginBottom: "20px" }} />
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: G, marginBottom: "16px" }}>{c.title}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9 }}>{c.text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Object types we handle */}
        <section style={{ padding: "100px 56px", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Типы объектов</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 56px" }}>
                С ЧЕМ МЫ <span style={{ color: G }}>РАБОТАЕМ</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {["Офисные центры класса А / В+", "Торговые комплексы", "Гостиницы и апарт-отели", "Ресторанные концепции", "Медицинские клиники", "Банковские офисы"].map((item, i) => (
                  <div key={i} style={{ background: BG, padding: "28px 24px", display: "flex", alignItems: "center", gap: "16px" }}>
                    <div style={{ width: "4px", height: "4px", background: G, borderRadius: "50%", flexShrink: 0 }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 400, color: "rgba(226,217,200,0.5)", lineHeight: 1.5 }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        {commercialProjects.length > 0 && (
          <section style={{ padding: "0 56px 100px", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
            <Reveal>
              <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ padding: "64px 0 40px", fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>Примеры проектов</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2px" }}>
                  {commercialProjects.map(p => (
                    <div key={p.id} onClick={() => navigate(`/projects/${p.id}`)} style={{ position: "relative", height: "420px", overflow: "hidden", cursor: "pointer" }}>
                      <img src={p.cover} alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.9) 0%, transparent 55%)" }} />
                      <div style={{ position: "absolute", bottom: "28px", left: "28px" }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", color: G, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "8px" }}>{p.area} · {p.duration}</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "#e2d9c8" }}>{p.title}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </section>
        )}

        {/* CTA */}
        <section style={{ padding: "80px 56px", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3vw, 40px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 12px" }}>
                ЕСТЬ ОБЪЕКТ?
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(226,217,200,0.35)", margin: "0 0 36px" }}>Пришлите параметры — дадим предварительную оценку в течение дня</p>
              <button onClick={() => navigate("/contacts")} style={{
                background: G, border: `1px solid ${G}`, color: BG,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "16px 48px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              >ОТПРАВИТЬ ЗАПРОС</button>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}
