import { useState } from 'react';
import { supabase } from '../supabase';
import { useNavigate } from 'react-router-dom';
import { FiMail, FiLock } from "react-icons/fi"; // Asegúrate de que esta importación está presente

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMensaje("");

    // Intento de inicio de sesión con Supabase
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    setLoading(false);

    if (error) {
      console.error("Error de Supabase:", error.message);
      setMensaje("❌ Usuario o contraseña incorrectos");
    } else {
      setMensaje("✅ Acceso concedido. Redirigiendo...");
      setTimeout(() => navigate("/dashboard"), 1000);
    }
  };

  // --- JSX con estilos de Tailwind y los iconos ---
  return (
    // Contenedor principal con fondo degradado y centrado
    <div className="min-h-screen bg-gradient-to-tr from-gray-200 via-indigo-100 to-blue-200 flex items-center justify-center p-4">

      {/* Tarjeta del formulario */}
      <div className="bg-white px-8 sm:px-10 py-10 sm:py-12 rounded-xl shadow-xl w-full max-w-md">

        {/* Título */}
        <h1 className="text-3xl font-extrabold text-center text-gray-800 mb-8">
          Bienvenido
        </h1>

        {/* Formulario */}
        <form onSubmit={handleSubmit} className="space-y-6">

          {/* Grupo Email con Icono */}
          <div>
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Correo</label>
            {/* Div contenedor para el icono y el input */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500 transition duration-200">
              <FiMail className="text-gray-400 mr-2 flex-shrink-0" /> {/* Icono Email */}
              <input
                type="email"
                id="email"
                placeholder="usuario@correo.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400" // Input transparente hereda bg del div
              />
            </div>
          </div>

          {/* Grupo Contraseña con Icono */}
          <div>
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Contraseña</label>
            {/* Div contenedor para el icono y el input */}
            <div className="flex items-center border rounded-lg px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-indigo-500 transition duration-200">
              <FiLock className="text-gray-400 mr-2 flex-shrink-0" /> {/* Icono Contraseña */}
              <input
                type="password"
                id="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full bg-transparent outline-none text-gray-700 placeholder-gray-400" // Input transparente hereda bg del div
              />
            </div>
          </div>

          {/* Botón de envío */}
          <button
            type="submit"
            disabled={loading}
            className={`w-full py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-lg transition duration-300 ease-in-out ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
          >
            {loading ? "Ingresando..." : "Ingresar"}
          </button>

          {/* Mensaje de estado/error */}
          {mensaje && (
            <div className={`text-center mt-4 text-sm ${mensaje.startsWith('❌') ? 'text-red-600' : 'text-green-600'} font-medium`}>
              {mensaje}
            </div>
          )}
        </form>

      </div>
    </div>
  );
}