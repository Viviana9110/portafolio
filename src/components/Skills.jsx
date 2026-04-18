const skills = ["HTML", "CSS", "JavaScript", "ReactJS", "TailwindCSS", "Node.js", "Express", "MySQL", "MongoDB"];

export default function Skills() {
  return (
    <section className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Tecnologías</h2>

      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-4 py-2 bg-white/10 border border-white/10 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}