import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS, PROJECTS } from "@/data/projects";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const APPROACH = [
  { title: "ИНДИВИДУАЛЬНЫЙ ПОДХОД", text: "Нет типовых решений. Каждый дом — это отдельный проект с уникальными задачами, эстетикой и образом жизни заказчика." },
  { title: "АВТОРСКИЙ КОНТРОЛЬ", text: "Руководитель проекта лично присутствует на ключевых этапах. Никаких делегирований без контроля." },
  { title: "ПЕРВОКЛАССНЫЕ МАТЕРИАЛЫ", text: "Работаем только с проверенными поставщиками. Камень, дерево, металл — всё проходит входной контроль качества." },
  { title: "КОМФОРТ КЛИЕНТА", text: "Вы не должны следить за строительством. Для этого есть мы. Регулярные отчёты и прозрачная коммуникация на каждом шагу." },
];

const residentialProjects = PROJECTS.filter(p => p.type === "residential");

export default function Residential() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero — full atmosphere */}
        <section style={{ position: "relative", height: "90vh", overflow: "hidden" }}>
          <img src={IMGS.p1} alt="Частные резиденции TOD STROY" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.15) 50%, rgba(13,13,13,0.4) 100%)" }} />

          {/* Corner decor */}
          <div style={{ position: "absolute", top: "96px", right: "56px", fontFamily: "monospace", fontSize: "8px", color: "rgba(184,160,106,0.3)", letterSpacing: "0.05em", textAlign: "right" }}>
            55.751244<br />37.618423
          </div>

          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "80px 56px", zIndex: 2 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "24px" }}>Для частных клиентов</div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(40px, 6vw, 80px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.03em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.05 }}>
                ПРОСТРАНСТВО,<br />СОЗДАННОЕ<br /><span style={{ color: G }}>ДЛЯ ВАС.</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, maxWidth: "400px", margin: "0 0 40px" }}>
                Реализуем частные резиденции, загородные дома и городские апартаменты. Уровень — без компромиссов.
              </p>
              <button onClick={() => navigate("/contacts")} style={{
                background: "transparent", border: `1px solid ${G}`, color: G,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "14px 40px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >ОБСУДИТЬ ПРОЕКТ</button>
            </div>
          </div>
        </section>

        {/* Philosophy */}
        <section style={{ padding: "100px 56px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.5fr", gap: "80px", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "16px" }}>Философия</div>
                <div style={{ width: "28px", height: "1px", background: G, marginBottom: "28px" }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "38px", fontWeight: 800, color: G, lineHeight: 1, marginBottom: "6px" }}>500+</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase", marginBottom: "32px" }}>частных резиденций</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "38px", fontWeight: 800, color: G, lineHeight: 1, marginBottom: "6px" }}>1 200</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase" }}>макс. площадь объекта, м²</div>
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(226,217,200,0.65)", lineHeight: 1.85, margin: "0 0 28px" }}>
                  Частный дом — это не просто строительный объект. Это место, где будет прожита часть жизни. Мы относимся к этому серьёзно.
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.9, margin: 0 }}>
                  Работаем с объектами от 300 м². Специализация — дома и резиденции высшего класса на Рублёво-Успенском, Новорижском, Калужском шоссе и в Подмосковье.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Visual gallery */}
        <section style={{ padding: "0" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: "2px" }}>
            {[IMGS.p1, IMGS.p2, IMGS.p3].map((img, i) => (
              <div key={i} style={{ height: "400px", overflow: "hidden" }}>
                <img src={img} alt={`Резиденция ${i + 1}`}
                  style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                  onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.06)")}
                  onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                />
              </div>
            ))}
          </div>
        </section>

        {/* Approach */}
        <section style={{ padding: "100px 56px", background: "#111" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>Наш подход</div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 64px", lineHeight: 1.1 }}>
                КАК МЫ РАБОТАЕМ<br /><span style={{ color: G }}>С ЧАСТНЫМИ КЛИЕНТАМИ</span>
              </h2>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {APPROACH.map((a, i) => (
                  <Reveal key={a.title} delay={i * 80}>
                    <div style={{ background: "#111", padding: "40px 28px" }}>
                      <div style={{ width: "24px", height: "1px", background: G, marginBottom: "20px" }} />
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 700, letterSpacing: "0.2em", color: G, marginBottom: "16px" }}>{a.title}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9 }}>{a.text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Projects */}
        {residentialProjects.length > 0 && (
          <section style={{ padding: "80px 56px 100px", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
            <Reveal>
              <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "48px" }}>Реализованные объекты</div>
                <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: "2px" }}>
                  {residentialProjects.map(p => (
                    <div key={p.id} onClick={() => navigate(`/projects/${p.id}`)} style={{ position: "relative", height: "440px", overflow: "hidden", cursor: "pointer" }}>
                      <img src={p.cover} alt={p.title}
                        style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.7s ease" }}
                        onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                        onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                      />
                      <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, transparent 55%)" }} />
                      <div style={{ position: "absolute", bottom: "28px", left: "28px" }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", color: G, letterSpacing: "0.25em", textTransform: "uppercase", marginBottom: "8px" }}>{p.location}</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, textTransform: "uppercase", color: "#e2d9c8" }}>{p.title}</div>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.35)", marginTop: "6px" }}>{p.area} · {p.duration}</div>
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
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3vw, 38px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 12px" }}>
                РАССКАЖИТЕ О ВАШЕМ ДОМЕ
              </h2>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(226,217,200,0.35)", margin: "0 0 36px", lineHeight: 1.7 }}>
                Приедем, посмотрим, предложим концепцию.<br />Без обязательств.
              </p>
              <button onClick={() => navigate("/contacts")} style={{
                background: G, border: `1px solid ${G}`, color: BG,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "16px 48px", cursor: "pointer", transition: "all 0.3s",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              >ОБСУДИТЬ ПРОЕКТ</button>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}
