import { createContext, useContext, useEffect, useRef, useState } from "react";
import { Router, Route, Switch } from "wouter";
import ServiceDetailPage from "./ServiceDetailPage";
import BookingModal from "./BookingModal";
import { SERVICES, WHATSAPP_LINK } from "./services-data";
import "./index.css";

interface BookingCtx { openModal: (service?: string) => void; }
const BookingContext = createContext<BookingCtx>({ openModal: () => {} });
function useBooking() { return useContext(BookingContext); }
import beforeAfter1 from "@assets/8E70F238-E0BE-48F2-8BD9-DD47CD02C663_L0_001-08_05_2026,_19_31__1778811401826.jpg";
import beforeAfter2 from "@assets/image(1)_1778593478101.png";
import beforeAfter3 from "@assets/image(2)_1778593478102.png";
import beforeAfter4 from "@assets/png_1778593487627.png";
import beforeAfter5 from "@assets/png(1)_1778593487628.png";
import diferencialsBg from "@assets/fundo_diferenciis_1778596032037.png";
import ambientePhoto1 from "@assets/WhatsApp_Image_2026-05-09_at_23.35.05_1778793543074.jpeg";
import ambientePhoto2 from "@assets/DSC_0038.JPG_1778793557749.jpeg";
import ambientePhoto3 from "@assets/DSC_0054.JPG_1778793579410.jpeg";
import ambientePhoto4 from "@assets/DSC_0082_-_Gabryella_Nunes_1778808306614.JPG";
import heroBg from "@assets/Início_1778789868230.png";
import sectionDividerIcon from "@assets/divider_icon_nobg.png";
import novaSecaoBg from "@assets/nova_1778792810212.png";

