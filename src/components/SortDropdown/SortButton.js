import { useDispatch } from "react-redux";
import { selectedSortActions } from "../Redux/selectedSort";
import { curPageActions } from "../Redux/curPage";

const SortButton = (props) => {
  const dispatch = useDispatch();
  const sortHandler = (sort) => {
    dispatch(selectedSortActions.dropdownSortSelect(sort));
    dispatch(curPageActions.buttonClick(1));
  };
  return (
    <button
      className="w-full hover:bg-gray-100"
      onClick={() =>
        sortHandler(props.children.toLowerCase().replaceAll(" ", "_"))
      }
    >
      {props.children}
    </button>
  );
};

export default SortButton;
