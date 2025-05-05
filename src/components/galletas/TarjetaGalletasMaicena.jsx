import React, { useState, useRef } from "react";
import galletas from "../../assets/recetasdegalletas/galletasmaicena.svg"; 

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Las galletas de maicena son suaves, ligeras y se deshacen en la boca. Tienen un sabor delicado y una textura arenosa característica gracias a la fécula de maíz (maicena). Son ideales para acompañar con dulce de leche o té, y muy populares en celebraciones y meriendas.`,
  Ingredientes: `- 200 g de manteca a temperatura ambiente\n- 3/4 taza de azúcar impalpable\n- 2 yemas de huevo\n- 1 cdita de esencia de vainilla\n- 1 y 1/2 taza de maicena (fécula de maíz)\n- 1/2 taza de harina común\n- Ralladura de 1 limón (opcional)\n- Dulce de leche y coco rallado para rellenar y decorar (opcional)`,
  Pasos: `1. Batir la manteca con el azúcar impalpable hasta lograr una crema.\n2. Agregar las yemas, la vainilla y la ralladura de limón. Mezclar bien.\n3. Incorporar la maicena y la harina tamizadas. Formar una masa suave.\n4. Estirar la masa sobre una superficie enharinada y cortar con moldes.\n5. Colocar en una bandeja con papel manteca.\n6. Hornear a 170°C por 10-12 minutos. No deben dorarse.\n7. Dejar enfriar y unir de a dos con dulce de leche.\n8. Pasar los bordes por coco rallado si se desea.`,
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
          <title>Galletas de Maicena</title>
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
          Galletas de Maicena
        </h1>
        <img
          src={galletas}
          alt="Galletas de Maicena"
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
      <div className="hidden" ref={printRef}>
        <h1>Galletas de Maicena</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
