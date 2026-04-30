import { useNavigate } from "react-router-dom";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import { IMGS } from "@/data/projects";
import SEO, { SCHEMA_BREADCRUMB } from "@/components/SEO";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const STAGES = [
  {
    num: "01",
    title: "Анализ объекта",
    duration: "1–2 недели",
    description: "Изучаем ваш объект, требования и ограничения. Выезжаем на место, проводим обмеры, технические исследования. Фиксируем всё, что повлияет на проект.",
    result: "Техническое задание + предварительная концепция",
    details: [
      "Выезд специалиста на объект",
      "Геотехнические исследования (при необходимости)",
      "Анализ коммуникаций и ограничений",
      "Согласование ТЗ с заказчиком",
    ],
  },
  {
    num: "02",
    title: "Проектирование",
    duration: "3–8 недель",
    description: "Разрабатываем полный пакет проектной документации. Архитектурная концепция, конструктивные решения, инженерные разделы. Всё согласовывается с заказчиком перед началом работ.",
    result: "Рабочая документация, готовая к строительству",
    details: [
      "Архитектурный раздел (АР)",
      "Конструктивные решения (КР)",
      "Инженерные разделы (ОВ, ВК, ЭОМ)",
      "Дизайн-проект интерьеров (при необходимости)",
    ],
  },
  {
    num: "03",
    title: "Планирование бюджета",
    duration: "1–2 недели",
    description: "Составляем детальную смету на основе рабочей документации. Никаких «от 1 млн рублей» — только конкретные цифры по каждой позиции. Утверждаем с заказчиком до старта.",
    result: "Детальная смета с разбивкой по этапам",
    details: [
      "Сметная документация по ФЕР/ТЕР",
      "Спецификация материалов",
      "График платежей",
      "Резервный фонд под непредвиденные",
    ],
  },
  {
    num: "04",
    title: "Реализация",
    duration: "3–18 месяцев",
    description: "Строго следуем утверждённому плану. Работаем собственными бригадами и проверенными субподрядчиками. Каждая неделя — отчёт с фотографиями и статусом по каждому разделу.",
    result: "Готовый объект в соответствии с проектом",
    details: [
      "Собственные бригады для ключевых работ",
      "Еженедельная фотоотчётность",
      "Контроль качества материалов на входе",
      "Независимый технический надзор",
    ],
  },
  {
    num: "05",
    title: "Контроль качества",
    duration: "На всём цикле",
    description: "Поэтапная проверка выполненных работ до закрытия каждого этапа. Скрытые работы фиксируются актами. Объект сдаётся только после прохождения полного чеклиста — без исключений.",
    result: "Сдача объекта без замечаний",
    details: [
      "Пофазный технический контроль",
      "Акты скрытых работ",
      "Финальный чеклист из 200+ позиций",
      "Гарантийное сопровождение 2 года",
    ],
  },
];

