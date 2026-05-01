import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS } from "@/data/projects";
import SEO, { SCHEMA_BREADCRUMB, SCHEMA_SERVICE } from "@/components/SEO";
import Icon from "@/components/ui/icon";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const IMG_LUXURY = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/7857926c-1fc1-45e1-a594-5dcd7ffb548a.jpg";
const IMG_OFFICE = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/0fb1d01d-4f9a-4dce-9870-43e1a3ed4a82.jpg";
const IMG_HOUSE  = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/b96a071a-6d13-461a-9f88-40bca2be5d88.jpg";

const SERVICES = [
  {
    num: "01",
    title: "Дизайнерский ремонт",
    subtitle: "от 35 000 руб/м²",
    text: "Авторский ремонт с разработкой дизайн-проекта, подбором материалов и полным авторским надзором. Создаём интерьер, который отражает личность и стиль жизни заказчика.",
    image: IMGS.p1,
    items: ["Разработка дизайн-проекта", "Авторский надзор", "Подбор материалов и мебели", "Квартиры, дома, апартаменты"],
    detail: {
      scope: [
        "Разработка концепции интерьера и дизайн-проекта",
        "3D-визуализация всех помещений",
        "Подбор отделочных материалов, мебели, декора",
        "Демонтаж и черновые работы",
        "Электрика, сантехника, отопление",
        "Штукатурка, стяжка, выравнивание",
        "Укладка напольных покрытий (паркет, плитка, ламинат)",
        "Покраска, поклейка обоев, декоративная штукатурка",
        "Монтаж потолков (натяжные, гипсокартон)",
        "Установка освещения, электрооборудования",
        "Авторский надзор на всех этапах",
        "Генеральная уборка и сдача объекта",
      ],
      photos: [IMGS.p1, IMG_LUXURY, IMGS.p2, IMG_HOUSE, IMGS.p3],
    },
  },
  {
    num: "02",
    title: "Капитальный ремонт",
    subtitle: "от 32 000 руб/м²",
    text: "Полный комплекс работ: от демонтажа до финишной отделки. Штукатурка, стяжка, электрика, сантехника, плитка, покраска — всё под одной ответственностью.",
    image: IMGS.p3,
    items: ["Ремонт в новостройке", "Ремонт во вторичном жилье", "Полный цикл под ключ", "Все виды отделочных работ"],
    detail: {
      scope: [
        "Демонтаж старых покрытий и конструкций",
        "Перепланировка (с согласованием при необходимости)",
        "Черновая и чистовая электрика",
        "Разводка сантехники, установка оборудования",
        "Монтаж системы отопления",
        "Штукатурка и стяжка",
        "Укладка плитки в ванной и на кухне",
        "Укладка напольных покрытий",
        "Покраска стен и потолков",
        "Монтаж дверей, окон, откосов",
        "Установка сантехники и электроприборов",
        "Генеральная уборка",
      ],
      photos: [IMGS.p3, IMGS.p1, IMG_LUXURY, IMGS.p2, IMG_HOUSE],
    },
  },
  {
    num: "03",
    title: "Ремонт офисов",
    subtitle: "от 20 000 руб/м²",
    text: "Коммерческие объекты с соблюдением сроков и бюджета. Работаем с офисами, торговыми помещениями и административными зданиями. Понимаем, что простой бизнеса — это деньги.",
    image: IMGS.p2,
    items: ["Офисы и бизнес-центры", "Торговые помещения", "Административные здания", "Работа в выходные дни"],
    detail: {
      scope: [
        "Разработка функционального планировочного решения",
        "Зонирование рабочего пространства",
        "Система освещения под рабочие задачи",
        "Звукоизоляция переговорных и кабинетов",
        "Монтаж перегородок (стекло, гипсокартон, металл)",
        "Напольные покрытия для коммерческих помещений",
        "Подвесные потолки, системы освещения",
        "Электрика, слаботочные системы",
        "Климатическое оборудование",
        "Брендирование и навигация",
        "Сдача «под ключ» без простоя бизнеса",
        "Работа по выходным и ночам при необходимости",
      ],
      photos: [IMGS.p2, IMG_OFFICE, IMGS.p1, IMG_LUXURY, IMGS.p3],
    },
  },
  {
    num: "04",
    title: "Косметический ремонт",
    subtitle: "от 25 000 руб/м²",
    text: "Обновление без глобальной перестройки: замена покрытий, покраска, поклейка обоев, замена сантехники и светильников. Быстро, аккуратно, с минимальным вмешательством в жизнь.",
    image: IMGS.p1,
    items: ["Покраска и поклейка обоев", "Замена напольных покрытий", "Обновление сантехники", "Монтаж освещения"],
    detail: {
      scope: [
        "Покраска стен и потолков",
        "Поклейка обоев (гладкие, флизелиновые, виниловые)",
        "Замена напольных покрытий (ламинат, линолеум, ковролин)",
        "Замена плинтусов, наличников, дверных ручек",
        "Обновление межкомнатных дверей",
        "Замена сантехнических приборов",
        "Замена светильников, розеток, выключателей",
        "Ремонт мелких дефектов стен и потолков",
        "Уборка после работ",
      ],
      photos: [IMGS.p1, IMG_HOUSE, IMGS.p3, IMG_LUXURY, IMGS.p2],
    },
  },
];

