import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const ContactSection = () => {
  const [ref, inView] = useInView({
    threshold: 0.1, // Trigger when 10% of the section is visible
  });

  return (
    <section id="contact" className="bg-gray-100 py-16" ref={ref}>
      <div className="container mx-auto text-center px-6">
        <motion.h2 
          className="text-4xl font-bold mb-8 text-gray-800"
          initial={{ opacity: 0, y: -50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -50 }}
          transition={{ duration: 0.8 }}
        >
          Contáctenos
        </motion.h2>
        <motion.p 
          className="text-lg text-gray-600 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Si tienes alguna pregunta, comentario o sugerencia, no dudes en ponerte en contacto con nosotros. Estamos aquí para ayudarte.
        </motion.p>

        <motion.form 
          className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-lg"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input 
              type="text" 
              id="name" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Tu nombre" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input 
              type="email" 
              id="email" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Tu correo electrónico" 
              required 
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea 
              id="message" 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" 
              placeholder="Escribe tu mensaje aquí" 
              rows="4" 
              required 
            ></textarea>
          </div>

          <motion.button 
            type="submit"
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition"
            whileHover={{ scale: 1.05 }}
          >
            Enviar
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
};

export default ContactSection;
