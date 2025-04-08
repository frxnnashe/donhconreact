import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import ServicesMap from "./components/ServicesMap.jsx";
import Footer from "./components/Footer.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import AñosServicio from "./components/AñosServicio.jsx";
import Mapa from "./components/Mapa.jsx";
import Testimonials from "./components/Testimonials.jsx";
import Casa from "./pages/casa.jsx";
import Depto4 from "./pages/depto4-5.jsx";
import Monoambiente from "./pages/mono.jsx";
import Carousel from "./components/Carousel.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";
function App() {
  console.log("App se está renderizando");
  return (
    <>
      <ScrollToTop/>
      <Navbar />
      <Routes>
        <Route path="/" element={
          <>
            <Hero />
            <Carousel/>
            <Gallery />
            <div style={{ marginTop: "50px" }}></div>
            <AñosServicio />
            <div id="servicios">
              <ServicesMap />
            </div>
            <div id="ubicacion">
              <Mapa />
            </div>
            <Testimonials />
            <WhatsAppButton/>
          </>
        } />
        <Route path="/casa" element={<Casa />} />
        <Route path="/depto4-5" element={<Depto4 />} />
        <Route path="/monoambiente" element={<Monoambiente />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
