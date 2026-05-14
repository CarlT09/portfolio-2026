import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useMotionTemplate,
} from "framer-motion";
import { Link } from "react-router-dom";

const About = () => {
  const containerRef = useRef(null);

  // =========================
  // PARALLAX
  // =========================
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.18], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.2], [0, 140]);
  const imageY = useTransform(scrollYProgress, [0, 0.3], [0, -120]);

  // =========================
  // CURSOR GLOW
  // =========================
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowBackground = useMotionTemplate`
    radial-gradient(
      700px circle at ${mouseX}px ${mouseY}px,
      rgba(255,255,255,0.08),
      transparent 40%
    )
  `;

  const handleMouseMove = (e) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  return (
    <main
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full overflow-hidden bg-[#050505] text-white selection:bg-white selection:text-black"
    >
      {/* ========================= */}
      {/* GLOBAL STYLES */}
      {/* ========================= */}

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,600&display=swap');

        * {
          font-family: 'Inter', sans-serif;
        }

        .font-editorial {
          font-family: 'Playfair Display', serif;
        }

        html {
          scroll-behavior: smooth;
        }
      `}</style>

      {/* ========================= */}
      {/* NOISE */}
      {/* ========================= */}

      <div
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "url('https://grainy-gradients.vercel.app/noise.svg')",
        }}
      />

      {/* ========================= */}
      {/* CURSOR GLOW */}
      {/* ========================= */}

      <motion.div
        className="pointer-events-none fixed inset-0 z-[2]"
        style={{
          background: glowBackground,
        }}
      />

      {/* ========================= */}
      {/* SIDE LINE */}
      {/* ========================= */}

      <div className="fixed left-10 top-0 hidden h-full w-px bg-white/10 lg:block z-20" />

      {/* ========================= */}
      {/* HERO */}
      {/* ========================= */}

      <section className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        {/* BACKGROUND */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_rgba(255,255,255,0.08),_transparent_60%)]" />

        {/* BIG GLOW */}
        <div className="absolute top-[-20%] left-1/2 h-[1200px] w-[1200px] -translate-x-1/2 rounded-full bg-white/10 blur-[180px] opacity-30" />

        {/* WATERMARK */}
        <div className="pointer-events-none absolute bottom-0 right-0 select-none text-[24vw] font-black leading-none text-white/[0.03]">
          CT
        </div>

        {/* CONTENT */}
        <motion.div
          style={{
            opacity: heroOpacity,
            y: heroY,
          }}
          className="relative z-10 flex flex-col items-center px-6 text-center"
        >
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(12px)",
              y: 40,
            }}
            animate={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            <p className="mb-8 text-[10px] uppercase tracking-[0.45em] text-[#00FFD1]">
              Interactive Systems Engineer
            </p>

            <h1 className="text-5xl font-black leading-[0.82] tracking-[-0.06em] md:text-8xl lg:text-[8rem]">
              A engenharia
              <br />
              <span className="font-editorial font-normal italic text-white/50">
                em prol da
              </span>
              <br />
              interatividade.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              delay: 0.8,
              duration: 1.5,
            }}
            className="mt-12 max-w-xl text-sm font-light uppercase tracking-[0.3em] text-gray-400 md:text-base"
          >
            Não me defino por um ecrã.
            <br />
            Defino-me pelo impacto.
          </motion.p>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={{ y: imageY }}
          initial={{
            opacity: 0,
            scale: 0.9,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 0.4,
            duration: 1.8,
          }}
          className="pointer-events-none absolute bottom-0 left-1/2 z-[5] w-[85%] max-w-2xl -translate-x-1/2 opacity-80 md:w-[40%]"
        >
          <img
            src="/assets/carlos-cutout2.png"
            alt="Carlos Teixeira"
            className="h-auto w-full grayscale transition-all duration-1000 hover:grayscale-0"
            style={{
              filter: "drop-shadow(0 0 80px rgba(255,255,255,0.12))",
            }}
          />
        </motion.div>
      </section>

      {/* DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ========================= */}
      {/* SECTION 2 */}
      {/* ========================= */}

      <section className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-40">
        <div className="grid grid-cols-1 gap-24 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              x: -50,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              x: 0,
            }}
            transition={{
              duration: 1,
              type: "spring",
              stiffness: 80,
            }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="pointer-events-none absolute -top-20 left-0 text-[18vw] font-black leading-none tracking-[-0.08em] text-white/[0.03]">
              RAW
            </div>

            <h2 className="text-6xl font-black leading-[0.9] tracking-[-0.06em] md:text-8xl">
              Resource
              <br />
              <span className="font-editorial font-normal italic text-white/40">
                fulness
              </span>
            </h2>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="flex items-center"
          >
            <div className="space-y-10">
              <p className="text-2xl font-light leading-relaxed text-gray-300">
                O mercado está saturado do{" "}
                <span className="font-editorial italic text-white">
                  estático
                </span>{" "}
                e do banal.
              </p>

              <p className="text-lg leading-loose text-gray-400">
                O meu maior ponto forte não é saber todas as linguagens de cor,
                mas sim a capacidade de criar soluções através de{" "}
                <span className="text-[#00FFD1]">engenho</span>, experimentação
                e obsessão visual.
              </p>

              <p className="text-lg leading-loose text-gray-500">
                Sou o Carlos Teixeira. Trabalho na interseção entre programação,
                design de experiência, audiovisual e arquiteturas inteligentes.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ========================= */}
      {/* SECTION 3 */}
      {/* ========================= */}

      <section className="relative min-h-screen w-full overflow-hidden py-40">
        {/* BG GLOW */}
        <div className="absolute left-1/2 top-1/2 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00FFD1]/[0.05] blur-[180px]" />

        <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 lg:grid-cols-2">
          {/* LEFT */}
          <motion.div
            initial={{
              opacity: 0,
              filter: "blur(10px)",
              y: 40,
            }}
            whileInView={{
              opacity: 1,
              filter: "blur(0px)",
              y: 0,
            }}
            transition={{
              duration: 1,
            }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-32 h-fit"
          >
            <p className="mb-6 text-xs uppercase tracking-[0.4em] text-[#00FFD1]">
              — A Base
            </p>

            <h2 className="text-5xl font-black leading-[0.9] tracking-[-0.05em] md:text-7xl">
              Universidade
              <br />
              <span className="font-editorial font-normal italic text-white/40">
                de
              </span>{" "}
              Aveiro.
            </h2>

            <p className="mt-10 max-w-xl text-lg leading-relaxed text-gray-400">
              O DeCA não me deu apenas ferramentas. Deu-me uma linguagem
              transversal para pensar sistemas, experiências e interação humana.
            </p>
          </motion.div>

          {/* RIGHT */}
          <div className="space-y-8 pt-10 lg:pt-40">
            {[
              {
                title: "Arquiteturas Inteligentes",
                text: "Atualmente, foco-me em Inteligência Artificial, sistemas RAG e arquiteturas contextuais para escalar experiências interativas.",
              },
              {
                title: "Exploração & Fronteiras",
                text: "O objetivo já não é seguir tendências. É explorar limites tecnológicos e transformar investigação em experiências memoráveis.",
              },
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  filter: "blur(10px)",
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  filter: "blur(0px)",
                  y: 0,
                }}
                transition={{
                  duration: 0.8,
                  delay: i * 0.1,
                }}
                viewport={{ once: true }}
                whileHover={{
                  y: -6,
                }}
                className="
                  group
                  relative
                  overflow-hidden
                  rounded-[32px]
                  border
                  border-white/10
                  bg-gradient-to-b
                  from-white/[0.08]
                  to-white/[0.03]
                  p-10
                  backdrop-blur-2xl
                  transition-all
                  duration-500
                  hover:border-white/20
                  hover:bg-white/[0.08]
                  hover:shadow-[0_0_50px_rgba(255,255,255,0.04)]
                "
              >
                <div className="absolute inset-0 opacity-0 transition-opacity duration-700 group-hover:opacity-100 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.12),transparent_70%)]" />

                <h3 className="mb-6 text-xl font-bold uppercase tracking-[0.2em]">
                  {card.title}
                </h3>

                <p className="relative z-10 text-lg leading-relaxed text-gray-400">
                  {card.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* ========================= */}
      {/* FINAL SECTION */}
      {/* ========================= */}

      <section className="relative flex min-h-[90vh] w-full items-center justify-center overflow-hidden py-40">
        {/* BG */}
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[1200px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-r from-[#00FFD1]/20 via-white/[0.04] to-transparent blur-[140px]" />

        {/* WATERMARK */}
        <div className="pointer-events-none absolute text-[18vw] font-black tracking-[-0.08em] text-white/[0.03]">
          MCTW
        </div>

        <motion.div
          initial={{
            opacity: 0,
            filter: "blur(12px)",
            scale: 0.96,
          }}
          whileInView={{
            opacity: 1,
            filter: "blur(0px)",
            scale: 1,
          }}
          transition={{
            duration: 1.2,
          }}
          viewport={{ once: true }}
          className="relative z-10 max-w-5xl px-6 text-center"
        >
          <div className="mb-10 flex items-center justify-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#00FFD1] shadow-[0_0_20px_#00FFD1]" />

            <span className="text-[10px] uppercase tracking-[0.5em] text-gray-500">
              Future Locked
            </span>
          </div>

          <h2 className="text-4xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
            Mestrado em
            <br />
            Comunicação &
            <br />
            <span className="font-editorial font-normal italic text-white/40">
              Tecnologias Web
            </span>
          </h2>

          <p className="mx-auto mt-14 max-w-3xl text-xl font-light leading-relaxed text-gray-300">
            A constante evolução tecnológica exige domínio absoluto. O MCTW é o
            próximo passo para expandir as minhas arquiteturas interativas e
            elevar o impacto das experiências que desenvolvo.
          </p>

          <Link to="/">
            <motion.button
              whileHover={{
                scale: 1.04,
                y: -2,
              }}
              whileTap={{
                scale: 0.98,
              }}
              className="
                mt-16
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                px-8
                py-4
                text-sm
                uppercase
                tracking-[0.25em]
                backdrop-blur-xl
                transition-all
                duration-500
                hover:border-[#00FFD1]/30
                hover:bg-white/[0.08]
              "
            >
              Explorar Projetos
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </main>
  );
};

export default About;