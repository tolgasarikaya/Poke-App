import { IoIosSearch } from "react-icons/io";

import { useDispatch } from "react-redux";
import { inputNameActions } from "../Redux/inputName";
import { curPageActions } from "../Redux/curPage";

const SearchBar = (props) => {
  const dispatch = useDispatch();

  const inputPokemonHandler = (e) => {
    dispatch(inputNameActions.inputName(e));
    dispatch(curPageActions.buttonClick(1));
  };
  return (
    <label htmlFor="input" className={`relative ${props.className}`}>
      <IoIosSearch size={20} className="absolute top-2 left-2 text-gray-600" />
      <input
        id="input"
        type="text"
        placeholder="Search for a pokemon"
        className={`border-2 border-slate-100 rounded-lg pl-8 py-1 focus:outline-none focus:shadow-md focus:border-slate-300 w-full md:w-full`}
        onChange={(event) =>
          inputPokemonHandler(event.target.value.toLocaleLowerCase())
        }
      />
    </label>
  );
};

export default SearchBar;