function useReveal() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll(".reveal");
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const { openModal } = useBooking();
  const links = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#sobre" },
    { label: "Espaço", href: "#ambiente" },
    { label: "Serviço", href: "#servicos" },
    { label: "Contato", href: "#contato" },
  ];

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: "#fff",
        boxShadow: scrolled ? "0 2px 32px rgba(0,51,52,0.09)" : "none",
        borderBottom: "1px solid rgba(0,51,52,0.07)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "0 48px",
          height: "88px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <a href="#" style={{ flexShrink: 0, display: "flex", alignItems: "center" }}>
          <img
            src="/logo-nova.png"
            alt="Dra. Gabryella Nunes"
            style={{ width: "120px", height: "auto", display: "block" }}
            className="mr-[300px]" />
        </a>

        {/* Desktop Menu — centered */}
        <div
          className="hidden md:flex items-center"
          style={{ gap: "14px", position: "absolute", left: "50%", transform: "translateX(-50%)" }}
        >
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              translate="no"
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                height: "38px",
                minWidth: "88px",
                padding: "0 24px",
                borderRadius: "999px",
                background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box",
                border: "1px solid transparent",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#003334",
                textDecoration: "none",
                transition: "background 0.25s, box-shadow 0.25s, opacity 0.25s",
                cursor: "pointer",
                whiteSpace: "nowrap",
              }}
              onMouseEnter={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "linear-gradient(rgba(238,252,255,0.7), rgba(238,252,255,0.7)) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                el.style.boxShadow = "0 2px 16px rgba(0,51,52,0.08)";
              }}
              onMouseLeave={e => {
                const el = e.currentTarget as HTMLAnchorElement;
                el.style.background = "linear-gradient(white, white) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                el.style.boxShadow = "none";
              }}
            >
              <span translate="no">{l.label}</span>
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center" style={{ flexShrink: 0 }}>
          <button
            onClick={() => openModal()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              height: "42px",
              padding: "0 28px",
              borderRadius: "999px",
              backgroundColor: "#003334",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 4px 18px rgba(0,51,52,0.22)",
              transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px rgba(0,51,52,0.30)";
              el.style.backgroundColor = "#002526";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 18px rgba(0,51,52,0.22)";
              el.style.backgroundColor = "#003334";
            }}
          >
            Agendar Avaliação
          </button>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ color: "#003334" }}
        >
          <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            {menuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>
      {menuOpen && (
        <div className="md:hidden px-6 pb-5 flex flex-col gap-3 bg-white border-t" style={{ borderColor: "rgba(0,51,52,0.08)" }}>
          {links.map((l) => (
            <a
              key={l.label}
              href={l.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                fontWeight: 500,
                color: "#003334",
                padding: "8px 0",
                borderBottom: "1px solid rgba(0,0,0,0.05)",
                textDecoration: "none",
              }}
            >
              {l.label}
            </a>
          ))}
          <button
            onClick={() => { openModal(); setMenuOpen(false); }}
            style={{
              display: "block",
              width: "100%",
              textAlign: "center",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#003334",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              marginTop: "4px",
            }}
          >
            Agendar Avaliação
          </button>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  const { openModal } = useBooking();
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Background image — photo + circles baked in */}
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          height: "100%",
          width: "auto",
          maxWidth: "none",
          objectFit: "unset",
        }}
      />

      {/* White mask — wider, softer fade to hide baked-in text */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "68%",
          height: "100%",
          background: "linear-gradient(to right, #fff 0%, #fff 72%, rgba(255,255,255,0.6) 86%, transparent 100%)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Main content — fills hero minus marquee bar */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          flex: 1,
          display: "flex",
          alignItems: "center",
          paddingTop: "88px",      /* offset for fixed nav */
          paddingBottom: "clamp(60px, 8vh, 80px)", /* room for marquee */
        }}
      >
        <div
          style={{
            width: "100%",
            maxWidth: "1280px",
            margin: "0 auto",
            padding: "0 64px",
          }}
        >
          {/* Left column content */}
          <div
            style={{
              maxWidth: "700px",
              display: "flex",
              flexDirection: "column",
              gap: "36px",
            }}
          >
            {/* Headline */}
            <h1 style={{ margin: 0, lineHeight: 1.05 }}>
              {/* Linha 1: Especialista em cuidar */}
              <span
                style={{
                  display: "block",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 3vw, 48px)",
                  color: "rgb(0,51,52)",
                  lineHeight: 1.1,
                }}
              >
                Especialista em cuidar
              </span>
              {/* Linha 2: de pessoas e + transformar (mista) */}
              <span
                style={{
                  display: "block",
                  lineHeight: 1.15,
                  marginTop: "2px",
                }}
              >
                <span
                  style={{
                    fontFamily: "'Poppins', sans-serif",
                    fontWeight: 700,
                    fontSize: "clamp(2rem, 3vw, 48px)",
                    color: "rgb(0,51,52)",
                  }}
                >
                  de pessoas e{" "}
                </span>
                <span
                  style={{
                    fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                    fontWeight: 500,
                    fontStyle: "italic",
                    fontSize: "clamp(1.8rem, 2.8vw, 46px)",
                    color: "rgb(0,51,52)",
                  }}
                >
                  transformar
                </span>
              </span>
              {/* Linha 3: sorrisos com naturalidade */}
              <span
                style={{
                  display: "block",
                  fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 2.8vw, 46px)",
                  color: "rgb(0,51,52)",
                  lineHeight: 1.15,
                  marginTop: "2px",
                }}
              >
                sorrisos com naturalidade
              </span>
              {/* Linha 4: e confiança */}
              <span
                style={{
                  display: "block",
                  fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 2.8vw, 46px)",
                  color: "rgb(0,51,52)",
                  lineHeight: 1.15,
                }}
              >
                e confiança
              </span>
            </h1>

            {/* Subtitle */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontWeight: 400,
                color: "rgb(70,90,105)",
                lineHeight: 1.8,
                fontSize: "clamp(0.88rem, 1.1vw, 17px)",
                maxWidth: "460px",
                margin: 0,
              }}
            >
              Aparelhos fixos, alinhadores invisíveis e muito mais em um ambiente sem julgamentos, criado para quem adiou o dentista por medo ou insegurança.
            </p>

            {/* CTA Button */}
            <div style={{ width: "100%", maxWidth: "460px" }}>
              <button
                onClick={() => openModal()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 600,
                  fontSize: "16px",
                  background: "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box",
                  border: "1px solid transparent",
                  color: "#fff",
                  borderRadius: "999px",
                  height: "56px",
                  padding: "0 32px",
                  boxShadow: "0 8px 28px rgba(0,51,52,0.28)",
                  cursor: "pointer",
                  transition: "background 0.25s, transform 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "linear-gradient(to right, #001e20 0%, #004a4c 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,51,52,0.38)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 8px 28px rgba(0,51,52,0.28)";
                }}
              >
                Agendar Avaliação
              </button>
            </div>

            {/* Stats */}
            <div
              style={{
                paddingTop: "20px",
                borderTop: "1px solid rgba(0,51,52,0.15)",
                display: "flex",
                gap: "clamp(1.5rem, 3vw, 3rem)",
                maxWidth: "460px",
                width: "100%",
              }}
            >
              {[
                { value: "+3.000", label: "SORRISOS TRANSFORMADOS" },
                { value: "+10 anos", label: "EXPERIÊNCIA" },
                { value: "4022", label: "CRO" },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "5px", alignItems: "center", textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(0.9rem, 1.1vw, 18px)",
                      color: "rgb(0,51,52)",
                      lineHeight: 1,
                    }}
                  >
                    {stat.value}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "13px",
                      color: "rgb(100,120,135)",
                      lineHeight: 1.3,
                      letterSpacing: "0.06em",
                    }}
                  >
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Marquee logo bar — bottom of hero ── */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 10,
          backgroundColor: "#ffcc99",
          overflow: "hidden",
          height: "clamp(60px, 8vh, 80px)",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div className="marquee-track" style={{ alignItems: "center", display: "flex" }}>
          {[0, 1].map((setIdx) =>
            Array.from({ length: 10 }).map((_, i) => (
              <div
                key={`${setIdx}-${i}`}
                style={{
                  display: "flex",
                  alignItems: "center",
                  paddingLeft: "clamp(1.2rem, 2.5vw, 2.2rem)",
                  paddingRight: "clamp(1.2rem, 2.5vw, 2.2rem)",
                  flexShrink: 0,
                }}
              >
                <img
                  src="/logo-gabryella.png"
                  alt="Dra. Gabryella Nunes"
                  style={{
                    height: "clamp(28px, 4.5vh, 46px)",
                    width: "auto",
                    filter: "brightness(0) invert(1) sepia(1) saturate(2000%) hue-rotate(152deg) brightness(0.22)",
                    flexShrink: 0,
                  }}
                />
              </div>
            ))
          )}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ slug, title, desc, gradient, img, imgPosition, imgScale }: { slug: string; title: string; desc: string; gradient: string; img?: string; imgPosition?: string; imgScale?: number }) {
  const [hovered, setHovered] = useState(false);
  const baseScale = imgScale ?? 1;

  return (
    <div
      className="reveal"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        borderRadius: "16px",
        overflow: "hidden",
        backgroundColor: "#003334",
        display: "flex",
        flexDirection: "column",
        cursor: "pointer",
        boxShadow: hovered
          ? "0 16px 40px rgba(0,0,0,0.22)"
          : "0 4px 16px rgba(0,0,0,0.10)",
        transform: hovered ? "translateY(-4px)" : "translateY(0)",
        transition: "box-shadow 0.3s ease, transform 0.3s ease",
      }}
    >
      {/* Image area */}
      <div
        style={{
          width: "100%",
          aspectRatio: "16 / 10",
          background: gradient,
          flexShrink: 0,
          position: "relative",
          overflow: "hidden",
        }}
      >
        {img && (
          <img
            src={img}
            alt={title}
            style={{
              position: "absolute",
              inset: 0,
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: imgPosition ?? "center",
              display: "block",
              transition: "transform 0.4s ease",
              transform: hovered ? `scale(${baseScale * 1.06})` : `scale(${baseScale})`,
            }}
          />
        )}
      </div>

      {/* Content */}
      <div style={{ padding: "16px 18px 18px", display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontWeight: 600,
            fontSize: "clamp(0.8rem, 1vw, 0.95rem)",
            color: "#ffffff",
            margin: "0 0 6px 0",
            lineHeight: 1.3,
          }}
        >
          {title}
        </h3>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(0.65rem, 0.8vw, 0.76rem)",
            color: "rgba(255,255,255,0.60)",
            lineHeight: 1.65,
            margin: "0 0 14px 0",
            flexGrow: 1,
          }}
        >
          {desc}
        </p>

        {/* Saiba mais button */}
        <div style={{ display: "flex" }}>
          <a
            href={`/servicos/${slug}`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "7px",
              background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 40%, #f0c8a8 70%, #fde8d0 100%)",
              borderRadius: "999px",
              padding: "6px 14px 6px 10px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "0.7rem",
              fontWeight: 600,
              color: "#003334",
              textDecoration: "none",
              letterSpacing: "0.01em",
              boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
              transition: "opacity 0.2s, transform 0.2s",
            }}
            onMouseEnter={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "0.88";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1.04)";
            }}
            onMouseLeave={e => {
              (e.currentTarget as HTMLAnchorElement).style.opacity = "1";
              (e.currentTarget as HTMLAnchorElement).style.transform = "scale(1)";
            }}
          >
            <span style={{
              width: "18px", height: "18px", borderRadius: "50%",
              backgroundColor: "#003334",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="9" height="9" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.8}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            Saiba mais
          </a>
        </div>
      </div>
    </div>
  );
}

