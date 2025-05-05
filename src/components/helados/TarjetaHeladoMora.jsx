import React, { useState, useRef } from "react";
import helado from "../../assets/ImagesRecetas/heladoMora.jpg"; // Asegúrate de tener esta imagen disponible en tu proyecto

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El helado de mora es un postre vibrante y lleno de sabor, ideal para los amantes de las frutas del bosque. Su textura cremosa y su intensidad frutal lo convierten en una opción sofisticada y refrescante para cualquier temporada.`,
  Ingredientes: `- 2 tazas de moras frescas o congeladas\n- 1 taza de azúcar\n- 1 taza de leche entera\n- 2 tazas de crema de leche\n- 1 cdita de jugo de limón\n- 1 cdita de extracto de vainilla (opcional)\n- Pizca de sal`,
  Pasos: `1. Licúa las moras con el azúcar y el jugo de limón hasta obtener un puré homogéneo.\n2. Pasa el puré por un colador para eliminar las semillas (opcional).\n3. Mezcla el puré con la leche, la crema, la vainilla y la sal.\n4. Refrigera al menos 2 horas.\n5. Procesa en máquina de helado o congela removiendo cada 30 minutos para evitar cristales.\n6. Sirve cuando adquiera consistencia cremosa.`,
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
          <title>Helado de Mora</title>
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
          Helado de Mora
        </h1>
        <img
          src={helado}
          alt="Helado de Mora"
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
        <h1>Helado de Mora</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
