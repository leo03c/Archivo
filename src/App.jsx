// import React from 'react';
// import { motion } from "framer-motion";
import Header from "./components/Header";
import Services from "./components/Services";
import FeaturedProducts from "./components/FeaturedProducts";
import AboutSection from "./components/AboutSection";
import Testimonials from "./components/Testimonials";
import CTA from "./components/CTA";
// import ContactSection from "./components/ContactSection"; 
import Footer from "./components/Footer";
import Hero from "./components/Hero";
// import { useState, useEffect } from "react";
// import { object } from "framer-motion/client";

function App() {
  
  return (
    <div>
      {/* Header Section */}
      <Header ></Header>
      {/* Hero Section */}
      <Hero ></Hero>
      {/* Services Section */}
      <Services></Services>
      <FeaturedProducts></FeaturedProducts>
      <AboutSection></AboutSection>
      <Testimonials></Testimonials>
      <CTA></CTA>
      {/* Footer */}
      <Footer></Footer>
    </div>
  );
}

export default App;
// hola