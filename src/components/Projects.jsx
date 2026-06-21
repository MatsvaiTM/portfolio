import { motion } from "framer-motion";

export default function Projects() {
  const projects = [
    {
      title: "🌱 Autonomous Seed Sprayer Rover",
      image: "/src/components/rover.jpg",
      technologies: [
        "ESP32",
        "GPS",
        "PID Control",
        "Sensor Integration",
        "Obstacle Avoidance",
      ],
      description:
        "Autonomous agricultural rover with GPS waypoint navigation, telemetry acquisition, Web UI communication and obstacle avoidance.",
      achievements: [
        "Successful rover control and telemetry acquisition",
        "Functional Web UI communication",
        "Basic GPS waypoint heading achieved",
      ],
    },
    {
      title: "♻️ Automated Dam Cleaner",
      image: "/src/components/dam-cleaner.jpg",
      technologies: [
        "Embedded Systems",
        "Sensors",
        "Actuators",
        "Automation",
      ],
      description:
        "Autonomous waste collection prototype with sensor-based activation and intelligent power management.",
      achievements: [
        "Successfully detected and collected waste",
        "Implemented energy-saving activation",
        "Added bin-full alert functionality",
      ],
    },
  ];

  return (
    <motion.section
      id="projects"
      className="bg-slate-950 text-white py-24 px-8"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="max-w-7xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-10">

          {projects.map((project, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -10 }}
              transition={{ duration: 0.3 }}
              className="
                bg-slate-900/70
                backdrop-blur-md
                rounded-3xl
                overflow-hidden
                border border-slate-700
                shadow-xl
                hover:border-blue-500
                duration-300
              "
            >
              {/* Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-56 object-cover"
              />

              <div className="p-8">

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-300 leading-7 mb-6">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="
                        bg-blue-900/40
                        text-blue-300
                        px-4
                        py-2
                        rounded-full
                        text-sm
                      "
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Achievements */}
                <div>
                  <h4 className="text-lg font-semibold text-blue-400 mb-3">
                    Key Achievements
                  </h4>

                  <ul className="space-y-2 text-gray-300">
                    {project.achievements.map((achievement, i) => (
                      <li key={i}>
                        ✓ {achievement}
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </motion.section>
  );
}