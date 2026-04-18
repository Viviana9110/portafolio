import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center text-center px-6">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-5xl md:text-7xl font-bold leading-tight"
      >
        Hola, soy{" "}
        <span className="bg-gradient-to-r from-purple-400 to-blue-500 text-transparent bg-clip-text">
          Viviana
        </span>
      </motion.h1>

      <p className="mt-4 text-gray-400 max-w-xl">
        Ayudo a negocios y emprendimientos a transformar ideas en productos digitales 
  modernos, funcionales y centrados en el usuario.
      </p>

      <a
        href="#projects"
        className="mt-8 px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-500 glow"
      >
        Ver proyectos
      </a>
    </section>
  );
}