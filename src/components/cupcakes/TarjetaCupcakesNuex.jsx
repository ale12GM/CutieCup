import React, { useState, useRef } from "react";
import cupcake from "../../assets/recetascupcakes/cupcakesnuez.svg"; // Imagen de nuez

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Los cupcakes de nuez son una deliciosa opción para quienes disfrutan de sabores intensos y texturas crujientes. Combinan una masa suave con trozos de nuez que aportan un toque especial en cada bocado.`,
  Ingredientes: `- 1 taza de harina leudante\n- 3/4 taza de azúcar morena\n- 2 huevos\n- 1/2 taza de manteca derretida o aceite\n- 1/2 taza de leche\n- 1 cdita de esencia de vainilla\n- 1/2 taza de nueces picadas\n- Una pizca de sal`,
  Pasos: `1. Precalentar el horno a 180°C y colocar pirotines en una bandeja para cupcakes.\n2. Batir los huevos con el azúcar hasta lograr una mezcla espumosa.\n3. Incorporar la manteca derretida, la leche y la esencia de vainilla.\n4. Agregar la harina tamizada con la sal y mezclar bien.\n5. Añadir las nueces picadas e integrar suavemente.\n6. Verter la mezcla en los moldes llenando hasta 3/4.\n7. Hornear durante 20-25 minutos o hasta que al insertar un palillo, salga limpio.\n8. Dejar enfriar y decorar si se desea con crema o glaseado.`,
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
          <title>Cupcakes de Nuez</title>
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
          Cupcakes de Nuez
        </h1>
        <img
          src={cupcake}
          alt="Cupcakes de Nuez"
          className="mx-auto w-full max-w-md sm:max-w-lg object-contain"
        />
      </div>

      <div className="p-6 font-['Orelega_One'] text-[#A9746E] w-[400px] h-[450px] flex flex-col justify-between">
        <div>
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
        <h1>Cupcakes de Nuez</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
