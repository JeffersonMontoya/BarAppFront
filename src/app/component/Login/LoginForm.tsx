"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { UserCircle2, ArrowRight, Lock } from "lucide-react";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { loginUser } from "@/app/api/login/Login";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  username: yup
    .string()
    .matches(
      /^[A-Za-z0-9_-]+$/,
      "El nombre de usuario solo puede contener letras, números, guiones y guiones bajos"
    )
    .min(4, "El nombre de usuario debe tener al menos 4 caracteres")
    .max(20, "El nombre de usuario no debe exceder los 20 caracteres")
    .required("El nombre de usuario es obligatorio"),

  password: yup
    .string()
    .min(8, "La contraseña debe tener al menos 8 caracteres")
    // .matches(/[A-Z]/, "La contraseña debe contener al menos una letra mayúscula")
    // .matches(/[a-z]/, "La contraseña debe contener al menos una letra minúscula")
    // .matches(/[0-9]/, "La contraseña debe contener al menos un número")
    // .matches(/[^A-Za-z0-9]/, "La contraseña debe contener al menos un carácter especial")
    .required("La contraseña es obligatoria"),
});

const LoginForm: React.FC = () => {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { username: string; password: string }) => {
    try {
      const response = await loginUser(data);
      const token = response.data.token;
      Cookies.set("token", token, { expires: 20});
      const tokenDECOOKIER = Cookies.get("token");

      if (tokenDECOOKIER) {
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Usuario o contraseña incorrectos");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="relative group flex flex-col">
        <div className="relative group flex items-center transform transition-all duration-300 hover:-translate-y-1">
          <UserCircle2 className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
          <input
            type="text"
            placeholder="Usuario"
            {...register("username")}
            className="w-full p-4 pl-12 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 hover:border-yellow-400/30"
          />
        </div>
        {errors.username && (
          <p className="mt-2 text-sm text-red-400">{errors.username.message}</p>
        )}
      </div>
      <div className="relative group flex flex-col">
        <div className="relative group flex items-center transform transition-all duration-300 hover:-translate-y-1">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-400 group-hover:text-yellow-400 transition-colors duration-300" />
          <input
            type="password"
            placeholder="Contraseña"
            {...register("password")}
            className="w-full p-4 pl-12 bg-black/30 backdrop-blur-xl border border-gray-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-400/50 focus:border-transparent transition-all duration-300 hover:border-yellow-400/30"
          />
        </div>
        {errors.password && (
          <p className="mt-2 text-sm text-red-400">{errors.password.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="w-full p-4 bg-gradient-to-r from-yellow-400 via-orange-500 to-purple-600 rounded-xl font-bold transform hover:scale-[1.02] hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300 flex items-center justify-center space-x-2 group"
      >
        <span>INGRESAR</span>
        <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
      </button>
    </form>
  );
};

export default LoginForm;
