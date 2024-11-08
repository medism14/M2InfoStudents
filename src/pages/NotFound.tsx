/** @format */

import React from "react";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import TabTitle from "../utils/TabTitle";

type Props = {};

export default function NotFound({}: Props) {
  const navigate = useNavigate();

  useEffect(() => {
    TabTitle("404 - Page non trouvée");
  }, []);

  return (
    <section className="min-h-screen w-full flex flex-col justify-center items-center bg-gray-900">
      <div className="text-center space-y-6">
        <h1 className="text-9xl font-extrabold text-white tracking-widest">404</h1>
        <div className="bg-[#FF6A3D] px-2 text-sm rounded rotate-12 absolute">
          Page non trouvée
        </div>
        <div className="text-xl font-medium text-gray-400 mb-8">
          Désolé, la page que vous recherchez n'existe pas.
        </div>
        <button
          onClick={() => navigate("/")}
          className="px-8 py-3 bg-[#FF6A3D] text-white font-semibold rounded-lg hover:bg-[#FF8C3D] transition-colors"
        >
          Retourner à l'accueil
        </button>
      </div>
    </section>
  );
}
