import { motion } from "framer-motion";
import proyectoAbejas from "../assets/proyectoAbejas.png";
import rickMorty from "../assets/rick-morty.png";
import hotelMareaAzul from "../assets/hotelMareaAzul.png";
function Projects() {
  const projects = [
    {
      title: "Proyecto Meliponario – Sede del Atlántico (TC-627) ",
      image: proyectoAbejas,
      description: "Proyecto academico-educativo con informacion sobre las abejas meliponas que hay en la sede del atlantico, con el fin de crear conciencia sobre su importancia y fomentar su conservación.",
      tags: ["PHP", "JavaScript", "🟢 En Proceso"],
      github: "https://github.com/yoselinporras/TCUAbejas.git", // Cambia por tus repos reales
      demo: "https://abejasmeliponas.fwh.is/" // Enlace opcional
    },
    {
      title: "Sistema Hotelero",
      image: hotelMareaAzul,
      description: "Sistema automatizado para el control de reservas, huéspedes y facturación centralizada.",
      tags: ["Angular", ".NET", "SQL Server", "Docker", "🟢 En Proceso"],
      github: "https://github.com/Vic2002UCR/MareaAzulFrontendAdmin.git",
      // Sin propiedad 'demo' para demostrar que es opcional
    },
    {
      title: "Rick and Morty",
      image: rickMorty,
      description: "Consumo de la API de Rick and Morty para mostrar personajes, el episodio en el que aparecen y su especie.",
      tags: ["Angular", "JavaScript", "Bootstrap", "🔴 Finalizado"],
      github: "https://github.com/SilviaGamboa/paginaRickandMorty.git",
      demo: "https://silviagamboa.github.io/paginaRickandMorty/"
    }
  ];

  // Configuración de animación para que las tarjetas entren una tras otra de forma fluida
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.8, 0.25, 1] } }
  };

  return (
    <section id="projects">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, x: -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        PROYECTOS DESTACADOS
      </motion.h2>

      {/* Grid animada por Framer Motion */}
      <motion.div 
        className="projects-grid"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {projects.map((project) => (
          <motion.div 
            className="project-card" 
            key={project.title}
            variants={cardVariants}
          >
            <div className="img-container">
              <img src={project.image} alt={project.title} />
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              
              {/* Tags del Stack Tecnológico */}
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="tag-badge">{tag}</span>
                ))}
              </div>

              {/* Enlaces a Git y Demo */}
              <div className="project-links">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="proj-link git"
                >
                  GitHub
                </a>
                
                {/* RENDER CONDICIONAL: Solo aparece si 'project.demo' existe */}
                {project.demo && (
                  <a 
                    href={project.demo} 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="proj-link live"
                  >
                    Ver
                  </a>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;