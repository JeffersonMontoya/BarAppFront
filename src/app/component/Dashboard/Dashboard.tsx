"use client";

import React from "react";
import Cookies from "js-cookie";
import { jwtDecode } from "jwt-decode";

interface JWTPayload {
  role_id: number;
}

interface DashboardProps {}

const TOKEN_COOKIE_KEY = "token";

const Dashboard: React.FC<DashboardProps> = () => {
  try {
    const token = Cookies.get(TOKEN_COOKIE_KEY);

    if (!token) {
      throw new Error("No authentication token found");
    }

    const decodedToken = jwtDecode<JWTPayload>(token);
    const { role_id } = decodedToken;

    if (process.env.NODE_ENV === "development") {
      console.log("User role ID:", role_id);
    }

    return (
      <main className="p-4">
        <h1 className="text-2xl font-bold">Bienvenido</h1>
      </main>
    );
  } catch (error) {
    console.error("Error in Dashboard:", error);

    return (
      <div className="p-4 text-red-500">
        <h1>Error de autenticación</h1>
      </div>
    );
  }
};

export default Dashboard;
