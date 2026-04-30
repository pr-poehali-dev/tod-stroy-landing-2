import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS } from "@/data/projects";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const SERVICES = [
  {
    num: "01",
    title: "Строительство",
    subtitle: "Под ключ",
    text: "Полный цикл возведения объекта — от нулевого цикла до чистовой сдачи. Работаем с жилыми и коммерческими проектами любого масштаба. Монолитный каркас, современные ограждающие конструкции, точное соблюдение рабочей документации.",
    image: IMGS.p1,
    path: "/residential",
    items: ["Частные резиденции и особняки", "Коммерческие объекты", "Монолит и сборные конструкции", "Управление генподрядом"],
  },
  {
    num: "02",
    title: "Ремонт премиум-класса",
    subtitle: "Без компромиссов",
    text: "Полная или частичная реконструкция интерьеров с сохранением или полной сменой концепции. Работаем с объектами от 150 м². Используем исключительно материалы высшего класса. Каждый этап — под нашим контролем.",
    image: IMGS.p3,
    path: "/residential",
    items: ["Интерьеры квартир и домов", "Офисные пространства", "Лобби и зоны ресепшн", "Исторические объекты"],
  },
  {
    num: "03",
    title: "Проектирование",
    subtitle: "Архитектура и дизайн",
    text: "Архитектурная концепция, рабочая документация, дизайн-проект. Работаем в связке с ведущими архитекторами и дизайн-бюро. Проект — это не рисунок, это документ, по которому строят.",
    image: IMGS.p2,
    path: "/services",
    items: ["Архитектурный проект", "Дизайн интерьеров", "Рабочая документация", "Авторский надзор"],
  },
  {
    num: "04",
    title: "Управление проектом",
    subtitle: "Технический заказчик",
    text: "Берём на себя функцию технического заказчика: выбор подрядчиков, согласование, бюджетирование, контроль сроков и качества. Вы не разбираетесь в строительстве — это не нужно. Мы разбираемся за вас.",
    image: IMGS.p1,
    path: "/commercial",
    items: ["Конкурс подрядчиков", "Бюджетный контроль", "График и отчётность", "Сдача объекта"],
  },
];

export default function Services() {
  const navigate = useNavigate();

  return (
    <Layout>
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero */}
        <section style={{ padding: "80px 56px 72px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Что мы делаем</div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(40px, 5vw, 72px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.1 }}>
                УСЛУГИ<br /><span style={{ color: G }}>TOD STROY</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.9, maxWidth: "480px" }}>
                Мы не предлагаем прайс-лист. Мы предлагаем результат. Под каждый проект — индивидуальный подход и чёткая система ответственности.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Services */}
        {SERVICES.map((s, i) => (
          <section key={s.num} style={{ borderBottom: "1px solid rgba(184,160,106,0.08)", background: i % 2 === 1 ? "#111" : BG }}>
            <Reveal>
              <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "80px 56px" }}>
                <div style={{ display: "grid", gridTemplateColumns: i % 2 === 0 ? "1fr 1fr" : "1fr 1fr", gap: "0", alignItems: "stretch" }}>
                  {/* Text side */}
                  <div style={{ padding: i % 2 === 0 ? "0 56px 0 0" : "0 0 0 56px", order: i % 2 === 0 ? 1 : 2, display: "flex", flexDirection: "column", justifyContent: "center" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "52px", fontWeight: 800, color: "rgba(184,160,106,0.08)", lineHeight: 1, marginBottom: "-12px" }}>{s.num}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "12px" }}>{s.subtitle}</div>
                    <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 44px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 24px", lineHeight: 1.1 }}>{s.title}</h2>
                    <div style={{ width: "28px", height: "1px", background: G, marginBottom: "24px" }} />
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.5)", lineHeight: 1.9, margin: "0 0 32px" }}>{s.text}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "36px" }}>
                      {s.items.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div style={{ width: "18px", height: "1px", background: G, flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, color: "rgba(226,217,200,0.45)", letterSpacing: "0.05em" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <button onClick={() => navigate("/contacts")} style={{
                      alignSelf: "flex-start",
                      background: "transparent", border: `1px solid ${G}`, color: G,
                      fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700,
                      letterSpacing: "0.22em", padding: "12px 28px", cursor: "pointer", transition: "all 0.3s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                    >ОБСУДИТЬ ПРОЕКТ</button>
                  </div>

                  {/* Image side */}
                  <div style={{ height: "440px", overflow: "hidden", order: i % 2 === 0 ? 2 : 1 }}>
                    <img src={s.image} alt={s.title}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        ))}

        {/* CTA strip */}
        <section style={{ padding: "80px 56px", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
              <div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 10px" }}>
                  НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(226,217,200,0.35)", margin: 0 }}>
                  Расскажите о вашей задаче — мы предложим решение
                </p>
              </div>
              <button onClick={() => navigate("/contacts")} style={{
                background: G, border: `1px solid ${G}`, color: BG,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", padding: "16px 48px", cursor: "pointer", transition: "all 0.3s", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              >ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ</button>
            </div>
          </Reveal>
        </section>

      </div>
    </Layout>
  );
}
