import { useDispatch } from "react-redux";
import { curPageActions } from "../Redux/curPage";
import { useSelector } from "react-redux";

const Button = (props) => {
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const dispatch = useDispatch();

  const changePageHandler = (child) => {
    dispatch(curPageActions.buttonClick(child));
  };
  return (
    <button
      onClick={() => changePageHandler(Number(props.children))}
      className={`${
        curPage === Number(props.children) ? "bg-slate-300/50 " : ""
      }m-1 text-gray-800 hover:bg-slate-200/50 rounded-full py-2 my-5 ${
        Number(props.children) >= 10 ? "px-3" : "px-4"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
