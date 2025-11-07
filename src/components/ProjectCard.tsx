"use client";
import React from 'react';
import { ArrowTopRightOnSquareIcon } from '@heroicons/react/24/outline';

interface Project {
  id: number;
  titulo: string;
  categoria: string;
  descripcion: string;
  tecnologias: string[];
  imagen: string;
  url: string;
  destacado: boolean;
  cliente: string;
}

interface ProjectCardProps {
  proyecto: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ proyecto }) => {
  const displayTitle = proyecto.titulo;
  const displayDescription = proyecto.descripcion;

  return (
    <div
      className={`bg-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group ${
        proyecto.destacado ? "ring-2 ring-green-200" : ""
      }`}
    >
      {/* Project Image */}
      <div className="relative h-48 overflow-hidden">
        <img 
          src={proyecto.imagen} 
          alt={displayTitle}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/20 to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        <div className="absolute top-4 right-4">
          {proyecto.destacado && (
            <span className="bg-green-500 text-white px-3 py-1 rounded-full text-xs font-medium">
              ✨ Destacado
            </span>
          )}
        </div>
        
      </div>

      {/* Project Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="text-sm font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
            {proyecto.categoria}
          </span>
          <a 
            href={proyecto.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-green-600 transition-colors duration-200"
          >
            <ArrowTopRightOnSquareIcon className="w-5 h-5" />
          </a>
        </div>
        
        <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-green-600 transition-colors duration-200">
          {displayTitle}
        </h3>
        
        <p className="text-gray-600 mb-3 text-sm leading-relaxed">
          {displayDescription}
        </p>
        
        <div className="mb-4">
          <p className="text-xs text-gray-500 font-medium">
            Cliente: {proyecto.cliente}
          </p>
        </div>
        
        <div className="flex flex-wrap gap-2">
          {proyecto.tecnologias.map((tech) => (
            <span
              key={tech}
              className="text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default ProjectCard;