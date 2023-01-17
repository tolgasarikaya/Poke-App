import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { selectedTypeActions } from "../Redux/selectedType";
import { curPageActions } from "../Redux/curPage";

const Button = (props) => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const typeChangeHandler = (type) => {
    dispatch(selectedTypeActions.dropdownTypeSelect(type));
    dispatch(curPageActions.buttonClick(1));
  };
  return (
    <button
      className="w-full hover:bg-gray-100"
      onClick={() => typeChangeHandler(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Button;
