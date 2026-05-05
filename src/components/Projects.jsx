import { motion } from "framer-motion";

const projects = {
  featured: {
    title: "Green Cart — E-commerce",
    desc: "Tienda online completa con catálogo de productos, carrito de compras, gestión de pedidos y experiencia de usuario optimizada para móvil y desktop.",
    tech: ["React", "Node.js", "MongoDB", "Tailwind CSS"],
    image: "/ecommerce.png",
    demo: "https://green-cart-eight-sigma.vercel.app/",
    gradient: "from-green-900/80 to-emerald-800/60",
  },
  others: [
    {
      title: "Sistema de Facturación",
      desc: "Aplicación fullstack con gestión de clientes, productos, facturas y reportes. Panel de administración completo.",
      tech: ["React", "Express", "MySQL"],
      image: "/facturacion.png",
      demo: "https://frontend-facturacion-seven.vercel.app/",
      gradient: "from-blue-900/80 to-indigo-800/60",
    },
    {
      title: "App de Reservas",
      desc: "Sistema de reservas para viajes y hoteles con búsqueda en tiempo real, disponibilidad y confirmaciones.",
      tech: ["React", "Node.js", "MongoDB"],
      image: "/reservas.png",
      demo: "https://reservas-viajes-hoteles-front.vercel.app/",
      gradient: "from-purple-900/80 to-violet-800/60",
    },
  ],
};

function ProjectImage({ src, alt, gradient, className }) {
  return (
    <div
      className={`${className} relative bg-gradient-to-br ${gradient}`}
      style={{ overflow: "hidden" }}
    >
      <img
        src={src}
        alt={alt}
        className="w-full h-full object-cover"
        onError={(e) => {
          e.currentTarget.style.display = "none";
        }}
      />
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Trabajo reciente
        </span>
        <h2 className="text-4xl font-bold mt-3">Proyectos destacados</h2>
        <p className="text-gray-400 mt-4 max-w-xl mx-auto">
          Aplicaciones reales construidas con foco en rendimiento, usabilidad y resultados.
        </p>
      </motion.div>

      {/* Featured project */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative rounded-3xl overflow-hidden mb-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
      >
        <ProjectImage
          src={projects.featured.image}
          alt={projects.featured.title}
          gradient={projects.featured.gradient}
          className="h-[420px]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/30 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="flex flex-wrap gap-2 mb-3">
            {projects.featured.tech.map((t) => (
              <span
                key={t}
                className="px-2.5 py-1 text-xs bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-gray-300"
              >
                {t}
              </span>
            ))}
          </div>
          <h3 className="text-2xl md:text-3xl font-bold mb-2">
            {projects.featured.title}
          </h3>
          <p className="text-gray-300 text-sm max-w-lg mb-5">
            {projects.featured.desc}
          </p>
          <a
            href={projects.featured.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-purple-600 hover:bg-purple-500 rounded-full text-sm font-medium transition-colors"
          >
            Ver demo →
          </a>
        </div>
      </motion.div>

      {/* Other projects */}
      <div className="grid md:grid-cols-2 gap-6">
        {projects.others.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative rounded-2xl overflow-hidden border border-white/10 hover:border-purple-500/30 transition-all duration-300 cursor-pointer"
          >
            <ProjectImage
              src={p.image}
              alt={p.title}
              gradient={p.gradient}
              className="h-[260px]"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 right-0 p-6">
              <div className="flex flex-wrap gap-1.5 mb-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs bg-black/60 backdrop-blur-sm border border-white/20 rounded-full text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="text-xl font-bold mb-1">{p.title}</h3>
              <p className="text-gray-400 text-sm mb-3 leading-relaxed">{p.desc}</p>
              <a
                href={p.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="text-purple-400 hover:text-purple-300 text-sm font-medium transition-colors"
              >
                Ver demo →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
