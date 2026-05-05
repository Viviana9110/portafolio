import { motion } from "framer-motion";

const services = [
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M9 17.25v1.007a3 3 0 01-.879 2.122L7.5 21h9l-.621-.621A3 3 0 0115 18.257V17.25m6-12V15a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 15V5.25m18 0A2.25 2.25 0 0018.75 3H5.25A2.25 2.25 0 003 5.25m18 0H3" />
      </svg>
    ),
    title: "Sitio web corporativo",
    desc: "Landing pages y sitios de presentación que transmiten profesionalismo y convierten visitas en contactos reales.",
    tags: ["React", "Tailwind", "SEO"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z" />
      </svg>
    ),
    title: "Aplicación web a medida",
    desc: "Desarrollo fullstack con React + Node.js para CRMs, dashboards, sistemas de gestión y cualquier flujo de negocio.",
    tags: ["React", "Node.js", "MySQL / MongoDB"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
      </svg>
    ),
    title: "Tienda online (E-commerce)",
    desc: "E-commerce completo con carrito, catálogo de productos, pasarela de pagos y panel de administración listo para vender.",
    tags: ["React", "Node.js", "Pasarela de pago"],
  },
  {
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24">
        <path strokeLinecap="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
      </svg>
    ),
    title: "Mejora de proyecto existente",
    desc: "Optimizo, refactorizo y escalo tu aplicación actual. Mejor rendimiento, menos bugs, código limpio y mantenible.",
    tags: ["Auditoría", "Refactor", "Performance"],
  },
];

export default function Services() {
  return (
    <section id="services" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Qué ofrezco
        </span>
        <h2 className="text-4xl font-bold mt-3">Servicios de desarrollo web</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Soluciones digitales adaptadas a lo que tu negocio necesita — sin
          plantillas genéricas ni código de baja calidad.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-6 bg-white/5 border border-white/10 rounded-2xl hover:border-purple-500/40 hover:bg-white/[0.07] transition-all duration-300"
          >
            <div className="text-purple-400 mb-4">{s.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">{s.desc}</p>
            <div className="flex flex-wrap gap-2">
              {s.tags.map((t) => (
                <span
                  key={t}
                  className="px-2.5 py-1 text-xs bg-purple-500/10 text-purple-400 border border-purple-500/20 rounded-full"
                >
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-12">
        <a
          href="#contact"
          className="inline-block px-8 py-3.5 bg-purple-600 hover:bg-purple-500 rounded-full font-medium transition-colors"
        >
          Solicitar cotización
        </a>
      </div>
    </section>
  );
}
