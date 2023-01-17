import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import PageChange from "./components/PageChange/PageChange";
import PokemonModal from "./components/PokemonModal/PokemonModal";
import TypeDropdown from "./components/TypeDropdown/TypeDropdown";
import SortDropdown from "./components/SortDropdown/SortDropdown";

function App() {
  return (
    <>
      <Header />
      <div className="flex flex-row gap-2">
        <TypeDropdown />
        <SortDropdown />
      </div>

      <Main />
      <PageChange />
    </>
  );
}

export default App;
