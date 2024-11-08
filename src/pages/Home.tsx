/** @format */

import { useEffect, useState } from "react";
import dataJson from "../utils/data.json";
import UserCard from "../components/PageComponents/Home/UserCard";
import { User } from "../types/User";
import TabTitle from "../utils/TabTitle";

type Props = {};

export default function Home({}: Props) {
  const [data, setData] = useState<User[]>([]);
  // const [professorData, setProfessorData] = useState<User>();
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search) {
      const newData = dataJson.filter(
        (user) =>
          user.id != 0 && (user.firstName.toLowerCase().includes(search.toLowerCase()) ||
          user.lastName.toLowerCase().includes(search.toLowerCase()))
      );
      console.log(newData);
      if (newData) {
        console.log("oui");
      } else {
        console.log("non");
      }
      setData(newData);
    } else {
      const newData = dataJson.filter((user) => user.id !== 0);
      // setProfessorData(dataJson[0]);
      setData(newData);
    }
  }, [search]);

  useEffect(() => {
    TabTitle("M2 Info Students");
  }, [])

  const handleSearchValue = (event: any) => {
    setSearch(event.target.value);
  };

  return (
    <>
      {/* {professorData && (
        <div className="flex items-center flex flex-col gap-[8px]">
          <p className="text-center font-bold text-[30px]">Our professor</p>
          <UserCard key={professorData.id} user={professorData} />
        </div>
      )} */}

      <section className="flex flex-col gap-[50px] w-full bg-[#444444] px-[40px] py-[20px] rounded">
        {/* Search Bar */}
        <input
          className="w-[250px] h-[35px] sm:w-[420px] sm:h-[40px] md:w-[520px] md:h-[40px] mx-auto outline-none rounded-lg bg-[#666666] px-[10px]"
          type="text"
          onChange={handleSearchValue}
          placeholder="Recherchez un nom d'étudiant"
        />

        <h1 className="text-[40px] font-bold text-center">M2DFSW Students</h1>
        {data.length > 0 && (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.map((user) => (
              <UserCard key={user.id} user={user} />
            ))}
          </div>
        )}

        {data.length === 0 && (
          <p className="text-center font-bold text-[30px] underline text-[#BEBEBE]">
            No users available
          </p>
        )}
      </section>
    </>
  );
}
