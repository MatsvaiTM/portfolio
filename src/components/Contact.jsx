import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.section
    id = "contact"
    className="bg-slate-900 text-white py-24 px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-4xl font-bold text-blue-500 mb-8">
          Contact
        </h2>

        <p className="text-xl text-gray-300">
          Tawanda M. Matsvai
        </p>

        <p className="text-gray-400 mt-3">
          📧 matsvaitawanda73@gmail.com
        </p>

        <p className="text-gray-400">
          📞 +263 786 241 244
        </p>

        <p className="text-gray-400">
          📍 Harare, Zimbabwe
        </p>

      </div>
    </motion.section>
  );
}