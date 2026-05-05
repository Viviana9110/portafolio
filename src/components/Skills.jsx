import { motion } from "framer-motion";

const skillGroups = [
  {
    category: "Frontend",
    skills: ["React", "JavaScript", "TypeScript", "HTML & CSS", "Tailwind CSS", "Framer Motion"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Express", "MySQL", "MongoDB", "REST APIs"],
  },
  {
    category: "Herramientas",
    skills: ["Git & GitHub", "Vite", "Figma", "Vercel", "Postman"],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6 max-w-6xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <span className="text-purple-400 text-sm font-medium tracking-widest uppercase">
          Stack técnico
        </span>
        <h2 className="text-4xl font-bold mt-3">Tecnologías que domino</h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-6">
        {skillGroups.map((group, i) => (
          <motion.div
            key={group.category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="p-6 bg-white/5 border border-white/10 rounded-2xl"
          >
            <h3 className="font-semibold text-purple-400 mb-5 text-sm uppercase tracking-widest">
              {group.category}
            </h3>
            <ul className="space-y-3">
              {group.skills.map((skill) => (
                <li key={skill} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-purple-400 rounded-full flex-shrink-0" />
                  {skill}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
