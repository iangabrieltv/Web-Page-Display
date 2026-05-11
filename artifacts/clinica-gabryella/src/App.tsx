import { useEffect, useRef, useState } from "react";
import "./index.css";

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
        boxShadow: scrolled ? "0 2px 24px rgba(0,51,52,0.10)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,51,52,0.07)" : "none",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <a href="#" className="flex items-center gap-2 flex-shrink-0">
          <svg width="30" height="30" viewBox="0 0 40 40" fill="none">
            <circle cx="20" cy="20" r="20" fill="none" stroke="rgb(0,51,52)" strokeWidth="1.5"/>
            <text x="20" y="15" textAnchor="middle" fontSize="7" fill="rgb(0,51,52)" fontFamily="serif" fontStyle="italic">Dra.</text>
            <text x="20" y="23" textAnchor="middle" fontSize="5" fill="rgb(0,51,52)" fontFamily="serif" letterSpacing="0.5">GABRYELLA</text>
            <text x="20" y="30" textAnchor="middle" fontSize="5" fill="rgb(0,51,52)" fontFamily="serif" letterSpacing="0.5">NUNES</text>
          </svg>
          <div className="hidden sm:flex flex-col leading-tight">
            <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "rgb(0,51,52)" }}>DRA. GABRYELLA</span>
            <span className="text-[9px] font-semibold tracking-widest uppercase" style={{ color: "rgb(0,51,52)" }}>NUNES</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-2">
          {links.map((l) => (
            <a
              key={l.href + l.label}
              href={l.href}
              className="px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 hover:border-teal-deep hover:text-teal-deep"
              style={{
                color: "rgb(48,66,84)",
                borderColor: "rgba(48,66,84,0.25)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgb(0,51,52)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgb(0,51,52)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLAnchorElement).style.borderColor = "rgba(48,66,84,0.25)";
                (e.currentTarget as HTMLAnchorElement).style.color = "rgb(48,66,84)";
              }}
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 hover:opacity-90 active:scale-95"
            style={{ backgroundColor: "rgb(0,51,52)", color: "#fff" }}
          >
            Agendar Avaliação
          </a>
        </div>

        <button
          className="md:hidden p-2 rounded-lg"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
          style={{ color: "rgb(0,51,52)" }}
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
              className="text-sm font-medium py-1 border-b"
              style={{ color: "rgb(48,66,84)", borderColor: "rgba(0,0,0,0.05)" }}
            >
              {l.label}
            </a>
          ))}
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2.5 rounded-full text-sm font-semibold text-center mt-1"
            style={{ backgroundColor: "rgb(0,51,52)", color: "#fff" }}
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
      style={{ backgroundColor: "#fff", minHeight: "100vh" }}
    >
      {/* Full-bleed split layout */}
      <div
        className="flex flex-col md:flex-row"
        style={{ minHeight: "100vh" }}
      >
        {/* ── LEFT HALF ── */}
        <div
          className="relative z-10 flex items-center"
          style={{ flex: "0 0 50%", backgroundColor: "#fff" }}
        >
          <div className="w-full px-8 md:pl-12 lg:pl-20 xl:pl-28 py-24 md:py-0" style={{ paddingTop: "80px" }}>
            <h1
              className="text-4xl sm:text-5xl lg:text-[3.2rem] leading-[1.15] mb-7"
              style={{ color: "rgb(0,51,52)", letterSpacing: "-0.02em", maxWidth: "480px" }}
            >
              <span className="font-bold block">Especialista em cuidar</span>
              <span className="font-bold">de pessoas e </span>
              <span
                style={{
                  fontStyle: "italic",
                  fontFamily: "'Georgia', 'Times New Roman', serif",
                  fontWeight: 400,
                  color: "rgb(0,51,52)",
                }}
              >
                transformar sorrisos com naturalidade e confiança
              </span>
            </h1>

            <p
              className="mb-10"
              style={{ color: "rgb(90,110,125)", lineHeight: 1.75, fontSize: "15px", maxWidth: "380px" }}
            >
              Aparelhos fixos, alinhadores invisíveis e muito mais em um ambiente sem julgamentos, criado para quem adiou o dentista por medo ou insegurança.
            </p>

            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-9 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
              style={{
                backgroundColor: "rgb(0,51,52)",
                color: "#fff",
                boxShadow: "0 8px 32px rgba(0,51,52,0.28)",
              }}
            >
              Agendar Avaliação
            </a>
          </div>
        </div>

        {/* ── RIGHT HALF ── photo */}
        <div
          className="relative"
          style={{ flex: "0 0 50%", minHeight: "480px" }}
        >
          {/* Decorative concentric circles — top-right corner */}
          <div
            className="absolute pointer-events-none z-20"
            style={{ top: 0, right: 0, width: "320px", height: "320px" }}
          >
            {[0, 1, 2, 3, 4, 5, 6].map((i) => (
              <div
                key={i}
                className="absolute rounded-full border"
                style={{
                  width: `${90 + i * 44}px`,
                  height: `${90 + i * 44}px`,
                  top: `${-(45 + i * 22)}px`,
                  right: `${-(45 + i * 22)}px`,
                  borderColor: `rgba(0,85,87,${0.30 - i * 0.038})`,
                  borderWidth: "1.5px",
                }}
              />
            ))}
          </div>

          {/* Photo — show right portion (the doctor's side of the reference image) */}
          <img
            src="/hero-dra.png"
            alt="Dra. Gabryella Nunes"
            className="absolute inset-0 w-full h-full"
            style={{
              objectFit: "cover",
              objectPosition: "75% center",
            }}
          />

          {/* Left fade — blends photo into white left panel, covers center text bleed */}
          <div
            className="absolute inset-y-0 left-0 z-10 pointer-events-none"
            style={{
              width: "55%",
              background: "linear-gradient(to right, #fff 0%, #fff 30%, rgba(255,255,255,0.85) 55%, transparent 100%)",
            }}
          />
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
  const items = [
    {
      title: "Tecnologia moderna para mais conforto",
      desc: "Equipamentos de última geração para procedimentos mais precisos, rápidos e com mínimo desconforto.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      title: "Atendimento acolhedor e humanizado",
      desc: "Cada paciente é recebido com escuta, empatia e atenção individualizada em cada etapa do tratamento.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "Ortodontia com acompanhamento próximo",
      desc: "Acompanhamento contínuo e personalizado para garantir os melhores resultados ao longo de todo o tratamento.",
      icon: (
        <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="diferenciais" className="py-24 px-6" style={{ backgroundColor: "rgb(0,51,52)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="mb-14 reveal">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "rgba(255,255,255,0.85)" }}
          >
            Diferenciais +
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "#fff", letterSpacing: "-0.02em", maxWidth: "560px" }}
          >
            Ortodontia com propósito
          </h2>
          <p className="text-base max-w-xl" style={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.7 }}>
            Cada detalhe do atendimento foi pensado para que você se sinta acolhido, seguro e confortável durante toda a sua experiência no consultório.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger">
          {items.map((item) => (
            <div
              key={item.title}
              className="reveal rounded-2xl p-8 border transition-all duration-300 hover:border-white/20"
              style={{ backgroundColor: "rgba(255,255,255,0.06)", borderColor: "rgba(255,255,255,0.10)" }}
            >
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ backgroundColor: "rgba(255,255,255,0.12)", color: "#fff" }}
              >
                {item.icon}
              </div>
              <h3 className="font-semibold text-lg mb-3" style={{ color: "#fff" }}>
                {item.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.65)" }}>
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Resultados() {
  const cases = [
    {
      label: "Ortodontia",
      desc: "Alinhamento completo com aparelho metálico em 18 meses",
    },
    {
      label: "Clareamento",
      desc: "6 tons mais branco em 3 sessões de laser odontológico",
    },
    {
      label: "Implante",
      desc: "Reposição natural e funcional de dente perdido há 5 anos",
    },
    {
      label: "Facetas",
      desc: "Harmonização estética com lentes de contato dental",
    },
  ];

  return (
    <section id="resultados" className="py-24 px-6" style={{ backgroundColor: "#fff" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 reveal">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "rgba(0,51,52,0.07)", color: "rgb(0,51,52)" }}
          >
            Antes e depois
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "rgb(0,51,52)", letterSpacing: "-0.02em" }}
          >
            Resultados que devolvem confiança para sorrir
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgb(80,100,115)", lineHeight: 1.7 }}>
            Cada tratamento é planejado para entregar resultados naturais, funcionais e alinhados ao que cada paciente precisa.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 stagger">
          {cases.map((c) => (
            <div key={c.label} className="reveal group rounded-2xl overflow-hidden border" style={{ borderColor: "rgba(0,51,52,0.10)" }}>
              <div
                className="relative h-52 flex flex-col items-center justify-center gap-3"
                style={{ backgroundColor: "rgba(0,51,52,0.05)" }}
              >
                <div className="flex gap-3 items-center">
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: "rgba(0,51,52,0.08)" }}
                  >
                    😔
                  </div>
                  <svg width="20" height="20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} style={{ color: "rgb(0,51,52)" }}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                  <div
                    className="w-20 h-20 rounded-xl flex items-center justify-center text-3xl"
                    style={{ backgroundColor: "rgba(0,51,52,0.08)" }}
                  >
                    😁
                  </div>
                </div>
                <div
                  className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ backgroundColor: "rgb(0,51,52)", color: "#fff" }}
                >
                  Antes e Depois
                </div>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-sm mb-1" style={{ color: "rgb(0,51,52)" }}>{c.label}</h3>
                <p className="text-xs leading-relaxed" style={{ color: "rgb(90,110,125)" }}>{c.desc}</p>
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

function Contato() {
  return (
    <section id="contato" className="py-24 px-6" style={{ backgroundColor: "rgb(246,248,247)" }}>
      <div className="max-w-5xl mx-auto">
        <div className="reveal text-center mb-14">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "rgba(0,51,52,0.07)", color: "rgb(0,51,52)" }}
          >
            Onde nos encontrar
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "rgb(0,51,52)", letterSpacing: "-0.02em" }}
          >
            Entre em contato com nossa equipe
          </h2>
          <p className="text-base max-w-2xl mx-auto" style={{ color: "rgb(80,100,115)", lineHeight: 1.7 }}>
            Descubra como podemos transformar o seu sorriso com conforto, tecnologia e segurança.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 stagger">
          {[
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              ),
              label: "Localização",
              value: "Galeria Bella Rio - Largo de Fátima, 303 - 1° Andar, Sala 03 - Santa Luzia, Penedo - AL, 57200-000",
            },
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              ),
              label: "Telefone / WhatsApp",
              value: "(82) 98102-8766",
            },
            {
              icon: (
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              ),
              label: "E-mail",
              value: "dra.gabryellanunes@gmail.com",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="reveal rounded-2xl p-7 bg-white border"
              style={{ borderColor: "rgba(0,51,52,0.10)" }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-4"
                style={{ backgroundColor: "rgb(0,51,52)", color: "#fff" }}
              >
                {item.icon}
              </div>
              <p className="text-xs font-semibold uppercase tracking-wide mb-2" style={{ color: "rgba(0,51,52,0.5)" }}>
                {item.label}
              </p>
              <p className="text-sm font-medium leading-relaxed" style={{ color: "rgb(30,50,65)" }}>
                {item.value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 reveal text-center">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full font-semibold text-base transition-all duration-200 hover:opacity-90 hover:scale-105 active:scale-95"
            style={{ backgroundColor: "rgb(0,51,52)", color: "#fff", boxShadow: "0 6px 24px rgba(0,51,52,0.20)" }}
          >
            <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.126.555 4.124 1.527 5.855L.096 23.333 5.7 21.933A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.371l-.36-.213-3.717.972.99-3.61-.234-.37A9.818 9.818 0 012.182 12c0-5.42 4.4-9.818 9.818-9.818s9.818 4.398 9.818 9.818-4.4 9.818-9.818 9.818z"/>
            </svg>
            Agendar Avaliação via WhatsApp
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
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14 reveal">
          <div
            className="inline-block mb-4 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wide uppercase"
            style={{ backgroundColor: "rgba(0,51,52,0.07)", color: "rgb(0,51,52)" }}
          >
            Perguntas frequentes
          </div>
          <h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            style={{ color: "rgb(0,51,52)", letterSpacing: "-0.02em" }}
          >
            Tire suas dúvidas
          </h2>
        </div>

        <div className="flex flex-col gap-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="reveal rounded-2xl border overflow-hidden transition-all duration-300"
              style={{ borderColor: open === i ? "rgb(0,51,52)" : "rgba(0,51,52,0.12)" }}
            >
              <button
                className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 transition-colors duration-200"
                style={{ backgroundColor: open === i ? "rgba(0,51,52,0.03)" : "#fff" }}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className="font-semibold text-sm" style={{ color: "rgb(0,51,52)" }}>
                  {faq.q}
                </span>
                <span
                  className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all duration-300"
                  style={{
                    backgroundColor: open === i ? "rgb(0,51,52)" : "rgba(0,51,52,0.08)",
                    color: open === i ? "#fff" : "rgb(0,51,52)",
                    transform: open === i ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </span>
              </button>
              <div
                className="overflow-hidden transition-all duration-300"
                style={{ maxHeight: open === i ? "200px" : "0px" }}
              >
                <p className="px-6 pb-5 text-sm leading-relaxed" style={{ color: "rgb(80,100,115)" }}>
                  {faq.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-14 px-6" style={{ backgroundColor: "rgb(0,51,52)" }}>
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 pb-10 border-b" style={{ borderColor: "rgba(255,255,255,0.10)" }}>
          <div>
            <div className="flex items-center gap-2 mb-4">
              <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                <circle cx="16" cy="16" r="16" fill="rgba(255,255,255,0.15)" />
                <path d="M10 12c0-3.3 2.7-6 6-6s6 2.7 6 6c0 2.4-1.4 4.5-3.4 5.5L17 26h-2l-1.6-8.5C11.4 16.5 10 14.4 10 12z" fill="#fff" />
              </svg>
              <span className="font-semibold text-sm" style={{ color: "#fff" }}>Dra. Gabryella Nunes</span>
            </div>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Cuidando do seu sorriso com tecnologia, humanidade e resultados que duram.
            </p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>Atendimento</p>
            <p className="text-sm mb-1" style={{ color: "rgba(255,255,255,0.6)" }}>Segunda a sexta</p>
            <p className="text-sm font-medium" style={{ color: "rgba(255,255,255,0.9)" }}>8:00 às 18:00</p>
          </div>

          <div>
            <p className="font-semibold text-sm mb-3" style={{ color: "rgba(255,255,255,0.9)" }}>Localização</p>
            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.6)" }}>
              Galeria Bella Rio - Largo de Fátima, 303 - 1° Andar, Sala 03 - Santa Luzia, Penedo - AL, 57200-000
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.45)" }}>
            © 2026 Dra. Gabryella Nunes • Todos os direitos reservados
          </p>
          <p className="text-xs" style={{ color: "rgba(255,255,255,0.35)" }}>
            Desenvolvido por Scale Visual
          </p>
        </div>
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
