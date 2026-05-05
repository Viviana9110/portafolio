import { motion } from "framer-motion";

const stats = [
  { value: "3+", label: "Años de experiencia" },
  { value: "10+", label: "Proyectos entregados" },
  { value: "100%", label: "Proyectos a tiempo" },
];

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center px-6 pt-20"
    >
      <motion.div
        initial={{ opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-8 inline-flex items-center gap-2 px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm"
      >
        <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
        Disponible para proyectos freelance
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.1 }}
        className="text-5xl md:text-7xl font-extrabold leading-[1.1] tracking-tight max-w-4xl"
      >
        Desarrollo web que{" "}
        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-blue-400 text-transparent bg-clip-text">
          convierte visitantes
        </span>{" "}
        en clientes
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="mt-6 text-lg text-gray-400 max-w-xl leading-relaxed"
      >
        Construyo aplicaciones React modernas, rápidas y escalables para que
        tu negocio crezca online — desde una landing hasta un sistema completo.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-10 flex flex-wrap gap-4 justify-center"
      >
        <a
          href="#projects"
          className="px-8 py-3.5 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition-colors glow"
        >
          Ver mis proyectos
        </a>
        <a
          href="#contact"
          className="px-8 py-3.5 border border-white/20 hover:bg-white/10 rounded-full font-medium transition-colors"
        >
          Hablemos →
        </a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        className="mt-16 flex gap-10 md:gap-16 text-center border-t border-white/10 pt-10"
      >
        {stats.map((s) => (
          <div key={s.label}>
            <p className="text-3xl font-bold text-white">{s.value}</p>
            <p className="text-sm text-gray-500 mt-1">{s.label}</p>
          </div>
        ))}
      </motion.div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        className="mt-14 text-gray-600"
      >
        <svg width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path strokeLinecap="round" d="M19 9l-7 7-7-7" />
        </svg>
      </motion.div>
    </section>
  );
}
