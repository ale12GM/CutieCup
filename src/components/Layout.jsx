import { Link } from "react-router-dom";
import logo from "../assets/header_logo.svg";




export default function Layout({ children }) {
  return (

    <div className="flex flex-col font-sans text-[#A9746E] min-h-screen bg-[#FFF5E1] ">

      <header className="bg-[#FFF5E1] w-full py-4 px-6 flex flex-col items-center relative  shadow-sm">

        <div className="absolute right-6 top-1/2 transform -translate-y-1/2 flex gap-2">
          <Link to="/" className="font-['Orelega_One'] rounded-full py-2 px-4 bg-[#ffb4a3] hover:bg-[#fad1c3]/80 text-[#FFF5E1] font-semibold transition duration-300">
            Iniciar Sesión
          </Link>

          <Link to="/Create_Account" className="font-['Orelega_One'] rounded-full py-2 px-4 bg-[#fad1c3] hover:bg-[#ffb4a3] text-[#A9746E] hover:text-[#8d5a53] font-semibold transition duration-300">
            Crear cuenta
          </Link>
        </div>


        <div className="flex flex-col items-center pt-2 pb-1">
          <img src={logo} alt="Logo CutieCup" className=" h-12 md:h-16 "/>
        </div>
      </header>


      <main className="flex-grow flex justify-center p-4 bg-[#ffffff]">
        {children}
      </main>

      <footer className="
        bg-[#FFF5E1] text-[#A9746E] w-full py-2 px-4">

        <div className="font-['Orelega_One'] flex flex-wrap justify-between items-center mx-auto gap-x-6 gap-y-2 mb-4 text-lg font-medium max-w-7xl">
          <Link to="/categorias/budines" className="hover:text-[#8d5a53]">Budines</Link>
          <span className="text-[#C2998F] text-3xl hidden sm:inline">∘</span>
          <Link to="/categorias/tortas" className="hover:text-[#8d5a53]">Tortas</Link>
          <span className="text-[#C2998F] text-3xl hidden sm:inline">∘</span>
          <Link to="/categorias/galletas" className="hover:text-[#8d5a53]">Galletas</Link>
          <span className="text-[#C2998F] text-3xl hidden sm:inline">∘</span>
          <Link to="/categorias/helados" className="hover:text-[#8d5a53]">Helados</Link>
          <span className="text-[#C2998F] text-3xl hidden sm:inline">∘</span>
          <Link to="/categorias/flanes" className="hover:text-[#8d5a53]">Flanes</Link>
        </div>

        <div className=" flex flex-col items-center mt-4 ">
          <img src={logo}  alt="Logo CutieCup pie de página" className="h-10 md:h-12 opacity-70 mb-4 mt-4"/>
        </div>
      </footer>
    </div>
  );
}