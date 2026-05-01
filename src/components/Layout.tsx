import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Icon from "@/components/ui/icon";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

const NAV_LINKS = [
  { path: "/projects", label: "ПРОЕКТЫ" },
  { path: "/services", label: "УСЛУГИ" },
  { path: "/about", label: "О КОМПАНИИ" },
  { path: "/contacts", label: "КОНТАКТЫ" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  const isHome = location.pathname === "/";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "68px", padding: "0 clamp(16px, 4vw, 56px)",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || !isHome ? "rgba(13,13,13,0.97)" : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(16px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid rgba(184,160,106,0.12)" : "none",
        transition: "all 0.5s ease",
      }}>
        {/* Logo — увеличен, чётче */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1, gap: "3px" }}>
          <div style={{ display: "flex", alignItems: "baseline", gap: "2px" }}>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(22px, 3vw, 28px)", fontWeight: 800, letterSpacing: "0.18em", color: G, lineHeight: 1 }}>TOD</span>
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(13px, 1.8vw, 17px)", fontWeight: 300, letterSpacing: "0.15em", color: "rgba(226,217,200,0.55)", lineHeight: 1 }}>STROY</span>
          </div>
          {/* Architectural line under logo */}
          <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
            <div style={{ width: "24px", height: "1px", background: G, opacity: 0.6 }} />
            <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", fontWeight: 500, letterSpacing: "0.22em", color: "rgba(184,160,106,0.45)", textTransform: "uppercase" }}>Architecture of Control</span>
          </div>
        </Link>

        <div className="hidden md:flex" style={{ gap: "40px", alignItems: "center" }}>
          {NAV_LINKS.map(({ path, label }) => (
            <Link key={path} to={path} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 500,
              letterSpacing: "0.2em", textDecoration: "none",
              color: location.pathname === path ? G : "rgba(226,217,200,0.5)",
              borderBottom: location.pathname === path ? `1px solid ${G}` : "1px solid transparent",
              paddingBottom: "2px",
              transition: "color 0.3s, border-color 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.color = G; }}
              onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.color = location.pathname === path ? G : "rgba(226,217,200,0.5)"; }}
            >{label}</Link>
          ))}
        </div>

        <button
          className="hidden md:block"
          onClick={() => navigate("/contacts")}
          style={{
            background: "transparent", border: `1px solid ${G}`, color: G,
            fontFamily: "'Montserrat', sans-serif", fontSize: "9px", fontWeight: 600,
            letterSpacing: "0.2em", textTransform: "uppercase",
            padding: "10px 24px", cursor: "pointer", transition: "all 0.3s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
        >Обсудить проект</button>

        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: "none", border: "none", color: G, cursor: "pointer", padding: "4px", display: "flex", alignItems: "center" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={22} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(10,10,10,0.99)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "0" }}>
          {/* Architectural decorative lines */}
          <div style={{ position: "absolute", top: 0, left: "24px", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent, rgba(184,160,106,0.15), transparent)" }} />
          <div style={{ position: "absolute", top: 0, right: "24px", width: "1px", height: "100%", background: "linear-gradient(to bottom, transparent, rgba(184,160,106,0.15), transparent)" }} />
          <div style={{ position: "absolute", top: "80px", left: "24px", right: "24px", height: "1px", background: "rgba(184,160,106,0.12)" }} />
          <div style={{ position: "absolute", bottom: "80px", left: "24px", right: "24px", height: "1px", background: "rgba(184,160,106,0.12)" }} />

          {[{ path: "/", label: "ГЛАВНАЯ" }, ...NAV_LINKS].map(({ path, label }, i) => (
            <Link key={path} to={path} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "clamp(18px, 5vw, 22px)", fontWeight: 700,
              letterSpacing: "0.25em", color: location.pathname === path ? G : "#e2d9c8",
              textDecoration: "none", padding: "16px 0", width: "100%", textAlign: "center",
              borderBottom: i < NAV_LINKS.length ? "1px solid rgba(184,160,106,0.06)" : "none",
              transition: "color 0.3s",
            }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = location.pathname === path ? G : "#e2d9c8")}
            >{label}</Link>
          ))}

          <button onClick={() => { setMenuOpen(false); navigate("/contacts"); }} style={{
            marginTop: "40px", background: G, border: `1px solid ${G}`, color: BG,
            fontFamily: "'Montserrat', sans-serif", fontSize: "10px", fontWeight: 700,
            letterSpacing: "0.25em", padding: "16px 48px", cursor: "pointer",
          }}>ОБСУДИТЬ ПРОЕКТ</button>
        </div>
      )}
    </>
  );
}

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ background: "#090909", borderTop: "1px solid rgba(184,160,106,0.1)", padding: "clamp(40px,6vw,64px) clamp(16px,5vw,56px) 32px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        {/* Architectural top line */}
        <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "48px" }}>
          <div style={{ width: "40px", height: "1px", background: G, opacity: 0.4 }} />
          <div style={{ flex: 1, height: "1px", background: "linear-gradient(to right, rgba(184,160,106,0.15), transparent)" }} />
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))", gap: "clamp(28px,4vw,48px)", marginBottom: "48px" }}>
          <div>
            <div style={{ display: "flex", alignItems: "baseline", gap: "4px", marginBottom: "4px" }}>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "28px", fontWeight: 800, letterSpacing: "0.15em", color: G, lineHeight: 1 }}>TOD</div>
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 300, letterSpacing: "0.12em", color: "rgba(226,217,200,0.3)", lineHeight: 1 }}>STROY</div>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "6px", marginBottom: "16px" }}>
              <div style={{ width: "18px", height: "1px", background: G, opacity: 0.5 }} />
              <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7px", letterSpacing: "0.2em", color: "rgba(184,160,106,0.3)", textTransform: "uppercase" }}>Architecture of Control</div>
            </div>
            <p style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 300, color: "rgba(226,217,200,0.3)", lineHeight: 1.8, maxWidth: "240px" }}>
              Реализуем объекты, которые выдерживают время.
            </p>
          </div>

          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", marginBottom: "20px" }}>Разделы</div>
            {NAV_LINKS.map(({ path, label }) => (
              <Link key={path} to={path} style={{
                display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400,
                letterSpacing: "0.1em", color: "rgba(226,217,200,0.35)", textDecoration: "none",
                marginBottom: "12px", transition: "color 0.3s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = G)}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(226,217,200,0.35)")}
              >{label}</Link>
            ))}
          </div>

          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: "rgba(184,160,106,0.4)", textTransform: "uppercase", marginBottom: "20px" }}>Контакты</div>
            <a href="tel:+79060014666" style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 300, letterSpacing: "0.06em", color: "#e2d9c8", textDecoration: "none", marginBottom: "10px", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = "#e2d9c8")}
            >+7 (906) 001-46-66</a>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(226,217,200,0.25)", marginBottom: "6px" }}>info@todstr.ru</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(226,217,200,0.25)", marginBottom: "24px" }}>Москва, ул. Профсоюзная, д. 56</div>
            <button onClick={() => navigate("/contacts")} style={{
              background: "transparent", border: `1px solid ${G}`, color: G,
              fontFamily: "'Montserrat', sans-serif", fontSize: "8px", fontWeight: 600,
              letterSpacing: "0.2em", padding: "12px 24px", cursor: "pointer", transition: "all 0.3s",
            }}
              onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
              onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
            >ОБСУДИТЬ ПРОЕКТ</button>
          </div>
        </div>

        <div style={{ borderTop: "1px solid rgba(184,160,106,0.08)", paddingTop: "24px", display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: "12px" }}>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.12em", color: "rgba(226,217,200,0.15)" }}>© 2008–2024 ТОД Строй. Все права защищены.</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.12em", color: "rgba(226,217,200,0.15)" }}>Москва · ИНН 7736123456</div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
      <Footer />
    </>
  );
}
