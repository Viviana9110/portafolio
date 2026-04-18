export default function Contact() {
  return (
    <section id="contact" className="py-24 text-center">
  <h2 className="text-4xl font-bold mb-4">
    ¿Tienes un proyecto en mente?
  </h2>

  <p className="text-gray-400 mb-8">
    Estoy disponible para colaborar o trabajar en nuevas oportunidades.
  </p>

  <div className="flex justify-center gap-4">
    <a
      href="mailto:v.londono.naranjo@gmail.com"
      className="px-8 py-3 bg-purple-600 rounded-full hover:bg-purple-500"
    >
      Enviar email
    </a>

    <a
      href="https://www.linkedin.com/in/vivianadeveloper/"
      className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10"
    >
      LinkedIn
    </a>
  </div>
</section>
  );
}