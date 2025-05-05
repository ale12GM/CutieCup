import React from "react";
import { Link } from "react-router-dom";


import flanImg from '../assets/imagesCategoria/budin.png';
import cupcakesImg from '../assets/imagesCategoria/cupcakes.jpg';
import galletasImg from '../assets/imagesCategoria/galletas.jpg';
import heladoImg from '../assets/imagesCategoria/helado.jpg';
import budinImg from '../assets/imagesCategoria/queque.jpg';
import tortaImg from '../assets/imagesCategoria/torta.jpg';

const categories = [
  { name: "Budines", 
    image: budinImg },
  { name: "Tortas", 
    image: tortaImg },
  { name: "Cupcakes", 
    image: cupcakesImg },
  { name: "Galletas", 
    image: galletasImg },
  { name: "Flanes", 
    image: flanImg },
  { name: "Helados", 
    image: heladoImg },
];


export default function CategoriasDeRecetas() {
  return (
    <div className="p-12 bg-white font-['Orelega_One']">
      <h1 className="text-2xl font-bold text-[#8c5a5a] mb-10">
        Categorías de recetas
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 font-['Orelega_One']0">
      {categories.map((cat, index) => (
        <Link to={`/categorias/${cat.name.toLowerCase()}`} key={index}>
          <div className="rounded-xl overflow-hidden relative h-40 shadow-md hover:scale-105 transition-transform duration-300">
            <img
              src={cat.image}
              alt={cat.name}
            className="w-full h-full object-cover opacity-60"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-white font-bold text-xl drop-shadow-md">
                {cat.name}
              </span>
            </div>
          </div>
        </Link>
      ))}

      </div>
    </div>
  );
}