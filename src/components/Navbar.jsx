import { useState, useEffect } from 'react';

function Navbar() {
  // 1. Inicializamos el estado del tema leyendo de localStorage (o 'light' por defecto)
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });

  // 2. Cada vez que el "theme" cambie, actualizamos el HTML y el localStorage
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // 3. Función para alternar entre temas
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  return (
    <nav>
      <div className="logo">
  <a href="#hero" className="logo">
  Silvia Gamboa
</a>       
      </div>

      <div className="nav-links">
        <a href="#projects">Proyectos</a>
        <a href="#skills">Skills</a>
        <a href="#about">Sobre mí</a>
        <a href="#contact">Contacto</a>
        
        
      </div>
      <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
    </nav>
  );
}

export default Navbar;