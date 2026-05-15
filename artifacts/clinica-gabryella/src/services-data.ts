import serviceOrto from "@assets/orto_1778809661749.jpg";
import serviceAlinhadores from "@assets/alilhadores_1778809688651.jpg";
import serviceClareamento from "@assets/clareamento_1778809692558.jpg";
import serviceEstetica from "@assets/estetica_1778809698407.jpg";
import serviceImplante from "@assets/implante_1778809707377.jpg";
import serviceCoroa from "@assets/coroa_1778809715017.jpg";
import serviceHarmonizacao from "@assets/harmonizacao_1778809722444.jpg";
import serviceCanal from "@assets/canal_1778809727920.jpg";
import serviceLimpeza from "@assets/limpeza_1778809731960.jpg";
import serviceLazer from "@assets/lazer_1778809735130.jpg";
import serviceClinicaGeral from "@assets/image(1)_1778809760552.png";

export const WHATSAPP_LINK = "https://wa.me/5582981028766";

export interface ServiceData {
  slug: string;
  title: string;
  desc: string;
  longDesc: string[];
  benefits: string[];
  gradient: string;
  img?: string;
  imgPosition?: string;
  imgScale?: number;
  videoUrl?: string;
}

export const SERVICES: ServiceData[] = [
  {
    slug: "ortodontia",
    title: "Ortodontia",
    desc: "Sorriso alinhado com aparelhos metálicos ou estéticos. Discreta, segura e com resultado transformador.",
    longDesc: [
      "A ortodontia é a especialidade que cuida do alinhamento dos dentes e da harmonia da mordida. Na Clínica Gabryella Nunes, oferecemos tratamentos personalizados para cada perfil de paciente, utilizando aparelhos metálicos tradicionais ou aparelhos estéticos (cerâmicos ou de safira), que se tornam quase invisíveis no sorriso.",
      "Cada caso é avaliado individualmente com registros fotográficos, modelos de estudo e, quando necessário, radiografias e tomografias. Isso nos permite traçar um plano de tratamento preciso, com previsibilidade de resultado e segurança em cada etapa.",
      "Com mais de 10 anos de experiência em ortodontia, a Dra. Gabryella acompanha de perto cada fase do seu tratamento, garantindo conforto, comprometimento e um resultado que transforma não só o sorriso, mas a autoestima.",
    ],
    benefits: [
      "Aparelhos metálicos ou estéticos (cerâmico/safira)",
      "Plano de tratamento individualizado",
      "Consultas de acompanhamento regulares",
      "Tecnologia de última geração",
      "Resultado previsível e duradouro",
      "Atendimento humanizado e acolhedor",
    ],
    gradient: "linear-gradient(145deg, #002a2b 0%, #004a4c 60%, #006668 100%)",
    img: serviceOrto,
  },
  {
    slug: "alinhadores-invisiveis",
    title: "Alinhadores Invisíveis",
    desc: "Corrija o sorriso sem aparelho aparente. Removível, confortável e quase imperceptível no dia a dia.",
    longDesc: [
      "Os alinhadores invisíveis são uma alternativa discreta e confortável aos aparelhos convencionais. Confeccionados em plástico transparente sob medida, eles se encaixam perfeitamente nos dentes e movimentam-nos gradualmente até o alinhamento desejado.",
      "Por serem removíveis, permitem que você coma, beba e higienize os dentes sem restrições. São indicados para diversos tipos de mal-alinhamento e oferecem uma experiência de tratamento muito mais prática para o dia a dia.",
      "Na Clínica Gabryella Nunes, utilizamos tecnologia de escaneamento digital para planejar cada etapa do seu tratamento com precisão, permitindo que você visualize o resultado antes mesmo de começar.",
    ],
    benefits: [
      "Praticamente invisíveis no sorriso",
      "Removíveis para comer e higienizar",
      "Sem restrições alimentares",
      "Planejamento digital com previsão do resultado",
      "Conforto superior ao aparelho convencional",
      "Consultas menos frequentes",
    ],
    gradient: "linear-gradient(145deg, #001e1f 0%, #003c3e 60%, #005456 100%)",
    img: serviceAlinhadores,
  },
  {
    slug: "clareamento-dental",
    title: "Clareamento Dental",
    desc: "Dentes visivelmente mais brancos em poucos encontros, com tecnologia segura e resultado duradouro.",
    longDesc: [
      "O clareamento dental é um dos procedimentos mais solicitados na odontologia estética. Ele remove manchas e pigmentações acumuladas ao longo dos anos — causadas por café, vinho, tabaco e o próprio envelhecimento — devolvendo o brilho e a brancura natural dos dentes.",
      "Oferecemos duas modalidades: o clareamento de consultório, realizado em sessão com luz de ativação para resultado imediato, e o clareamento caseiro, com moldeiras personalizadas e gel profissional para uso em casa, com resultados progressivos e igualmente eficazes.",
      "O tratamento é seguro, supervisionado pela Dra. Gabryella, e adaptado à sensibilidade de cada paciente. O resultado pode durar de 1 a 3 anos com os cuidados adequados.",
    ],
    benefits: [
      "Clareamento de consultório ou caseiro",
      "Produto profissional de alta eficácia",
      "Protocolo adaptado para dentes sensíveis",
      "Resultado em poucas sessões",
      "Moldeiras personalizadas para uso em casa",
      "Resultado duradouro com manutenção simples",
    ],
    gradient: "linear-gradient(145deg, #002e2e 0%, #004e50 60%, #006a6c 100%)",
    img: serviceClareamento,
    imgPosition: "center top",
  },
  {
    slug: "estetica-dental",
    title: "Estética Dental",
    desc: "Facetas, resinas e procedimentos que devolvem harmonia e beleza natural ao sorriso.",
    longDesc: [
      "A estética dental vai além da aparência — ela restabelece a harmonia, a proporção e a naturalidade do sorriso. Na Clínica Gabryella Nunes, realizamos uma variedade de procedimentos estéticos cuidadosamente planejados para respeitar as características de cada paciente.",
      "As facetas de porcelana ou de resina composta corrigem forma, cor, tamanho e posição dos dentes, criando sorrisos equilibrados e naturais. Cada caso é fotografado, analisado e discutido com o paciente antes de qualquer intervenção.",
      "Nosso objetivo é que o resultado seja belo, mas também que pareça completamente natural — como se seus dentes sempre tivessem sido assim.",
    ],
    benefits: [
      "Facetas de porcelana ou resina",
      "Correção de forma, cor e tamanho",
      "Planejamento digital do sorriso",
      "Resultado natural e harmonioso",
      "Procedimento minimamente invasivo",
      "Durabilidade comprovada",
    ],
    gradient: "linear-gradient(145deg, #002626 0%, #004040 60%, #005a5a 100%)",
    img: serviceEstetica,
  },
  {
    slug: "implante-dental",
    title: "Implante Dental",
    desc: "Reposição de dentes perdidos com aparência e função idênticas ao dente natural.",
    longDesc: [
      "O implante dental é a solução mais completa para a reposição de dentes perdidos. Trata-se de um parafuso de titânio que é fixado ao osso da mandíbula ou maxila e funciona como raiz artificial, sobre a qual é instalada uma coroa que reproduz o aspecto e a função do dente natural.",
      "É o único tratamento que preserva o osso ao redor do dente perdido, evitando a reabsorção óssea que ocorre quando o espaço fica vazio. Além disso, não compromete os dentes vizinhos, como acontece nas próteses tradicionais.",
      "Na Clínica Gabryella Nunes, cada caso é planejado com cuidado, levando em conta a qualidade óssea, saúde geral do paciente e expectativas estéticas. O resultado é indistinguível de um dente natural.",
    ],
    benefits: [
      "Aparência e função como dente natural",
      "Preservação do osso ao redor",
      "Não compromete dentes vizinhos",
      "Alta taxa de sucesso",
      "Durabilidade para décadas",
      "Planejamento individualizado",
    ],
    gradient: "linear-gradient(145deg, #001a1a 0%, #003434 60%, #004e4e 100%)",
    img: serviceImplante,
  },
  {
    slug: "coroa-dentaria",
    title: "Coroa Dentária",
    desc: "Proteção e restauração estética para dentes danificados, com resultado natural e duradouro.",
    longDesc: [
      "A coroa dentária é uma capa que recobre completamente o dente, restaurando sua forma, tamanho e função. É indicada quando o dente está muito destruído por cárie, fratura ou desgaste, ou após tratamento de canal, quando o dente fica mais frágil.",
      "Utilizamos coroas de cerâmica pura, que imitam perfeitamente a translucidez e a cor do dente natural, garantindo estética superior. O preparo é feito com o máximo de preservação da estrutura dental saudável.",
      "O procedimento é indolor, realizado com anestesia local, e o resultado final é uma proteção resistente e esteticamente integrada ao restante do sorriso.",
    ],
    benefits: [
      "Cerâmica de alta estética e resistência",
      "Proteção completa do dente comprometido",
      "Indicada após tratamento de canal",
      "Cor personalizada para cada caso",
      "Resultado integrado ao sorriso",
      "Longa durabilidade",
    ],
    gradient: "linear-gradient(145deg, #002020 0%, #003c3c 60%, #005454 100%)",
    img: serviceCoroa,
  },
  {
    slug: "harmonizacao-facial",
    title: "Harmonização Facial",
    desc: "Procedimentos minimamente invasivos para realçar a beleza natural do rosto com naturalidade.",
    longDesc: [
      "A harmonização orofacial reúne procedimentos minimamente invasivos que equilibram as proporções do rosto, realçando a beleza natural de cada pessoa sem apagar suas características únicas. É uma área que une odontologia e estética com rigor técnico e olhar artístico.",
      "Realizamos aplicação de toxina botulínica para suavização de linhas de expressão, preenchimento labial e de sulcos com ácido hialurônico, bioestimuladores de colágeno e outros protocolos, sempre com produtos de alta qualidade e técnica refinada.",
      "Nosso princípio é o resultado natural: o objetivo é que as pessoas percebam que você está bem, descansado e com aparência saudável — sem que identifiquem o procedimento.",
    ],
    benefits: [
      "Toxina botulínica e preenchimentos",
      "Produtos certificados e de qualidade",
      "Resultado natural e harmonioso",
      "Procedimento rápido e seguro",
      "Sem tempo de recuperação significativo",
      "Resultados visíveis imediatamente",
    ],
    gradient: "linear-gradient(145deg, #002828 0%, #004444 60%, #005e5e 100%)",
    img: serviceHarmonizacao,
  },
  {
    slug: "tratamento-de-canal",
    title: "Tratamento de Canal",
    desc: "Elimine a dor e preserve seu dente com segurança. Técnica moderna e muito menos desconforto.",
    longDesc: [
      "O tratamento de canal — ou endodontia — é o procedimento que elimina a infecção ou a inflamação da polpa do dente (a parte interna, onde ficam nervos e vasos sanguíneos), permitindo que o dente seja preservado em vez de extraído.",
      "Com a tecnologia atual, o procedimento é realizado com instrumentos rotatórios de alta precisão, localização eletrônica do canal e materiais de última geração, o que torna o tratamento significativamente mais rápido, confortável e seguro do que muitos imaginam.",
      "Na Clínica Gabryella Nunes, o foco é que você se sinta tranquilo durante todo o procedimento. A dor que muitas pessoas temem está associada ao processo infeccioso em si — e não ao tratamento, que é realizado sob anestesia local eficiente.",
    ],
    benefits: [
      "Preservação do dente natural",
      "Instrumentação rotatória de precisão",
      "Realizado sob anestesia eficiente",
      "Sem dor durante o procedimento",
      "Resolução definitiva da infecção",
      "Procedimento em sessão única ou poucas sessões",
    ],
    gradient: "linear-gradient(145deg, #001c1c 0%, #003636 60%, #005050 100%)",
    img: serviceCanal,
  },
  {
    slug: "limpeza-dental",
    title: "Limpeza Dental",
    desc: "Remoção profissional de tártaro e manchas para um sorriso saudável e protegido.",
    longDesc: [
      "A limpeza dental profissional (profilaxia) vai muito além do que conseguimos fazer em casa. Ela remove o tártaro (cálculo dental) que se acumula mesmo com escovação regular, e elimina manchas superficiais causadas por café, chá, vinho e tabaco.",
      "O procedimento inclui raspagem supra e subgengival com ultrassom, polimento com pasta profilática e, quando necessário, orientação personalizada sobre técnica de escovação e uso do fio dental.",
      "Recomendamos a limpeza profissional a cada 6 meses como forma de prevenção contra cáries, gengivite e periodontite. É um investimento simples que protege toda a saúde bucal a longo prazo.",
    ],
    benefits: [
      "Remoção completa de tártaro",
      "Eliminação de manchas superficiais",
      "Prevenção de cáries e gengivite",
      "Polimento e brilho nos dentes",
      "Orientação de higiene personalizada",
      "Indicada a cada 6 meses",
    ],
    gradient: "linear-gradient(145deg, #002424 0%, #004040 60%, #005c5c 100%)",
    img: serviceLimpeza,
    imgPosition: "center 15%",
    imgScale: 1.45,
  },
  {
    slug: "laser-odontologico",
    title: "Laser Odontológico",
    desc: "Tecnologia de ponta para procedimentos mais precisos, rápidos e com mínimo desconforto.",
    longDesc: [
      "O laser odontológico é uma das tecnologias mais avançadas disponíveis na odontologia atual. Ele pode ser utilizado em uma ampla variedade de procedimentos: tratamento de aftas, gengivoplastia (remodelação gengival), desinfecção de canais, clareamento dental e muito mais.",
      "Suas principais vantagens incluem maior precisão, menor sangramento, redução do desconforto pós-operatório e cicatrização mais rápida dos tecidos. Em muitos casos, elimina a necessidade de cortes ou suturas.",
      "Na Clínica Gabryella Nunes, o laser é utilizado como ferramenta complementar para elevar a qualidade dos tratamentos, proporcionando uma experiência mais confortável e resultados superiores.",
    ],
    benefits: [
      "Maior precisão nos procedimentos",
      "Menos sangramento e desconforto",
      "Cicatrização mais rápida",
      "Sem necessidade de cortes em muitos casos",
      "Utilizado em múltiplos tratamentos",
      "Tecnologia de última geração",
    ],
    gradient: "linear-gradient(145deg, #002c2c 0%, #004848 60%, #006464 100%)",
    img: serviceLazer,
  },
  {
    slug: "clinica-geral",
    title: "Clínica Geral",
    desc: "Restaurações, extrações e prevenção completa para toda a família em um só lugar.",
    longDesc: [
      "A clínica geral é a base de toda odontologia saudável. Engloba o diagnóstico, a prevenção e o tratamento das doenças bucais mais comuns, como cáries e gengivite, além de restaurações, extrações e controle de saúde periodontal.",
      "Na Clínica Gabryella Nunes, cada consulta de clínica geral começa com uma avaliação completa do paciente — não apenas dos dentes, mas de toda a saúde bucal e sua relação com a saúde geral. Nosso atendimento é para todas as idades.",
      "Acreditamos que a prevenção é o melhor investimento. Com check-ups regulares e orientação adequada, é possível manter a saúde bucal por toda a vida com muito mais conforto e economia.",
    ],
    benefits: [
      "Atendimento para toda a família",
      "Restaurações em resina e porcelana",
      "Exodontias simples e complexas",
      "Controle e prevenção de cáries",
      "Tratamento de gengivite",
      "Acompanhamento preventivo regular",
    ],
    gradient: "linear-gradient(145deg, #001e1e 0%, #003a3a 60%, #005252 100%)",
    img: serviceClinicaGeral,
    imgPosition: "center top",
  },
];
