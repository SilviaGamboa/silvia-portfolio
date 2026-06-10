import { motion } from "framer-motion";

function About() {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">
  
  SOBRE MÍ
</h2>

      <div className="card">
        <p>
          Soy estudiante de Informática Empresarial con enfoque en desarrollo Fullstack, con experiencia en la construcción de 
aplicaciones web utilizando .NET, Angular y SQL Server. Interesada en desarrollar soluciones eficientes y en continuar 
fortaleciendo mis habilidades en entornos de trabajo colaborativos.
        </p>

        <br />

        <p>
          He trabajado con React, Angular, ASP.NET Core, PHP y SQL Server en proyectos académicos y personales.
        </p>
      </div>
    </motion.section>
  );
}

export default About;