export default function Process() {
  const navigate = useNavigate();

  return (
    <Layout>
      <SEO
        title="Процесс работы — как мы делаем ремонт квартир в Москве"
        description="Узнайте, как ТОД Строй выполняет ремонт квартир: анализ объекта, дизайн-проект, планирование бюджета, реализация, контроль качества. Прозрачный процесс без сюрпризов."
        canonical="/process"
        keywords="этапы ремонта квартиры, как делается ремонт, процесс ремонта"
        schema={SCHEMA_BREADCRUMB([{ name: "Главная", url: "/" }, { name: "Процесс работы", url: "/process" }])}
      />
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Hero */}
        <section style={{ position: "relative", height: "55vh", overflow: "hidden" }}>
          <img src={IMGS.p1} alt="Процесс работы TOD STROY" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center 40%" }} />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to right, rgba(13,13,13,0.95) 0%, rgba(13,13,13,0.5) 60%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", flexDirection: "column", justifyContent: "center", padding: "0 56px", zIndex: 2 }}>
            <div style={{ maxWidth: "1100px", margin: "0 auto", width: "100%" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Методология</div>
              <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: 0, lineHeight: 1.1 }}>
                СИСТЕМА,<br />А НЕ <span style={{ color: G }}>СЛУЧАЙНОСТЬ</span>
              </h1>
            </div>
          </div>
        </section>

        {/* Intro */}
        <section style={{ padding: "80px 56px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: "64px" }}>
              <div>
                <div style={{ width: "28px", height: "1px", background: G, marginBottom: "28px" }} />
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.3)", lineHeight: 1.9, letterSpacing: "0.05em" }}>
                  У каждого нашего проекта — один руководитель, один сквозной план и единая точка ответственности. Это не красивые слова. Это наша операционная модель.
                </p>
              </div>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "18px", fontWeight: 300, color: "rgba(226,217,200,0.65)", lineHeight: 1.85, margin: 0 }}>
                Хаос на стройке — следствие отсутствия системы, а не сложности объекта. Мы устраняем хаос на этапе планирования. К тому моменту, когда на площадке начинаются работы, каждый знает, что делать и когда.
              </p>
            </div>
          </Reveal>
        </section>

        {/* Stages */}
        <section style={{ padding: "80px 0 100px", maxWidth: "1100px", margin: "0 auto" }}>
          <div style={{ padding: "0 56px" }}>
            {STAGES.map((stage, i) => (
              <Reveal key={stage.num} delay={i * 60}>
                <div style={{
                  display: "grid", gridTemplateColumns: "100px 1fr 1fr",
                  gap: "0", borderBottom: "1px solid rgba(184,160,106,0.08)",
                  padding: "56px 0", alignItems: "start",
                }}>
                  {/* Number */}
                  <div style={{ paddingTop: "4px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "40px", fontWeight: 800, color: "rgba(184,160,106,0.15)", lineHeight: 1 }}>{stage.num}</div>
                  </div>

                  {/* Title + description */}
                  <div style={{ paddingRight: "48px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "12px" }}>
                      {stage.duration}
                    </div>
                    <h3 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "22px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.06em", color: "#e2d9c8", margin: "0 0 20px" }}>{stage.title}</h3>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, margin: "0 0 20px" }}>{stage.description}</p>
                    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                      <div style={{ width: "18px", height: "1px", background: G, flexShrink: 0 }} />
                      <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500, color: G, letterSpacing: "0.1em" }}>{stage.result}</span>
                    </div>
                  </div>

                  {/* Details list */}
                  <div style={{ paddingLeft: "48px", borderLeft: "1px solid rgba(184,160,106,0.1)" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", marginBottom: "20px" }}>Включает</div>
                    <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                      {stage.details.map(d => (
                        <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                          <div style={{ width: "4px", height: "4px", background: G, flexShrink: 0, marginTop: "5px", borderRadius: "50%" }} />
                          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.7 }}>{d}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* Guarantee */}
        <section style={{ padding: "80px 56px", background: "#111", borderTop: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "16px" }}>Гарантии</div>
                <h2 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(28px, 3vw, 42px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: "0 0 28px", lineHeight: 1.1 }}>
                  МЫ ОТВЕЧАЕМ<br /><span style={{ color: G }}>ЗА РЕЗУЛЬТАТ</span>
                </h2>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, margin: "0 0 36px" }}>
                  После сдачи объекта мы не исчезаем. Гарантийное сопровождение — 2 года на все виды работ. Если что-то не так — устраняем без обсуждений.
                </p>
                <button onClick={() => navigate("/contacts")} style={{
                  background: "transparent", border: `1px solid ${G}`, color: G,
                  fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                  letterSpacing: "0.22em", padding: "14px 36px", cursor: "pointer", transition: "all 0.3s",
                }}
                  onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                  onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                >ОБСУДИТЬ ПРОЕКТ</button>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(184,160,106,0.08)" }}>
                {[
                  ["2 года", "гарантия на работы"],
                  ["98%", "сдача в срок"],
                  ["200+", "завершённых объектов"],
                  ["0", "судебных исков"],
                ].map(([num, label]) => (
                  <div key={label} style={{ background: "#111", padding: "28px 24px" }}>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "30px", fontWeight: 800, color: G, lineHeight: 1, marginBottom: "6px" }}>{num}</div>
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(226,217,200,0.3)", textTransform: "uppercase" }}>{label}</div>
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