// import React from 'react';
import { motion } from "framer-motion";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const products = [
    {
      id: 1,
      name: "Balón de Fútbol",
      price: "$30.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      name: "Raqueta de Tenis",
      price: "$120.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      name: "Guantes de Boxeo",
      price: "$45.00",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      name: "Zapatillas de Running",
      price: "$85.00",
      image: "https://via.placeholder.com/150",
    },
  ];
  const [comprado, setComptrado] = useState({});

  const toggleComprados = (id) => {
    setComptrado((prevState) => ({
      ...prevState,
      [id]: !prevState[id],
    }));
  };
  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header/Nav */}
      <Header></Header>
      {/* Hero Section */}
      <motion.section
        className="bg-blue-500 text-white py-20 text-center"
        initial={{ opacity: 0, y: 500 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.1, type: "spring", damping: 10 }}
      >
        <h2 className="text-4xl font-bold mb-4">Bienvenido a DeporteShop</h2>
        <p className="text-lg">
          Los mejores productos para tu rendimiento deportivo
        </p>
      </motion.section>

      {/* Productos */}
      <section id="products" className="container mx-auto py-10">
        <h3 className="text-3xl font-bold text-center mb-8">
          Nuestros Productos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <motion.div
              key={product.id}
              className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.1 }}
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-40 object-cover mb-4"
              />
              <h4 className="text-xl font-semibold mb-2">{product.name}</h4>
              <p className="text-gray-500 mb-4">{product.price}</p>
              <button
                className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
                onClick={() => toggleComprados(product.id)}
              >
                {comprado[product.id] ? "Añadido" : "Añadir al carrito"}
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
