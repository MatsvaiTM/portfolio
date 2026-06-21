import { motion } from "framer-motion";
import SkillBar from "./Skillbar";

export default function Skills() {
  return (
    <motion.section
    id = "skills"
    className="bg-slate-900 text-white py-24 px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Technical Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Programming */}
          <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Programming
            </h3>

            <ul className="space-y-3 text-gray-300">
              <SkillBar name="C/C++" level={80} />
              <SkillBar name="Python" level={80} />
              <SkillBar name="MATLAB" level={75} />
              <SkillBar name="Java" level={70} />
            </ul>
          </div>

          {/* Embedded */}
          <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Embedded Systems
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Arduino</li>
              <li>ESP32</li>
              <li>STM32</li>
              <li>Raspberry Pi</li>
            </ul>
          </div>

          {/* Software */}
          <div className="bg-slate-800/70 backdrop-blur-md border border-slate-700">
            <h3 className="text-2xl font-bold mb-6 text-blue-400">
              Engineering Software
            </h3>

            <ul className="space-y-3 text-gray-300">
              <li>Proteus</li>
              <li>SolidWorks</li>
              <li>MATLAB</li>
              <li>AutoCAD</li>
              <li>FluidSIM</li>
            </ul>
          </div>

        </div>

      </div>
    </motion.section>
  );
}