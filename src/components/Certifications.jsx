import { motion } from "framer-motion";
import delf from "/src/components/certificates/delf-a1.pdf";
import olev from "/src/components/certificates/o-level.pdf";
import alev from "/src/components/certificates/a-level.pdf";

export default function Certificates() {
  const qualifications = [
    {
      title: "DELF A1 French Language Certification",
      institution: "Alliance Française",
      year: "2020",
      icon: "🇫🇷",
      file: delf,
    },
    {
      title: "ZIMSEC O-Level Certificate",
      institution: "ZRP High School",
      year: "2020",
      icon: "🎓",
      file: olev,
    },
    {
      title: "ZIMSEC A-Level Certificate",
      institution: "ZRP High School",
      year: "2022",
      icon: "🎓",
      file: alev,
    },
    {
      title: "First Aid Certificate",
      institution: "Red Cross",
      year: "2023",
      icon: "🏥",
      file: "",
    },
    {
      title: "BSc Mechatronics Engineering",
      institution: "University of Zimbabwe",
      year: "2022 – Present",
      icon: "⚙️",
      file: "",
    },
  ];
   
  return (
    <motion.section
      id="education"
      className="bg-slate-900 text-white py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Education & Academic Qualifications
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {qualifications.map((qualification, index) => (
            <motion.div
              key={index}
              className="
                bg-slate-950/70
                backdrop-blur-md
                p-8
                rounded-3xl
                border border-blue-500/20
                shadow-lg
              "
              whileHover={{ scale: 1.03 }}
            >
              <div className="text-5xl mb-4">
                {qualification.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {qualification.title}
              </h3>

              <p className="text-gray-400 mt-2 mb-6">
                {qualification.institution} • {qualification.year}
              </p>

              {qualification.file ? (
                <a
                  href={qualification.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    inline-flex items-center
                    bg-blue-600
                    px-5 py-2
                    rounded-xl
                    hover:bg-blue-700
                    transition
                  "
                >
                  View Certificate
                </a>
              ) : (
                <span className="text-gray-500 italic">
                  In progress
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}