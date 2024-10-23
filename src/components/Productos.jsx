import React from 'react'
import { motion } from 'framer-motion';

function Productos() {
  return (
    <div>
      <section id="products" className="py-16 bg-gray-100">
  <div className="container mx-auto text-center mb-12">
    
    {/* Título de la sección */}
    <motion.h2
      className="text-4xl font-bold mb-4 text-gray-800"
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      Nuestros Productos Destacados
    </motion.h2>

    <motion.p
      className="text-lg text-gray-600"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
    >
      Descubre nuestra selección de artículos deportivos de alta calidad
    </motion.p>
  </div>

  {/* Grid de productos */}
  <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
    {/* Mapeamos los productos */}
    {products.map((product) => (
      <motion.div
        key={product.id}
        className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
        whileHover={{ scale: 1.05 }}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="text-xl font-semibold mb-2 text-gray-800">{product.name}</h3>
          <p className="text-gray-600 mb-4">{product.price}</p>
          <motion.button
            className="bg-blue-600 text-white py-2 px-4 rounded-full hover:bg-blue-700 transition-colors duration-300"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.3 }}
          >
            Añadir al carrito
          </motion.button>
        </div>
      </motion.div>
    ))}
  </div>
</section>
    </div>
  )
}

export default Productos
