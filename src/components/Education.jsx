import { motion } from "framer-motion";

export default function Education() {
  return (
    <motion.section
    id = "education"
    className="bg-slate-950 text-white py-24 px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Education
        </h2>

        <div className="bg-slate-900 p-8 rounded-2xl shadow-lg">

          <h3 className="text-2xl font-bold">
            University of Zimbabwe
          </h3>

          <p className="text-gray-400 mt-2">
            BSc Honours Degree in Mechatronics Engineering
          </p>

          <p className="text-gray-400">
            2022 – Present | Expected Graduation: 2027
          </p>

        </div>

      </div>
    </motion.section>
  );
}