function Services() {
  const { openModal } = useBooking();
  return (
    <section
      id="servicos"
      style={{
        backgroundColor: "#fff",
        padding: "clamp(60px, 7vw, 100px) clamp(16px, 4vw, 60px)",
      }}
    >
      <div style={{ maxWidth: "1280px", margin: "0 auto" }}>

        {/* Header */}
        <div className="reveal" style={{ textAlign: "center", marginBottom: "clamp(36px, 4vw, 56px)" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.75rem, 1vw, 0.9rem)",
              color: "rgba(0,51,52,0.55)",
              letterSpacing: "0.02em",
              margin: "0 0 10px 0",
            }}
          >
            Tratamentos pensados para cuidar do
          </p>
          <h2
            style={{
              fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem, 3.2vw, 2.8rem)",
              color: "#003334",
              lineHeight: 1.2,
              margin: "0 0 16px 0",
              letterSpacing: "-0.01em",
            }}
          >
            seu sorriso com leveza e confiança
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.8rem, 1vw, 0.92rem)",
              color: "rgba(0,51,52,0.55)",
              lineHeight: 1.7,
              maxWidth: "520px",
              margin: "0 auto",
            }}
          >
            Ortodontia, estética e saúde bucal com atendimento humanizado e foco no seu bem-estar.
          </p>
        </div>

        {/* Grid — first 8 cards in 4 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "clamp(10px, 1.2vw, 18px)",
            marginBottom: "clamp(10px, 1.2vw, 18px)",
          }}
          className="services-grid stagger"
        >
          {SERVICES.slice(0, 8).map((s) => (
            <ServiceCard key={s.title} slug={s.slug} title={s.title} desc={s.desc} gradient={s.gradient} img={s.img} imgPosition={s.imgPosition} imgScale={s.imgScale} />
          ))}
        </div>

        {/* Last 3 cards centered */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "clamp(10px, 1.2vw, 18px)",
            maxWidth: "75%",
            margin: "0 auto",
          }}
          className="services-grid stagger"
        >
          {SERVICES.slice(8).map((s) => (
            <ServiceCard key={s.title} slug={s.slug} title={s.title} desc={s.desc} gradient={s.gradient} img={s.img} imgPosition={s.imgPosition} imgScale={s.imgScale} />
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="reveal" style={{ textAlign: "center", marginTop: "clamp(36px, 4vw, 56px)" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
              color: "rgba(0,51,52,0.55)",
              marginBottom: "20px",
            }}
          >
            Conheça todos os nossos serviços e realize sua consulta
          </p>
          <button
            onClick={() => openModal()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 38%, #f0c8a8 68%, #fde8d0 100%)",
              border: "1px solid rgba(255,255,255,0.25)",
              borderRadius: "999px",
              padding: "13px 32px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              fontWeight: 500,
              color: "#003334",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.14)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.20)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.14)";
            }}
          >
            Agendar Avaliação
            <span style={{
              width: "26px", height: "26px", borderRadius: "50%",
              backgroundColor: "#003334",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}

function NovaSecao() {
  return (
    <section
      id="sobre"
      className="reveal"
      style={{
        position: "relative",
        width: "100%",
        minHeight: "clamp(420px, 55vw, 720px)",
        backgroundColor: "#fff",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background image — full width, max quality */}
      <img
        src={novaSecaoBg}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "left center",
          imageRendering: "auto",
        }}
      />

      {/* Content — text on the right side */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          width: "100%",
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "clamp(48px, 6vw, 96px) 64px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <div
          style={{
            width: "clamp(280px, 45%, 520px)",
            display: "flex",
            flexDirection: "column",
            gap: "20px",
          }}
        >
          {/* Title */}
          <h2
            style={{
              fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 500,
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 3vw, 3rem)",
              color: "#003334",
              margin: 0,
              lineHeight: 1.15,
            }}
          >
            Dra. Gabryella Nunes
          </h2>

          {/* Body text */}
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)",
              color: "rgb(60, 80, 90)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Sou a Dra. Gabryella Nunes, cirurgiã-dentista especializada em Ortodontia e apaixonada por transformar sorrisos com naturalidade, confiança e acolhimento. Acredito em uma odontologia mais humana, onde cada paciente se sinta confortável, ouvido e seguro durante toda a experiência no consultório.
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.8rem, 0.95vw, 0.95rem)",
              color: "rgb(60, 80, 90)",
              lineHeight: 1.85,
              margin: 0,
            }}
          >
            Costumo dizer que a odontologia me escolheu, e hoje tenho como propósito cuidar das pessoas com dedicação, transparência e carinho em cada detalhe. Meu compromisso é proporcionar tratamentos personalizados, ajudando cada paciente a recuperar a autoestima e voltar a sorrir com confiança.
          </p>
        </div>
      </div>
    </section>
  );
}

