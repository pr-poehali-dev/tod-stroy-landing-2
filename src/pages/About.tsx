import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS } from "@/data/projects";
import SEO, { SCHEMA_BREADCRUMB } from "@/components/SEO";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const VALUES = [
  { title: "КОНТРОЛЬ", text: "Один руководитель отвечает за весь проект от первого звонка до передачи ключей. Нет разрывов между подрядчиками. Нет потерянных задач." },
  { title: "СИСТЕМНОСТЬ", text: "У нас нет режима «разберёмся по ходу». Каждый этап фиксируется, согласовывается и выполняется в соответствии с утверждённым планом." },
  { title: "ОТВЕТСТВЕННОСТЬ", text: "Мы не прячемся за подрядчиков. Если что-то идёт не так — это наша проблема и наша обязанность её решить." },
  { title: "ПРОЗРАЧНОСТЬ", text: "Детальная отчётность на каждом этапе. Заказчик знает, где его деньги и что происходит на объекте." },
];

const FACTS = [
  ["16+", "лет на рынке"],
  ["200+", "объектов сдано"],
  ["2008", "год основания"],
  ["98%", "сданы в срок"],
];

export default function About() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title="О компании ТОД Строй — дизайнерский ремонт в Москве с 2008 года"
        description="ТОД Строй — компания по дизайнерскому ремонту квартир в Москве с 2008 года. Более 200 реализованных объектов. Индивидуальный подход, качественные материалы, соблюдение сроков."
        canonical="/about"
        keywords="о компании ТОД строй, ремонт квартир Москва, компания ремонт"
        schema={SCHEMA_BREADCRUMB([{ name: "Главная", url: "/" }, { name: "О компании", url: "/about" }])}
      />
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero */}
        <section className="about-hero">
          <img src={IMGS.p2} alt="ТОД Строй — компания по дизайнерскому ремонту квартир в Москве с 2008 года" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 30%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(13,13,13,0.92) 0%, rgba(13,13,13,0.4) 60%)" }} />
          {/* Architectural lines overlay */}
          <div style={{ position: "absolute", top: 0, left: "clamp(16px,5vw,56px)", width: "1px", height: "40px", background: G, opacity: 0.5 }} />
          <div style={{ position: "absolute", top: 0, left: "clamp(16px,5vw,56px)", width: "40px", height: "1px", background: G, opacity: 0.5 }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "clamp(32px,5vw,64px) clamp(16px,5vw,56px)", zIndex: 2 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                <div style={{ width: "32px", height: "1px", background: G, opacity: 0.7 }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>О компании</div>
              </div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 5vw, 68px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: 0, lineHeight: 1.1, maxWidth: "700px" }}>
                МЫ СТРОИМ.<br />МЫ ОТВЕЧАЕМ.<br /><span style={{ color: G }}>МЫ КОНТРОЛИРУЕМ.</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Positioning */}
        <section style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "clamp(32px,5vw,80px)", alignItems: "center" }}>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
                  <div style={{ width: "24px", height: "1px", background: G }} />
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>Позиционирование</div>
                </div>
                <div style={{ width: "28px", height: "1px", background: G, marginBottom: "24px" }} />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "28px" }}>
                  {FACTS.map(([num, label]) => (
                    <div key={label}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px,4vw,36px)", fontWeight: 800, color: G, lineHeight: 1, letterSpacing: "-0.02em" }}>{num}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 400, letterSpacing: "0.2em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase", marginTop: "6px" }}>{label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px,2vw,17px)", fontWeight: 300, color: "rgba(226,217,200,0.65)", lineHeight: 1.9, margin: "0 0 24px" }}>
                  ТОД Строй — компания по дизайнерскому ремонту помещений, основанная в 2008 году. Мы специализируемся на создании уникальных и функциональных интерьеров для квартир, загородных домов и коммерческих объектов в Москве.
                </p>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px,2vw,17px)", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, margin: 0 }}>
                  Наш полный спектр услуг — от разработки дизайн-проекта и черновой отделки до установки освещения, расстановки мебели и генеральной уборки. Консультация всегда бесплатна.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Values */}
        <section style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", background: "#111" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "1px", background: G }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>Принципы</div>
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(26px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 48px", lineHeight: 1.1 }}>
                ЧТО ЛЕЖИТ В ОСНОВЕ<br /><span style={{ color: G }}>НАШЕЙ РАБОТЫ</span>
              </h2>
              <div className="values-grid">
                {VALUES.map((v, i) => (
                  <Reveal key={v.title} delay={i * 80}>
                    <div style={{ background: "#111", padding: "clamp(24px,3vw,40px) clamp(20px,2.5vw,28px)" }}>
                      <div style={{ width: "24px", height: "1px", background: G, marginBottom: "20px" }} />
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.2em", color: G, marginBottom: "16px" }}>{v.title}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9 }}>{v.text}</div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* Object types */}
        <section style={{ padding: "clamp(48px,8vw,100px) clamp(16px,5vw,56px)", borderTop: "1px solid rgba(184,160,106,0.1)", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "14px" }}>
                <div style={{ width: "32px", height: "1px", background: G }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>С чем работаем</div>
              </div>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 clamp(32px,5vw,64px)" }}>
                ОБЪЕКТЫ, КОТОРЫЕ<br /><span style={{ color: G }}>НАМ ДОВЕРЯЮТ</span>
              </h2>
              <div className="obj-grid">
                {[
                  { img: IMGS.p1, title: "Частные резиденции", text: "Дома и особняки от 500 м² с авторским дизайном", path: "/residential" },
                  { img: IMGS.p2, title: "Коммерческая недвижимость", text: "Офисы, торговые центры, гостиницы класса А", path: "/commercial" },
                  { img: IMGS.p3, title: "Загородные дома", text: "Строительство и отделка загородной недвижимости", path: "/residential" },
                ].map((item, i) => (
                  <div key={i} onClick={() => navigate(item.path)} className="obj-card" style={{ position: "relative", height: "360px", overflow: "hidden", cursor: "pointer" }}>
                    <img src={item.img} alt={`${item.title} — ${item.text}, ТОД Строй Москва`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.05)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(13,13,13,0.92) 0%, transparent 55%)" }} />
                    <div style={{ position: "absolute", bottom: "24px", left: "24px", right: "24px" }}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(16px,2.5vw,20px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", marginBottom: "8px" }}>{item.title}</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)" }}>{item.text}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </section>

        {/* CTA */}
        <section style={{ padding: "clamp(48px,8vw,80px) clamp(16px,5vw,56px)", background: "#111" }}>
          <Reveal>
            <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
              <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 24px" }}>
                ГОТОВЫ НАЧАТЬ<br /><span style={{ color: G }}>ВАШ ПРОЕКТ?</span>
              </h2>
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
