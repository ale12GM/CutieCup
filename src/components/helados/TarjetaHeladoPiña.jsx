import React, { useState, useRef } from "react";
import helado from "../../assets/ImagesRecetas/heladoPiña.jpg"; // Asegúrate de tener esta imagen disponible en tu proyecto

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `El helado de piña es un postre tropical, refrescante y ligeramente ácido. Perfecto para días calurosos, su sabor natural a fruta lo convierte en una opción deliciosa y saludable. Puedes prepararlo con fruta fresca o en conserva.`,
  Ingredientes: `- 2 tazas de piña fresca picada\n- 1 taza de azúcar\n- 1 taza de leche entera\n- 2 tazas de crema de leche\n- 1 cdita de jugo de limón\n- Pizca de sal`,
  Pasos: `1. Procesa la piña con el azúcar y el jugo de limón hasta formar un puré suave.\n2. En un bowl, mezcla el puré con la leche, la crema y la pizca de sal.\n3. Refrigera por al menos 2 horas para intensificar el sabor.\n4. Vierte en máquina de helado o congela removiendo cada 30 minutos.\n5. Una vez cremoso, sirve y disfruta frío.`,
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
          <title>Helado de Piña</title>
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
          Helado de Piña
        </h1>
        <img
          src={helado}
          alt="Helado de Piña"
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
        <h1>Helado de Piña</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
