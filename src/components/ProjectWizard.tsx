import { useState, useRef, useCallback } from "react";

const G = "hsl(43,40%,60%)";
const BG = "#0d0d0d";

/* ── типы ── */
type Step = "upload" | "analyzing" | "questions" | "result" | "form" | "done";
type ObjectType = "apartment" | "house" | "commercial" | "";
type AreaRange = "50" | "100" | "150" | "200" | "300" | "";
type Level = "premium" | "high" | "individual" | "";
type Priority = "design" | "deadline" | "budget" | "control";

interface Answers {
  objectType: ObjectType;
  area: AreaRange;
  level: Level;
  priorities: Priority[];
}

/* ── стили ── */
const mono = "'Montserrat', sans-serif";

const labelStyle: React.CSSProperties = {
  fontFamily: mono, fontSize: "7.5px", fontWeight: 600,
  letterSpacing: "0.3em", color: "rgba(184,160,106,0.5)",
  textTransform: "uppercase", marginBottom: "20px", display: "block",
};

const chipBase: React.CSSProperties = {
  fontFamily: mono, fontSize: "10px", fontWeight: 500,
  letterSpacing: "0.1em", padding: "12px 22px",
  border: "1px solid rgba(226,217,200,0.12)",
  background: "transparent", color: "rgba(226,217,200,0.45)",
  cursor: "pointer", transition: "all 0.25s ease",
  textAlign: "left" as const,
};

const chipActive: React.CSSProperties = {
  ...chipBase,
  border: `1px solid ${G}`,
  color: G,
  background: "rgba(184,160,106,0.06)",
};

/* ── прогресс-линия ── */
function ProgressBar({ step }: { step: number }) {
  const steps = ["upload", "questions", "result", "form"];
  const idx = Math.min(step, steps.length - 1);
  return (
    <div style={{ display: "flex", gap: "6px", marginBottom: "48px" }}>
      {steps.map((_, i) => (
        <div key={i} style={{
          flex: 1, height: "1px",
          background: i <= idx ? G : "rgba(226,217,200,0.1)",
          transition: "background 0.5s ease",
        }} />
      ))}
    </div>
  );
}