interface ServiceModalProps {
  service: typeof SERVICES[0];
  onClose: () => void;
}

function ServiceModal({ service, onClose }: ServiceModalProps) {
  const navigate = useNavigate();
  const [photoIdx, setPhotoIdx] = useState(0);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 200,
        background: "rgba(5,5,5,0.92)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "clamp(16px,3vw,40px)",
        backdropFilter: "blur(8px)",
        overflowY: "auto",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          background: "#0f0f0f",
          border: "1px solid rgba(184,160,106,0.2)",
          width: "100%",
          maxWidth: "900px",
          maxHeight: "90vh",
          overflowY: "auto",
          position: "relative",
        }}
      >
        {/* Architectural corner lines */}
        <div style={{ position: "absolute", top: 0, left: 0, width: "40px", height: "1px", background: G, opacity: 0.6 }} />
        <div style={{ position: "absolute", top: 0, left: 0, width: "1px", height: "40px", background: G, opacity: 0.6 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "40px", height: "1px", background: G, opacity: 0.6 }} />
        <div style={{ position: "absolute", top: 0, right: 0, width: "1px", height: "40px", background: G, opacity: 0.6 }} />

        {/* Close btn */}
        <button
          onClick={onClose}
          style={{
            position: "absolute", top: "16px", right: "16px", zIndex: 10,
            background: "none", border: "none", color: "rgba(226,217,200,0.5)",
            cursor: "pointer", padding: "4px", transition: "color 0.3s",
          }}
          onMouseEnter={e => (e.currentTarget.style.color = G)}
          onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.5)")}
        >
          <Icon name="X" size={20} />
        </button>

        <div style={{ padding: "clamp(24px,4vw,48px)" }}>
          {/* Header */}
          <div style={{ marginBottom: "32px", paddingRight: "40px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "8px" }}>Услуга {service.num}</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px,4vw,36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.1, marginBottom: "8px" }}>
              {service.title}
            </div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 600, letterSpacing: "0.15em", color: G }}>{service.subtitle}</div>
          </div>

          {/* Photo gallery */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ position: "relative", height: "clamp(200px,40vw,360px)", overflow: "hidden", marginBottom: "12px" }}>
              <img
                src={service.detail.photos[photoIdx]}
                alt={`${service.title} фото ${photoIdx + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", transition: "opacity 0.4s" }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(10,10,10,0.4) 0%, transparent 60%)" }} />
              {/* Nav arrows */}
              <button
                onClick={() => setPhotoIdx(i => (i - 1 + service.detail.photos.length) % service.detail.photos.length)}
                style={{ position: "absolute", left: "12px", top: "50%", transform: "translateY(-50%)", background: "rgba(10,10,10,0.6)", border: "1px solid rgba(184,160,106,0.3)", color: G, cursor: "pointer", padding: "8px 10px", transition: "all 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,10,10,0.6)"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >‹</button>
              <button
                onClick={() => setPhotoIdx(i => (i + 1) % service.detail.photos.length)}
                style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", background: "rgba(10,10,10,0.6)", border: "1px solid rgba(184,160,106,0.3)", color: G, cursor: "pointer", padding: "8px 10px", transition: "all 0.3s" }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "rgba(10,10,10,0.6)"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              >›</button>
              {/* Counter */}
              <div style={{ position: "absolute", bottom: "12px", right: "16px", fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 600, color: "rgba(226,217,200,0.5)", letterSpacing: "0.1em" }}>
                {photoIdx + 1} / {service.detail.photos.length}
              </div>
            </div>
            {/* Thumbnails */}
            <div className="service-modal-photos">
              {service.detail.photos.map((ph, i) => (
                <div
                  key={i}
                  onClick={() => setPhotoIdx(i)}
                  style={{
                    flexShrink: 0,
                    width: "clamp(64px,15vw,88px)",
                    height: "clamp(48px,10vw,64px)",
                    overflow: "hidden",
                    cursor: "pointer",
                    border: i === photoIdx ? `1px solid ${G}` : "1px solid rgba(184,160,106,0.1)",
                    transition: "border-color 0.3s",
                    opacity: i === photoIdx ? 1 : 0.5,
                  }}
                >
                  <img src={ph} alt="" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </div>
              ))}
            </div>
          </div>

          {/* Scope of work */}
          <div style={{ marginBottom: "36px" }}>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.5)", textTransform: "uppercase", marginBottom: "20px" }}>Что входит в стоимость</div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "8px 24px" }}>
              {service.detail.scope.map((item, i) => (
                <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "10px", padding: "8px 0", borderBottom: "1px solid rgba(184,160,106,0.06)" }}>
                  <div style={{ width: "16px", height: "1px", background: G, flexShrink: 0, marginTop: "7px" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.55)", lineHeight: 1.6 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div style={{ display: "flex", gap: "16px", flexWrap: "wrap", alignItems: "center" }}>
            <button
              onClick={() => { onClose(); navigate("/contacts"); }}
              style={{
                background: G, border: `1px solid ${G}`, color: BG,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.22em", textTransform: "uppercase",
                padding: "16px 36px", cursor: "pointer", transition: "all 0.3s",
                flex: "1 1 auto",
              }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
            >ОБСУДИТЬ ПРОЕКТ</button>
            <a
              href="tel:+79060014666"
              style={{
                background: "transparent", border: "1px solid rgba(184,160,106,0.3)", color: G,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600,
                letterSpacing: "0.15em",
                padding: "16px 24px", cursor: "pointer", textDecoration: "none",
                display: "flex", alignItems: "center", gap: "8px",
                transition: "border-color 0.3s",
                flex: "1 1 auto", justifyContent: "center",
              }}
            >+7 (906) 001-46-66</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Services() {
  const navigate = useNavigate();
  const [activeService, setActiveService] = useState<typeof SERVICES[0] | null>(null);

  useEffect(() => {
    document.body.style.overflow = activeService ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [activeService]);

  return (
    <Layout>
      <SEO
        title="Услуги — дизайнерский, капитальный, косметический ремонт в Москве"
        description="Услуги ТОД Строй: дизайнерский ремонт от 35 000 руб/м², капитальный от 32 000 руб/м², ремонт офисов от 20 000 руб/м², косметический от 25 000 руб/м². Москва."
        canonical="/services"
        keywords="стоимость ремонта квартиры Москва, цены на ремонт, дизайнерский ремонт цена, капитальный ремонт цена"
        schema={[
          SCHEMA_BREADCRUMB([{ name: "Главная", url: "/" }, { name: "Услуги", url: "/services" }]),
          SCHEMA_SERVICE("Дизайнерский ремонт квартир", "Авторский ремонт с дизайн-проектом под ключ в Москве", "35000"),
        ]}
      />

      {activeService && <ServiceModal service={activeService} onClose={() => setActiveService(null)} />}

      <div style={{ background: BG, paddingTop: "68px" }}>
        {/* Hero */}
        <section style={{ padding: "clamp(48px,8vw,80px) clamp(16px,5vw,56px) clamp(40px,6vw,72px)", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              {/* Architectural accent line */}
              <div style={{ display: "flex", alignItems: "center", gap: "16px", marginBottom: "24px" }}>
                <div style={{ width: "48px", height: "1px", background: G }} />
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>Что мы делаем</div>
              </div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(36px, 5vw, 72px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.1 }}>
                УСЛУГИ<br /><span style={{ color: G }}>TOD STROY</span>
              </h1>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(12px,1.5vw,13px)", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.9, maxWidth: "480px" }}>
                Мы не предлагаем прайс-лист. Мы предлагаем результат. Под каждый проект — индивидуальный подход и чёткая система ответственности.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Services list */}
        {SERVICES.map((s, i) => (
          <section key={s.num} style={{ borderBottom: "1px solid rgba(184,160,106,0.08)", background: i % 2 === 1 ? "#111" : BG }}>
            <Reveal>
              <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "clamp(40px,6vw,80px) clamp(16px,5vw,56px)" }}>
                <div className="services-grid">
                  {/* Text side */}
                  <div className="services-text" style={{ padding: i % 2 === 0 ? "0 56px 0 0" : "0 0 0 56px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "52px", fontWeight: 800, color: "rgba(184,160,106,0.08)", lineHeight: 1, marginBottom: "-12px" }}>{s.num}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 600, letterSpacing: "0.2em", color: G, textTransform: "uppercase", marginBottom: "12px" }}>{s.subtitle}</div>
                    <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(24px, 3vw, 44px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 24px", lineHeight: 1.1 }}>{s.title}</h2>
                    <div style={{ width: "28px", height: "1px", background: G, marginBottom: "24px" }} />
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.5)", lineHeight: 1.9, margin: "0 0 28px" }}>{s.text}</p>
                    <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginBottom: "32px" }}>
                      {s.items.map(item => (
                        <div key={item} style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div style={{ width: "18px", height: "1px", background: G, flexShrink: 0 }} />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, color: "rgba(226,217,200,0.45)", letterSpacing: "0.05em" }}>{item}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                      <button
                        onClick={() => setActiveService(s)}
                        style={{
                          background: G, border: `1px solid ${G}`, color: BG,
                          fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700,
                          letterSpacing: "0.22em", padding: "12px 28px", cursor: "pointer", transition: "all 0.3s",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                      >ПОДРОБНЕЕ</button>
                      <button
                        onClick={() => navigate("/contacts")}
                        style={{
                          background: "transparent", border: `1px solid ${G}`, color: G,
                          fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 700,
                          letterSpacing: "0.22em", padding: "12px 28px", cursor: "pointer", transition: "all 0.3s",
                        }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                      >ОБСУДИТЬ ПРОЕКТ</button>
                    </div>
                  </div>

                  {/* Image side */}
                  <div
                    className="services-img"
                    style={{ height: "440px", overflow: "hidden", order: i % 2 === 0 ? 2 : 1, cursor: "pointer", position: "relative" }}
                    onClick={() => setActiveService(s)}
                  >
                    <img
                      src={s.image}
                      alt={`${s.title} в Москве — ${s.subtitle}, ТОД Строй`}
                      style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.8s ease" }}
                      onMouseEnter={e => (e.currentTarget.style.transform = "scale(1.04)")}
                      onMouseLeave={e => (e.currentTarget.style.transform = "scale(1)")}
                    />
                    {/* Overlay hint */}
                    <div style={{ position: "absolute", inset: 0, background: "rgba(10,10,10,0)", transition: "background 0.3s", display: "flex", alignItems: "center", justifyContent: "center" }}
                      onMouseEnter={e => { e.currentTarget.style.background = "rgba(10,10,10,0.35)"; (e.currentTarget.querySelector("span") as HTMLElement).style.opacity = "1"; }}
                      onMouseLeave={e => { e.currentTarget.style.background = "rgba(10,10,10,0)"; (e.currentTarget.querySelector("span") as HTMLElement).style.opacity = "0"; }}
                    >
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, border: `1px solid ${G}`, padding: "10px 20px", opacity: 0, transition: "opacity 0.3s", pointerEvents: "none" }}>СМОТРЕТЬ ДЕТАЛИ</span>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </section>
        ))}

        {/* CTA strip */}
        <section style={{ padding: "clamp(48px,8vw,80px) clamp(16px,5vw,56px)", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "32px" }}>
              <div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 36px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 10px" }}>
                  НЕ ЗНАЕТЕ, С ЧЕГО НАЧАТЬ?
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", color: "rgba(226,217,200,0.35)", margin: 0 }}>
                  Расскажите о вашей задаче — мы предложим решение
                </p>
              </div>
              <button onClick={() => navigate("/contacts")} style={{
                background: G, border: `1px solid ${G}`, color: BG,
                fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                letterSpacing: "0.25em", textTransform: "uppercase",
                padding: "18px 40px", cursor: "pointer", transition: "all 0.3s", whiteSpace: "nowrap",
              }}
                onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              >БЕСПЛАТНАЯ КОНСУЛЬТАЦИЯ</button>
            </div>
          </Reveal>
        </section>
      </div>
    </Layout>
  );
}
