// En Recetas.jsx

import React from "react";
import { useParams } from "react-router-dom";

import budinB from "../assets/imagesRecetas/budinBanana.jpg";
import budinC from "../assets/imagesRecetas/budinChocolate.jpg";
import budinF from "../assets/imagesRecetas/budinFrutosRojos.jpg";
import budinL from "../assets/imagesRecetas/budinLimon.jpg";
import budinM from "../assets/imagesRecetas/budinManzana.jpg";
import budinN from "../assets/imagesRecetas/budinNaranja.jpg";

import tortaC from "../assets/ImagesRecetas/tortaChocolate.jpg";
import tortaF from "../assets/ImagesRecetas/tortaFrambuesa.jpg";
import tortaL from "../assets/ImagesRecetas/tortaLimon.jpg";
import tortaM from "../assets/ImagesRecetas/tortaMokka.jpg";
import tortaV from "../assets/ImagesRecetas/tortaVainilla.jpg";
import tortaS from "../assets/ImagesRecetas/tortaSelvaNegra.jpg";

import cupcakeC from "../assets/ImagesRecetas/cupcakeCafe.jpg";
import cupcakeCC from "../assets/ImagesRecetas/cupcakeChocolate.jpg";
import cupcakeL from "../assets/ImagesRecetas/cupcakeLimon.jpg";
import cupcakeR from "../assets/ImagesRecetas/cupcakeRedVelvet.jpg";
import cupcakeZ from "../assets/ImagesRecetas/cupcakeZanahoria.jpg";
import cupcakeN from "../assets/ImagesRecetas/cupcakeNuez.jpg";

import galletaA from "../assets/ImagesRecetas/galletaAlmendras.jpg";
import galletaC from "../assets/ImagesRecetas/galletaChispas.jpg";
import galletaJ from "../assets/ImagesRecetas/galletaJengibre.jpg";
import galletaM from "../assets/ImagesRecetas/galletaMaicena.jpg";
import galletaR from "../assets/ImagesRecetas/galletaRellenaNutella.jpg";
import galletaCC from "../assets/ImagesRecetas/galletaChocolate.jpg";


import flanA from "../assets/ImagesRecetas/flanAvena.jpg";
import flanC from "../assets/ImagesRecetas/flanChocolate.jpg";
import flanF from "../assets/ImagesRecetas/flanFrutilla.jpg";
import flanL from "../assets/ImagesRecetas/flanLeche.jpg";
import flanP from "../assets/ImagesRecetas/flanPlatano.jpg";
import flanQ from "../assets/ImagesRecetas/flanQuinoa.jpg";

import heladoC from "../assets/ImagesRecetas/heladoCanela.jpg";
import heladoCC from "../assets/ImagesRecetas/heladoChicle.jpg";
import heladoF from "../assets/ImagesRecetas/heladoFrutilla.jpg";
import heladoM from "../assets/ImagesRecetas/heladoMenta.jpg";
import heladoMM from "../assets/ImagesRecetas/heladoMora.jpg";
import heladoP from "../assets/ImagesRecetas/heladoPiña.jpg";

import { Link } from "react-router-dom";

