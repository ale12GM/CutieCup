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



// Lista de recetas por categoría
const recetasPorCategoria = {
  budines: [
    { name: "Budín de Banana", image: budinB },
    { name: "Budín de Chocolate", image: budinC },
    { name: "Budín de Frutos Rojos", image: budinF },
    { name: "Budín de Limón", image: budinL },
    { name: "Budín de Manzana", image: budinM },
    { name: "Budín de Naranja", image: budinN },
  ],
  // Aquí puedes añadir más categorías después (tortas, cupcakes, etc.)
  tortas: [
    { name: "Torta de Chocolate", image: tortaC },
    { name: "Torta de Frambueza", image: tortaF },
    { name: "Torta de Limon", image: tortaL },
    { name: "Torta Mokka", image: tortaM },
    { name: "Torta de Vainilla", image: tortaV },
    { name: "Torta Selva Negra", image: tortaS },
  ],
  cupcakes: [
    { name: "Cupcake de Café", image: cupcakeC },
    { name: "Cupcake de Chocolate", image: cupcakeCC },
    { name: "Cupcake de Limón", image: cupcakeL },
    { name: "Cupcake Red Velvet", image: cupcakeR },
    { name: "Cupcake de Zanahoria", image: cupcakeZ },
    { name: "Cupcake de Nuez", image: cupcakeN },
  ],
  galletas: [
    { name: "Galleta de Almendras", image: galletaA },
    { name: "Galleta con Chispas", image: galletaC },
    { name: "Galleta de Jengibre", image: galletaJ },
    { name: "Galleta de Maicena", image: galletaM },
    { name: "Galleta Rellena con Nutella", image: galletaR },
    { name: "Galleta de Chocolate", image: galletaCC },
  ],
  flanes: [
    { name: "Flan de Avena", image: flanA },
    { name: "Flan de Chocolate", image: flanC },
    { name: "Flan de Frutilla", image: flanF },
    { name: "Flan de Leche", image: flanL },
    { name: "Flan de Plátano", image: flanP },
    { name: "Flan de Quinoa", image: flanQ },
  ],
  helados: [
    { name: "Helado de Canela", image: heladoC },
    { name: "Helado de Chicle", image: heladoCC },
    { name: "Helado de Frutilla", image: heladoF },
    { name: "Helado de Menta", image: heladoM },
    { name: "Helado de Mora", image: heladoMM },
    { name: "Helado de Piña", image: heladoP },
  ],
  
};

export default function Recetas() {
  const { nombre } = useParams(); // por ejemplo: "budines"

  const recetas = recetasPorCategoria[nombre.toLowerCase()];

  if (!recetas) {
    return (
      <div className="p-12 text-red-700 font-bold text-xl">
        Categoría "{nombre}" no encontrada.
      </div>
    );
  }

  return (
    <div className="p-12 bg-white min-h-screen">
      <h1 className="text-2xl font-bold text-[#8c5a5a] mb-10 capitalize">
        Recetas de {nombre}
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {recetas.map((receta, index) => (
          <div
            key={index}
            className="rounded-xl overflow-hidden relative h-40 shadow-md"
          >
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
          </div>
        ))}
      </div>
    </div>
  );
}
