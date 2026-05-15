import { useState, useEffect } from "react";
import { SERVICES } from "./services-data";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  prefilledService?: string;
}

const MONTHS = ["janeiro","fevereiro","março","abril","maio","junho","julho","agosto","setembro","outubro","novembro","dezembro"];

function formatDate(iso: string) {
  const [year, month, day] = iso.split("-");
  return `${parseInt(day)} de ${MONTHS[parseInt(month) - 1]} de ${year}`;
}

function today() {
  return new Date().toISOString().split("T")[0];
}

export default function BookingModal({ isOpen, onClose, prefilledService }: BookingModalProps) {
  const [name, setName] = useState("");
  const [service, setService] = useState(prefilledService ?? "");
  const [date, setDate] = useState("");
  const [obs, setObs] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    if (isOpen) {
      setService(prefilledService ?? "");
      setName("");
      setDate("");
      setObs("");
      setErrors({});
    }
  }, [isOpen, prefilledService]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [onClose]);

  const handleSubmit = () => {
    const errs: Record<string, string> = {};
    if (!name.trim()) errs.name = "Informe seu nome completo";
    if (!service) errs.service = "Selecione o serviço desejado";
    if (!date) errs.date = "Selecione uma data";
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }

    const obsText = obs.trim();
    const message = obsText
      ? `Olá Dra. Gabryella! meu nome é ${name.trim()} e estou interessado em ${service} no dia ${formatDate(date)}, além disso ${obsText} tudo bem?`
      : `Olá Dra. Gabryella! meu nome é ${name.trim()} e estou interessado em ${service} no dia ${formatDate(date)}, tudo bem?`;

    window.open(`https://wa.me/5582981028766?text=${encodeURIComponent(message)}`, "_blank");
    onClose();
  };

  if (!isOpen) return null;

  const inputStyle: React.CSSProperties = {
    width: "100%",
    height: "46px",
    padding: "0 14px",
    borderRadius: "10px",
    border: "1.5px solid rgba(0,51,52,0.18)",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "14px",
    color: "#003334",
    backgroundColor: "#fafffe",
    outline: "none",
    boxSizing: "border-box",
    transition: "border-color 0.2s",
  };

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "'Poppins', sans-serif",
    fontSize: "12px",
    fontWeight: 600,
    color: "#003334",
    marginBottom: "6px",
    letterSpacing: "0.03em",
    textTransform: "uppercase",
  };

  const errorStyle: React.CSSProperties = {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "11px",
    color: "#c0392b",
    marginTop: "4px",
  };

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed", inset: 0, zIndex: 9999,
        backgroundColor: "rgba(0,20,20,0.60)",
        backdropFilter: "blur(6px)",
        display: "flex", alignItems: "center", justifyContent: "center",
        padding: "20px",
      }}
    >
      <div
        onClick={e => e.stopPropagation()}
        style={{
          backgroundColor: "#fff",
          borderRadius: "20px",
          width: "100%",
          maxWidth: "480px",
          boxShadow: "0 24px 64px rgba(0,0,0,0.28)",
          overflow: "hidden",
          animation: "modalIn 0.22s ease",
        }}
      >
        {/* Header */}
        <div style={{
          background: "linear-gradient(135deg, #003334 0%, #005456 100%)",
          padding: "24px 28px 20px",
          position: "relative",
        }}>
          <button
            onClick={onClose}
            style={{
              position: "absolute", top: "16px", right: "16px",
              background: "rgba(255,255,255,0.12)", border: "none", cursor: "pointer",
              width: "32px", height: "32px", borderRadius: "50%",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#fff", transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(255,255,255,0.22)")}
            onMouseLeave={e => (e.currentTarget.style.background = "rgba(255,255,255,0.12)")}
            aria-label="Fechar"
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", fontWeight: 600, color: "#ffcc99", letterSpacing: "0.1em", textTransform: "uppercase", margin: "0 0 6px 0" }}>
            Clínica Gabryella Nunes
          </p>
          <h2 style={{ fontFamily: "'Roxborough CF', Georgia, serif", fontWeight: 400, fontStyle: "italic", fontSize: "1.6rem", color: "#fff", margin: 0, lineHeight: 1.2 }}>
            Agendar Avaliação
          </h2>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "12px", color: "rgba(255,255,255,0.60)", margin: "6px 0 0 0" }}>
            Preencha os dados e enviaremos sua mensagem pelo WhatsApp.
          </p>
        </div>

        {/* Form */}
        <div style={{ padding: "24px 28px 28px", display: "flex", flexDirection: "column", gap: "18px" }}>

          {/* Nome */}
          <div>
            <label style={labelStyle}>Nome completo *</label>
            <input
              type="text"
              placeholder="Seu nome completo"
              value={name}
              onChange={e => { setName(e.target.value); if (errors.name) setErrors(p => ({ ...p, name: "" })); }}
              style={{ ...inputStyle, borderColor: errors.name ? "#c0392b" : "rgba(0,51,52,0.18)" }}
              onFocus={e => (e.currentTarget.style.borderColor = "#003334")}
              onBlur={e => (e.currentTarget.style.borderColor = errors.name ? "#c0392b" : "rgba(0,51,52,0.18)")}
            />
            {errors.name && <p style={errorStyle}>{errors.name}</p>}
          </div>

          {/* Serviço */}
          <div>
            <label style={labelStyle}>Serviço desejado *</label>
            <div style={{ position: "relative" }}>
              <select
                value={service}
                onChange={e => { setService(e.target.value); if (errors.service) setErrors(p => ({ ...p, service: "" })); }}
                style={{
                  ...inputStyle,
                  appearance: "none",
                  paddingRight: "36px",
                  borderColor: errors.service ? "#c0392b" : "rgba(0,51,52,0.18)",
                  cursor: "pointer",
                  backgroundColor: service ? "#fafffe" : "#fafffe",
                  color: service ? "#003334" : "#aaa",
                }}
              >
                <option value="" disabled>Selecione um serviço</option>
                {SERVICES.map(s => (
                  <option key={s.slug} value={s.title}>{s.title}</option>
                ))}
                <option value="Outro">Outro</option>
              </select>
              <span style={{ position: "absolute", right: "12px", top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "#003334", opacity: 0.5 }}>
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </span>
            </div>
            {errors.service && <p style={errorStyle}>{errors.service}</p>}
          </div>

          {/* Data */}
          <div>
            <label style={labelStyle}>Data preferencial *</label>
            <input
              type="date"
              min={today()}
              value={date}
              onChange={e => { setDate(e.target.value); if (errors.date) setErrors(p => ({ ...p, date: "" })); }}
              style={{ ...inputStyle, borderColor: errors.date ? "#c0392b" : "rgba(0,51,52,0.18)", cursor: "pointer" }}
              onFocus={e => (e.currentTarget.style.borderColor = "#003334")}
              onBlur={e => (e.currentTarget.style.borderColor = errors.date ? "#c0392b" : "rgba(0,51,52,0.18)")}
            />
            {errors.date && <p style={errorStyle}>{errors.date}</p>}
            <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "11px", color: "rgba(0,51,52,0.45)", marginTop: "4px" }}>
              O horário será combinado no atendimento.
            </p>
          </div>

          {/* Observações */}
          <div>
            <label style={{ ...labelStyle }}>
              Observações <span style={{ fontWeight: 400, textTransform: "none", opacity: 0.6 }}>(opcional)</span>
            </label>
            <textarea
              placeholder="Alguma informação adicional que queira compartilhar..."
              value={obs}
              onChange={e => setObs(e.target.value)}
              rows={3}
              style={{
                ...inputStyle,
                height: "auto",
                padding: "12px 14px",
                resize: "vertical",
                minHeight: "80px",
              }}
              onFocus={e => (e.currentTarget.style.borderColor = "#003334")}
              onBlur={e => (e.currentTarget.style.borderColor = "rgba(0,51,52,0.18)")}
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            style={{
              display: "flex", alignItems: "center", justifyContent: "center", gap: "10px",
              width: "100%", height: "52px",
              borderRadius: "999px",
              backgroundColor: "#003334",
              color: "#fff",
              border: "none", cursor: "pointer",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "15px", fontWeight: 700,
              boxShadow: "0 8px 28px rgba(0,51,52,0.28)",
              transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = "translateY(-2px)";
              e.currentTarget.style.boxShadow = "0 12px 32px rgba(0,51,52,0.38)";
              e.currentTarget.style.backgroundColor = "#002526";
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 8px 28px rgba(0,51,52,0.28)";
              e.currentTarget.style.backgroundColor = "#003334";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Enviar pelo WhatsApp
          </button>
        </div>
      </div>

      <style>{`
        @keyframes modalIn {
          from { opacity: 0; transform: scale(0.94) translateY(12px); }
          to   { opacity: 1; transform: scale(1)    translateY(0); }
        }
      `}</style>
    </div>
  );
}
