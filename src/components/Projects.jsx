import { motion } from "framer-motion";

const projects = {
  featured: {
    title: "E-commerce Green Cart",
    desc: "Tienda online con carrito de compras y experiencia optimizada",
    image: "/ecommerce.png", // agrega imagen en public/
    demo: "https://green-cart-eight-sigma.vercel.app/",
  },
  others: [
    {
      title: "Sistema de Facturación",
      desc: "App fullstack con gestión de clientes, productos y facturas",
      image: "/facturacion.png",
      demo: "https://frontend-facturacion-seven.vercel.app/",
    },
    {
      title: "App de Reservas",
      desc: "Sistema de reservas de viajes y hoteles",
      image: "/reservas.png",
      demo: "https://reservas-viajes-hoteles-front.vercel.app/",
    },
  ],
};

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        Proyectos
      </h2>

      {/* ⭐ PROYECTO DESTACADO */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        className="relative rounded-3xl overflow-hidden mb-10 group cursor-pointer"
      >
        <img
          src={projects.featured.image}
          alt=""
          className="w-full h-[400px] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

        {/* Contenido */}
        <div className="absolute bottom-6 left-6">
          <h3 className="text-3xl font-bold">
            {projects.featured.title}
          </h3>
          <p className="text-gray-300 mt-2">
            {projects.featured.desc}
          </p>

          <a
            href={projects.featured.demo}
            target="_blank"
            className="inline-block mt-4 text-purple-400"
          >
            Ver proyecto →
          </a>
        </div>
      </motion.div>

      {/* 🧩 PROYECTOS SECUNDARIOS */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.others.map((p, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.03 }}
            className="relative rounded-2xl overflow-hidden group cursor-pointer"
          >
            <img
              src={p.image}
              alt=""
              className="w-full h-[250px] object-cover"
            />

            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition" />

            <div className="absolute bottom-4 left-4">
              <h3 className="text-xl font-bold">{p.title}</h3>
              <p className="text-sm text-gray-300">{p.desc}</p>

              <a
                href={p.demo}
                target="_blank"
                className="text-purple-400 text-sm mt-2 inline-block"
              >
                Ver →
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}