function Ambiente() {
  const { openModal } = useBooking();
  const photos = [
    { src: ambientePhoto1, position: "center center" }, // recepção — cena horizontal
    { src: ambientePhoto2, position: "55% center" },    // sala de atendimento — foco na dra
    { src: ambientePhoto3, position: "center 30%" },    // dra na mesa — rosto no topo
    { src: ambientePhoto4, position: "center 55%" },    // dra sentada — mais abaixo
  ];

  return (
    <section
      id="ambiente"
      className="reveal"
      style={{
        position: "relative",
        backgroundColor: "#003334",
        padding: "clamp(60px, 7vw, 100px) clamp(20px, 5vw, 80px)",
      }}
    >
      {/* Divider icon sitting on the seam between white and green */}
      <img
        src={sectionDividerIcon}
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "130px",
          height: "auto",
          borderRadius: "18px",
          boxShadow: "0 6px 24px rgba(0,0,0,0.18)",
          zIndex: 10,
          display: "block",
        }}
      />
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>

        {/* Title */}
        <div style={{ textAlign: "center", marginBottom: "clamp(32px, 4vw, 52px)" }}>
          <h2
            style={{
              fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontSize: "clamp(1.6rem, 3vw, 2.8rem)",
              color: "#fff",
              lineHeight: 1.2,
              margin: "0 0 clamp(12px, 1.5vw, 20px) 0",
              letterSpacing: "-0.01em",
            }}
          >
            Um ambiente pensado para{" "}
            <span style={{ fontStyle: "italic", color: "#ffcc99" }}>transmitir</span>
            <br />conforto e confiança
          </h2>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.78rem, 1vw, 0.92rem)",
              color: "rgba(255,255,255,0.62)",
              lineHeight: 1.8,
              maxWidth: "540px",
              margin: "0 auto",
            }}
          >
            Sabemos que muitas pessoas chegam ao consultório com medo, insegurança ou experiências negativas do passado. Por isso, cada detalhe do nosso espaço foi pensado para transmitir leveza e confiança desde o primeiro atendimento. Aqui, você encontra um ambiente tranquilo, atendimento humanizado e uma experiência confortável em cada etapa do seu cuidado.
          </p>
        </div>

        {/* 2×2 Photo grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "clamp(10px, 1.2vw, 16px)",
            marginBottom: "clamp(32px, 4vw, 52px)",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                aspectRatio: "4 / 3",
                background: "#002526",
              }}
            >
              <img
                src={photo.src}
                alt={`Ambiente da clínica ${i + 1}`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  objectPosition: photo.position,
                  display: "block",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1.04)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLImageElement).style.transform = "scale(1)"; }}
              />
            </div>
          ))}
        </div>

        {/* Bottom text + CTA */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.78rem, 1vw, 0.9rem)",
              color: "rgba(255,255,255,0.60)",
              lineHeight: 1.8,
              margin: "0 0 clamp(20px, 2.5vw, 32px) 0",
            }}
          >
            Mais do que cuidar do seu sorriso, queremos que você se sinta bem em cada visita.
          </p>

          <button
            onClick={() => openModal()}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 38%, #f0c8a8 68%, #fde8d0 100%)",
              border: "1px solid rgba(255,255,255,0.20)",
              borderRadius: "999px",
              padding: "13px 32px",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "clamp(0.82rem, 1vw, 0.95rem)",
              fontWeight: 500,
              color: "#003334",
              cursor: "pointer",
              letterSpacing: "0.03em",
              boxShadow: "0 4px 20px rgba(0,0,0,0.20)",
              transition: "transform 0.2s, box-shadow 0.2s",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.28)";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLButtonElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.20)";
            }}
          >
            Agendar Avaliação
            <span style={{
              width: "26px", height: "26px", borderRadius: "50%",
              backgroundColor: "#003334",
              display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
            }}>
              <svg width="12" height="12" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </button>
        </div>

      </div>
    </section>
  );
}

