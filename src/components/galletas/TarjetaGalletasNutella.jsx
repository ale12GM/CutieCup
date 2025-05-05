import React, { useState, useRef } from "react";
import galletas from "../../assets/recetasdegalletas/galletasnutella.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Estas galletas rellenas de Nutella son suaves por dentro, crujientes por fuera y con un delicioso corazón de crema de avellanas. Perfectas para acompañar una taza de leche o café, ¡y satisfacer cualquier antojo dulce!`,
  Ingredientes: `- 1/2 taza de manteca a temperatura ambiente\n- 1/2 taza de azúcar\n- 1/2 taza de azúcar morena\n- 1 huevo\n- 1 cdita de esencia de vainilla\n- 1 1/2 tazas de harina común\n- 1/2 cdita de bicarbonato de sodio\n- 1 pizca de sal\n- Nutella (cantidad necesaria)\n- Azúcar impalpable (opcional, para decorar)`,
  Pasos: `1. Colocar cucharaditas de Nutella sobre una bandeja con papel manteca y congelarlas por 30 minutos.\n2. Precalentar el horno a 180°C.\n3. Batir la manteca con ambos tipos de azúcar hasta lograr una mezcla cremosa.\n4. Agregar el huevo y la esencia de vainilla. Mezclar bien.\n5. Incorporar la harina tamizada con el bicarbonato y la sal. Mezclar hasta lograr una masa suave.\n6. Tomar porciones de masa, formar bolitas, aplanar un poco y colocar un relleno congelado de Nutella en el centro. Cerrar bien formando una esfera.\n7. Colocar las galletas en una bandeja con papel manteca dejando espacio entre cada una.\n8. Hornear durante 10-12 minutos o hasta que estén ligeramente doradas en los bordes.\n9. Dejar enfriar y, si se desea, espolvorear con azúcar impalpable antes de servir.`,
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
          <title>Galletas Rellenas de Nutella</title>
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
          Galletas Rellenas de Nutella
        </h1>
        <img
          src={galletas}
          alt="Galletas rellenas de Nutella"
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
        <h1>Galletas Rellenas de Nutella</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
