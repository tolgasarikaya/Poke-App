import Button from "../PageChange/Button";

import { useDispatch } from "react-redux";
import { curPageActions } from "../Redux/curPage";
import { useSelector } from "react-redux";

const PageChange = () => {
  const dispatch = useDispatch();
  const curPage = useSelector((state) => state.pageInfo.curPage);
  const minPage = useSelector((state) => state.pageInfo.minPage);
  const maxPage = useSelector((state) => state.pageInfo.maxPage);

  const arrowLeftPageChangeHandler = () => {
    dispatch(curPageActions.leftArrowClick());
  };
  const arrowRightPageChangeHandler = () => {
    dispatch(curPageActions.rightArrowClick());
  };
  const arr = Array.from({ length: 5 }, (_, i) => i - 2);
  console.log(curPage);

  return (
    <footer className="flex flex-row justify-center">
      <button
        className="text-2xl text-gray-700 mr-2"
        onClick={arrowLeftPageChangeHandler}
      >
        &larr;
      </button>
      {curPage > minPage + 2 && curPage < maxPage - 2 && (
        <>
          {arr.map((el, index) => (
            <Button key={index}>{curPage + el}</Button>
          ))}
        </>
      )}
      {curPage <= minPage + 2 && (
        <>
          {arr.map((el, index) => (
            <Button key={index}>{index + 1}</Button>
          ))}
        </>
      )}
      {curPage >= maxPage - 2 && (
        <>
          {arr.map((el, index) => (
            <Button key={index}>{maxPage + (index - 4)}</Button>
          ))}
        </>
      )}
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
