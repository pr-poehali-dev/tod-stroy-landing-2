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

  const isHome = location.pathname === "/";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        height: "68px", padding: "0 56px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        background: scrolled || !isHome ? "rgba(13,13,13,0.97)" : "transparent",
        backdropFilter: scrolled || !isHome ? "blur(16px)" : "none",
        borderBottom: scrolled || !isHome ? "1px solid rgba(184,160,106,0.12)" : "none",
        transition: "all 0.5s ease",
      }}>
        <Link to="/" style={{ textDecoration: "none", display: "flex", flexDirection: "column", lineHeight: 1 }}>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "20px", fontWeight: 700, letterSpacing: "0.22em", color: G }}>TOD</span>
          <span style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "6.5px", fontWeight: 400, letterSpacing: "0.28em", color: "rgba(184,160,106,0.55)", textTransform: "uppercase", marginTop: "2px" }}>Architecture of Control</span>
        </Link>

        <div className="hidden md:flex" style={{ gap: "44px", alignItems: "center" }}>
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
          style={{ background: "none", border: "none", color: G, cursor: "pointer" }}>
          <Icon name={menuOpen ? "X" : "Menu"} size={20} />
        </button>
      </nav>

      {menuOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 99, background: "rgba(13,13,13,0.99)", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: "40px" }}>
          {[{ path: "/", label: "ГЛАВНАЯ" }, ...NAV_LINKS].map(({ path, label }) => (
            <Link key={path} to={path} style={{
              fontFamily: "'Montserrat', sans-serif", fontSize: "13px", fontWeight: 700,
              letterSpacing: "0.25em", color: location.pathname === path ? G : "#e2d9c8",
              textDecoration: "none",
            }}>{label}</Link>
          ))}
        </div>
      )}
    </>
  );
}

export function Footer() {
  const navigate = useNavigate();
  return (
    <footer style={{ background: "#090909", borderTop: "1px solid rgba(184,160,106,0.1)", padding: "64px 56px 40px" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: "48px", marginBottom: "56px" }}>
          <div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "26px", fontWeight: 800, letterSpacing: "0.15em", color: G, lineHeight: 1 }}>TOD</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "11px", fontWeight: 400, letterSpacing: "0.1em", color: "rgba(226,217,200,0.25)", marginTop: "4px" }}>STROY</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "7.5px", letterSpacing: "0.25em", color: "rgba(184,160,106,0.3)", textTransform: "uppercase", marginTop: "2px", marginBottom: "20px" }}>Architecture of Control</div>
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
            <a href="tel:+74951234567" style={{ display: "block", fontFamily: "'Montserrat', sans-serif", fontSize: "16px", fontWeight: 300, letterSpacing: "0.06em", color: "#e2d9c8", textDecoration: "none", marginBottom: "10px", transition: "color 0.3s" }}
              onMouseEnter={e => (e.currentTarget.style.color = G)}
              onMouseLeave={e => (e.currentTarget.style.color = "#e2d9c8")}
            >+7 (495) 123-45-67</a>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(226,217,200,0.25)", marginBottom: "6px" }}>info@todstroy.ru</div>
            <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "10px", color: "rgba(226,217,200,0.25)", marginBottom: "24px" }}>Москва, Рублёвское шоссе, 20</div>
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
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.12em", color: "rgba(226,217,200,0.15)" }}>© 2024 TOD STROY. Все права защищены.</div>
          <div style={{ fontFamily: "'Montserrat', sans-serif", fontSize: "9px", letterSpacing: "0.12em", color: "rgba(226,217,200,0.15)" }}>МОСКВА, РОССИЯ</div>
        </div>
      </div>
    </footer>
  );
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ background: BG, minHeight: "100vh", color: "#e2d9c8" }}>
      <Nav />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
