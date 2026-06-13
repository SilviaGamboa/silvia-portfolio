import { useState, useEffect } from 'react';

function Navbar() {
  const [theme, setTheme] = useState(() => {
    return localStorage.getItem('theme') || 'light';
  });
  
  // Estado para controlar el menú móvil
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
  };

  // Cierra el menú automáticamente al hacer clic en un enlace
  const closeMenu = () => setIsOpen(false);

  return (
    <nav>
      <div className="logo">
        <a href="#hero" onClick={closeMenu}>
          Silvia Gamboa
        </a>      
      </div>

      {/* Renderizado condicional de la clase 'open' según el estado */}
      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#projects" onClick={closeMenu}>Proyectos</a>
        <a href="#skills" onClick={closeMenu}>Skills</a>
        <a href="#about" onClick={closeMenu}>Sobre mí</a>
        <a href="#contact" onClick={closeMenu}>Contacto</a>
      </div>

      <div className="nav-actions">
        <button 
          className="theme-toggle" 
          onClick={toggleTheme}
          aria-label="Cambiar tema"
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>

        {/* Botón Hamburguesa que cambia de forma al abrirse */}
        <button 
          className={`menu-toggle ${isOpen ? 'active' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Abrir menú"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>
      </div>
    </nav>
  );
}

export default Navbar;