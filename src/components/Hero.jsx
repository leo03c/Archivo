// import React from 'react'
import { motion } from 'framer-motion'

function Hero() {
  return (
    <div>
      <motion.section
  className="relative bg-cover bg-center h-screen"
  style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} // Aquí puedes colocar la URL de la imagen que desees
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Capa oscura sobre la imagen */}
  <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
    
    {/* Título principal */}
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Eleva tu Rendimiento
    </motion.h1>
    
    {/* Subtítulo */}
    <motion.p
      className="text-lg md:text-2xl mb-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Descubre los mejores productos deportivos para llevar tu pasión al siguiente nivel
    </motion.p>
    
    {/* Botón de llamada a la acción */}
    <motion.a
      href="#products"
      className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      Ver Productos
    </motion.a>
  </div>
</motion.section>
    </div>
  )
}

<motion.section
  className="relative bg-cover bg-center h-screen"
  style={{ backgroundImage: "url('https://via.placeholder.com/1920x1080')" }} // Aquí puedes colocar la URL de la imagen que desees
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 1 }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Capa oscura sobre la imagen */}
  <div className="relative container mx-auto h-full flex flex-col justify-center items-center text-center text-white px-4">
    
    {/* Título principal */}
    <motion.h1
      className="text-5xl md:text-7xl font-bold mb-6"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      Eleva tu Rendimiento
    </motion.h1>
    
    {/* Subtítulo */}
    <motion.p
      className="text-lg md:text-2xl mb-8"
      initial={{ y: 50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Descubre los mejores productos deportivos para llevar tu pasión al siguiente nivel
    </motion.p>
    
    {/* Botón de llamada a la acción */}
    <motion.a
      href="#products"
      className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition-colors"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    >
      Ver Productos
    </motion.a>
  </div>
</motion.section>
export default Hero
