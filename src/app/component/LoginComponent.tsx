"use client";

import React, { useState, useEffect } from "react";
import {
  UserCircle2,
  KeyRound,
  LogIn,
  ArrowRight,
  Mail,
  Shield,
  Lock,
  AlertCircle,
} from "lucide-react";

const LoginComponent = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const [showLoginForm, setShowLoginForm] = useState(false);

  useEffect(() => {
    setIsPageLoaded(true);
    setTimeout(() => setShowLoginForm(true), 500);
  }, []);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div
      className={`flex min-h-screen w-full items-center justify-center bg-gradient-to-br from-indigo-950 to-blue-900 text-white font-sans p-4 md:p-8 transition-opacity duration-1000 ${
        isPageLoaded ? "opacity-100" : "opacity-0"
      }`}
    >
      <div
        className={`flex flex-col md:flex-row w-full max-w-6xl h-full md:h-[80vh] rounded-2xl overflow-hidden shadow-2xl transition-all duration-1000 transform ${
          showLoginForm
            ? "translate-y-0 opacity-100"
            : "translate-y-10 opacity-0"
        }`}
      >
        <div className="flex flex-col items-center justify-center flex-1 bg-black/30 backdrop-blur-lg p-6 md:p-8 space-y-6 md:space-y-8 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 to-purple-900/30 animate-gradient-xy"></div>
          <div className="relative group z-10 hover:scale-105 transition-transform duration-500">
            <div className="absolute -inset-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-2xl blur opacity-70 group-hover:opacity-100 transition duration-1000 animate-pulse"></div>
            <div className="relative p-6 md:p-10 rounded-2xl bg-blue-950/80 backdrop-blur-xl">
              <div className="w-28 h-28 md:w-44 md:h-44 flex items-center justify-center border-2 border-yellow-400/40 rounded-xl relative overflow-hidden">
                <Shield className="w-12 h-12 md:w-16 md:h-16 text-yellow-400/70 animate-pulse" />
                <span className="absolute bottom-2 text-yellow-400/70 text-xs md:text-sm text-center">
                  Logo
                </span>
              </div>
            </div>
          </div>
          <div className="space-y-4 text-center max-w-md relative z-10">
            <h1 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform duration-300">
              NOMMBRE PLATAFORMA
            </h1>
            <p className="text-gray-300 leading-relaxed text-sm md:text-base px-4 animate-fade-in-up">
              Bienvenido a tu plataforma de gestión empresarial integral. Accede
              a todas tus herramientas en un solo lugar.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center flex-1 p-6 md:p-12 bg-black/40 backdrop-blur-lg relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-blue-900/20 animate-gradient-xy"></div>

          <div className="w-full max-w-md space-y-8 z-10">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold animate-fade-in-up bg-gradient-to-r from-yellow-400 to-purple-600 bg-clip-text text-transparent">
                INICIO DE SESIÓN
              </h2>
              <div className="h-2 w-48 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 mx-auto rounded-full shadow-lg hover:w-56 transition-all duration-500"></div>
            </div>

            <div className="space-y-6 mt-8">
              <div className="relative group transform transition-all duration-300 hover:-translate-y-1">
                <UserCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <input
                  type="text"
                  placeholder="Usuario"
                  className="w-full p-4 pl-12 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 hover:border-yellow-400/30"
                />
              </div>
              <div className="relative group transform transition-all duration-300 hover:-translate-y-1">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
                <input
                  type="password"
                  placeholder="Contraseña"
                  className="w-full p-4 pl-12 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 hover:border-yellow-400/30"
                />
              </div>
              <button className="w-full p-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-xl font-bold transform hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group">
                <span>INGRESAR</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </button>
              <div className="text-center">
                <button
                  onClick={openModal}
                  className="text-sm text-gray-400 hover:text-yellow-400 transition-all duration-300 inline-flex items-center space-x-2 group hover:scale-105"
                >
                  <LogIn className="w-5 h-5 transition-all duration-300 group-hover:rotate-12" />
                  <span>RECUPERAR CONTRASEÑA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {isModalOpen && (
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
      )}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div
            className="absolute inset-0 bg-black/10 backdrop-blur-sm"
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
      )}
    </div>
  );
};

export default LoginComponent;
