import React from "react";
import flanfeu from "../assets/flanfeu.png";
import hel from "../assets/hel.png";
import luigi from "../assets/luigi.png";
import wine from "../assets/wine.png";
import cripto from "../assets/cripto.png";
import criptoFigma from "../assets/criptoFigma.png";
import { FaReact, FaNodeJs, FaFigma } from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

const projects = [
  {
    id: 1,
    image: hel,
    description: "",
    url: "https://helsinky-app.vercel.app/",
  },
  {
    id: 2,
    image: flanfeu,
    description: "",
    url: "https://franciscoberardo.github.io/restaurant-site/",
  },
  {
    id: 3,
    image: luigi,
    description: "",
    url: "https://www.figma.com/proto/g2Wi3d5orjaGlDB7nshaFY/Chef-recipes-site?t=wvVsei0e2mjahghZ-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2",
  },
  {
    id: 4,
    image: wine,
    description: "",
    url: "https://www.figma.com/proto/qwZqS6lpPnzq8fnfqJB1HP/restaurant?t=QrwZHDDcYUWJpDUC-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2",
  },
  {
    id: 5,
    image: cripto,
    description: "",
    url: "https://www.figma.com/proto/RxsHcjRbhgmIn5zeLW3DA0/cripto-site?t=CtOgAJTNeb0G6PAs-0&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&node-id=1-2",
  },
  {
    id: 6,
    image: criptoFigma,
    description: "",
    url: "https://www.figma.com/proto/u6ZFh6mhRCxIIxUc25PL2c/Responsive-criptocurrency-site?node-id=1-88&t=79atQdCsrYItsRgX-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1",
  },
];

const ProjectsHeader = () => {
  return (
    <header className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 px-4">
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl text-white mb-4 font-inter">
          My Programming Projects
        </h1>
        <p className="text-gray-300 text-base sm:text-lg">
          Explore a selection of the projects I have crafted with dedication and
          creativity.
        </p>
      </div>
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 ">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative bg-gray-800 shadow-xl rounded-3xl overflow-hidden flex flex-col items-center justify-center transform transition duration-300 hover:scale-105 hover:shadow-2xl p-6"
          >
            <img
              src={project.image}
              alt={project.description}
              className="w-full h-40 sm:h-48 object-cover mb-4 rounded-md"
            />
            {/* Overlay y el botón */}
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-white bg-indigo-600 py-2 px-6 rounded-lg"
              >
                View Project
              </a>
            </div>
            {project.id === 1 || project.id === 2 ? (
              <div className="flex gap-4 justify-center mb-2 text-indigo-400 text-2xl">
                <FaReact className="text-blue-500" />
                <SiTailwindcss className="text-teal-400" />
                <FaNodeJs className="text-green-500" />
              </div>
            ) : (
              <div className="flex justify-center mb-2 text-indigo-400 text-2xl">
                <FaFigma className="text-red-500" />
              </div>
            )}
          </div>
        ))}
      </div>
    </header>
  );
};



export default ProjectsHeader;