// Lista de recetas por categoría
const recetasPorCategoria = {
  budines: [
    { name: "Budín de Banana", image: budinB, ruta:"budinbanana"},
    { name: "Budín de Chocolate", image: budinC, ruta: "budinchocolate"},
    { name: "Budín de Frutos Rojos", image: budinF, ruta: "budinfrutosrojos"},
    { name: "Budín de Limón", image: budinL, ruta:"budinlimon"},
    { name: "Budín de Manzana", image: budinM, ruta: "budinmanzana"},
    { name: "Budín de Naranja", image: budinN, ruta: "budinnaranja"},
  ],
  // Aquí puedes añadir más categorías después (tortas, cupcakes, etc.)
  tortas: [
    { name: "Selva Negra", image: tortaS, ruta: "selvanegra" },
    { name: "Torta de Chocolate", image: tortaC, ruta: "tortachocolate" },
    { name: "Torta de Frambuesa", image: tortaF, ruta: "tortaframbuesa" },
    { name: "Torta de Limón", image: tortaL, ruta: "tortalimon" },
    { name: "Torta Mokka", image: tortaM, ruta: "tortamokka" },
    { name: "Torta de Vainilla", image: tortaV, ruta: "tortavainilla" },
  ],
  cupcakes: [
    { name: "Cupcakes de Café", image: cupcakeC, ruta: "cupcakescafe" },
    { name: "Cupcakes de Chocolate", image: cupcakeCC, ruta: "cupcakeschocolate" },
    { name: "Cupcakes de Limón", image: cupcakeL, ruta: "cupcakeslimon" },
    { name: "Cupcakes de Nuez", image: cupcakeN, ruta: "cupcakesnuex" },
    { name: "Cupcakes Red Velvet", image: cupcakeR, ruta: "cupcakesredvelvet" },
    { name: "Cupcakes de Zanahoria", image: cupcakeZ, ruta: "cupcakeszanahoria" },
  ],
  galletas: [
    { name: "Galleta de Almendras", image: galletaA, ruta: "galletasalmendra" },
    { name: "Galleta con Chispas", image: galletaC, ruta: "galletaschispas" },
    { name: "Galleta de Jengibre", image: galletaJ, ruta: "galletasjengibre" },
    { name: "Galleta de Maicena", image: galletaM, ruta: "galletasmaicena" },
    { name: "Galleta Rellena con Nutella", image: galletaR, ruta: "galletasnutella" },
    { name: "Galleta de Chocolate", image: galletaCC, ruta: "galletaschocolate" },
  ],
  
  flanes :[
    { name: "Flan de Leche", image: flanL, ruta: "flanleche" },
    { name: "Flan de Avena", image: flanA, ruta: "flanavena" },
    { name: "Flan de Chocolate", image: flanC, ruta: "flanchocolate" },
    { name: "Flan de Frutilla", image: flanF, ruta: "flanfrutilla" },
    { name: "Flan de Quinoa", image: flanQ, ruta: "flanquinoa" },
    { name: "Flan de Plátano", image: flanP, ruta: "flanplatano" },
  ],
  helados : [
    { name: "Helado de Canela", image: heladoC, ruta: "heladocanela" },
    { name: "Helado de Chicle", image: heladoCC, ruta: "heladochicle" },
    { name: "Helado de Frutilla", image: heladoF, ruta: "heladofrutilla" },
    { name: "Helado de Menta", image: heladoM, ruta: "heladomenta" },
    { name: "Helado de Mora", image: heladoMM, ruta: "heladomora" },
    { name: "Helado de Piña", image: heladoP, ruta: "heladopiña" },
  ],
  
};

export default function Recetas() {
  const { nombre } = useParams(); // "budines" o alguna otra categoría

  const recetas = recetasPorCategoria[nombre.toLowerCase()];

  if (!recetas) {
    return (
      <div className="p-12 text-red-700 font-bold text-xl">
        Categoría "{nombre}" no encontrada.
      </div>
    );
  }

  return (
    <div className="p-12 bg-white font-['Orelega_One']">
      <div className=" -translate-y-1/2 flex gap-2">

      <Link to="/categorias" className="rounded-full py-2 px-4 bg-[#fad1c3] hover:bg-[#fad1c3]/80 text-[#ffff] font-semibold transition duration-300">← Volver atrás</Link>

      </div>
      <h1 className="text-2xl font-bold text-[#8c5a5a] mb-10 capitalize">
        Recetas de {nombre}
        
      </h1>


      <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recetas.map((receta, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden relative h-40 shadow-md"
          >
            <Link to={`/receta/${receta.ruta}`}>
              <img
                src={receta.image}
                alt={receta.name}
                className="w-full h-full object-cover opacity-60"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="text-white font-bold text-xl drop-shadow-md">
                  {receta.name}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}