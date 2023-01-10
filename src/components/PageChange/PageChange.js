import { useState } from "react";
import Button from "../PageChange/Button";

const PageChange = () => {
  const [curPage, setCurPage] = useState(1);
  const minPage = 1;
  const maxPage = 58;
  const arr = Array.from({ length: 5 }, (_, i) => i - 2);
  const arrowLeftPageChangeHandler = () => {
    curPage !== minPage && setCurPage(curPage - 1);
  };
  const arrowRightPageChangeHandler = () => {
    curPage !== maxPage && setCurPage(curPage + 1);
  };

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
            <Button curPage={curPage} setCurPage={setCurPage} key={index}>
              {curPage + el}
            </Button>
          ))}
        </>
      )}
      {curPage <= minPage + 2 && (
        <>
          {arr.map((el, index) => (
            <Button curPage={curPage} setCurPage={setCurPage} key={index}>
              {index + 1}
            </Button>
          ))}
        </>
      )}
      {curPage >= maxPage - 2 && (
        <>
          {arr.map((el, index) => (
            <Button curPage={curPage} setCurPage={setCurPage} key={index}>
              {maxPage + (index - 4)}
            </Button>
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
