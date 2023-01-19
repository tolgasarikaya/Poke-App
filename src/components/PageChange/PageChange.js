import Button from "../PageChange/Button";

import { useDispatch } from "react-redux";
import { curPageActions } from "../Redux/curPage";
import { useSelector } from "react-redux";

const PageChange = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const maxPage = useSelector((state) => state.pageInfo.maxPage);

  const arrowLeftPageChangeHandler = () => {
    dispatch(curPageActions.leftArrowClick());
  };
  const arrowRightPageChangeHandler = () => {
    dispatch(curPageActions.rightArrowClick());
  };

  const arr = Array.from({ length: maxPage }, (_, i) => i + 1);

  return (
    <footer className="flex flex-row justify-center">
      <button
        className="text-2xl text-gray-700 mr-2"
        onClick={arrowLeftPageChangeHandler}
      >
        &larr;
      </button>
      {arr
        .filter((el) => el <= curPage + 2 && el >= curPage - 2)
        .map((el, i) => (
          <Button key={i}>{el}</Button>
        ))}
      <button
        className="text-2xl text-gray-700 ml-2"
        onClick={arrowRightPageChangeHandler}
      >
        &rarr;
      </button>
    </footer>
  );
};

export default PageChange;