function Diferenciais() {
  const bullets = [
    "Tecnologia moderna para mais conforto",
    "Atendimento acolhedor e humanizado",
    "Ortodontia com acompanhamento próximo",
  ];

  return (
    <section
      id="diferenciais"
      className="reveal"
      style={{
        position: "relative",
        backgroundColor: "#003334",
        overflow: "hidden",
        paddingBottom: "clamp(40px, 5vw, 80px)",
      }}
    >
      {/* ── Composition image — full width, defines section height ── */}
      <div style={{ position: "relative" }}>
        <img
          src={diferencialsBg}
          alt=""
          aria-hidden="true"
          style={{
            width: "100%",
            height: "auto",
            display: "block",
          }}
        />

        {/* ── Text overlay — positioned over the green card ── */}
        <div
          style={{
            position: "absolute",
            top: "9%",
            left: "47%",
            width: "46%",
            height: "82%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "flex-start",
            padding: "8% 5% 0 4%",
          }}
        >
          <div style={{ width: "100%" }}>
            {/* Label */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(0.5rem, 0.75vw, 0.7rem)",
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                color: "rgba(255,255,255,0.45)",
                margin: "0 0 clamp(6px, 0.9vw, 12px) 0",
              }}
            >
              Diferenciais +
            </p>

            {/* Title */}
            <h2
              style={{
                fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontSize: "clamp(1.1rem, 2.2vw, 2.4rem)",
                color: "#fff",
                lineHeight: 1.2,
                margin: "0 0 clamp(8px, 1.2vw, 18px) 0",
                letterSpacing: "-0.01em",
              }}
            >
              Ortodontia com propósito
            </h2>

            {/* Body */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "clamp(0.55rem, 0.85vw, 0.82rem)",
                color: "rgba(255,255,255,0.60)",
                lineHeight: 1.8,
                margin: "0 0 clamp(10px, 1.4vw, 22px) 0",
                maxWidth: "90%",
              }}
            >
              Cada detalhe do atendimento foi pensado para que você se sinta acolhido, seguro e confortável durante toda a sua experiência no consultório.
            </p>

            {/* Divider */}
            <div style={{
              width: "clamp(28px, 3vw, 40px)",
              height: "1px",
              background: "rgba(255,255,255,0.20)",
              margin: "0 0 clamp(10px, 1.4vw, 22px) 0",
            }} />

            {/* Bullet points */}
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: "clamp(8px, 1.1vw, 16px)" }}>
              {bullets.map((b) => (
                <li
                  key={b}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "clamp(8px, 0.9vw, 13px)",
                    fontFamily: "'Poppins', sans-serif",
                    fontSize: "clamp(0.52rem, 0.82vw, 0.8rem)",
                    color: "rgba(255,255,255,0.82)",
                    fontWeight: 500,
                    letterSpacing: "0.01em",
                  }}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "clamp(14px, 1.4vw, 20px)",
                      height: "clamp(14px, 1.4vw, 20px)",
                      borderRadius: "50%",
                      background: "linear-gradient(135deg, #f5c9a0 0%, #e8b48a 100%)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <svg width="8" height="8" fill="none" viewBox="0 0 12 12" stroke="#003334" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2 6l3 3 5-5" />
                    </svg>
                  </span>
                  {b}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

type PhotoItem = {
  src: string;
  delay: string;
  expand?: number;
  fit?: "cover" | "fill" | "contain";
  pos?: string;
};

function photoImgStyle(p: PhotoItem): React.CSSProperties {
  const fit = p.fit ?? "cover";
  const pos = p.pos ?? "center";
  if (p.expand && p.expand > 0) {
    const e = p.expand;
    return {
      position: "absolute",
      display: "block",
      objectFit: fit,
      objectPosition: pos,
      width: `${(1 + e * 2) * 100}%`,
      height: `${(1 + e * 2) * 100}%`,
      top: `${-e * 100}%`,
      left: `${-e * 100}%`,
    };
  }
  return {
    position: "absolute",
    top: 0, left: 0,
    width: "100%",
    height: "100%",
    objectFit: fit,
    objectPosition: pos,
    display: "block",
  };
}

function Resultados() {
  const { openModal } = useBooking();
  const photos: PhotoItem[] = [
    { src: beforeAfter2, delay: "delay-1" },
    { src: beforeAfter3, delay: "delay-2" },
    { src: beforeAfter4, delay: "delay-3" },
    { src: beforeAfter5, delay: "delay-4" },
  ];

  return (
    <section
      id="resultados"
      style={{
        backgroundColor: "#003334",
        padding: "clamp(60px, 8vw, 100px) 0 clamp(50px, 6vw, 80px) 0",
      }}
    >
      {/* Header */}
      <div
        className="text-center reveal"
        style={{
          marginBottom: "clamp(40px, 5vw, 64px)",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
        }}
      >
        <h2
          style={{
            fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
            fontWeight: 400,
            fontSize: "clamp(1.9rem, 3.8vw, 3rem)",
            color: "#fff",
            lineHeight: 1.15,
            margin: "0 0 16px 0",
            letterSpacing: "-0.01em",
          }}
        >
          Resultados que devolvem confiança{" "}
          <span style={{ color: "#ffcc99", fontStyle: "italic" }}>para sorrir</span>
        </h2>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "clamp(0.85rem, 1.1vw, 1rem)",
            color: "rgba(255,255,255,0.70)",
            lineHeight: 1.8,
            maxWidth: "560px",
            margin: "0 auto",
          }}
        >
          Cada tratamento é planejado para entregar resultados naturais, funcionais e alinhados ao que cada paciente precisa.
        </p>
      </div>

      {/* Carousel — 5 cards full width */}
      <div style={{ overflow: "hidden", width: "100%", padding: "0 clamp(8px, 1vw, 14px)" }}>
        <div
          style={{
            display: "flex",
            gap: "clamp(8px, 1vw, 14px)",
          }}
        >
          {photos.map((photo, i) => (
            <div
              key={i}
              style={{
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                background: "#002526",
                aspectRatio: "2 / 3",
                flex: "1 1 0",
                minWidth: 0,
              }}
            >
              <img
                src={photo.src}
                alt={`Antes e depois ${i + 1}`}
                style={photoImgStyle(photo)}
              />
              {/* Badge */}
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  left: "12px",
                  zIndex: 10,
                  background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 40%, #f0c8a8 70%, #fde8d0 100%)",
                  border: "1px solid rgba(255,255,255,0.30)",
                  borderRadius: "999px",
                  padding: "5px 14px",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "#003334",
                  letterSpacing: "0.02em",
                  boxShadow: "0 2px 10px rgba(0,0,0,0.18)",
                  whiteSpace: "nowrap",
                }}
              >
                Antes e depois
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA button */}
      <div
        className="text-center reveal"
        style={{
          marginTop: "clamp(36px, 4vw, 56px)",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
        }}
      >
        <button
          onClick={() => openModal()}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "12px",
            background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 38%, #f0c8a8 68%, #fde8d0 100%)",
            border: "1px solid rgba(255,255,255,0.25)",
            borderRadius: "999px",
            padding: "14px 36px",
            fontFamily: "'Poppins', sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            color: "#003334",
            cursor: "pointer",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
            transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.30)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLButtonElement;
            el.style.transform = "translateY(0)";
            el.style.boxShadow = "0 4px 20px rgba(0,0,0,0.22)";
          }}
        >
          Agendar Avaliação
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              width: "28px",
              height: "28px",
              borderRadius: "50%",
              backgroundColor: "#003334",
              flexShrink: 0,
            }}
          >
            <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="#fff" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </span>
        </button>
      </div>
    </section>
  );
}