/* ── анимированный текст анализа ── */
function AnalyzingScreen() {
  const lines = [
    "Читаем планировку…",
    "Определяем зоны…",
    "Оцениваем потенциал…",
    "Формируем рекомендации…",
  ];
  const [current, setCurrent] = useState(0);

  useState(() => {
    const t = setInterval(() => {
      setCurrent(c => {
        if (c >= lines.length - 1) { clearInterval(t); return c; }
        return c + 1;
      });
    }, 650);
    return () => clearInterval(t);
  });

  return (
    <div style={{ textAlign: "center", padding: "48px 0" }}>
      <div style={{ marginBottom: "40px" }}>
        <div style={{
          width: "48px", height: "48px", borderRadius: "50%",
          border: `1px solid ${G}`, borderTopColor: "transparent",
          margin: "0 auto 32px",
          animation: "spin 1.2s linear infinite",
        }} />
        <style>{`@keyframes spin { to { transform: rotate(360deg); } }`}</style>
        <div style={{ fontFamily: mono, fontSize: "22px", fontWeight: 700, color: "#e2d9c8", letterSpacing: "0.04em", marginBottom: "8px" }}>
          Анализируем планировку
        </div>
        <div style={{ fontFamily: mono, fontSize: "10px", color: "rgba(226,217,200,0.3)", letterSpacing: "0.15em" }}>
          Пожалуйста, подождите
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px", maxWidth: "280px", margin: "0 auto" }}>
        {lines.map((line, i) => (
          <div key={i} style={{
            display: "flex", alignItems: "center", gap: "12px",
            opacity: i <= current ? 1 : 0.15,
            transition: "opacity 0.5s ease",
          }}>
            <div style={{
              width: "6px", height: "6px", borderRadius: "50%",
              background: i <= current ? G : "rgba(226,217,200,0.1)",
              flexShrink: 0, transition: "background 0.4s ease",
            }} />
            <div style={{ fontFamily: mono, fontSize: "11px", color: i <= current ? "rgba(226,217,200,0.65)" : "rgba(226,217,200,0.2)", transition: "color 0.4s ease" }}>
              {line}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ── загрузка файла ── */
function UploadScreen({ onUpload }: { onUpload: (name: string) => void }) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [dragging, setDragging] = useState(false);

  const handleFile = (file: File) => {
    if (file) onUpload(file.name);
  };

  const onDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    setDragging(false);
    const file = e.dataTransfer.files[0];
    if (file) handleFile(file);
  }, []);

  return (
    <div>
      <div style={{ marginBottom: "40px" }}>
        <div style={{ fontFamily: mono, fontSize: "clamp(28px, 4vw, 44px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.1, marginBottom: "16px" }}>
          Начните проект
        </div>
        <div style={{ fontFamily: mono, fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.85 }}>
          Загрузите планировку вашего объекта — и мы подготовим предварительный анализ бесплатно.
        </div>
      </div>

      {/* Drop zone */}
      <div
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        onClick={() => inputRef.current?.click()}
        style={{
          border: `1px solid ${dragging ? G : "rgba(226,217,200,0.12)"}`,
          background: dragging ? "rgba(184,160,106,0.04)" : "transparent",
          padding: "56px 32px",
          textAlign: "center",
          cursor: "pointer",
          transition: "all 0.3s ease",
          marginBottom: "20px",
          position: "relative",
        }}
        onMouseEnter={e => (e.currentTarget.style.borderColor = "rgba(184,160,106,0.35)")}
        onMouseLeave={e => (e.currentTarget.style.borderColor = dragging ? G : "rgba(226,217,200,0.12)")}
      >
        {/* Upload icon */}
        <div style={{ marginBottom: "20px" }}>
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" style={{ margin: "0 auto", display: "block", opacity: 0.4 }}>
            <path d="M18 24V12M18 12L13 17M18 12L23 17" stroke={G} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="1" y="1" width="34" height="34" rx="0" stroke="rgba(184,160,106,0.3)" strokeWidth="0.5"/>
            <path d="M9 28H27" stroke={G} strokeWidth="1.2" strokeLinecap="round" opacity="0.5"/>
          </svg>
        </div>
        <div style={{ fontFamily: mono, fontSize: "13px", fontWeight: 500, color: "rgba(226,217,200,0.55)", marginBottom: "8px" }}>
          Перетащите файл или нажмите для выбора
        </div>
        <div style={{ fontFamily: mono, fontSize: "9px", color: "rgba(226,217,200,0.25)", letterSpacing: "0.15em" }}>
          PDF · JPG · PNG · до 20 МБ
        </div>
        <input ref={inputRef} type="file" accept=".pdf,.jpg,.jpeg,.png" style={{ display: "none" }} onChange={e => { const f = e.target.files?.[0]; if (f) handleFile(f); }} />
      </div>

      <div style={{ display: "flex", justifyContent: "center" }}>
        <button
          onClick={() => inputRef.current?.click()}
          style={{
            background: G, border: `1px solid ${G}`, color: BG,
            fontFamily: mono, fontSize: "9px", fontWeight: 700,
            letterSpacing: "0.25em", textTransform: "uppercase",
            padding: "14px 40px", cursor: "pointer", transition: "all 0.3s",
          }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
        >
          ЗАГРУЗИТЬ ФАЙЛ
        </button>
      </div>

      {/* Skip */}
      <div style={{ textAlign: "center", marginTop: "24px" }}>
        <button onClick={() => onUpload("")} style={{
          background: "none", border: "none", cursor: "pointer",
          fontFamily: mono, fontSize: "9px", color: "rgba(226,217,200,0.25)",
          letterSpacing: "0.15em", textDecoration: "underline",
          textDecorationColor: "rgba(226,217,200,0.15)",
        }}>
          Продолжить без планировки
        </button>
      </div>
    </div>
  );
}

/* ── вопросы ── */
function QuestionsScreen({ fileName, answers, setAnswers, onNext }: {
  fileName: string;
  answers: Answers;
  setAnswers: (a: Answers) => void;
  onNext: () => void;
}) {
  const [qStep, setQStep] = useState(0);

  const togglePriority = (p: Priority) => {
    const cur = answers.priorities;
    setAnswers({
      ...answers,
      priorities: cur.includes(p) ? cur.filter(x => x !== p) : [...cur, p],
    });
  };

  const canNext = () => {
    if (qStep === 0) return !!answers.objectType;
    if (qStep === 1) return !!answers.area;
    if (qStep === 2) return !!answers.level;
    if (qStep === 3) return answers.priorities.length > 0;
    return true;
  };

  const questions = [
    {
      label: "Тип объекта",
      q: "Что будем делать?",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {([["apartment", "Квартира"], ["house", "Загородный дом"], ["commercial", "Коммерческий объект"]] as [ObjectType, string][]).map(([val, label]) => (
            <button key={val} style={answers.objectType === val ? chipActive : chipBase}
              onClick={() => setAnswers({ ...answers, objectType: val })}
              onMouseEnter={e => { if (answers.objectType !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,160,106,0.35)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.7)"; } }}
              onMouseLeave={e => { if (answers.objectType !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(226,217,200,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.45)"; } }}
            >{label}</button>
          ))}
        </div>
      ),
    },
    {
      label: "Площадь",
      q: "Примерная площадь объекта",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {([["50", "до 50 м²"], ["100", "50–100 м²"], ["150", "100–150 м²"], ["200", "150–200 м²"], ["300", "200–300 м²"], ["300+", "свыше 300 м²"]] as [AreaRange, string][]).map(([val, label]) => (
            <button key={val} style={answers.area === val ? chipActive : chipBase}
              onClick={() => setAnswers({ ...answers, area: val as AreaRange })}
              onMouseEnter={e => { if (answers.area !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,160,106,0.35)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.7)"; } }}
              onMouseLeave={e => { if (answers.area !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(226,217,200,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.45)"; } }}
            >{label}</button>
          ))}
        </div>
      ),
    },
    {
      label: "Уровень проекта",
      q: "Какой уровень вам важен?",
      content: (
        <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
          {([
            ["premium", "Премиум", "Дизайн-проект, авторские решения, без компромиссов"],
            ["high", "Высокий", "Качественные материалы, индивидуальный подход"],
            ["individual", "Индивидуальный", "Хочу обсудить детально — у меня особый запрос"],
          ] as [Level, string, string][]).map(([val, label, sub]) => (
            <button key={val} style={answers.level === val ? { ...chipActive, paddingTop: "14px", paddingBottom: "14px" } : { ...chipBase, paddingTop: "14px", paddingBottom: "14px" }}
              onClick={() => setAnswers({ ...answers, level: val })}
              onMouseEnter={e => { if (answers.level !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,160,106,0.35)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.7)"; } }}
              onMouseLeave={e => { if (answers.level !== val) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(226,217,200,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.45)"; } }}
            >
              <div style={{ fontWeight: 600, marginBottom: "4px" }}>{label}</div>
              <div style={{ fontSize: "9px", opacity: 0.55, fontWeight: 300 }}>{sub}</div>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Приоритеты",
      q: "Что для вас важнее всего?",
      content: (
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "8px" }}>
          {([
            ["design", "Эстетика и дизайн"],
            ["deadline", "Чёткие сроки"],
            ["budget", "Контроль бюджета"],
            ["control", "Полный контроль"],
          ] as [Priority, string][]).map(([val, label]) => (
            <button key={val} style={answers.priorities.includes(val) ? chipActive : chipBase}
              onClick={() => togglePriority(val)}
              onMouseEnter={e => { if (!answers.priorities.includes(val)) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(184,160,106,0.35)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.7)"; } }}
              onMouseLeave={e => { if (!answers.priorities.includes(val)) { (e.currentTarget as HTMLButtonElement).style.borderColor = "rgba(226,217,200,0.12)"; (e.currentTarget as HTMLButtonElement).style.color = "rgba(226,217,200,0.45)"; } }}
            >{label}</button>
          ))}
        </div>
      ),
    },
  ];

  const q = questions[qStep];

  return (
    <div>
      {fileName && (
        <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "32px", padding: "10px 14px", border: "1px solid rgba(184,160,106,0.15)", background: "rgba(184,160,106,0.03)" }}>
          <div style={{ width: "6px", height: "6px", background: G, borderRadius: "50%", flexShrink: 0 }} />
          <div style={{ fontFamily: mono, fontSize: "10px", color: "rgba(226,217,200,0.4)", letterSpacing: "0.05em" }}>{fileName}</div>
        </div>
      )}

      {/* Sub-steps */}
      <div style={{ display: "flex", gap: "4px", marginBottom: "32px" }}>
        {questions.map((_, i) => (
          <div key={i} style={{ flex: 1, height: "1px", background: i <= qStep ? G : "rgba(226,217,200,0.1)", transition: "background 0.4s" }} />
        ))}
      </div>

      <div style={{ marginBottom: "28px" }}>
        <span style={labelStyle}>{q.label}</span>
        <div style={{ fontFamily: mono, fontSize: "clamp(20px, 3vw, 28px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.2, marginBottom: "24px" }}>
          {q.q}
        </div>
        {q.content}
      </div>

      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: "32px" }}>
        {qStep > 0 ? (
          <button onClick={() => setQStep(q => q - 1)} style={{ background: "none", border: "none", cursor: "pointer", fontFamily: mono, fontSize: "9px", color: "rgba(226,217,200,0.25)", letterSpacing: "0.15em" }}>← НАЗАД</button>
        ) : <div />}

        <button
          disabled={!canNext()}
          onClick={() => { if (qStep < questions.length - 1) setQStep(q => q + 1); else onNext(); }}
          style={{
            background: canNext() ? G : "rgba(184,160,106,0.15)",
            border: `1px solid ${canNext() ? G : "rgba(184,160,106,0.15)"}`,
            color: canNext() ? BG : "rgba(226,217,200,0.2)",
            fontFamily: mono, fontSize: "9px", fontWeight: 700,
            letterSpacing: "0.22em", textTransform: "uppercase",
            padding: "13px 32px", cursor: canNext() ? "pointer" : "default",
            transition: "all 0.3s",
          }}
        >
          {qStep < questions.length - 1 ? "ДАЛЕЕ" : "ЗАВЕРШИТЬ"}
        </button>
      </div>
    </div>
  );
}

/* ── результат ── */
function ResultScreen({ answers, onNext }: { answers: Answers; onNext: () => void }) {
  const objectLabels: Record<string, string> = { apartment: "квартире", house: "доме", commercial: "объекте" };
  const objLabel = objectLabels[answers.objectType] || "объекте";

  const insights = [
    "оптимизации пространства и эргономики",
    "улучшения зонирования и световых сценариев",
    "повышения функциональности каждой зоны",
  ];

  return (
    <div>
      {/* Result header */}
      <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "36px" }}>
        <div style={{ width: "28px", height: "1px", background: G }} />
        <div style={{ fontFamily: mono, fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase" }}>
          Предварительный анализ выполнен
        </div>
      </div>

      <div style={{ fontFamily: mono, fontSize: "clamp(22px, 3.5vw, 34px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.15, marginBottom: "32px" }}>
        МЫ ВИДИМ ПОТЕНЦИАЛ<br />В ВАШЕМ <span style={{ color: G }}>{answers.objectType === "apartment" ? "ОБЪЕКТЕ" : answers.objectType === "house" ? "ДОМЕ" : "ПРОЕКТЕ"}</span>
      </div>

      <div style={{ borderLeft: `1px solid rgba(184,160,106,0.2)`, paddingLeft: "24px", marginBottom: "40px" }}>
        <div style={{ fontFamily: mono, fontSize: "11px", color: "rgba(226,217,200,0.4)", marginBottom: "14px", letterSpacing: "0.05em" }}>
          На основе ваших данных мы видим возможности для:
        </div>
        {insights.map((text, i) => (
          <div key={i} style={{ display: "flex", alignItems: "flex-start", gap: "12px", marginBottom: "10px" }}>
            <div style={{ width: "4px", height: "4px", background: G, borderRadius: "50%", marginTop: "6px", flexShrink: 0 }} />
            <div style={{ fontFamily: mono, fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.65)", lineHeight: 1.7 }}>{text}</div>
          </div>
        ))}
      </div>

      {/* Offer block */}
      <div style={{ border: `1px solid rgba(184,160,106,0.2)`, padding: "28px", background: "rgba(184,160,106,0.03)", marginBottom: "28px" }}>
        <div style={{ fontFamily: mono, fontSize: "8px", fontWeight: 600, letterSpacing: "0.25em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>
          Следующий шаг
        </div>
        <div style={{ fontFamily: mono, fontSize: "16px", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", marginBottom: "14px", lineHeight: 1.3 }}>
          Индивидуальный разбор вашего проекта
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "8px", marginBottom: "16px" }}>
          {[
            "Варианты зонирования под ваш стиль жизни",
            "Рекомендации по реализации и материалам",
            "Ориентиры по срокам и бюджету",
          ].map((item, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ width: "16px", height: "1px", background: G, flexShrink: 0 }} />
              <div style={{ fontFamily: mono, fontSize: "11px", color: "rgba(226,217,200,0.45)" }}>{item}</div>
            </div>
          ))}
        </div>
        <div style={{ fontFamily: mono, fontSize: "9px", color: "rgba(184,160,106,0.5)", letterSpacing: "0.1em", display: "flex", alignItems: "center", gap: "8px" }}>
          <div style={{ width: "4px", height: "4px", background: G, borderRadius: "50%" }} />
          Работаем с ограниченным количеством проектов
        </div>
      </div>

      <button onClick={onNext} style={{
        background: G, border: `1px solid ${G}`, color: BG,
        fontFamily: mono, fontSize: "9px", fontWeight: 700,
        letterSpacing: "0.25em", textTransform: "uppercase",
        padding: "16px 40px", cursor: "pointer", width: "100%",
        transition: "all 0.3s",
      }}
        onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
        onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
      >
        ПОЛУЧИТЬ РАЗБОР ПРОЕКТА
      </button>
    </div>
  );
}

/* ── форма ── */
function FormScreen({ onDone }: { onDone: () => void }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [focusedField, setFocusedField] = useState("");

  const fieldStyle = (field: string): React.CSSProperties => ({
    background: "transparent", border: "none", outline: "none",
    borderBottom: `1px solid ${focusedField === field ? G : "rgba(184,160,106,0.2)"}`,
    width: "100%", padding: "13px 0",
    fontFamily: mono, fontSize: "13px", fontWeight: 300,
    letterSpacing: "0.04em", color: "#e2d9c8",
    transition: "border-color 0.3s", display: "block", marginBottom: "28px",
  });

  return (
    <div>
      <div style={{ marginBottom: "36px" }}>
        <div style={{ fontFamily: mono, fontSize: "8px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "14px" }}>
          Почти готово
        </div>
        <div style={{ fontFamily: mono, fontSize: "clamp(22px, 3.5vw, 32px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.2, marginBottom: "12px" }}>
          КУДА ОТПРАВИТЬ<br /><span style={{ color: G }}>АНАЛИЗ?</span>
        </div>
        <div style={{ fontFamily: mono, fontSize: "11px", color: "rgba(226,217,200,0.35)", lineHeight: 1.8 }}>
          Наш специалист свяжется с вами и расскажет о возможностях вашего проекта.
        </div>
      </div>

      <form onSubmit={e => { e.preventDefault(); onDone(); }}>
        <label style={labelStyle}>Ваше имя</label>
        <input style={fieldStyle("name")} placeholder="Как вас зовут?" value={name} onChange={e => setName(e.target.value)}
          onFocus={() => setFocusedField("name")} onBlur={() => setFocusedField("")} required />

        <label style={labelStyle}>Телефон</label>
        <input style={fieldStyle("phone")} placeholder="+7 (___) ___-__-__" type="tel" value={phone} onChange={e => setPhone(e.target.value)}
          onFocus={() => setFocusedField("phone")} onBlur={() => setFocusedField("")} required />

        <button type="submit" style={{
          background: G, border: `1px solid ${G}`, color: BG,
          fontFamily: mono, fontSize: "9px", fontWeight: 700,
          letterSpacing: "0.25em", textTransform: "uppercase",
          padding: "16px 0", cursor: "pointer", width: "100%",
          marginBottom: "14px", transition: "all 0.3s",
        }}
          onMouseEnter={e => { (e.currentTarget as HTMLButtonElement).style.background = "transparent"; (e.currentTarget as HTMLButtonElement).style.color = G; }}
          onMouseLeave={e => { (e.currentTarget as HTMLButtonElement).style.background = G; (e.currentTarget as HTMLButtonElement).style.color = BG; }}
        >ПОЛУЧИТЬ РАЗБОР ПРОЕКТА</button>

        <div style={{ display: "flex", alignItems: "center", gap: "8px", justifyContent: "center" }}>
          <div style={{ width: "4px", height: "4px", background: G, borderRadius: "50%" }} />
          <div style={{ fontFamily: mono, fontSize: "9px", color: "rgba(226,217,200,0.25)", letterSpacing: "0.08em" }}>
            Ответим в течение 15 минут
          </div>
        </div>
      </form>
    </div>
  );
}

/* ── done ── */
function DoneScreen() {
  return (
    <div style={{ textAlign: "center", padding: "24px 0" }}>
      <div style={{ width: "52px", height: "52px", border: `1px solid ${G}`, display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 28px" }}>
        <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
          <path d="M4 11L9 16L18 6" stroke={G} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <div style={{ fontFamily: mono, fontSize: "clamp(22px, 3.5vw, 30px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", marginBottom: "14px" }}>
        ЗАЯВКА ПРИНЯТА
      </div>
      <div style={{ fontFamily: mono, fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.85, maxWidth: "340px", margin: "0 auto" }}>
        Наш специалист свяжется с вами в течение 15 минут и обсудит детали вашего проекта.
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════
   ГЛАВНЫЙ КОМПОНЕНТ
══════════════════════════════════════════ */
export default function ProjectWizard() {
  const [step, setStep] = useState<Step>("upload");
  const [fileName, setFileName] = useState("");
  const [answers, setAnswers] = useState<Answers>({
    objectType: "", area: "", level: "", priorities: [],
  });

  const stepIndex = { upload: 0, analyzing: 0, questions: 1, result: 2, form: 3, done: 3 };

  const handleUpload = (name: string) => {
    setFileName(name);
    if (name) {
      setStep("analyzing");
      setTimeout(() => setStep("questions"), 3000);
    } else {
      setStep("questions");
    }
  };

  return (
    <section style={{ background: "#0a0a0a", borderTop: "1px solid rgba(184,160,106,0.1)", borderBottom: "1px solid rgba(184,160,106,0.1)" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 56px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.1fr", gap: "100px", alignItems: "start" }}>

          {/* LEFT — статичная часть */}
          <div style={{ position: "sticky", top: "120px" }}>
            <div style={{ fontFamily: mono, fontSize: "8.5px", fontWeight: 600, letterSpacing: "0.3em", color: G, textTransform: "uppercase", marginBottom: "20px" }}>
              Интерактивный анализ
            </div>
            <h2 style={{ fontFamily: mono, fontSize: "clamp(28px, 3.5vw, 46px)", fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.04em", color: "#e2d9c8", lineHeight: 1.1, margin: "0 0 28px" }}>
              ВАШИ СТЕНЫ —<br />НАША<br /><span style={{ color: G }}>ЭКСПЕРТИЗА</span>
            </h2>
            <div style={{ width: "36px", height: "1px", background: G, marginBottom: "28px" }} />
            <p style={{ fontFamily: mono, fontSize: "13px", fontWeight: 300, color: "rgba(226,217,200,0.45)", lineHeight: 1.9, margin: 0 }}>
              Пройдите короткий сценарий — и мы подготовим персональный разбор вашего объекта с рекомендациями по реализации.
            </p>

            {/* Шаги */}
            <div style={{ marginTop: "48px", display: "flex", flexDirection: "column", gap: "20px" }}>
              {[
                ["01", "Загрузите планировку"],
                ["02", "Ответьте на 4 вопроса"],
                ["03", "Получите анализ"],
              ].map(([num, label], i) => (
                <div key={i} style={{ display: "flex", alignItems: "center", gap: "16px", opacity: i <= stepIndex[step] ? 1 : 0.3, transition: "opacity 0.5s" }}>
                  <div style={{ fontFamily: mono, fontSize: "10px", fontWeight: 700, color: G, letterSpacing: "0.05em", width: "24px" }}>{num}</div>
                  <div style={{ width: "20px", height: "1px", background: "rgba(184,160,106,0.3)" }} />
                  <div style={{ fontFamily: mono, fontSize: "11px", fontWeight: 400, color: "rgba(226,217,200,0.5)", letterSpacing: "0.05em" }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — интерактивная часть */}
          <div style={{ minHeight: "420px" }}>
            {step !== "analyzing" && step !== "done" && (
              <ProgressBar step={stepIndex[step]} />
            )}

            <div style={{
              opacity: 1,
              animation: "fadeSlideIn 0.45s ease forwards",
            }}>
              <style>{`
                @keyframes fadeSlideIn {
                  from { opacity: 0; transform: translateY(16px); }
                  to   { opacity: 1; transform: translateY(0); }
                }
              `}</style>

              {step === "upload" && <UploadScreen onUpload={handleUpload} />}
              {step === "analyzing" && <AnalyzingScreen />}
              {step === "questions" && (
                <QuestionsScreen
                  fileName={fileName}
                  answers={answers}
                  setAnswers={setAnswers}
                  onNext={() => setStep("result")}
                />
              )}
              {step === "result" && (
                <ResultScreen answers={answers} onNext={() => setStep("form")} />
              )}
              {step === "form" && <FormScreen onDone={() => setStep("done")} />}
              {step === "done" && <DoneScreen />}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
