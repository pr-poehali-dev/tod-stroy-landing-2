import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";
import SEO, { SCHEMA_BREADCRUMB } from "@/components/SEO";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const CONTACT_INFO = [
  { label: "ТЕЛЕФОН", value: "+7 (906) 001-46-66", sub: "ПН–ПТ, 9:00–19:00", href: "tel:+79060014666" },
  { label: "EMAIL", value: "info@todstr.ru", sub: "Ответим в течение дня", href: "mailto:info@todstr.ru" },
  { label: "ОФИС", value: "Москва, ул. Профсоюзная, д. 56, эт. 17, оф. 14", sub: "По предварительной записи", href: null },
  { label: "TELEGRAM / WHATSAPP", value: "+7 (906) 001-46-66", sub: "Напишите в мессенджер", href: "https://t.me/+79060014666" },
];

export default function Contacts() {
  const [form, setForm] = useState({ name: "", phone: "", type: "", message: "" });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const inputStyle = (field: string) => ({
    background: "transparent",
    border: "none",
    borderBottom: `1px solid ${focused === field ? G : "rgba(184,160,106,0.2)"}`,
    outline: "none",
    width: "100%",
    padding: "14px 0",
    fontFamily: "'Montserrat', sans-serif",
    fontSize: "13px",
    fontWeight: 300,
    letterSpacing: "0.04em",
    color: "#e2d9c8",
    transition: "border-color 0.3s",
    marginBottom: "32px",
    display: "block",
  } as React.CSSProperties);

  return (
    <Layout>
      <SEO
        title="Контакты — ТОД Строй, ремонт квартир в Москве"
        description="Свяжитесь с ТОД Строй: +7 (906) 001-46-66, info@todstr.ru. Москва, ул. Профсоюзная, д. 56. Консультация бесплатна. Ответим в течение 15 минут."
        canonical="/contacts"
        keywords="контакты ТОД строй, телефон ремонт квартир Москва, заказать ремонт квартиры"
        schema={SCHEMA_BREADCRUMB([{ name: "Главная", url: "/" }, { name: "Контакты", url: "/contacts" }])}
      />
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Header */}
        <section style={{ padding: "clamp(40px,7vw,80px) clamp(16px,5vw,56px) clamp(32px,5vw,72px)", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
              <div className="contacts-header-grid">
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "20px" }}>
                    <div style={{ width: "36px", height: "1px", background: G }} />
                    <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>Свяжитесь с нами</div>
                  </div>
                  <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(36px, 5vw, 68px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: 0, lineHeight: 1.1 }}>
                    ОБСУДИМ<br /><span style={{ color: G }}>ВАШ ОБЪЕКТ</span>
                  </h1>
                </div>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                    <div style={{ width: "8px", height: "8px", background: G, borderRadius: "50%", animation: "pulse 2s infinite" }} />
                    <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: G, letterSpacing: "0.05em" }}>Ответим в течение 15 минут</span>
                  </div>
                  <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(12px,1.5vw,13px)", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85, margin: 0 }}>
                    Расскажите о задаче — и мы предложим решение. Выезд специалиста на объект — бесплатно.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Main block */}
        <section style={{ padding: "clamp(40px,7vw,80px) clamp(16px,5vw,56px) clamp(48px,8vw,100px)" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
            <div className="contacts-main-grid">
              {/* Form */}
              <Reveal>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "40px" }}>Оставить заявку</div>

                  {sent ? (
                    <div style={{ padding: "clamp(32px,5vw,56px) clamp(24px,4vw,40px)", border: `1px solid rgba(184,160,106,0.2)`, textAlign: "center" }}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 700, letterSpacing: "0.25em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>ЗАЯВКА ПРИНЯТА</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.8 }}>
                        Мы свяжемся с вами в течение 15 минут.<br />Если не дозвонимся — напишем на почту.
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={e => { e.preventDefault(); setSent(true); }}>
                      <div>
                        <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Ваше имя</label>
                        <input
                          style={inputStyle("name")}
                          placeholder="Как вас зовут?"
                          value={form.name}
                          onChange={e => setForm({ ...form, name: e.target.value })}
                          onFocus={() => setFocused("name")}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Телефон</label>
                        <input
                          style={inputStyle("phone")}
                          placeholder="+7 (___) ___-__-__"
                          type="tel"
                          value={form.phone}
                          onChange={e => setForm({ ...form, phone: e.target.value })}
                          onFocus={() => setFocused("phone")}
                          onBlur={() => setFocused(null)}
                          required
                        />
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Тип объекта</label>
                        <select
                          style={{ ...inputStyle("type"), cursor: "pointer" }}
                          value={form.type}
                          onChange={e => setForm({ ...form, type: e.target.value })}
                          onFocus={() => setFocused("type")}
                          onBlur={() => setFocused(null)}
                        >
                          <option value="" style={{ background: BG }}>Выберите тип объекта</option>
                          <option value="residence" style={{ background: BG }}>Частная резиденция / дом</option>
                          <option value="apartment" style={{ background: BG }}>Квартира / апартаменты</option>
                          <option value="commercial" style={{ background: BG }}>Коммерческий объект</option>
                          <option value="other" style={{ background: BG }}>Другое</option>
                        </select>
                      </div>
                      <div>
                        <label style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", display: "block", marginBottom: "8px" }}>Расскажите о задаче</label>
                        <textarea
                          style={{ ...inputStyle("message"), resize: "none", height: "100px", paddingBottom: "12px" } as React.CSSProperties}
                          placeholder="Площадь, локация, сроки, особые требования..."
                          value={form.message}
                          onChange={e => setForm({ ...form, message: e.target.value })}
                          onFocus={() => setFocused("message")}
                          onBlur={() => setFocused(null)}
                        />
                      </div>
                      <button type="submit" style={{
                        background: G, border: `1px solid ${G}`, color: BG,
                        fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 700,
                        letterSpacing: "0.25em", textTransform: "uppercase",
                        padding: "16px 0", cursor: "pointer", width: "100%",
                        transition: "all 0.3s",
                      }}
                        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                      >ОТПРАВИТЬ ЗАЯВКУ</button>
                    </form>
                  )}
                </div>
              </Reveal>

              {/* Contact details */}
              <Reveal delay={100}>
                <div>
                  <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "40px" }}>Реквизиты</div>
                  <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                    {CONTACT_INFO.map((c, i) => (
                      <div key={i} style={{ borderBottom: "1px solid rgba(184,160,106,0.08)", padding: "clamp(20px,3vw,28px) 0" }}>
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", marginBottom: "10px" }}>{c.label}</div>
                        {c.href ? (
                          <a href={c.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(14px,2vw,17px)", fontWeight: 400, letterSpacing: "0.04em", color: "#e2d9c8", textDecoration: "none", transition: "color 0.3s", display: "block", marginBottom: "4px" }}
                            onMouseEnter={e => (e.currentTarget.style.color = G)}
                            onMouseLeave={e => (e.currentTarget.style.color = "#e2d9c8")}
                          >{c.value}</a>
                        ) : (
                          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px,1.8vw,16px)", fontWeight: 400, letterSpacing: "0.04em", color: "#e2d9c8", marginBottom: "4px" }}>{c.value}</div>
                        )}
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 300, letterSpacing: "0.08em", color: "rgba(226,217,200,0.3)" }}>{c.sub}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}
