import { motion } from "framer-motion";

// Importaciones de FontAwesome (100% estables)
import {
  FaReact,
  FaAngular,
  FaGitAlt,
  FaGithub,
  FaHtml5,
  FaCss3Alt,
  FaDatabase,
  FaPhp,
  FaBoxes,
  FaProjectDiagram,
  FaJava,
  FaNodeJs,
  FaCode // <-- Reemplazo excelente y universal para C# (Código)
} from "react-icons/fa";

// Importaciones de SimpleIcons (Solo las que ya probamos que sí funcionan)
import {
  SiDotnet,
  SiFlutter,
  SiJavascript,
  SiTypescript,
  SiMongodb
} from "react-icons/si";

function Skills() {
  const skills = [
    // --- FRONTEND & MOBILE ---
    { icon: <FaReact />, name: "React" },
    { icon: <FaAngular />, name: "Angular" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiFlutter />, name: "Flutter" },
    
    // --- BACKEND & DATABASES ---
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiDotnet />, name: "ASP.NET Core" },
    { icon: <FaCode />, name: "C#" }, // <-- Solución definitiva sin errores de módulo
    { icon: <FaJava />, name: "Java" },
    { icon: <FaPhp />, name: "PHP" },
    { icon: <FaDatabase />, name: "SQL Server" },
    { icon: <SiMongodb />, name: "MongoDB" },
    
    // --- ARQUITECTURA Y DISEÑO ---
    { icon: <FaProjectDiagram />, name: "Clean Architecture" },
    { icon: <FaBoxes />, name: "DDD (Domain-Driven Design)" },
    
    // --- HERRAMIENTAS & MAQUETACIÓN ---
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <FaGithub />, name: "GitHub" },
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.4, ease: "easeOut" } 
    }
  };

  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="section-title">
        STACK TECNOLÓGICO
      </h2>

      <motion.div 
        className="skills-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {skills.map((skill) => (
          <motion.div 
            className="skill-card" 
            key={skill.name}
            variants={itemVariants}
          >
            <div className="skill-icon">
              {skill.icon}
            </div>
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

export default Skills;