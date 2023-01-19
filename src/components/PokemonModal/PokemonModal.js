import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";
const PokemonModal = (props) => {
  return ReactDOM.createPortal(
    <div
      className="fixed w-screen inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center"
      onClick={() => props.display(false)}
    >
      <div
        className="bg-white p-6 rounded-xl w-4/5 relative h-5/6 min-[700px]:w-1/2 flex flex-col justify-center"
        onClick={(e) => e.stopPropagation()}
      >
        <AiOutlineClose
          size={40}
          className="absolute top-4 right-4 rounded-full p-2 text-gray-700 hover:bg-gray-300 hover:bg-opacity-30 hover:cursor-pointer"
          onClick={() => props.display(false)}
        />
        <img
          src={props.poke.img}
          alt="corresponding pokemon"
          className="w-2/3 mx-auto min-[370px]:w-[10rem] md:w-1/2"
        />
        <h1 className="font-bold text-xl text-gray-600 my-4 text-center">
          {props.poke.name.charAt(0).toUpperCase() + props.poke.name.slice(1)}
        </h1>
        <div className="flex flex-row justify-center gap-2 ">
          {props.poke.types.map((el, i) => {
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
                  `text-md border-2 border-transparent rounded-xl px-2 mb-5 text-white ` +
                  color
                }
                key={i}
              >
                {el}
              </p>
            );
          })}
        </div>
        <div className="grid grid-cols-3 gap-2 text-md">
          <div className="flex flex-col items-center">
            <p className=" font-semibold ">HP</p>
            <p className="border-2 rounded-full border-blue-400 px-1">
              {props.poke.stats.hp}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" font-semibold ">Attack</p>
            <p className="border-2 rounded-full border-blue-400 px-1">
              {props.poke.stats.attack}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" font-semibold ">Defense</p>
            <p className="border-2 rounded-full border-blue-400 px-1">
              {props.poke.stats.defense}
            </p>
          </div>

          <div className="flex flex-col items-center">
            <p className=" font-semibold">SP.Attack</p>
            <p className="border-2 rounded-full border-blue-400 px-1 ">
              {props.poke.stats.special_attack}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" font-semibold">SP.Defense</p>
            <p className="border-2 rounded-full border-blue-400 px-1">
              {props.poke.stats.special_defense}
            </p>
          </div>
          <div className="flex flex-col items-center">
            <p className=" font-semibold">Speed</p>
            <p className="border-2 rounded-full border-blue-400 px-1">
              {props.poke.stats.speed}
            </p>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("portal")
  );
};

export default PokemonModal;
