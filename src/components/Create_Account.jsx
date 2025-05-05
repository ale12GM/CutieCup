import React, { useState } from 'react';
import { supabase } from "../supabase"; // Asegúrate que la ruta sea correcta
import { useNavigate } from "react-router-dom";

// Componente del formulario
function CreateForm({ onAccountGuardada }) { // Cambié el nombre para ser más descriptivo (antes CarrerasForm)
    
    // --- Estados ---
    const navigate = useNavigate();
    const [mensaje, setMensaje] = useState(null); // Para mostrar mensajes de éxito o error
    const [isLoading, setIsLoading] = useState(false); // Para indicar si se está procesando la petición
    const [formData, setFormData] = useState({ // Estado para los datos del formulario
        display_name: '',
        correo: '',
        password: '',
        confirm_password: '' // Añadido el valor inicial faltante
    });

    // --- Manejador de Cambios en Inputs ---
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    // --- Manejador del Envío del Formulario ---
    const handleSubmit = async (e) => {
        e.preventDefault(); // Corregido: preventDefault
        setMensaje(null);   // Limpia mensajes anteriores
        setIsLoading(true); // Empieza la carga

        // --- Validación ---
        if (!formData.display_name || !formData.correo || !formData.password || !formData.confirm_password) {
            setMensaje({ tipo: 'error', texto: 'Todos los campos son obligatorios.' }); // Corregido: 'texto' y mensaje más claro
            setIsLoading(false);
            return; // Detiene la ejecución si faltan campos
        }

        if (formData.password !== formData.confirm_password) {
            setMensaje({ tipo: 'error', texto: 'Las contraseñas no coinciden.' });
            setIsLoading(false);
            return; // Detiene la ejecución si las contraseñas no coinciden
        }

        // --- Intento de inserción en Supabase ---
        try {
            // OJO: Supabase auth maneja la creación de usuarios de forma segura.
            // Normalmente no insertarías la contraseña directamente en una tabla 'Users'.
            // Usarías supabase.auth.signUp()
            // Si *realmente* quieres guardar esto en una tabla personalizada (no recomendado para contraseñas):
            const { data, error } = await 
            supabase.auth.signUp({
              email: formData.correo,
              password: formData.password, // La contraseña en texto plano SÓLO aquí
              options:{
                data:{
                  display_name:formData.display_name
                }
              }
            });
            // select() es opcional después de insert si no necesitas los datos insertados

            if (error) {
                // Si hay un error específico de Supabase (p.ej., correo duplicado)
                console.error('Error Supabase:', error);
                // Puedes personalizar el mensaje basado en error.code o error.message
                 // Ejemplo: if (error.code === '23505') { // Código para violación de unicidad (ej. email ya existe)
                 //   setMensaje({ tipo: 'error', texto: 'El correo electrónico ya está registrado.' });
                 // } else {
                      setMensaje({ tipo: 'error', texto: `Error al crear cuenta: ${error.message}` });
                 // }
                throw error; // Lanza el error para que lo capture el catch general si es necesario
            }
            
            // --- Éxito ---
            setMensaje({ tipo: 'exito', texto: '¡Cuenta Creada!' }); // Corregido: setMensaje
            setTimeout(() => navigate("/"), 1000); 
            setFormData({ // Limpiar formulario
                display_name: '',
                correo: '',
                password: '',
                confirm_password: '' // Limpiar también confirm_password
            });
            
            // Llama a la función del componente padre si existe
            if (onAccountGuardada) { // Corregido: onAccountGuardada
                onAccountGuardada();
            }
            
            // Oculta el mensaje de éxito después de 3 segundos
            setTimeout(() => setMensaje(null), 3000);
            
        } catch (error) {
            // Captura errores generales o los lanzados desde el if(error) de supabase
            console.error('Error al guardar cuenta:', error); // Corregido: console
            if (!mensaje) { // Solo establece el mensaje si no se estableció uno más específico antes
                setMensaje({ tipo: 'error', texto: `Error inesperado: ${error.message || 'No se pudo guardar.'}` }); // Corregido: template string y fallback
            }
        } finally {
            // Esto se ejecuta siempre, haya error o no
            setIsLoading(false); // Termina la carga
        }
    }; // Cierre de handleSubmit

    // --- JSX del Componente ---
    return (
      <div className='p-24' >
        <div className="p-10 mb-10 p-6 bg-[#FFF5E1] rounded-[30px] shadow-md border border-gray-200 max-w-md mx-auto"> {/* Estilos para centrar y limitar ancho */}
            <h3 className="text-xl font-semibold text-[#A9746E] mb-6 text-center">Crear Cuenta</h3>

            <form onSubmit={handleSubmit} noValidate> {/* Añadido noValidate para que el navegador no interfiera con nuestra validación */}
                {/* Campo Nombre */}
                <label htmlFor="display_name" className="block text-[#A9746E] font-medium mb-2">Nombre a Mostrar</label>
                <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-[#A9746E] transition duration-200">
                <input
                        type="text"
                        placeholder="Display Name"
                        name="display_name"
                        value={formData.display_name}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent outline-none text-[#A9746E] placeholder-[#A9746E]" // Input transparente hereda bg del div
                        disabled={isLoading}
                    />
                </div>

                {/* Campo Correo */}
                <label htmlFor="correo" className="block text-[#A9746E] font-medium mb-2">Correo Electrónico </label>
                <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-[#A9746E] transition duration-200">
                    <input
                        type="email"
                        placeholder="usuario@correo.com"
                        name="correo"
                        value={formData.correo}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent outline-none text-[#A9746E] placeholder-[#A9746E]" // Input transparente hereda bg del div
                        disabled={isLoading}
                    />
                </div>

                {/* Campo Contraseña */}
                <label htmlFor="password" className="block text-[#A9746E] font-medium mb-2">Contraseña </label>
                <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-[#A9746E] transition duration-200">
                    <input
                        type="password"
                        placeholder="••••••••"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent outline-none text-[#A9746E] placeholder-[#A9746E]" // Input transparente hereda bg del div
                        disabled={isLoading}
                    />
                </div>

                 {/* Campo Confirmar Contraseña */}
                 <label htmlFor="confirm_password" className="block text-[#A9746E] font-medium mb-2">Confirmar Contraseña </label>
                 <div className="flex items-center border rounded-full px-3 py-2 bg-gray-50 focus-within:ring-2 focus-within:ring-[#A9746E] transition duration-200">
                    <input
                        type="password"
                        placeholder="••••••••"
                        name="confirm_password"
                        value={formData.confirm_password}
                        onChange={handleChange}
                        required
                        className="w-full bg-transparent outline-none text-[#A9746E] placeholder-[#A9746E]" // Input transparente hereda bg del div
                        disabled={isLoading}
                    />
                </div>

                {/* --- Área de Mensajes --- */}
                {mensaje && (
                    <div className={`mb-4 p-3 rounded-md text-sm ${mensaje.tipo === 'error' ? 'bg-[#FFF5E1] text-[#A9746E]' : 'bg-green-100 text-green-700'}`}>
                        {mensaje.texto}
                    </div>
                )}

                {/* --- Botón de Envío --- */}
                <div className='py-4 '>
                <button
                    type="submit"
                    className="w-full bg-[#FFA79C] py-3 hover:bg-[#FFA79C]/40 text-[#FFF5E1] font-bold py-2 px-4 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
                >
                    {isLoading ? 'Creando Cuenta...' : 'Crear Cuenta'}
                </button>
                </div>
            </form>
        </div></div>
    );
} // Cierre del componente CarrerasForm

export default CreateForm; // Exporta el componente