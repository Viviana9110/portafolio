import { motion } from "framer-motion";

const highlights = [
  {
    icon: "⚡",
    title: "Entregas rápidas",
    desc: "Trabajo con metodologías ágiles para entregar resultados en tiempo récord sin sacrificar calidad.",
  },
  {
    icon: "🎯",
    title: "Orientada a resultados",
    desc: "Cada línea de código tiene un propósito: que tu producto funcione y tus usuarios conviertan.",
  },
  {
    icon: "🤝",
    title: "Comunicación clara",
    desc: "Actualizaciones constantes, sin tecnicismos innecesarios. Siempre sabrás en qué etapa estamos.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 px-6 max-w-6xl mx-auto">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
            Sobre mí
          </span>
          <h2 className="text-4xl font-bold mt-3 mb-6 leading-tight">
            Soy Viviana, tu próxima{" "}
            <span className="text-purple-400">desarrolladora de confianza</span>
          </h2>
          <p className="text-gray-400 leading-relaxed mb-4">
            Soy desarrolladora frontend especializada en React con más de 3 años
            construyendo productos digitales para negocios reales. Me apasiona el
            detalle: desde la arquitectura del código hasta la última animación.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Trabajo con clientes de Latinoamérica y España que necesitan más que
            código — necesitan un socio técnico que entienda su negocio y
            convierta sus ideas en herramientas que realmente funcionen.
          </p>
          <a
            href="#contact"
            className="inline-block mt-8 text-purple-400 hover:text-purple-300 font-medium transition-colors"
          >
            Conversemos sobre tu proyecto →
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col gap-5"
        >
          {highlights.map((h) => (
            <div
              key={h.title}
              className="flex gap-4 p-5 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/30 transition-colors"
            >
              <span className="text-2xl mt-0.5 flex-shrink-0">{h.icon}</span>
              <div>
                <h3 className="font-semibold mb-1">{h.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{h.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
