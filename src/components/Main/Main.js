import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { getPokemons } from "../../fetchData/getPokemons";
import { curPageActions } from "../Redux/curPage";
import { useDispatch } from "react-redux";
import PokemonModal from "../PokemonModal/PokemonModal";

const Main = () => {
  const [pokemons, setPokemons] = useState([]);
  const [pokeModal, setPokeModal] = useState(false);
  const [selectedPoke, setSelectedPoke] = useState(null);
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const type = useSelector((state) => state.typeInfo.type);
  const sort = useSelector((state) => state.sortInfo.sort);
  const inputName = useSelector((state) => state.pokemonInputName.name);

  useEffect(() => {
    getPokeDatas();
  }, []);

  const getPokeDatas = async () => {
    try {
      const res = await getPokemons();
      setPokemons(res);
    } catch (err) {
      console.log(err);
    }
  };

  const pokemonLength = pokemons[0]?.name
    ? pokemons
        .filter((poke) => {
          return (
            poke.types.includes(type.toLowerCase()) ||
            type === "Sort by Type" ||
            type === "All"
          );
        })
        .filter((poke) => {
          return poke.name.startsWith(inputName);
        }).length
    : 905;
  dispatch(curPageActions.maxPageChange(pokemonLength));

  const pokemonModalHandler = (poke) => {
    setSelectedPoke(poke);
    setPokeModal(true);
  };

  return (
    <>
      {pokeModal && <PokemonModal poke={selectedPoke} display={setPokeModal} />}
      <main className=" grid grid-cols-2 gap-5 m-2 content-evenly  min-[600px]:grid-cols-3 min-[920px]:grid-cols-4 xl:grid-cols-5">
        {pokemons[0]?.name &&
          pokemons
            .filter((poke) => {
              return (
                poke.types.includes(type.toLowerCase()) ||
                type === "Sort by Type" ||
                type === "All"
              );
            })
            .sort((a, b) => b.stats[sort] - a.stats[sort])
            .filter((poke) => {
              return poke.name.startsWith(inputName);
            })
            .slice((curPage - 1) * 20, curPage * 20)
            .map((poke, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col w-full items-center border-1  rounded-2xl bg-[#f2f2f2] shadow-md hover:bg-white hover:cursor-pointer hover:shadow-2xl hover:scale-110 transition delay-200 duration-200 ease-in-out"
                  onClick={() => pokemonModalHandler(poke)}
                >
                  <img
                    src={poke.img}
                    alt="Corresponding pokemon"
                    className="w-2/5 my-3"
                  />
                  <p>
                    {poke.name.charAt(0).toUpperCase() + poke.name.slice(1)}
                  </p>
                  <div className="flex flex-row gap-2 ">
                    {poke.types.map((el, i) => {
                      let color = "bg-[#ffffff]";
                      switch (el) {
                        case "normal":
                          color = `bg-[#9e9a98]`;
                          break;
                        case "steel":
                          color = `bg-[#5e5a58]`;
                          break;
                        case "bug":
                          color = `bg-[#68782f]`;
                          break;
                        case "grass":
                          color = `bg-[#2f8f2e]`;
                          break;
                        case "dark":
                          color = `bg-[#232923]`;
                          break;
                        case "dragon":
                          color = `bg-[#294e80]`;
                          break;
                        case "electric":
                          color = `bg-[#ffbf00]`;
                          break;
                        case "fairy":
                          color = `bg-[#ff99ff]`;
                          break;
                        case "fighting":
                          color = `bg-[#532d2d]`;
                          break;
                        case "fire":
                          color = `bg-[#f90606]`;
                          break;
                        case "flying":
                          color = `bg-[#4da6ff]`;
                          break;
                        case "ghost":
                          color = `bg-[#004080]`;
                          break;
                        case "ground":
                          color = `bg-[#b99c46]`;
                          break;
                        case "ice":
                          color = `bg-[#00ffff]`;
                          break;
                        case "poison":
                          color = `bg-[#9605c7]`;
                          break;
                        case "psychic":
                          color = `bg-[#c70596]`;
                          break;
                        case "rock":
                          color = `bg-[#998f66]`;
                          break;
                        case "water":
                          color = `bg-[#66ccff]`;
                          break;
                      }

                      return (
                        <p
                          className={
                            `border-2 text-sm md:text-base border-transparent rounded-xl px-2 my-1 text-white ` +
                            color
                          }
                          key={i}
                        >
                          {el}
                        </p>
                      );
                    })}
                  </div>
                  <div className="flex flex-row text-[10px] gap-0.5 bg-gray-300 my-2 sm:text-[12px] md:gap-2">
                    <div className="flex flex-col items-center border-1 border-slate-500 ">
                      <p>HP</p>
                      <p>{poke.stats.hp}</p>
                    </div>
                    <div className="flex flex-col items-center border-1 border-slate-500">
                      <p>ATK</p>
                      <p>{poke.stats.attack}</p>
                    </div>
                    <div className="flex flex-col items-center border-1 border-slate-500">
                      <p>DEF</p>
                      <p>{poke.stats.defense}</p>
                    </div>
                    <div className="flex flex-col items-center border-1 border-slate-500">
                      <p>SP.ATK</p>
                      <p>{poke.stats.special_attack}</p>
                    </div>
                    <div className="flex flex-col items-center border-1 border-slate-500">
                      <p>SP.DEF</p>
                      <p>{poke.stats.special_defense}</p>
                    </div>
                    <div className="flex flex-col items-center border-1 border-slate-500">
                      <p>SPD</p>
                      <p>{poke.stats.speed}</p>
                    </div>
                  </div>
                </div>
              );
            })}
      </main>
    </>
  );
};

export default Main;