function Contato() {
  const { openModal } = useBooking();
  const MAPS_URL = "https://www.google.com/maps/search/?api=1&query=Galeria+Bella+Rio+Largo+de+F%C3%A1tima+303+Penedo+AL";
  const MAPS_EMBED = "https://maps.google.com/maps?q=Galeria+Bella+Rio,+Largo+de+F%C3%A1tima,+303,+Penedo,+AL,+57200-000,+Brasil&output=embed&z=16";

  const contacts = [
    {
      href: `tel:+5582981028766`,
      icon: (
        <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      text: "(82) 98102-8766",
    },
    {
      href: "mailto:dra.gabryellanunes@gmail.com",
      icon: (
        <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      text: "dra.gabryellanunes@gmail.com",
    },
    {
      href: MAPS_URL,
      icon: (
        <svg width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
      text: "Praça, GALERIA BELLA RIO – Largo de Fátima, 303 – 1° ANDAR, SALA 03 – Santa Luzia, Penedo – AL, 57200-000",
    },
  ];

  return (
    <section id="contato" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <div
          className="reveal"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "64px",
            alignItems: "center",
          }}
        >
          {/* Left column */}
          <div style={{ display: "flex", flexDirection: "column", gap: "28px" }}>
            {/* Title */}
            <h2
              style={{
                fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
                color: "#003334",
                margin: 0,
                lineHeight: 1.15,
              }}
            >
              Onde nos encontrar
            </h2>

            {/* Description */}
            <p
              style={{
                fontFamily: "'Poppins', sans-serif",
                fontSize: "14px",
                fontWeight: 400,
                color: "rgb(70,90,105)",
                lineHeight: 1.8,
                margin: 0,
                borderLeft: "3px solid #003334",
                paddingLeft: "16px",
              }}
            >
              Entre em contato com nossa equipe e descubra como podemos transformar o seu sorriso com conforto, tecnologia e segurança.
            </p>

            {/* Contact items */}
            <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
              {contacts.map((c, i) => (
                <a
                  key={i}
                  href={c.href}
                  target={i === 2 ? "_blank" : undefined}
                  rel={i === 2 ? "noopener noreferrer" : undefined}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "12px",
                    textDecoration: "none",
                    color: "rgb(40,60,75)",
                    transition: "color 0.2s",
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = "#003334")}
                  onMouseLeave={e => (e.currentTarget.style.color = "rgb(40,60,75)")}
                >
                  <span
                    style={{
                      flexShrink: 0,
                      width: "32px",
                      height: "32px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: "linear-gradient(white, white) padding-box, linear-gradient(to right, #003334, #bcd1dd) border-box",
                      border: "1px solid transparent",
                      color: "#003334",
                      marginTop: "2px",
                    }}
                  >
                    {c.icon}
                  </span>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "13px",
                      lineHeight: 1.65,
                      paddingTop: "6px",
                    }}
                  >
                    {c.text}
                  </span>
                </a>
              ))}
            </div>

            {/* CTA Button */}
            <div style={{ width: "100%" }}>
              <button
                onClick={() => openModal()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  height: "52px",
                  borderRadius: "999px",
                  background: "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box",
                  border: "1px solid transparent",
                  color: "#fff",
                  fontFamily: "'Poppins', sans-serif",
                  fontSize: "14px",
                  fontWeight: 600,
                  cursor: "pointer",
                  boxShadow: "0 6px 24px rgba(0,51,52,0.25)",
                  transition: "background 0.25s, transform 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "linear-gradient(to right, #001e20 0%, #004a4c 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 30px rgba(0,51,52,0.32)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLButtonElement;
                  el.style.background = "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 6px 24px rgba(0,51,52,0.25)";
                }}
              >
                Agendar Avaliação
              </button>
            </div>
          </div>

          {/* Right column — Google Maps */}
          <a
            href={MAPS_URL}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              borderRadius: "16px",
              overflow: "hidden",
              border: "1px solid rgba(0,51,52,0.12)",
              boxShadow: "0 4px 24px rgba(0,51,52,0.10)",
              lineHeight: 0,
              transition: "box-shadow 0.2s",
            }}
            onMouseEnter={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 8px 32px rgba(0,51,52,0.18)")}
            onMouseLeave={e => ((e.currentTarget as HTMLAnchorElement).style.boxShadow = "0 4px 24px rgba(0,51,52,0.10)")}
          >
            <iframe
              src={MAPS_EMBED}
              width="100%"
              height="380"
              style={{ border: 0, display: "block" }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Dra. Gabryella Nunes"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

const FAQS = [
  {
    q: "Tenho medo de dentista. Vou me sentir confortável durante a consulta?",
    a: "Muitos pacientes chegam inseguros ou com experiências ruins anteriores. Por isso, nosso atendimento é feito com calma, escuta e acolhimento, respeitando o tempo e o conforto de cada pessoa.",
  },
  {
    q: "Como saber se preciso usar aparelho?",
    a: "A necessidade do aparelho é avaliada durante a consulta de avaliação ortodôntica. Analisamos o alinhamento dos dentes, mordida e estrutura facial para indicar o tratamento mais adequado para o seu caso.",
  },
  {
    q: "Quanto tempo dura um tratamento ortodôntico?",
    a: "A duração varia de acordo com a complexidade de cada caso, mas em média um tratamento ortodôntico dura entre 12 a 30 meses. Durante as consultas de acompanhamento, você será informado sobre o progresso.",
  },
  {
    q: "Clareamento dental prejudica os dentes?",
    a: "Quando realizado por um profissional qualificado, o clareamento dental é seguro e não prejudica o esmalte dos dentes. Utilizamos produtos e tecnologias aprovados e seguros para garantir um resultado eficaz e saudável.",
  },
  {
    q: "Como funciona o pagamento dos tratamentos?",
    a: "Oferecemos diversas formas de pagamento para facilitar o acesso ao tratamento. Parcelamos em até 12x no cartão de crédito e aceitamos PIX, dinheiro e transferência bancária. Consulte nossa equipe para mais detalhes.",
  },
];

function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div style={{ maxWidth: "720px", margin: "0 auto" }}>
        {/* Title */}
        <div className="text-center reveal" style={{ marginBottom: "48px" }}>
          <h2
            style={{
              fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
              fontWeight: 400,
              fontStyle: "italic",
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              color: "#003334",
              margin: 0,
              letterSpacing: "-0.01em",
            }}
          >
            Perguntas frequentes
          </h2>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {FAQS.map((faq, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="reveal" style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
                {/* Question row */}
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "16px",
                    width: "100%",
                    padding: "18px 24px",
                    borderRadius: "999px",
                    border: "1px solid transparent",
                    background: isOpen
                      ? "#003334"
                      : "linear-gradient(white, white) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box",
                    cursor: "pointer",
                    textAlign: "left",
                    transition: "background 0.25s",
                  }}
                >
                  {/* Icon: + or − */}
                  <span
                    style={{
                      flexShrink: 0,
                      width: "28px",
                      height: "28px",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: isOpen
                        ? "transparent"
                        : "linear-gradient(white, white) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box",
                      border: isOpen ? "none" : "1px solid transparent",
                      fontSize: "20px",
                      lineHeight: "28px",
                      textAlign: "center",
                      color: isOpen ? "#ffcc99" : "#003334",
                      fontWeight: 300,
                      transition: "color 0.25s",
                      userSelect: "none",
                    }}
                  >
                    {isOpen ? "−" : "+"}
                  </span>

                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: isOpen ? "#fff" : "#003334",
                      lineHeight: 1.5,
                      transition: "color 0.25s",
                    }}
                  >
                    {faq.q}
                  </span>
                </button>

                {/* Answer row */}
                {isOpen && (
                  <div
                    style={{
                      backgroundColor: "#003334",
                      borderRadius: "24px",
                      padding: "20px 24px 20px 68px",
                    }}
                  >
                    <p
                      style={{
                        fontFamily: "'Poppins', sans-serif",
                        fontSize: "13px",
                        color: "rgba(255,255,255,0.82)",
                        lineHeight: 1.75,
                        margin: 0,
                      }}
                    >
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{ backgroundColor: "rgb(0,51,52)" }}>
      {/* Main footer content */}
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          padding: "60px 64px 48px",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          gap: "48px",
          alignItems: "start",
        }}
      >
        {/* Left — Atendimento */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Atendimento
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
            Segunda a sexta
          </p>
          <p style={{ fontFamily: "'Poppins', sans-serif", fontSize: "13px", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, margin: 0 }}>
            8:00 às 18:00
          </p>
        </div>

        {/* Center — Logo + icons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "28px",
          }}
        >
          <img
            src="/logo-footer.png"
            alt="Dra. Gabryella Nunes"
            style={{
              width: "180px",
              height: "auto",
              filter: "brightness(0) invert(1)",
            }}
          />
          {/* Social icons */}
          <div style={{ display: "flex", gap: "20px", alignItems: "center" }}>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/dra.gabryellanunes/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.6}>
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4.5" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
              </svg>
            </a>
            {/* WhatsApp */}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: "44px",
                height: "44px",
                borderRadius: "50%",
                border: "1.5px solid rgba(255,255,255,0.35)",
                color: "#fff",
                transition: "border-color 0.2s, background 0.2s",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.8)";
                (e.currentTarget as HTMLAnchorElement).style.background = "rgba(255,255,255,0.08)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(255,255,255,0.35)";
                (e.currentTarget as HTMLAnchorElement).style.background = "transparent";
              }}
            >
              <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.124 1.527 5.855L.096 23.333 5.7 21.933A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.717.972.99-3.61-.234-.37A9.818 9.818 0 012.182 12c0-5.42 4.4-9.818 9.818-9.818s9.818 4.398 9.818 9.818-4.4 9.818-9.818 9.818z"/>
              </svg>
            </a>
          </div>
        </div>

        {/* Right — Localização */}
        <div style={{ textAlign: "center" }}>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontWeight: 700,
              fontSize: "14px",
              color: "#fff",
              marginBottom: "10px",
            }}
          >
            Localização
          </p>
          <p
            style={{
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              color: "rgba(255,255,255,0.75)",
              lineHeight: 1.8,
              margin: 0,
            }}
          >
            Praça, GALERIA BELLA RIO – Largo de Fátima,<br />
            303 – 1º ANDAR, SALA 03 – Santa Luzia,<br />
            Penedo – AL, 57200-000
          </p>
        </div>
      </div>

      {/* Bottom gradient bar */}
      <div
        style={{
          background: "linear-gradient(to right, #ffffff 0%, #ffcc99 30%, #ffcc99 70%, #ffffff 100%)",
          padding: "14px 24px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            color: "rgb(0,51,52)",
            margin: 0,
            lineHeight: 1.6,
          }}
        >
          © 2026 Dra. Gabryella Nunes • Todos os direitos reservados
        </p>
        <p
          style={{
            fontFamily: "'Poppins', sans-serif",
            fontSize: "11px",
            color: "rgba(0,51,52,0.65)",
            margin: 0,
          }}
        >
          Desenvolvido por Scale Visual
        </p>
      </div>
    </footer>
  );
}

