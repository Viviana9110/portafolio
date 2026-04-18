export default function Navbar() {
  return (
    <div className="fixed top-4 w-full flex justify-center z-50">
      <nav className="backdrop-blur-lg bg-white/10 border border-white/10 px-6 py-3 rounded-full">
        <ul className="flex gap-6 text-sm">
          <li><a href="#home">Inicio</a></li>
          <li><a href="#about">Sobre mí</a></li>
          <li><a href="#projects">Proyectos</a></li>
          <li><a href="#contact">Contacto</a></li>
        </ul>
      </nav>
    </div>
  );
}