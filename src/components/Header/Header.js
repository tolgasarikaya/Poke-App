import SearchBar from "../SearchBar/SearchBar";
import Logo from "../Images/pokemon-logo.png";

const Header = () => {
  return (
    <nav className="flex flex-row justify-around items-center bg-red-500 py-2 md:justify-between">
      <img src={Logo} alt="Pokemon logo" className=" w-40 md:ml-10" />
      <SearchBar className="md:w-1/3 md:mr-10" />
    </nav>
  );
};

export default Header;
