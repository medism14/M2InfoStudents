/** @format */

import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../utils/data.json";
import TabTitle from "../utils/TabTitle";

type User = {
  id: number;
  firstName: string;
  lastName: string;
  birthDate: string;
  placeOfBirth: string;
  codingStrengths: string;
  codingWeaknesses: string;
  image: string;
  biggestAchievementsInCoding: string;
  interestingFunFact: string;
};

export default function Information() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [age, setAge] = useState(0);

  useEffect(() => {
    const userData = data.find((u) => u.id === Number(id));
    if (userData) {
      setUser(userData as User);

      let now = new Date();
      let dateBirth = new Date(userData.birthDate);

      let age = now.getFullYear() - dateBirth.getFullYear();
      let monthDiff = now.getMonth() - dateBirth.getMonth();
      let dateDiff = now.getDate() - dateBirth.getDate();

      if (monthDiff > 0 || (monthDiff == 0 && dateDiff > 0)) {
        age--;
      }

      setAge(age);
    }
  }, [id]);

  useEffect(() => {
    TabTitle(`M2 Info Students - ${user?.firstName} ${user?.lastName}`);
  }, [user]);

  if (!user) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        Loading...
      </div>
    );
  }

  return (
    <div className="text-white">
      <div className="mx-auto">
        <button
          onClick={() => navigate("/")}
          className="mb-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back
        </button>

        <div className="bg-gray-800 p-[20px] rounded-lg shadow-xl">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>

            <div className="md:w-2/3">
              <h1 className="text-4xl font-bold mb-4">
                {user.firstName} {user.lastName}
              </h1>

              <div className="mb-6">
                <p className="text-gray-400 text-[16px] md:text-[18px]">
                  Born on {new Date(user.birthDate).toLocaleDateString()} in{" "}
                </p>
                <p className="text-gray-400 text-[16px] md:text-[18px]">
                  Age: {age} years old
                </p>
                <p className="text-gray-400 text-[18px] md:text-[22px]">
                  {user.placeOfBirth}
                </p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-green-400">
                  Coding Strengths
                </h2>
                <p>{user.codingStrengths}</p>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold mb-2 text-red-400">
                  Areas for Improvement
                </h2>
                <p>{user.codingWeaknesses}</p>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold mb-2 text-blue-400">
                Biggest Achievement in Coding
              </h2>
              <p className="text-gray-300">
                {user.biggestAchievementsInCoding}
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold mb-2 text-purple-400">
                Fun Fact
              </h2>
              <p className="text-gray-300">{user.interestingFunFact}</p>
            </div>
          </div>
        </div>

        <button
          onClick={() => navigate("/")}
          className="mt-4 px-6 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
        >
          Back
        </button>
      </div>
    </div>
  );
}
