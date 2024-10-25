// import React from 'react'
import icon from "../assets/icons.png"

function Footer() {
  return (
    <div>
      <footer className="bg-gray-900 text-gray-400 py-12 px-2">
  <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
    
    {/* Logo y Descripción */}
    <div className="col-span-1 ">
      <div className="flex items-center mb-4 justify-center sm:justify-start">
        <img src={icon} alt="DeporteShop Logo" className="w-10 h-10 mr-2" />
        <h2 className="text-2xl font-bold text-white">DeporteShop</h2>
      </div>
      <p className=" text-center sm:text-start">Los mejores productos deportivos para mejorar tu rendimiento y llevar tu pasión por el deporte al siguiente nivel.</p>
    </div>

    {/* Enlaces Rápidos */}
    <div className="sm:col-span-1" >
      <h3 className="text-lg font-semibold text-white mb-4 flex justify-center sm:block">Enlaces Rápidos</h3>
      <ul>
        <li><a href="#products" className="hover:text-white flex justify-center sm:block">Productos</a></li>
        <li><a href="#about" className="hover:text-white flex justify-center sm:block">Sobre Nosotros</a></li>
        <li><a href="#contact" className="hover:text-white flex justify-center sm:block">Contacto</a></li>
        <li><a href="#faq" className="hover:text-white flex justify-center sm:block">FAQ</a></li>
      </ul>
    </div>

    {/* Redes Sociales */}
    <div className="col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4 flex justify-center sm:block">Síguenos</h3>
      <div className="flex space-x-4 justify-center sm:justify-start">
        <a href="https://facebook.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none" className="w-6 h-6">
            <path d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82V14.708H9.692V11.07h3.128V8.413c0-3.1 1.894-4.788 4.659-4.788 1.325 0 2.463.099 2.794.142v3.24l-1.918.001c-1.504 0-1.794.715-1.794 1.762v2.311h3.587l-.467 3.637h-3.12V24h6.116C23.407 24 24 23.407 24 22.676V1.325C24 .593 23.407 0 22.675 0z"/>
          </svg>
        </a>

        <a href="https://twitter.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" stroke="none" className="w-6 h-6">
            <path d="M23.953 4.57a10 10 0 01-2.825.775 4.932 4.932 0 002.163-2.723 9.864 9.864 0 01-3.127 1.184 4.918 4.918 0 00-8.384 4.482 13.955 13.955 0 01-10.141-5.15 4.822 4.822 0 00-.666 2.475c0 1.708.869 3.215 2.188 4.099a4.904 4.904 0 01-2.228-.616v.061a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.224.085 4.936 4.936 0 004.6 3.417A9.875 9.875 0 010 21.539 13.941 13.941 0 007.548 24c9.058 0 14.009-7.504 14.009-14.009 0-.213-.005-.425-.014-.636A9.935 9.935 0 0024 4.59z"/>
          </svg>
        </a>

        <a href="https://instagram.com" className="hover:text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.427.403a4.92 4.92 0 011.675 1.093 4.92 4.92 0 011.093 1.675c.164.457.349 1.257.403 2.427.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.403 2.427a4.92 4.92 0 01-1.093 1.675 4.92 4.92 0 01-1.675 1.093c-.457.164-1.257.349-2.427.403-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.427-.403a4.92 4.92 0 01-1.675-1.093 4.92 4.92 0 01-1.093-1.675c-.164-.457-.349-1.257-.403-2.427-.058-1.266-.07-1.646-.07-4.85s.012-3.584.07-4.85c.054-1.17.24-1.97.403-2.427a4.92 4.92 0 011.093-1.675 4.92 4.92 0 011.675-1.093c.457-.164 1.257-.349 2.427-.403C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.553.012-4.805.07-1.041.048-1.605.217-1.98.362a3.078 3.078 0 00-1.126.734 3.078 3.078 0 00-.734 1.126c-.145.375-.314.939-.362 1.98-.058 1.252-.07 1.635-.07 4.805s.012 3.553.07 4.805c.048 1.041.217 1.605.362 1.98.163.418.381.79.734 1.126.336.353.708.571 1.126.734.375.145.939.314 1.98.362 1.252.058 1.635.07 4.805.07s3.553-.012 4.805-.07c1.041-.048 1.605-.217 1.98-.362.418-.163.79-.381 1.126-.734.353-.336.571-.708.734-1.126.145-.375.314-.939.362-1.98.058-1.252.07-1.635.07-4.805s-.012-3.553-.07-4.805c-.048-1.041-.217-1.605-.362-1.98a3.078 3.078 0 00-.734-1.126 3.078 3.078 0 00-1.126-.734c-.375-.145-.939-.314-1.98-.362-1.252-.058-1.635-.07-4.805-.07zm0 3.825a5.16 5.16 0 110 10.319 5.16 5.16 0 010-10.319zm0 8.494a3.334 3.334 0 100-6.669 3.334 3.334 0 000 6.669zm6.406-9.672a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z"/>
          </svg>
        </a>
      </div>
    </div>

    {/* Información de Contacto */}
    <div className="col-span-1">
      <h3 className="text-lg font-semibold text-white mb-4 flex justify-center sm:block">Contáctanos</h3>
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
    <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-center sm:text-start">
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

