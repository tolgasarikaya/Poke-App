import { useState } from "react";
import Button from "./Button";

const PageChange = () => {
  const [curPage, setCurPage] = useState(1);

  const arr = Array.from({ length: 58 }, (_, i) => i + 1);
  return (
    <footer className="flex flex-row mb-5 gap-5 justify-center items-center">
      {Number(curPage) >= 4 && Number(curPage) <= 55 && (
        <>
          <Button curPage={curPage} setCurPage={setCurPage}>
            1
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) - 1}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage)}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) + 1}
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            58
          </Button>
        </>
      )}
      {Number(curPage) === 3 && (
        <>
          <Button curPage={curPage} setCurPage={setCurPage}>
            1
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) - 1}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage)}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) + 1}
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            58
          </Button>
        </>
      )}
      {Number(curPage) < 3 && (
        <>
          <Button curPage={curPage} setCurPage={setCurPage}>
            1
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            2
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            3
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            58
          </Button>
        </>
      )}
      {Number(curPage) === 56 && (
        <>
          <Button curPage={curPage} setCurPage={setCurPage}>
            1
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) - 1}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage)}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            {Number(curPage) + 1}
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            58
          </Button>
        </>
      )}
      {Number(curPage) >= 57 && (
        <>
          <Button curPage={curPage} setCurPage={setCurPage}>
            1
          </Button>
          <p className="tracking-[1.00em]">...</p>
          <Button curPage={curPage} setCurPage={setCurPage}>
            55
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            56
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            57
          </Button>
          <Button curPage={curPage} setCurPage={setCurPage}>
            58
          </Button>
        </>
      )}
    </footer>
  );
};

export default PageChange;
