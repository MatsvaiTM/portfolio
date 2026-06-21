import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => {
    setTimeout(() => {
    setOpen(false);
    }, 1400);};
  return (
    <nav className="bg-slate-900/43 backdrop-blur-md text-white sticky top-0 z-50 shadow-lg border-b border-blue-500/20">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

        <h1 className="text-xl font-bold text-blue-500">
          TM
        </h1>

        {/* Desktop menu */}
        <ul className="hidden md:flex gap-8">
          <li><Link
           to="about"
           smooth={true}
           duration={500}
           spy={true}
           activeClass="text-blue-500"
           onClick={closeMenu}
          >About
          </Link></li>
          <li><Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Projects</Link></li>
          <li><Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Skills
          </Link></li>
          <li><Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Contact details
          </Link></li>
        </ul>

        {/* Mobile button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      <AnimatePresence>
  {open && (
    <motion.div
      className="md:hidden mt-4 bg-slate-800 px-6 pb-6 overflow-hidden"
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: 1, height: "auto" }}
      exit={{ opacity: 0, height: 0 }}
      transition={{
                  duration: 0.4,
                  ease: "easeInOut"}} >
      <motion.ul
        className="space-y-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
>
           <li><Link
           to="about"
           smooth={true}
           duration={500}
           spy={true}
           offset={-60}
           activeClass="text-blue-500"
           onClick={closeMenu}
          >About
          </Link></li>
          <li><Link
          to="projects"
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Projects</Link></li>
          <li><Link
          to="skills"
          smooth={true}
          duration={500}
          spy={true}
          offset={-60}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Skills
          </Link></li>
          <li><Link
          to="contact"
          smooth={true}
          duration={500}
          spy={true}
          activeClass="text-blue-500"
          onClick={closeMenu}
          >Contact details
          </Link></li>
        </motion.ul>
        </motion.div>
  )}
</AnimatePresence>
    </nav>
  );
}