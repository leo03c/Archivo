// import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-12">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo y Descripción */}
    <div className="col-span-1">
      <div className="flex items-center mb-4">
        <img src="https://via.placeholder.com/50" alt="DeporteShop Logo" className="w-10 h-10 mr-2" />
        <h2 className="text-2xl font-bold text-white">DeporteShop</h2>
      </div>
      <p>Los mejores productos deportivos para mejorar tu rendimiento y llevar tu pasión por el deporte al siguiente nivel.</p>
    </div>

    {/* Enlaces Rápidos */}
    <div className="col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4">Enlaces Rápidos</h3>
      <ul>
        <li><a href="#products" className="hover:text-white">Productos</a></li>
        <li><a href="#about" className="hover:text-white">Sobre Nosotros</a></li>
        <li><a href="#contact" className="hover:text-white">Contacto</a></li>
        <li><a href="#faq" className="hover:text-white">FAQ</a></li>
      </ul>
    </div>

    {/* Redes Sociales */}
    <div className="col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4">Síguenos</h3>
      <div className="flex space-x-4">
        <a href="https://facebook.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M18.36 5.64A9 9 0 116.64 18.36 9 9 0 0118.36 5.64zM9 9v6m0 0v-6m0 6h6" />
          </svg>
        </a>
        <a href="https://twitter.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v12l9 3-9-15-9 15V3" />
          </svg>
        </a>
        <a href="https://instagram.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7 4v12l10-6-10-6zm1 4h6v4H8v-4z" />
          </svg>
        </a>
      </div>
    </div>

    {/* Información de Contacto */}
    <div className="col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4">Contáctanos</h3>
      <ul>
        <li className="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline-block w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.25 12.75L12 9l-4.25 3.75" />
          </svg>
          Calle Falsa 123, Ciudad Deportiva
        </li>
        <li className="mb-2">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline-block w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.25 12.75L12 9l-4.25 3.75" />
          </svg>
          Teléfono: +34 555-555-555
        </li>
        <li>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="inline-block w-5 h-5 mr-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M16.25 12.75L12 9l-4.25 3.75" />
          </svg>
          Email: contacto@deporteshop.com
        </li>
      </ul>
    </div>
  </div>

  <div className="border-t border-gray-700 mt-8 pt-4">
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
      <p>© 2024 DeporteShop. Todos los derechos reservados.</p>
      <div className="flex space-x-4 mt-4 md:mt-0">
        <a href="#privacy" className="hover:text-white">Política de Privacidad</a>
        <a href="#terms" className="hover:text-white">Términos y Condiciones</a>
      </div>
    </div>
  </div>
</footer>

    </div>
  )
}

export default Footer