function FloatingWhatsApp() {
  return (
    <a
      href={WHATSAPP_LINK}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center shadow-xl transition-all duration-200 hover:scale-110 active:scale-95"
      style={{ backgroundColor: "#25D366", boxShadow: "0 4px 20px rgba(37,211,102,0.45)" }}
      aria-label="WhatsApp"
    >
      <svg width="26" height="26" fill="white" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.124 1.527 5.855L.096 23.333 5.7 21.933A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.717.972.99-3.61-.234-.37A9.818 9.818 0 012.182 12c0-5.42 4.4-9.818 9.818-9.818s9.818 4.398 9.818 9.818-4.4 9.818-9.818 9.818z"/>
      </svg>
    </a>
  );
}

function MainPage() {
  useReveal();
  const [modalOpen, setModalOpen] = useState(false);
  const [modalService, setModalService] = useState<string | undefined>(undefined);

  const openModal = (service?: string) => {
    setModalService(service);
    setModalOpen(true);
  };

  return (
    <BookingContext.Provider value={{ openModal }}>
      <div style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}>
        <Nav />
        <Hero />
        <NovaSecao />
        <Ambiente />
        <Services />
        <Diferenciais />
        <Resultados />
        <Contato />
        <FAQ />
        <Footer />
        <FloatingWhatsApp />
        <BookingModal
          isOpen={modalOpen}
          onClose={() => setModalOpen(false)}
          prefilledService={modalService}
        />
      </div>
    </BookingContext.Provider>
  );
}

export default function App() {
  return (
    <Router>
      <Switch>
        <Route path="/servicos/:slug" component={ServiceDetailPage} />
        <Route component={MainPage} />
      </Switch>
    </Router>
  );
}
