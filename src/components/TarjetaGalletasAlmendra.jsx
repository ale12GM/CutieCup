import React, { useState, useRef } from "react";
import galletas from "../assets/galletasalmendra.svg";

const tabs = ["Descripción", "Ingredientes", "Pasos"];

const content = {
  Descripción: `Las galletas de almendra son dulces crujientes por fuera y ligeramente suaves por dentro. Se caracterizan por su delicado sabor a almendra y pueden prepararse con harina de almendra o almendras molidas. Son perfectas para acompañar un café o té, y también se pueden bañar en chocolate.`,
  Ingredientes: `- 1 taza de harina común\n- 1/2 taza de harina de almendras\n- 1/2 taza de azúcar\n- 100 g de manteca a temperatura ambiente\n- 1 huevo\n- 1 cdita de esencia de vainilla\n- 1/2 cdita de polvo de hornear\n- Almendras laminadas (opcional, para decorar)`,
  Pasos: `1. Precalentar el horno a 180°C.\n2. Batir la manteca con el azúcar hasta que esté cremosa.\n3. Agregar el huevo y la esencia de vainilla. Mezclar.\n4. Incorporar la harina común, la de almendras y el polvo de hornear. Unir sin amasar.\n5. Formar bolitas y colocarlas en una bandeja con papel manteca. Aplastar ligeramente.\n6. Decorar con almendras laminadas si se desea.\n7. Hornear durante 12 a 15 minutos o hasta que estén doradas en los bordes.\n8. Dejar enfriar antes de servir.`,
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
          <title>Galletas de Almendra</title>
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
          Galletas de Almendra
        </h1>
        <img
          src={galletas}
          alt="Galletas de Almendra"
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
        <h1>Galletas de Almendra</h1>
        <h2>Ingredientes:</h2>
        <pre>{content["Ingredientes"]}</pre>
        <h2>Pasos:</h2>
        <pre>{content["Pasos"]}</pre>
      </div>
    </div>
  );
}
