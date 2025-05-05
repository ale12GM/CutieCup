import React, { useState, useRef } from "react";
import cupcake from "../../assets/recetascupcakes/cupcakeszanahoria.svg"; // Imagen Zanahoria

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Los cupcakes de zanahoria son una opción deliciosa y ligeramente especiada, con una textura húmeda gracias a la zanahoria rallada. Generalmente se acompañan con un glaseado de queso crema, que aporta un contraste cremoso y dulce.`,
  Ingredientes: `- 1 taza de harina leudante\n- 3/4 taza de azúcar\n- 1/2 taza de aceite\n- 2 huevos\n- 1 taza de zanahoria rallada\n- 1 cdita de canela\n- 1/4 cdita de nuez moscada\n- 1/2 cdita de esencia de vainilla\n- Opcional: nueces picadas`,
  Pasos: `1. Precalentar el horno a 180°C y preparar los pirotines en una bandeja.\n2. Batir los huevos con el azúcar, el aceite y la vainilla.\n3. Agregar la zanahoria rallada y mezclar bien.\n4. Incorporar la harina, canela y nuez moscada.\n5. Agregar nueces si deseás.\n6. Llenar los pirotines hasta 3/4 de su capacidad.\n7. Hornear 20-25 minutos o hasta que estén dorados.\n8. Enfriar antes de decorar con frosting de queso crema.`,
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
          <title>Cupcakes de Zanahoria</title>
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
          Cupcakes de Zanahoria
        </h1>
        <img
          src={cupcake}
          alt="Cupcakes de Zanahoria"
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
        <h1>Cupcakes de Zanahoria</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
