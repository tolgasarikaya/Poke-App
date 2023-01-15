import ReactDOM from "react-dom";
const PokemonModal = () => {
  return ReactDOM.createPortal(
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex items-center justify-center">
      Hello
    </div>,
    document.getElementById("portal")
  );
};

export default PokemonModal;
