import {
  VerticalTimeline,
  VerticalTimelineElement
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

export default function ExperienceTimeline() {
  return (
       <motion.section
    id = "experience"
    className="bg-slate-900 text-white py-24 px-8"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 1.2 }}
    viewport={{ once: true }}
    >
         <div className="max-w-5xl mx-auto">

        <h2 className="text-4xl font-bold text-blue-500 mb-12">
          Experience Timeline
        </h2>
    <VerticalTimeline>

      <VerticalTimelineElement
      date="2024 – Present"
      iconStyle={{ background: "#2563eb", color: "#fff" }}
      >
      <h3 className="vertical-timeline-element-title text-white text-xl font-bold">
      Independent Tutor
      </h3>

  <h4 className="text-gray-400">
    Mainly Pure Science O-Level subjects
  </h4>

  <p className="text-gray-300 mt-2">
    Maths, Physics, Computer Science, Combined Science
  </p>
</VerticalTimelineElement>

      <VerticalTimelineElement
  date="2025"
  iconStyle={{ background: "#2563eb", color: "#fff" }}
>
                <h2 className="text-white-400 text-xl font-bold">
                University of Zimbabwe
                </h2>
          <h3 className="vertical-timeline-element-title text-white text-xl font-bold">
            Dam cleaner project
          </h3>

          <h4 className="text-gray-400">
            Lead programmer
          </h4>

  <p className="text-gray-300 mt-2">
    State Machine system development, Sensor integration, Automated operation for reduced power consumption
  </p>
</VerticalTimelineElement>

      <VerticalTimelineElement
  date="2022 – Present"
  iconStyle={{ background: "#2563eb", color: "#fff" }}
>
         <h2 className="text-white-400 text-xl font-bold">
    University of Zimbabwe
  </h2>
  <h3 className="vertical-timeline-element-title text-white text-xl font-bold">
    Automated Seed Sprayer Rover
  </h3>

  <h4 className="text-gray-400">
    Project Manager
  </h4>

  <p className="text-gray-300 mt-2">
    Coordinated software development, telemetry acquisition and system integration.
  </p>
</VerticalTimelineElement>

    </VerticalTimeline>
    </div>
    </motion.section>
  );
}