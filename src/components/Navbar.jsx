import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faUpwork } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white p-4 sticky top-0 z-10 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-mono font-semibold">Francisco Berardo</h1>
        <div className="flex space-x-6">
          <a
            href="https://www.linkedin.com/in/francisco-berardo"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a
            href="https://www.upwork.com/freelancers/franciscob45?mp_source=share"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xl hover:text-gray-400 transition-colors duration-200"
            aria-label="Upwork"
          >
            <FontAwesomeIcon icon={faUpwork} />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
