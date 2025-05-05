import React, { useState, useRef } from "react";
import flan from "../assets/flanquinoa.svg"; // Asegúrate de tener esta imagen

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción:
    "El flan de quinoa es un postre saludable, sin gluten y rico en proteínas. Se elabora a base de quinoa cocida, leche, huevos y un toque de vainilla. Tiene una textura suave y es perfecto para quienes buscan alternativas nutritivas sin perder sabor.",
  Ingredientes:
    "- 1 taza de quinoa cocida\n- 2 tazas de leche (puede ser vegetal)\n- 3 huevos\n- 1/2 taza de azúcar o endulzante natural\n- 1 cdita de esencia de vainilla\n- Caramelo líquido para el molde",
  Pasos:
    "1. Precalentar el horno a 180°C.\n2. Licuar la quinoa cocida con la leche, huevos, azúcar y vainilla hasta obtener una mezcla homogénea.\n3. Cubrir el fondo del molde con caramelo líquido.\n4. Verter la mezcla sobre el caramelo.\n5. Hornear a baño maría durante 45-50 minutos o hasta que al insertar un cuchillo salga limpio.\n6. Dejar enfriar, refrigerar por al menos 3 horas y desmoldar antes de servir.",
};

export default function RecetaCard() {
  const [activeTab, setActiveTab] = useState("Descripción");
  const printRef = useRef();

  const handlePrint = () => {
    const printContent = printRef.current.innerHTML;
    const newWindow = window.open("", "", "width=800,height=600");
    newWindow.document.write(`
      <html>
        <head>
          <title>Flan de Quinoa</title>
          <style>
            body { font-family: sans-serif; padding: 20px; color: #333; }
            h1 { color: #A9746E; }
            pre { white-space: pre-wrap; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    newWindow.document.close();
    newWindow.print();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-white flex-col sm:flex-row gap-4 p-4">
      <div className="p-6 font-['Orelega_One'] text-[#A9746E] text-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
          Flan de Quinoa
        </h1>
        <img
          src={flan}
          alt="Flan de Quinoa"
          className="mx-auto w-full max-w-xs sm:max-w-sm object-contain"
        />
      </div>

      <div className="p-6 font-['Orelega_One'] text-[#A9746E] w-full max-w-md flex flex-col justify-between">
        <div className="flex gap-3 mb-4">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-1.5 rounded-full font-semibold ${
                activeTab === tab
                  ? "bg-[#FFA79C]"
                  : "bg-[#FFA79C]/50 hover:bg-[#FFA79C]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-[#fff1dc] p-6 rounded-2xl shadow h-[300px] overflow-y-auto">
          <h3 className="text-lg font-bold mb-2">{activeTab}:</h3>
          <p className="whitespace-pre-line">{content[activeTab]}</p>
        </div>

        <button
          onClick={handlePrint}
          className="mt-6 bg-[#FFA79C] hover:bg-[#ffa79c]/80 text-white font-bold py-2 rounded-full"
        >
          Imprimir
        </button>
      </div>

      {/* Contenido oculto para imprimir */}
      <div className="hidden" ref={printRef}>
        <h1>Flan de Quinoa</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
