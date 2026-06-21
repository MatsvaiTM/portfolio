import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { TypeAnimation } from "react-type-animation";
import profile from "/src/components/profile.jpg";


export default function Hero() {
  return (
    <div className="min-h-screen bg-slate-950 text-white flex flex-col justify-center items-center px-6">

      <img
        src={profile}
        alt="Tawanda Matsvai"
        className="w-48 h-48 rounded-full object-cover border-4 border-blue-500 shadow-lg"
      />

      <h1 className="text-5xl md:text-7xl font-bold mt-8 text-center">
        Tawanda M. Matsvai
      </h1>

      <TypeAnimation
        sequence={[
          "Mechatronics Engineer",
          2000,
          "Robotics Enthusiast",
          2000,
          "Embedded Systems Developer",
          2000,
          "AI and Automation Enthusiast",
          2000
        ]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
        className="text-xl text-gray-400 mt-6 text-center"
      />

<div className="flex gap-4 mt-8">

<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="#projects"
  className="bg-blue-600 px-6 py-3 rounded-xl hover:bg-blue-700"
>
  View Projects
</motion.a>

<motion.a
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  href="#contact"
  className="border border-blue-600 px-6 py-3 rounded-xl hover:bg-blue-600"
>
  Contact Me
</motion.a>

</div>

      <div className="flex gap-8 mt-10 text-3xl">
        <a
          href="https://linkedin.com/in/tawanda-matsvai-52211a1a9"
          target="_blank"
          className="hover:text-blue-400"
        >
          <FaLinkedin />
        </a>

        <a
          href="mailto:matsvaitawanda73@gmail.com"
          className="hover:text-blue-400"
        >
          <FaEnvelope />
        </a>

        <a
          href="https://github.com/MatsvaiTM"
          className="hover:text-blue-400"
        >
          <FaGithub />
        </a>
      </div>

    </div>
  );
}