import { useEffect, useRef, useState } from "react";
import "./index.css";
import beforeAfter1 from "@assets/image_1778593478099.png";
import beforeAfter2 from "@assets/image(1)_1778593478101.png";
import beforeAfter3 from "@assets/image(2)_1778593478102.png";
import beforeAfter4 from "@assets/png_1778593487627.png";
import beforeAfter5 from "@assets/png(1)_1778593487628.png";
import diferencialsBg from "@assets/fundo_diferenciis_1778596032037.png";

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

const WHATSAPP_LINK = "https://wa.me/5582981028766";

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { label: "Início", href: "#" },
    { label: "Sobre", href: "#diferenciais" },
    { label: "Espaço", href: "#resultados" },
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
              {l.label}
            </a>
          ))}
        </div>

        {/* CTA Button */}
        <div className="hidden md:flex items-center" style={{ flexShrink: 0 }}>
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
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
              textDecoration: "none",
              boxShadow: "0 4px 18px rgba(0,51,52,0.22)",
              transition: "transform 0.2s, box-shadow 0.2s, background-color 0.2s",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(-2px)";
              el.style.boxShadow = "0 8px 24px rgba(0,51,52,0.30)";
              el.style.backgroundColor = "#002526";
            }}
            onMouseLeave={e => {
              const el = e.currentTarget as HTMLAnchorElement;
              el.style.transform = "translateY(0)";
              el.style.boxShadow = "0 4px 18px rgba(0,51,52,0.22)";
              el.style.backgroundColor = "#003334";
            }}
          >
            Agendar Avaliação
          </a>
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
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "block",
              textAlign: "center",
              padding: "10px 20px",
              borderRadius: "999px",
              backgroundColor: "#003334",
              color: "#fff",
              fontFamily: "'Poppins', sans-serif",
              fontSize: "13px",
              fontWeight: 700,
              textDecoration: "none",
              marginTop: "4px",
            }}
          >
            Agendar Avaliação
          </a>
        </div>
      )}
    </nav>
  );
}

