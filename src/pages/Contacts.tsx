import { useState } from "react";
import Layout from "@/components/Layout";
import Reveal from "@/components/Reveal";

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
    marginBottom: "36px",
    display: "block",
  } as React.CSSProperties);

  return (
    <Layout>
      <div style={{ background: BG, paddingTop: "68px" }}>

        {/* Header */}
        <section style={{ padding: "80px 56px 72px", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
          <Reveal>
            <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "80px", alignItems: "end" }}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>Свяжитесь с нами</div>
                <h1 style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(40px, 5vw, 68px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", margin: 0, lineHeight: 1.1 }}>
                  ОБСУДИМ<br /><span style={{ color: G }}>ВАШ ОБЪЕКТ</span>
                </h1>
              </div>
              <div>
                <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                  <div style={{ width: "8px", height: "8px", background: G, borderRadius: "50%", animation: "pulse 2s infinite" }} />
                  <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 500, color: G, letterSpacing: "0.05em" }}>Ответим в течение 15 минут</span>
                </div>
                <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.4)", lineHeight: 1.85, margin: 0 }}>
                  Расскажите о задаче — и мы предложим решение. Выезд специалиста на объект — бесплатно.
                </p>
              </div>
            </div>
          </Reveal>
        </section>

        {/* Main block */}
        <section style={{ padding: "80px 56px 100px" }}>
          <div style={{ maxWidth: "1100px", margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "100px" }}>

            {/* Form */}
            <Reveal>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "40px" }}>Оставить заявку</div>

                {sent ? (
                  <div style={{ padding: "56px 40px", border: `1px solid rgba(184,160,106,0.2)`, textAlign: "center" }}>
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
                      marginBottom: "16px", transition: "all 0.3s",
                    }}
                      onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
                      onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
                    >ОТПРАВИТЬ ЗАЯВКУ</button>
                    <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", color: "rgba(226,217,200,0.18)", letterSpacing: "0.05em", lineHeight: 1.6 }}>
                      Нажимая кнопку, вы соглашаетесь с политикой обработки персональных данных
                    </p>
                  </form>
                )}
              </div>
            </Reveal>

            {/* Contact info */}
            <Reveal delay={120}>
              <div>
                <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "40px" }}>Контакты</div>

                <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
                  {CONTACT_INFO.map((item, i) => (
                    <div key={i} style={{ padding: "32px 0", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", fontWeight: 600, letterSpacing: "0.3em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", marginBottom: "10px" }}>{item.label}</div>
                      {item.href ? (
                        <a href={item.href} style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 300, color: "#e2d9c8", textDecoration: "none", display: "block", marginBottom: "6px", transition: "color 0.3s", letterSpacing: "0.03em" }}
                          onMouseEnter={e => (e.currentTarget.style.color = G)}
                          onMouseLeave={e => (e.currentTarget.style.color = "#e2d9c8")}
                        >{item.value}</a>
                      ) : (
                        <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 300, color: "#e2d9c8", marginBottom: "6px", letterSpacing: "0.03em" }}>{item.value}</div>
                      )}
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(226,217,200,0.25)", letterSpacing: "0.08em" }}>{item.sub}</div>
                    </div>
                  ))}
                </div>

                {/* Messengers */}
                <div style={{ marginTop: "32px", display: "flex", gap: "12px" }}>
                  <a href="https://t.me/+79060014666" target="_blank" rel="noopener noreferrer" style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    background: "transparent", border: `1px solid rgba(184,160,106,0.25)`, color: "rgba(226,217,200,0.5)",
                    fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600,
                    letterSpacing: "0.2em", padding: "12px", textDecoration: "none", transition: "all 0.3s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = G; (e.currentTarget as HTMLAnchorElement).style.color = G; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(184,160,106,0.25)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,217,200,0.5)"; }}
                  >TELEGRAM</a>
                  <a href="https://wa.me/79060014666" target="_blank" rel="noopener noreferrer" style={{
                    flex: 1, display: "flex", alignItems: "center", justifyContent: "center", gap: "8px",
                    background: "transparent", border: `1px solid rgba(184,160,106,0.25)`, color: "rgba(226,217,200,0.5)",
                    fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600,
                    letterSpacing: "0.2em", padding: "12px", textDecoration: "none", transition: "all 0.3s",
                  }}
                    onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = G; (e.currentTarget as HTMLAnchorElement).style.color = G; }}
                    onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(184,160,106,0.25)"; (e.currentTarget as HTMLAnchorElement).style.color = "rgba(226,217,200,0.5)"; }}
                  >WHATSAPP</a>
                </div>

                {/* Response promise */}
                <div style={{ marginTop: "24px", padding: "28px 24px", border: `1px solid rgba(184,160,106,0.15)`, background: "rgba(184,160,106,0.03)" }}>
                  <div style={{ display: "flex", alignItems: "flex-start", gap: "16px" }}>
                    <div style={{ width: "6px", height: "6px", background: G, borderRadius: "50%", marginTop: "5px", flexShrink: 0 }} />
                    <div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "12px", fontWeight: 600, color: G, marginBottom: "8px", letterSpacing: "0.05em" }}>Ответим в течение 15 минут</div>
                      <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.35)", lineHeight: 1.8 }}>
                        Консультация бесплатна. В рабочее время — перезвоним немедленно. После 19:00 — в 9:00 следующего дня.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>

          </div>
        </section>

      </div>
    </Layout>
  );
}