import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.section
    id = "about"
    className="bg-slate-900 text-white py-24 px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >

      <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-8">
          About Me
        </h2>

        <p className="text-lg leading-8 text-gray-300">
          I am a Mechatronics Engineering undergraduate at the University
          of Zimbabwe with strong interests in robotics, automation,
          embedded systems and artificial intelligence. I enjoy developing
          intelligent systems and integrating sensors, control algorithms,
          and web interfaces to solve real-world problems in agriculture,
          manufacturing and education.
        </p>

      </div>

    </motion.section>
  )
}