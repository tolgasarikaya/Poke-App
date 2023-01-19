import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import SortButton from "./SortButton";
import { useSelector } from "react-redux";

const SortDropdown = () => {
  const [showSortDropdown, setShowSortDropdown] = useState(false);
  const btnRef = useRef();
  const sort = useSelector((state) => state.sortInfo.sort);
  const sort2 = sort.replaceAll("_", " ");
  const sortArr = sort2.split(" ");
  for (let i = 0; i < sortArr.length; i++) {
    sortArr[i] = sortArr[i].charAt(0).toUpperCase() + sortArr[i].slice(1);
  }
  const sortNew = sortArr.join(" ");

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.target !== btnRef.current &&
        e.target.parentNode !== btnRef.current
      ) {
        setShowSortDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const sortHandler = () => {
    setShowSortDropdown((existing) => !existing);
  };

  return (
    <section className="w-40 ">
      <button
        ref={btnRef}
        className="mt-2 ml-2 bg-[#f2f2f2] mb-1 w-full border-2 px-2 py-1 rounded-md flex flex-row items-center justify-center gap-2 text-gray-800 hover:bg-gray-100"
        onClick={sortHandler}
      >
        {sortNew} <BiChevronDown size={20} />
      </button>
      {showSortDropdown && (
        <div className="overflow-y-auto h-32 border-2 ml-2 absolute w-40 bg-white">
          <SortButton>Default</SortButton>
          <SortButton>Hp</SortButton>
          <SortButton>Attack</SortButton>
          <SortButton>Defense</SortButton>
          <SortButton>Special Attack</SortButton>
          <SortButton>Special Defense</SortButton>
          <SortButton>Speed</SortButton>
        </div>
      )}
    </section>
  );
};

export default SortDropdown;
