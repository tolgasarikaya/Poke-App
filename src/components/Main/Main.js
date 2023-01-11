import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import FetchAllPokemons from "../FetchAllPokemons/FetchAllPokemons";
const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const curPage = useSelector((state) => state.pageInfo.curPage);
  useEffect(
    () => FetchAllPokemons({ updatePokemons: setPokemons, curPage: curPage }),
    [curPage]
  );

  return (
    <main className="grid grid-cols-2 min-[600px]:grid-cols-3 min-[920px]:grid-cols-4 xl:grid-cols-5">
      {pokemons[0]?.name &&
        pokemons.map((poke, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center border-2 m-8 rounded-2xl bg-gray-600/30 shadow-md hover:bg-gray-600/50 hover:cursor-pointer hover:shadow-2xl hover:scale-110 transition delay-200 duration-200 ease-in-out"
            >
              <img
                src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
                  index + 1 + (curPage - 1) * 20
                }.png`}
                alt="Corresponding pokemon"
                className="w-full"
              />
              <p className="font-medium mb-2 text-gray-900">
                {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
              </p>
            </div>
          );
        })}
    </main>
  );
};

export default Main;
