import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

  // Cierra menú hamburguesa
  const closeNavbar = () => {
    const menu = document.getElementById("navbarNav");
    const bsCollapse = window.bootstrap.Collapse.getInstance(menu);
    if (bsCollapse) bsCollapse.hide();
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
    closeNavbar(); // Cierra el menú en todos los casos
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled || menuOpen ? "navbar-dark bg-dark shadow" : "navbar-dark bg-transparent"
      }`}
    >
      <div className="container-fluid px-4">
        {/* Logo */}
        <Link
          className="navbar-brand logo nav-link me-3"
          to="/"
          onClick={() => handleNavScroll("top")}
        >
          <img src="/img/1.webp" alt="Logo" width="60" height="60" />
        </Link>

        {/* Botón hamburguesa */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menú */}
        <div className="collapse navbar-collapse justify-content-start" id="navbarNav">
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://wa.me/543541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad:"
                target="_blank"
                rel="noreferrer"
                onClick={closeNavbar}
              >
                Contacto
              </a>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => {
                  navigate("/");
                  setTimeout(() => {
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }, 100);
                  closeNavbar();
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavScroll("servicios")}>
                Servicios
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link btn btn-link" onClick={() => handleNavScroll("ubicacion")}>
                Ubicación
              </button>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
              >
                Nuestras Instalaciones
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item" to="/monoambiente" onClick={closeNavbar}>
                    Monoambiente
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/depto4-5" onClick={closeNavbar}>
                    Departamento 4/5 personas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/casa" onClick={closeNavbar}>
                    Casa para 8 personas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Estilos */}
      <style>{`
        .navbar-brand.logo img {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        @media (min-width: 768px) {
          .navbar-brand.logo:hover img {
            transform: rotate(10deg) scale(1.1);
            filter: brightness(1.2);
          }
        }

        .btn-link {
          border: none;
          background: none;
          padding: 0;
          font-size: 1rem;
          text-decoration: none;
          color: inherit;
        }

        .btn-link:hover {
          color: #aaa;
        }

        .nav-link,
        .navbar-brand,
        .dropdown-toggle {
          padding-top: 0.75rem;
          padding-bottom: 0.75rem;
          display: flex;
          align-items: center;
          font-size: 1rem;
        }

        .navbar-toggler {
          border: none;
        }

        .navbar-toggler-icon {
          filter: brightness(0.8);
        }

        .nav-item {
          margin: 0 8px;
        }

        @media (max-width: 1000px) {
          .navbar-expand-lg .navbar-collapse {
            display: none !important;
          }

          .navbar-expand-lg .navbar-collapse.show {
            display: flex !important;
            flex-direction: column;
            align-items: flex-start;
            width: 100%;
          }

          .navbar-nav {
            width: 100%;
          }

          .navbar-nav .nav-item {
            width: 100%;
          }

          .navbar-nav .nav-link {
            width: 100%;
            text-align: left;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navbar;
