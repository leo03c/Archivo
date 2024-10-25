import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import imgAb from "../assets/pexels6.jpg"
const AboutSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section id="about" className="relative bg-gray-100 py-16" ref={ref}>
      <div className="absolute inset-0 bg-cover bg-center opacity-30" style={{ backgroundImage: `url('${imgAb}')` }} />
      <div className="container mx-auto relative z-10 text-center px-6">
        <motion.h2 
          className="text-5xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Sobre Nosotros
        </motion.h2>
        
        <motion.p 
          className="text-lg text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          En <span className="font-semibold text-blue-600">DeporteShop</span>, nuestra misión es proporcionar productos de la más alta calidad para todos los entusiastas del deporte. Con una amplia gama de artículos deportivos, desde equipamiento hasta accesorios, estamos comprometidos a ayudar a nuestros clientes a alcanzar su máximo potencial.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Nuestro equipo está compuesto por apasionados del deporte que entienden las necesidades de nuestros clientes. Nos esforzamos por ofrecer un excelente servicio al cliente y garantizar que cada experiencia de compra sea inolvidable.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-900 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          Ofrecemos una experiencia de compra fácil y conveniente, ya sea en línea o en nuestra tienda física. Nuestros productos están seleccionados cuidadosamente para asegurar que encuentres exactamente lo que necesitas para tu actividad deportiva.
        </motion.p>

        <motion.p 
          className="text-lg text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          Gracias por elegir <span className="font-semibold text-blue-600">DeporteShop</span>. ¡Esperamos acompañarte en tu viaje deportivo!
        </motion.p>
      </div>
    </section>
  );
};

export default AboutSection;
