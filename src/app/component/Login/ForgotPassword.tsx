import React, { useEffect } from "react";
import { Mail } from "lucide-react";

interface ForgotPasswordProps {
  isModalOpen: boolean;
  closeModal: () => void;
}

const ForgotPassword: React.FC<ForgotPasswordProps> = ({ isModalOpen, closeModal }) => {
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isModalOpen]);

  return (
    isModalOpen && (
      <div className="fixed inset-0 z-50 flex items-center justify-center">
        <div
          className="absolute inset-0 bg-black/20 backdrop-blur-sm"
          onClick={closeModal}
        ></div>

        <div className="relative w-full max-w-md transform transition-all duration-500 animate-modal-slide-in">
          <div className="relative bg-gradient-to-br from-blue-950 to-purple-950 rounded-2xl overflow-hidden">
            <div className="h-2 w-full bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600"></div>

            <div className="p-8 space-y-6">
              <div className="text-center space-y-2">
                <div className="mx-auto w-16 h-16 bg-yellow-400/10 rounded-full flex items-center justify-center mb-4">
                  <Mail className="w-8 h-8 text-yellow-400" />
                </div>
                <h2 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-yellow-400 to-orange-500 bg-clip-text text-transparent">
                  RECUPERAR CONTRASEÑA
                </h2>
                <p className="text-gray-300 text-sm">
                  Ingresa tu correo electrónico para recibir el enlace de
                  recuperación
                </p>
              </div>
              <div className="relative group">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  className="w-full p-4 pl-12 bg-black/20 backdrop-blur-xl border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 hover:border-yellow-400/30"
                />
              </div>
              <div className="flex justify-between space-x-4 pt-4">
                <button
                  onClick={closeModal}
                  className="flex-1 p-3 rounded-xl border border-gray-600 hover:bg-gray-800/50 transition-all duration-300 transform hover:scale-105"
                >
                  Cancelar
                </button>
                <button className="flex-1 p-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-xl font-semibold hover:scale-105 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 transform">
                  Enviar enlace
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};

export default ForgotPassword;
