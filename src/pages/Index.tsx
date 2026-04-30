import { useState, useEffect, useRef } from "react";
import Icon from "@/components/ui/icon";

const HERO_IMAGE = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/27d058df-1613-40ce-a859-9f969b97a803.jpg";
const PROJECT_1 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/27d058df-1613-40ce-a859-9f969b97a803.jpg";
const PROJECT_2 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/7bbec009-7e0a-418e-bf19-2be219177c1c.jpg";
const PROJECT_3 = "https://cdn.poehali.dev/projects/c962f263-d678-4c89-9b1b-51790f1c55e3/files/24e30f65-4fa6-4a56-8cd8-5ba326c6db45.jpg";

const projects = [
  {
    image: PROJECT_1,
    type: "Частная резиденция",
    area: "1 200 м²",
    duration: "14 месяцев",
    location: "Рублёво-Успенское шоссе",
  },
  {
    image: PROJECT_2,
    type: "Офисный центр класса А",
    area: "4 800 м²",
    duration: "18 месяцев",
    location: "Москва-Сити",
  },
  {
    image: PROJECT_3,
    type: "Загородный дом",
    area: "850 м²",
    duration: "11 месяцев",
    location: "Новорижское шоссе",
  },
];

const steps = [
  { num: "01", title: "Анализ и проект", text: "Изучаем объект, цели и ограничения. Формируем концепцию и предварительный расчёт." },
  { num: "02", title: "Планирование", text: "Детальный план работ, спецификации материалов, согласование с заказчиком." },
  { num: "03", title: "Реализация", text: "Строгое следование проекту. Собственные бригады и проверенные подрядчики." },
  { num: "04", title: "Контроль качества", text: "Пофазная проверка. Сдача объекта без замечаний — наш стандарт." },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(28px)",
        transition: "opacity 0.9s ease, transform 0.9s ease",
      }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  const [form, setForm] = useState({ name: "", phone: "" });
  const [sent, setSent] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div style={{ background: "#0a0a0a", minHeight: "100vh" }}>

      {/* NAV */}
      <nav
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          padding: "0 48px",
          height: "72px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          background: scrolled ? "rgba(10,10,10,0.95)" : "transparent",
          backdropFilter: scrolled ? "blur(12px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.05)" : "none",
          transition: "all 0.4s ease",
        }}
      >
        <div style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 500, letterSpacing: "0.1em", color: "#e8e0d0" }}>
          TOD<span style={{ color: "hsl(43,35%,62%)" }}>.</span>
        </div>

        <div className="hidden md:flex" style={{ gap: "40px" }}>
          {[["about", "О компании"], ["projects", "Проекты"], ["process", "Процесс"], ["contact", "Контакты"]].map(([id, label]) => (
            <button key={id} className="nav-link" onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>

        <button className="btn-gold hidden md:block" style={{ padding: "10px 28px", fontSize: "10px" }} onClick={() => scrollTo("lead")}>
          Обсудить проект
        </button>

        <button className="md:hidden" style={{ background: "none", border: "none", color: "#e8e0d0", cursor: "pointer" }} onClick={() => setMenuOpen(!menuOpen)}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", inset: 0, zIndex: 99, background: "rgba(10,10,10,0.98)",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "32px"
        }}>
          {[["about", "О компании"], ["projects", "Проекты"], ["process", "Процесс"], ["lead", "Обсудить проект"], ["contact", "Контакты"]].map(([id, label]) => (
            <button key={id} style={{ fontFamily: "'Cormorant', serif", fontSize: "28px", fontWeight: 300, color: "#e8e0d0", background: "none", border: "none", cursor: "pointer", letterSpacing: "0.05em" }} onClick={() => scrollTo(id)}>{label}</button>
          ))}
        </div>
      )}

      {/* HERO */}
      <section style={{ position: "relative", height: "100vh", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0 }}>
          <img
            src={HERO_IMAGE}
            alt="TOD STROY — премиальный объект"
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center" }}
            className="animate-scale-in"
          />
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, rgba(10,10,10,0.88) 0%, rgba(10,10,10,0.35) 60%, rgba(10,10,10,0.65) 100%)" }} />
          <div style={{ position: "absolute", inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.05'/%3E%3C/svg%3E\")", opacity: 0.35, pointerEvents: "none" }} />
        </div>

        <div style={{ position: "relative", zIndex: 2, height: "100%", display: "flex", flexDirection: "column", justifyContent: "flex-end", padding: "0 48px 80px" }}>
          <div className="animate-fade-up" style={{ opacity: 0 }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Москва — элитная недвижимость</div>
          </div>
          <h1
            className="animate-fade-up delay-200"
            style={{
              fontFamily: "'Cormorant', serif",
              fontSize: "clamp(52px, 8vw, 110px)",
              fontWeight: 300,
              lineHeight: 1.0,
              letterSpacing: "-0.01em",
              color: "#e8e0d0",
              margin: "0 0 8px",
              opacity: 0,
              maxWidth: "1000px",
            }}
          >
            Архитектура.<br />
            Строительство.<br />
            <span style={{ color: "hsl(43,35%,62%)", fontStyle: "italic" }}>Контроль.</span>
          </h1>
          <p
            className="animate-fade-up delay-400"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              fontSize: "14px",
              fontWeight: 300,
              letterSpacing: "0.08em",
              color: "rgba(232,224,208,0.6)",
              margin: "28px 0 48px",
              opacity: 0,
              maxWidth: "440px",
              lineHeight: 1.8,
            }}
          >
            Реализуем проекты премиум-класса<br />в Москве и области
          </p>
          <div className="animate-fade-up delay-600" style={{ opacity: 0 }}>
            <button className="btn-gold" onClick={() => scrollTo("lead")}>Обсудить проект</button>
          </div>
        </div>

        <div style={{ position: "absolute", bottom: "32px", right: "48px", zIndex: 2 }}>
          <div style={{ width: "1px", height: "64px", background: "linear-gradient(to bottom, transparent, hsl(43,35%,62%))", animation: "fadeIn 2s ease 1.2s forwards", opacity: 0 }} />
        </div>
      </section>

      {/* STATS BAR */}
      <RevealSection>
        <div style={{ borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "48px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: "40px", maxWidth: "960px", margin: "0 auto" }}>
            {[["12+", "лет на рынке"], ["200+", "реализованных объектов"], ["450 000", "м² построено"], ["98%", "проектов сданы в срок"]].map(([num, label]) => (
              <div key={label} style={{ textAlign: "center" }}>
                <div style={{ fontFamily: "'Cormorant', serif", fontSize: "46px", fontWeight: 300, color: "hsl(43,35%,62%)", lineHeight: 1 }}>{num}</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 400, letterSpacing: "0.15em", color: "rgba(232,224,208,0.4)", textTransform: "uppercase", marginTop: "8px" }}>{label}</div>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* ABOUT */}
      <section id="about" style={{ padding: "120px 48px" }}>
        <RevealSection>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "center" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "24px" }}>О компании</div>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 4vw, 54px)", fontWeight: 300, lineHeight: 1.15, color: "#e8e0d0", margin: "0 0 32px" }}>
                Управляем сложными<br />проектами — не просто<br /><em>делаем ремонт</em>
              </h2>
              <div style={{ width: "60px", height: "1px", background: "hsl(43,35%,62%)", marginBottom: "32px" }} />
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.9, color: "rgba(232,224,208,0.6)", marginBottom: "20px" }}>
                Контролируем каждый этап — от концепции до реализации. Работаем с объектами, где важна точность, сроки и уровень исполнения.
              </p>
              <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "14px", fontWeight: 300, lineHeight: 1.9, color: "rgba(232,224,208,0.6)" }}>
                Элитные резиденции, коммерческие объекты, частные дома — наш профиль требует не только мастерства, но и управленческой точности.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1px", background: "rgba(255,255,255,0.05)" }}>
              {[
                ["Премиальные объекты", "Работаем только в высшем ценовом сегменте"],
                ["Полный контроль", "Один ответственный на весь цикл проекта"],
                ["Соблюдение сроков", "98% проектов сданы без переносов"],
                ["Команда экспертов", "Архитекторы, инженеры, технадзор"],
              ].map(([title, text]) => (
                <div key={title} style={{ background: "#0a0a0a", padding: "36px 28px" }}>
                  <div style={{ width: "6px", height: "6px", borderRadius: "50%", background: "hsl(43,35%,62%)", marginBottom: "16px" }} />
                  <div style={{ fontFamily: "'Cormorant', serif", fontSize: "19px", fontWeight: 500, color: "#e8e0d0", marginBottom: "10px" }}>{title}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(232,224,208,0.4)", lineHeight: 1.7 }}>{text}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* PROJECTS */}
      <section id="projects" style={{ padding: "0 0 120px" }}>
        <RevealSection>
          <div style={{ padding: "0 48px 60px", display: "flex", justifyContent: "space-between", alignItems: "flex-end" }}>
            <div>
              <div className="section-label" style={{ marginBottom: "16px" }}>Реализованные проекты</div>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#e8e0d0", margin: 0, lineHeight: 1.1 }}>
                Кейсы
              </h2>
            </div>
            <button className="nav-link" style={{ marginBottom: "4px" }} onClick={() => scrollTo("lead")}>
              Все проекты →
            </button>
          </div>
        </RevealSection>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "2px", padding: "0 48px" }}>
          {projects.map((p, i) => (
            <RevealSection key={i}>
              <div className="project-card" style={{ height: "520px", cursor: "pointer" }}>
                <img src={p.image} alt={p.type} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                <div className="project-card-overlay" />
                <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, padding: "32px 28px" }}>
                  <div className="section-label" style={{ marginBottom: "10px", fontSize: "9px" }}>{p.location}</div>
                  <div style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 400, color: "#e8e0d0", marginBottom: "16px" }}>{p.type}</div>
                  <div style={{ display: "flex", gap: "24px" }}>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.15em", color: "rgba(232,224,208,0.35)", textTransform: "uppercase", marginBottom: "4px" }}>Площадь</div>
                      <div style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 400, color: "hsl(43,35%,62%)" }}>{p.area}</div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.15em", color: "rgba(232,224,208,0.35)", textTransform: "uppercase", marginBottom: "4px" }}>Срок</div>
                      <div style={{ fontFamily: "'Cormorant', serif", fontSize: "20px", fontWeight: 400, color: "hsl(43,35%,62%)" }}>{p.duration}</div>
                    </div>
                  </div>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section id="process" style={{ padding: "120px 48px", background: "#080808" }}>
        <RevealSection>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div style={{ marginBottom: "72px" }}>
              <div className="section-label" style={{ marginBottom: "16px" }}>Как мы работаем</div>
              <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(32px, 4vw, 52px)", fontWeight: 300, color: "#e8e0d0", margin: 0 }}>
                Система, а не<br /><span style={{ color: "hsl(43,35%,62%)", fontStyle: "italic" }}>случайность</span>
              </h2>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "2px" }}>
              {steps.map((s, i) => (
                <div key={i} style={{ background: "#0a0a0a", padding: "40px 32px", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ fontFamily: "'Cormorant', serif", fontSize: "56px", fontWeight: 300, color: "rgba(232,224,208,0.06)", lineHeight: 1, marginBottom: "24px" }}>{s.num}</div>
                  <div style={{ fontFamily: "'Cormorant', serif", fontSize: "22px", fontWeight: 400, color: "#e8e0d0", marginBottom: "16px" }}>{s.title}</div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 300, color: "rgba(232,224,208,0.42)", lineHeight: 1.8 }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </RevealSection>
      </section>

      {/* LEAD MAGNET */}
      <section id="lead" style={{ padding: "120px 48px", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", width: "700px", height: "700px", borderRadius: "50%", background: "radial-gradient(circle, rgba(180,150,90,0.05) 0%, transparent 70%)", pointerEvents: "none" }} />

        <RevealSection>
          <div style={{ maxWidth: "640px", margin: "0 auto", textAlign: "center" }}>
            <div className="section-label" style={{ marginBottom: "24px" }}>Бесплатно</div>
            <h2 style={{ fontFamily: "'Cormorant', serif", fontSize: "clamp(36px, 5vw, 64px)", fontWeight: 300, color: "#e8e0d0", margin: "0 0 24px", lineHeight: 1.1 }}>
              Получите расчёт стоимости<br />и концепцию проекта
            </h2>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(232,224,208,0.45)", letterSpacing: "0.05em", lineHeight: 1.9, marginBottom: "56px" }}>
              Бесплатная консультация по вашему объекту.<br />Выезд специалиста и предварительный расчёт — без обязательств.
            </p>

            {sent ? (
              <div style={{ padding: "56px", border: "1px solid rgba(180,150,90,0.25)", background: "rgba(180,150,90,0.03)" }}>
                <div style={{ fontFamily: "'Cormorant', serif", fontSize: "32px", color: "hsl(43,35%,62%)", marginBottom: "12px" }}>Заявка принята</div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(232,224,208,0.45)" }}>Мы свяжемся с вами в течение 2 часов</div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "32px", maxWidth: "380px", margin: "0 auto" }}>
                <input
                  className="tod-input"
                  placeholder="Ваше имя"
                  value={form.name}
                  onChange={e => setForm({ ...form, name: e.target.value })}
                  required
                />
                <input
                  className="tod-input"
                  placeholder="Телефон"
                  type="tel"
                  value={form.phone}
                  onChange={e => setForm({ ...form, phone: e.target.value })}
                  required
                />
                <button type="submit" className="btn-gold-filled" style={{ marginTop: "8px" }}>
                  Получить расчёт бесплатно
                </button>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(232,224,208,0.2)", letterSpacing: "0.05em", margin: 0 }}>
                  Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
                </p>
              </form>
            )}
          </div>
        </RevealSection>
      </section>

      {/* CONTACTS */}
      <section id="contact" style={{ padding: "80px 48px", borderTop: "1px solid rgba(255,255,255,0.06)", background: "#070707" }}>
        <RevealSection>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "40px" }}>
            <div>
              <div style={{ fontFamily: "'Cormorant', serif", fontSize: "34px", fontWeight: 300, color: "#e8e0d0", marginBottom: "8px" }}>
                TOD<span style={{ color: "hsl(43,35%,62%)" }}>.</span>STROY
              </div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(232,224,208,0.3)", letterSpacing: "0.12em" }}>
                Москва — элитное строительство
              </div>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <a
                href="tel:+74951234567"
                style={{ fontFamily: "'Cormorant', serif", fontSize: "32px", fontWeight: 300, color: "#e8e0d0", textDecoration: "none", transition: "color 0.3s" }}
                onMouseEnter={e => (e.currentTarget.style.color = "hsl(43,35%,62%)")}
                onMouseLeave={e => (e.currentTarget.style.color = "#e8e0d0")}
              >
                +7 (495) 123-45-67
              </a>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(232,224,208,0.35)", letterSpacing: "0.1em" }}>
                Пн–Пт, 9:00–19:00
              </div>
            </div>

            <button className="btn-gold" onClick={() => scrollTo("lead")}>
              Связаться
            </button>
          </div>
        </RevealSection>
      </section>

      {/* FOOTER */}
      <footer style={{ padding: "28px 48px", borderTop: "1px solid rgba(255,255,255,0.04)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "16px" }}>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 300, color: "rgba(232,224,208,0.18)", letterSpacing: "0.1em" }}>
          © 2024 TOD STROY. Все права защищены.
        </div>
        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 300, color: "rgba(232,224,208,0.18)", letterSpacing: "0.1em" }}>
          Москва, Россия
        </div>
      </footer>

    </div>
  );
}
