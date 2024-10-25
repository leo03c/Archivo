// import React from 'react'
import icon from "../assets/icons.png"
import { motion } from 'framer-motion'

function Header({itens}) {

  return (
    <div>
      <header className="bg-white shadow-lg">
  <div className="container mx-auto px-6 py-4 flex justify-between items-center">
    {/* Logo */}
    <div className="flex items-center">
      <img src={icon} alt="DeporteShop Logo" className="w-10 h-10 mr-2"/>
      <h1 className="text-3xl font-bold text-blue-700">DeporteShop</h1>
    </div>

    {/* Menú de Navegación */}
    <nav className="hidden md:flex space-x-8">
      <a href="#home" className="text-gray-600 hover:text-blue-700 text-lg transition-colors">Inicio</a>
      <a href="#products" className="text-gray-600 hover:text-blue-700 text-lg transition-colors">Productos</a>
      <a href="#about" className="text-gray-600 hover:text-blue-700 text-lg transition-colors">Sobre Nosotros</a>
      <a href="#contact" className="text-gray-600 hover:text-blue-700 text-lg transition-colors">Contacto</a>
    </nav>

    {/* Buscador */}
    <div className="hidden lg:flex items-center bg-gray-100 rounded-lg overflow-hidden">
      <input type="text" className="px-4 py-2 bg-gray-100 focus:outline-none" placeholder="Buscar productos..." />
      <button className="bg-blue-700 text-white px-4 py-2 hover:bg-blue-800 transition-colors">
        Buscar
      </button>
    </div>

    {/* Carrito de Compras */}
    <div className="flex items-center space-x-6">
      <motion.button
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.2 }}
        className="bg-blue-700 text-white py-2 px-4 rounded-full hover:bg-blue-800 transition-colors"
      >
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
  <path strokeLinecap="round" strokeLinejoin="round" d="M6 7l.867-2.598A2 2 0 018.764 3h6.472a2 2 0 011.897 1.402L18 7M5 7h14a2 2 0 012 2v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9a2 2 0 012-2z" />
</svg>


      </motion.button>
      <span className="hidden md:block text-gray-600">{itens} items</span>
    </div>
  </div>

  {/* Menú Móvil */}
  <div className="md:hidden flex justify-center py-4">
    <nav className="flex space-x-6">
      <a href="#home" className="text-gray-600 hover:text-blue-700 transition-colors">Inicio</a>
      <a href="#products" className="text-gray-600 hover:text-blue-700 transition-colors">Productos</a>
      <a href="#about" className="text-gray-600 hover:text-blue-700 transition-colors">Sobre Nosotros</a>
      <a href="#contact" className="text-gray-600 hover:text-blue-700 transition-colors">Contacto</a>
    </nav>
  </div>
</header>

    </div>
  )
}

export default Header

