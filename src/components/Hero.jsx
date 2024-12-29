import React from "react";
import { motion } from "framer-motion";
import gifImage from "../assets/dos.gif";

const Header = () => {
  return (
    <header className="relative flex items-center h-screen bg-[#D4D9F7]">
      {/* Sección de texto */}
      <motion.div
        className="absolute left-0 w-2/5 p-8 z-10"
        initial={{ x: -200, opacity: 0 }} // Estado inicial fuera de la pantalla a la izquierda
        animate={{ x: 0, opacity: 1 }} // Estado final, en su posición original
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }} // Animación más lenta
      >
        {/* Cuadro con texto */}
        <div className="bg-gray-800 text-white p-6 rounded-xl shadow-xl max-w-xs">
          <h1 className="text-3xl font-mono font-semibold mb-4">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg font-mono font-light leading-relaxed opacity-80">
            I'm a passionate web designer, creating engaging and dynamic experiences.
          </p>
        </div>
      </motion.div>

      {/* GIF con altura ajustada */}
      <motion.div
        className="absolute right-0 w-3/5 h-full flex items-center justify-center"
        initial={{ x: 200, opacity: 0 }} // Estado inicial fuera de la pantalla a la derecha
        animate={{ x: 0, opacity: 1 }} // Estado final, en su posición original
        transition={{ duration: 1.5, type: "spring", stiffness: 80 }} // Animación más lenta
      >
        <img
          src={gifImage}
          alt="Animated Designer"
          className="w-full max-h-[70%] object-contain"
        />
      </motion.div>
    </header>
  );
};

export default Header;
