/** @format */

import React from "react";
import { useNavigate } from "react-router-dom";
import { User } from "../../../types/User";

type Props = {
  user: User;
};

export default function UserCard({ user }: Props) {
  const navigate = useNavigate();

  const handleGoToInformationPage = (id: number) => {
    navigate(`/informations/${id}`);
  };

  return (
    <div
      className={`bg-[#333333] h-[400px] ${
        user.id === 0 ? "w-[350px] mb-[20px]" : ""
      } flex flex-col justify-center group border rounded-md border border-[#333333] cursor-pointer`}
      onClick={() => handleGoToInformationPage(user.id)}
    >
      <img
        src={user.image}
        className="h-[300px] object-contain transition-all duration-300 group-hover:h-[320px]"
        alt={`Image of ${user.firstName} ${user.lastName}`}
      />
      <p className="text-center mt-[10px]">
        {user.firstName}, {user.lastName}
      </p>
      {user.id != 0 && <p className="text-center mt-[2px]">{user.matricule}</p>}
    </div>
  );
}
