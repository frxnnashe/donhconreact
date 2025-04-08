import React, { useState, useEffect } from 'react';
import '../assets/css/styles.css';

const AñosServicio = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const section = document.getElementById("anos-servicio");
      if (section) {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight * 0.8) {
          setVisible(true);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="anos-servicio" className={`anos-servicio ${visible ? "fade-in" : ""}`}>
      <div className="overlay"></div>
      <div className="anos-servicio-content">
        <h2>
          Mas de <span className="big-number">10</span> años de servicio
        </h2>
        <p>
          Atendido por sus dueños, Don H ha ofrecido por más de 10 años la mejor atención a sus clientes.<br />

        </p>
      </div>
    </section>
  );
};

export default AñosServicio;
