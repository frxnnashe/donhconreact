import React, { useEffect, useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const hash = location.hash;
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => {
          const yOffset = -70;
          const y =
            el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }, 200);
      }
    }
  }, [location]);

  const handleNavScroll = (id) => {
    if (id === "top") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    if (location.pathname !== "/") {
      navigate(`/#${id}`);
    } else {
      const el = document.getElementById(id);
      if (el) {
        const yOffset = -90;
        const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`navbar navbar-expand-lg fixed-top ${
        scrolled ? "navbar-dark bg-dark shadow" : "navbar-dark bg-transparent"
      }`}
    >
      <div className="container-fluid px-4">
        {/* Logo con animación y link al inicio */}
        <Link
          className="navbar-brand logo nav-link"
          to="/"
          onClick={() => handleNavScroll("top")}
        >
          <img src="/img/1.png" alt="Logo" width="60" height="60" />
        </Link>

        {/* Links del menú */}
        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav align-items-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://wa.me/543541215080?text=Hola%20Buenas!%20Quiero%20reservar%20la%20unidad:"
                target="_blank"
                rel="noreferrer"
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
                }}
              >
                Home
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavScroll("servicios")}
              >
                Servicios
              </button>
            </li>
            <li className="nav-item">
              <button
                className="nav-link btn btn-link"
                onClick={() => handleNavScroll("ubicacion")}
              >
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
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/monoambiente">
                    Monoambiente
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/depto4-5">
                    Departamento 4/5 personas
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/casa">
                    Casa para 8 personas
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>

      {/* Estilos personalizados */}
      <style>{`
        .navbar-brand.logo img {
          transition: transform 0.3s ease-in-out, filter 0.3s ease-in-out;
        }

        .navbar-brand.logo:hover img {
          transform: rotate(10deg) scale(1.1);
          filter: brightness(1.2);
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
      `}</style>
    </nav>
  );
};

export default Navbar;