function Hero() {
  return (
    <section
      className="relative overflow-hidden"
      style={{ backgroundColor: "#fff", minHeight: "100vh", display: "flex", flexDirection: "column" }}
    >
      {/* Background image — photo + circles baked in */}
      <img
        src="/hero-bg.png"
        alt=""
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center top",
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
              maxWidth: "520px",
              display: "flex",
              flexDirection: "column",
              gap: "28px",
              paddingTop: "80px",
            }}
          >
            {/* Headline */}
            <h1 style={{ margin: 0, lineHeight: 1.05 }}>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Poppins', sans-serif",
                  fontWeight: 700,
                  fontSize: "clamp(2rem, 4.2vw, 64px)",
                  color: "rgb(0,51,52)",
                  lineHeight: 1.05,
                }}
              >
                Especialista em cuidar de pessoas e
              </span>
              <span
                style={{
                  display: "block",
                  fontFamily: "'Roxborough CF', 'Cormorant Garamond', Georgia, serif",
                  fontWeight: 500,
                  fontStyle: "italic",
                  fontSize: "clamp(1.8rem, 3.9vw, 60px)",
                  color: "rgb(0,51,52)",
                  lineHeight: 1.1,
                  marginTop: "4px",
                }}
              >
                transformar sorrisos com naturalidade e confiança
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
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
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
                  textDecoration: "none",
                  transition: "background 0.25s, transform 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(to right, #001e20 0%, #004a4c 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 12px 32px rgba(0,51,52,0.38)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 8px 28px rgba(0,51,52,0.28)";
                }}
              >
                Agendar Avaliação
              </a>
            </div>

            {/* Stats */}
            <div
              style={{
                paddingTop: "24px",
                borderTop: "1px solid rgba(0,51,52,0.15)",
                display: "flex",
                gap: "clamp(1.5rem, 3vw, 3rem)",
              }}
            >
              {[
                { value: "+3.000", label: "SORRISOS TRANSFORMADOS" },
                { value: "+10 anos", label: "EXPERIÊNCIA" },
                { value: "4022", label: "CRO" },
              ].map((stat) => (
                <div key={stat.label} style={{ display: "flex", flexDirection: "column", gap: "6px", alignItems: "center", textAlign: "center" }}>
                  <span
                    style={{
                      fontFamily: "'Poppins', sans-serif",
                      fontWeight: 400,
                      fontSize: "clamp(1.1rem, 1.8vw, 28px)",
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

const SERVICES = [
  {
    title: "Implante Dental",
    desc: "Reposição de dentes perdidos com aparência e função idênticas ao dente natural.",
    icon: "🦷",
  },
  {
    title: "Coroa Dentária",
    desc: "Proteção e restauração estética para dentes danificados, com resultado natural e duradouro.",
    icon: "👑",
  },
  {
    title: "Harmonização Facial",
    desc: "Procedimentos minimamente invasivos para realçar a beleza natural do rosto com naturalidade.",
    icon: "✨",
  },
  {
    title: "Tratamento de Canal",
    desc: "Elimine a dor e preserve seu dente com segurança. Técnica moderna e muito menos desconforto.",
    icon: "🔬",
  },
  {
    title: "Limpeza Dental",
    desc: "Remoção profissional de tártaro e manchas para um sorriso saudável e protegido.",
    icon: "🪥",
  },
  {
    title: "Laser Odontológico",
    desc: "Tecnologia de ponta para procedimentos mais precisos, rápidos e com mínimo desconforto.",
    icon: "⚡",
  },
  {
    title: "Clínica Geral",
    desc: "Restaurações, extrações e prevenção completa para toda a família em um só lugar.",
    icon: "🏥",
  },
  {
    title: "Ortodontia",
    desc: "Sorriso alinhado com aparelhos metálicos ou estéticos. Discreta, segura e com resultado transformador.",
    icon: "😁",
  },
  {
    title: "Alinhadores Invisíveis",
    desc: "Corrija o sorriso sem aparelho aparente. Removível, confortável e quase imperceptível no dia a dia.",
    icon: "💎",
  },
  {
    title: "Clareamento Dental",
    desc: "Dentes visivelmente mais brancos em poucos encontros, com tecnologia segura e resultado duradouro.",
    icon: "☀️",
  },
  {
    title: "Estética Dental",
    desc: "Facetas, resinas e procedimentos que devolvem harmonia e beleza natural ao sorriso.",
    icon: "🌟",
  },
];

function Services() {
  return (
    <section id="servicos" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "rgba(0,51,52,0.07)", color: "rgb(0,51,52)" }}
          >
            Nossos Serviços
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "rgb(0,51,52)", letterSpacing: "-0.02em" }}
          >
            Tratamentos pensados para cuidar do seu sorriso com leveza e confiança
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgb(80,100,115)", lineHeight: 1.7 }}>
            Ortodontia, estética e saúde bucal com atendimento humanizado e foco no seu bem-estar. Conheça todos os nossos serviços e realize sua consulta.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 stagger">
          {SERVICES.map((s) => (
            <div
              key={s.title}
              className="reveal group rounded-2xl p-6 border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer"
              style={{
                backgroundColor: "#fff",
                borderColor: "rgba(0,51,52,0.10)",
              }}
            >
              <div
                className="w-10 h-10 rounded-xl flex items-center justify-center text-xl mb-4 transition-all duration-300 group-hover:scale-110"
                style={{ backgroundColor: "rgba(0,51,52,0.06)" }}
              >
                {s.icon}
              </div>
              <h3 className="font-semibold text-base mb-2" style={{ color: "rgb(0,51,52)" }}>
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgb(90,110,125)" }}>
                {s.desc}
              </p>
              <div
                className="mt-4 text-xs font-semibold flex items-center gap-1 transition-all duration-200 group-hover:gap-2"
                style={{ color: "rgb(0,51,52)" }}
              >
                Conheça mais
                <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 text-center reveal">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ backgroundColor: "rgb(0,51,52)", color: "#fff", boxShadow: "0 6px 24px rgba(0,51,52,0.20)" }}
          >
            Agendar Avaliação
          </a>
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
            top: "0",
            left: "44%",
            width: "49%",
            height: "100%",
            display: "flex",
            alignItems: "center",
            padding: "0 5% 0 4%",
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

function Resultados() {
  const photos = [
    { src: beforeAfter1, delay: "delay-1" },
    { src: beforeAfter2, delay: "delay-2" },
    { src: beforeAfter3, delay: "delay-3" },
    { src: beforeAfter4, delay: "delay-4" },
    { src: beforeAfter5, delay: "delay-5" },
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

      {/* Photo grid — 5 cards */}
      <div
        className="stagger"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(5, 1fr)",
          gap: "clamp(6px, 0.8vw, 12px)",
          width: "100%",
        }}
      >
        {photos.map((photo, i) => (
          <div
            key={i}
            className="reveal"
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              position: "relative",
              background: "#003334",
              aspectRatio: "2 / 3",
            }}
          >
            {/* Full image — uniform height */}
            <img
              src={photo.src}
              alt={`Antes e depois ${i + 1}`}
              className="before-after-img"
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: "center",
                display: "block",
              }}
            />

            {/* "Antes e depois" badge — top left */}
            <div
              style={{
                position: "absolute",
                top: "12px",
                left: "12px",
                zIndex: 10,
                background: "linear-gradient(105deg, #f5c9a0 0%, #e8b48a 40%, #f0c8a8 70%, #fde8d0 100%)",
                border: "1px solid rgba(255,255,255,0.30)",
                borderRadius: "999px",
                padding: "6px 16px",
                fontFamily: "'Poppins', sans-serif",
                fontSize: "12px",
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

      {/* CTA button */}
      <div
        className="text-center reveal"
        style={{
          marginTop: "clamp(36px, 4vw, 56px)",
          paddingLeft: "clamp(16px, 4vw, 48px)",
          paddingRight: "clamp(16px, 4vw, 48px)",
        }}
      >
        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
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
            textDecoration: "none",
            letterSpacing: "0.04em",
            boxShadow: "0 4px 20px rgba(0,0,0,0.22)",
            transition: "transform 0.2s, box-shadow 0.2s, opacity 0.2s",
          }}
          onMouseEnter={e => {
            const el = e.currentTarget as HTMLAnchorElement;
            el.style.transform = "translateY(-2px)";
            el.style.boxShadow = "0 8px 28px rgba(0,0,0,0.30)";
          }}
          onMouseLeave={e => {
            const el = e.currentTarget as HTMLAnchorElement;
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
        </a>
      </div>
    </section>
  );
}

function Contato() {
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
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
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
                  textDecoration: "none",
                  boxShadow: "0 6px 24px rgba(0,51,52,0.25)",
                  transition: "background 0.25s, transform 0.2s, box-shadow 0.2s",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(to right, #001e20 0%, #004a4c 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(-2px)";
                  el.style.boxShadow = "0 10px 30px rgba(0,51,52,0.32)";
                }}
                onMouseLeave={e => {
                  const el = e.currentTarget as HTMLAnchorElement;
                  el.style.background = "linear-gradient(to right, #002e30 0%, #005c5e 100%) padding-box, linear-gradient(to right, #003334 0%, #bcd1dd 100%) border-box";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "0 6px 24px rgba(0,51,52,0.25)";
                }}
              >
                Agendar Avaliação
              </a>
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
              href="https://instagram.com"
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

export default function App() {
  useReveal();

  return (
    <div style={{ fontFamily: "'Inter', 'system-ui', sans-serif" }}>
      <Nav />
      <Hero />
      <Services />
      <Diferenciais />
      <Resultados />
      <Contato />
      <FAQ />
      <Footer />
      <FloatingWhatsApp />
    </div>
  );
}
