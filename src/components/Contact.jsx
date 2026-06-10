import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function Contact() {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
  
  CONTACTO
</h2>
      <div className="contact-card">

        <p>
          silgamboam@gmail.com
        </p>

        <div className="contact-icons">

  <a
    href="https://github.com/SilviaGamboa"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.linkedin.com/in/silvia-gamboa-71118227b"
    target="_blank"
    rel="noopener noreferrer"
  >
    <FaLinkedin />
  </a>

</div>
      </div>
    </motion.section>
  );
}

export default Contact;