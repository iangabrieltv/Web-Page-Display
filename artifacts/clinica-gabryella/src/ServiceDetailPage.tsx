import { useParams, useLocation } from "wouter";
import { SERVICES, WHATSAPP_LINK } from "./services-data";

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const [, navigate] = useLocation();
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", minHeight: "100vh", fontFamily: "'Poppins', sans-serif", color: "#003334" }}>
        <p style={{ fontSize: "1.2rem", marginBottom: "24px" }}>Serviço não encontrado.</p>
        <button
          onClick={() => navigate("/")}
          style={{ padding: "12px 28px", borderRadius: "999px", backgroundColor: "#003334", color: "#fff", border: "none", cursor: "pointer", fontSize: "14px", fontWeight: 600 }}
        >
          Voltar ao início
        </button>
      </div>
    );
  }

  return (
    <div style={{ minHeight: "100vh", backgroundColor: "#fff", fontFamily: "'Poppins', sans-serif" }}>

      {/* ── Fixed top nav ── */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
        backgroundColor: "#003334",
        height: "68px",
        display: "flex", alignItems: "center",
        padding: "0 clamp(20px, 5vw, 64px)",
        boxShadow: "0 2px 20px rgba(0,0,0,0.18)",
      }}>
        <button
          onClick={() => navigate("/")}
          style={{
            display: "flex", alignItems: "center", gap: "8px",
            background: "none", border: "none", cursor: "pointer",
            color: "#fff", fontFamily: "'Poppins', sans-serif",
            fontSize: "14px", fontWeight: 500, padding: "8px 0",
          }}
        >
          <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 12H5M12 5l-7 7 7 7" />
          </svg>
          Voltar
        </button>

        <div style={{ flex: 1, display: "flex", justifyContent: "center" }}>
          <img src="/logo-nova.png" alt="Dra. Gabryella Nunes"
            style={{ height: "36px", width: "auto", filter: "brightness(0) invert(1)" }} />
        </div>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex", alignItems: "center", gap: "8px",
            backgroundColor: "#ffcc99", color: "#003334",
            borderRadius: "999px", padding: "8px 20px",
            fontFamily: "'Poppins', sans-serif", fontSize: "13px", fontWeight: 700,
            textDecoration: "none", whiteSpace: "nowrap",
          }}
        >
          Agendar Consulta
        </a>
      </nav>

      {/* ── Hero image ── */}
      <div style={{
        position: "relative",
        width: "100%",
        height: "clamp(320px, 50vw, 560px)",
        marginTop: "68px",
        overflow: "hidden",
        background: service.gradient,
      }}>
        {service.img && (
          <img
            src={service.img}
            alt={service.title}
            style={{
              position: "absolute", inset: 0,
              width: "100%", height: "100%",
              objectFit: "cover",
              objectPosition: service.imgPosition ?? "center",
            }}
          />
        )}
        <div style={{
          position: "absolute", inset: 0,
          background: "linear-gradient(to top, rgba(0,51,52,0.82) 0%, rgba(0,51,52,0.3) 50%, transparent 100%)",
        }} />
        <div style={{
          position: "absolute", bottom: "clamp(28px, 4vw, 56px)",
          left: "clamp(20px, 8vw, 120px)", right: "clamp(20px, 8vw, 120px)",
        }}>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontSize: "12px", fontWeight: 600,
            color: "#ffcc99", letterSpacing: "0.12em", textTransform: "uppercase",
            margin: "0 0 10px 0",
          }}>
            Nossos Serviços
          </p>
          <h1 style={{
            fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
            fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(2rem, 5vw, 3.6rem)",
            color: "#fff", margin: 0, lineHeight: 1.1,
          }}>
            {service.title}
          </h1>
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{
        maxWidth: "860px", margin: "0 auto",
        padding: "clamp(40px, 6vw, 80px) clamp(20px, 5vw, 48px)",
      }}>

        {/* Lead paragraph */}
        <p style={{
          fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
          fontStyle: "italic",
          fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
          color: "#003334",
          lineHeight: 1.6,
          marginBottom: "clamp(28px, 4vw, 48px)",
          borderLeft: "3px solid #ffcc99",
          paddingLeft: "20px",
        }}>
          {service.desc}
        </p>

        {/* Description paragraphs */}
        <div style={{ display: "flex", flexDirection: "column", gap: "20px", marginBottom: "clamp(40px, 6vw, 64px)" }}>
          {service.longDesc.map((para, i) => (
            <p key={i} style={{
              fontFamily: "'Poppins', sans-serif", fontWeight: 400,
              fontSize: "clamp(0.88rem, 1.1vw, 1rem)",
              color: "rgb(60,80,90)", lineHeight: 1.85, margin: 0,
            }}>
              {para}
            </p>
          ))}
        </div>

        {/* Benefits grid */}
        <div style={{
          backgroundColor: "#003334", borderRadius: "20px",
          padding: "clamp(28px, 4vw, 48px)",
          marginBottom: "clamp(40px, 6vw, 64px)",
        }}>
          <h2 style={{
            fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
            fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
            color: "#ffcc99", margin: "0 0 24px 0",
          }}>
            Por que escolher este tratamento?
          </h2>
          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "14px",
          }}>
            {service.benefits.map((benefit, i) => (
              <div key={i} style={{
                display: "flex", alignItems: "flex-start", gap: "10px",
              }}>
                <span style={{
                  flexShrink: 0, marginTop: "3px",
                  width: "18px", height: "18px", borderRadius: "50%",
                  backgroundColor: "#ffcc99",
                  display: "flex", alignItems: "center", justifyContent: "center",
                }}>
                  <svg width="9" height="9" fill="none" viewBox="0 0 12 12" stroke="#003334" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                  </svg>
                </span>
                <span style={{
                  fontFamily: "'Poppins', sans-serif", fontSize: "13px",
                  fontWeight: 400, color: "rgba(255,255,255,0.88)", lineHeight: 1.5,
                }}>
                  {benefit}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Video placeholder */}
        {service.videoUrl ? (
          <div style={{ marginBottom: "clamp(40px, 6vw, 64px)" }}>
            <h2 style={{
              fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400, fontStyle: "italic",
              fontSize: "clamp(1.3rem, 2.5vw, 1.8rem)",
              color: "#003334", margin: "0 0 20px 0",
            }}>
              Conheça o tratamento
            </h2>
            <div style={{ borderRadius: "16px", overflow: "hidden", aspectRatio: "16/9" }}>
              <iframe
                src={service.videoUrl}
                title={service.title}
                style={{ width: "100%", height: "100%", border: "none" }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        ) : null}

        {/* CTA section */}
        <div style={{
          textAlign: "center",
          padding: "clamp(32px, 4vw, 48px)",
          border: "1px solid rgba(0,51,52,0.12)",
          borderRadius: "20px",
          background: "linear-gradient(135deg, #f8fffe 0%, #edf7f7 100%)",
        }}>
          <h2 style={{
            fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
            fontWeight: 400, fontStyle: "italic",
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            color: "#003334", margin: "0 0 10px 0",
          }}>
            Pronto para transformar seu sorriso?
          </h2>
          <p style={{
            fontFamily: "'Poppins', sans-serif", fontSize: "14px",
            color: "rgba(0,51,52,0.65)", lineHeight: 1.7,
            maxWidth: "440px", margin: "0 auto 28px auto",
          }}>
            Agende uma avaliação sem compromisso. A Dra. Gabryella irá analisar seu caso e indicar o melhor tratamento para você.
          </p>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex", alignItems: "center", gap: "10px",
              backgroundColor: "#003334", color: "#fff",
              borderRadius: "999px", padding: "16px 40px",
              fontFamily: "'Poppins', sans-serif", fontSize: "15px", fontWeight: 600,
              textDecoration: "none",
              boxShadow: "0 8px 28px rgba(0,51,52,0.28)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 12px 32px rgba(0,51,52,0.38)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 8px 28px rgba(0,51,52,0.28)";
            }}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            Agendar pelo WhatsApp
          </a>
        </div>

      </div>

      {/* ── Footer strip ── */}
      <div style={{
        backgroundColor: "#003334", textAlign: "center",
        padding: "24px", marginTop: "clamp(32px, 4vw, 64px)",
      }}>
        <p style={{
          fontFamily: "'Poppins', sans-serif", fontSize: "13px",
          color: "rgba(255,255,255,0.5)", margin: 0,
        }}>
          © {new Date().getFullYear()} Dra. Gabryella Nunes — CRO 4022
        </p>
      </div>
    </div>
  );
}
