import { motion } from "framer-motion";
import cv from "/SilviaGamboaMadrigalCV.pdf"; // Asegúrate de que el PDF esté en esta ruta
function Hero() {
  return (
    <motion.section
      className="hero"
      id="hero"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <h1>
        Silvia
        <span className="gradient"> Gamboa </span>
      </h1>

      <p>
        Estudiante de Informática Empresarial apasionada por el
        desarrollo de software, bases de datos y aplicaciones modernas.
      </p>

      <div className="hero-buttons">
        <a href="#projects" className="btn primary">
          Ver proyectos
        </a>

        <a
  href={cv}
  target="_blank"
  rel="noopener noreferrer"
  className="btn secondary"
>
  Ver CV
</a>
      </div>
    </motion.section>
  );
}

export default Hero;