import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Detecta scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Detecta hash al cambiar ruta
  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -70;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  // Cierra el menú
  const closeMenu = () => {
    setMenuOpen(false);
    setDropdownOpen(false);
  };

  const handleNavScroll = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    closeMenu();
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Cierra el menú al hacer clic fuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      // Si hacemos clic fuera del navbar, cerramos todo
      if (!event.target.closest('.modern-navbar')) {
        closeMenu();
      }
      // Si hacemos clic fuera del dropdown pero dentro del navbar, solo cerramos el dropdown
      else if (!event.target.closest('.nav-dropdown') && !event.target.closest('.mobile-dropdown')) {
        setDropdownOpen(false);
      }
    };
    
    const handleEscKey = (event) => {
      if (event.key === 'Escape') {
        closeMenu();
      }
    };
    
    document.addEventListener('click', handleClickOutside);
    document.addEventListener('keydown', handleEscKey);
    
    return () => {
      document.removeEventListener('click', handleClickOutside);
      document.removeEventListener('keydown', handleEscKey);
    };
  }, []);

  return (
    <>
      <nav className={`modern-navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          {/* Logo */}
          <Link
            className="nav-logo"
            to="/"
            onClick={() => handleNavScroll("top")}
          >
            <img src="/img/1.webp" alt="Logo" />
          </Link>

          {/* Menu Desktop */}
          <div className="nav-menu desktop-menu">
            <a
              className="nav-item"
              href="https://wa.me/543541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad:"
              target="_blank"
              rel="noreferrer"
            >
              <span>Contacto</span>
            </a>
            
            <button
              className="nav-item"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
              }}
            >
              <span>Home</span>
            </button>
            
            <button 
              className="nav-item" 
              onClick={() => handleNavScroll("servicios")}
            >
              <span>Servicios</span>
            </button>
            
            <button 
              className="nav-item" 
              onClick={() => handleNavScroll("ubicacion")}
            >
              <span>Ubicación</span>
            </button>
            
            <div className={`nav-dropdown ${dropdownOpen ? 'open' : ''}`}>
              <button 
                className="nav-item dropdown-trigger"
                onClick={toggleDropdown}
              >
                <span>Nuestras Instalaciones</span>
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className="dropdown-content">
                <Link 
                  className="dropdown-item" 
                  to="/monoambiente" 
                  onClick={closeMenu}
                >
                  Monoambiente
                </Link>
                <Link 
                  className="dropdown-item" 
                  to="/depto4-5" 
                  onClick={closeMenu}
                >
                  Departamento 4/5 personas
                </Link>
                <Link 
                  className="dropdown-item" 
                  to="/casa" 
                  onClick={closeMenu}
                >
                  Casa para 8 personas
                </Link>
              </div>
            </div>
          </div>

          {/* Hamburger Button */}
          <button 
            className={`hamburger ${menuOpen ? 'open' : ''}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`mobile-menu ${menuOpen ? 'open' : ''}`}>
          <div className="mobile-menu-content">
            <a
              className="mobile-nav-item"
              href="https://wa.me/543541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad:"
              target="_blank"
              rel="noreferrer"
              onClick={closeMenu}
            >
              Contacto
            </a>
            
            <button
              className="mobile-nav-item"
              onClick={() => {
                navigate("/");
                setTimeout(() => {
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }, 100);
                closeMenu();
              }}
            >
              Home
            </button>
            
            <button 
              className="mobile-nav-item" 
              onClick={() => handleNavScroll("servicios")}
            >
              Servicios
            </button>
            
            <button 
              className="mobile-nav-item" 
              onClick={() => handleNavScroll("ubicacion")}
            >
              Ubicación
            </button>
            
            <div className="mobile-dropdown">
              <button 
                className={`mobile-nav-item dropdown-trigger ${dropdownOpen ? 'open' : ''}`}
                onClick={toggleDropdown}
              >
                Nuestras Instalaciones
                <svg className="dropdown-icon" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
              
              <div className={`mobile-dropdown-content ${dropdownOpen ? 'open' : ''}`}>
                <Link 
                  className="mobile-dropdown-item" 
                  to="/monoambiente" 
                  onClick={closeMenu}
                >
                  Monoambiente
                </Link>
                <Link 
                  className="mobile-dropdown-item" 
                  to="/depto4-5" 
                  onClick={closeMenu}
                >
                  Departamento 4/5 personas
                </Link>
                <Link 
                  className="mobile-dropdown-item" 
                  to="/casa" 
                  onClick={closeMenu}
                >
                  Casa para 8 personas
                </Link>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <style jsx>{`
        .modern-navbar {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          z-index: 1000;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          backdrop-filter: blur(10px);
          -webkit-backdrop-filter: blur(10px);
          background: rgba(17, 24, 39, 0.8);
          border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }

        .modern-navbar.scrolled {
          background: rgba(17, 24, 39, 0.95);
          box-shadow: 0 4px 32px rgba(0, 0, 0, 0.3);
        }

        .nav-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 0 24px;
          height: 80px;
        }

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover {
          transform: scale(1.05);
        }

        .nav-logo img {
          width: 50px;
          height: 50px;
          border-radius: 12px;
          transition: all 0.3s ease;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .nav-logo:hover img {
          box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
          transform: rotate(5deg);
        }

        /* Desktop Menu */
        .desktop-menu {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-item {
          position: relative;
          padding: 12px 20px;
          color: #f9fafb;
          text-decoration: none;
          border: none;
          background: none;
          cursor: pointer;
          font-size: 15px;
          font-weight: 500;
          border-radius: 10px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          transform: translateY(-1px);
          color: #ffffff;
        }

        .nav-item span {
          position: relative;
        }

        .nav-item:hover span::after {
          content: '';
          position: absolute;
          bottom: -4px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, #3b82f6, #8b5cf6);
          border-radius: 1px;
          animation: slideIn 0.3s ease;
        }

        @keyframes slideIn {
          from { transform: scaleX(0); }
          to { transform: scaleX(1); }
        }

        /* Dropdown */
        .nav-dropdown {
          position: relative;
        }

        .dropdown-trigger {
          position: relative;
        }

        .dropdown-icon {
          width: 16px;
          height: 16px;
          transition: transform 0.3s ease;
        }

        .dropdown-trigger:hover .dropdown-icon,
        .nav-dropdown.open .dropdown-icon {
          transform: rotate(180deg);
        }

        .dropdown-content {
          position: absolute;
          top: calc(100% + 8px);
          left: 0;
          min-width: 250px;
          background: rgba(17, 24, 39, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          border-radius: 16px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
          opacity: 0;
          visibility: hidden;
          transform: translateY(-10px) scale(0.95);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          z-index: 1001;
          pointer-events: none;
        }

        .nav-dropdown.open .dropdown-content {
          opacity: 1;
          visibility: visible;
          transform: translateY(0) scale(1);
          pointer-events: auto;
        }

        .dropdown-item {
          display: block;
          padding: 16px 20px;
          color: #e5e7eb;
          text-decoration: none;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.3s ease;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .dropdown-item:first-child {
          border-top-left-radius: 16px;
          border-top-right-radius: 16px;
        }

        .dropdown-item:last-child {
          border-bottom-left-radius: 16px;
          border-bottom-right-radius: 16px;
          border-bottom: none;
        }

        .dropdown-item:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #ffffff;
          transform: translateX(8px);
        }

        /* Hamburger */
        .hamburger {
          display: none;
          flex-direction: column;
          justify-content: space-between;
          width: 28px;
          height: 20px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 0;
        }

        .hamburger span {
          display: block;
          height: 2px;
          width: 100%;
          background: #f9fafb;
          border-radius: 2px;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(6px, 6px);
        }

        .hamburger.open span:nth-child(2) {
          opacity: 0;
          transform: scale(0);
        }

        .hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(6px, -6px);
        }

        /* Mobile Menu */
        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(17, 24, 39, 0.98);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          transform: translateY(-100%);
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          max-height: calc(100vh - 80px);
          overflow-y: auto;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateY(0);
          opacity: 1;
          visibility: visible;
        }

        .mobile-menu-content {
          padding: 24px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }

        .mobile-nav-item {
          padding: 16px 20px;
          color: #e5e7eb;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          font-size: 16px;
          font-weight: 500;
          text-align: left;
          border-radius: 12px;
          transition: all 0.3s ease;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .mobile-nav-item:hover {
          background: rgba(255, 255, 255, 0.1);
          color: #ffffff;
          transform: translateX(8px);
        }

        .mobile-dropdown-content {
          max-height: 0;
          overflow: hidden;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          background: rgba(0, 0, 0, 0.2);
          border-radius: 12px;
          margin-top: 8px;
        }

        .mobile-dropdown-content.open {
          max-height: 300px;
          padding: 12px 0;
        }

        .mobile-dropdown-item {
          display: block;
          padding: 12px 32px;
          color: #d1d5db;
          text-decoration: none;
          font-size: 15px;
          transition: all 0.3s ease;
        }

        .mobile-dropdown-item:hover {
          background: rgba(59, 130, 246, 0.1);
          color: #ffffff;
        }

        /* Responsive */
        @media (max-width: 1024px) {
          .desktop-menu {
            display: none;
          }
          
          .hamburger {
            display: flex;
          }
        }

        @media (max-width: 768px) {
          .nav-container {
            padding: 0 16px;
            height: 70px;
          }
          
          .mobile-menu {
            top: 70px;
            max-height: calc(100vh - 70px);
          }
          
          .nav-logo img {
            width: 45px;
            height: 45px;
          }
        }

        @media (max-width: 480px) {
          .mobile-menu-content {
            padding: 16px;
          }
          
          .mobile-nav-item {
            font-size: 15px;
            padding: 14px 16px;
          }
        }
      `}</style>
    </>
  );
};

export default Navbar;    