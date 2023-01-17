import React from "react";
import { BiChevronDown } from "react-icons/bi";
import { useState, useEffect, useRef } from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const TypeDropdown = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const btnRef = useRef();
  const type = useSelector((state) => state.typeInfo.type);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (
        e.path[0] !== btnRef.current &&
        e.path[0].parentNode !== btnRef.current
      ) {
        setShowDropdown(false);
      }
    };
    document.body.addEventListener("click", closeDropdown);
    return () => document.body.removeEventListener("click", closeDropdown);
  }, []);

  const sortTypeHandler = () => {
    setShowDropdown((existing) => !existing);
  };

  return (
    <section className="w-36 ">
      <button
        ref={btnRef}
        className="mt-2 ml-2 bg-[#f2f2f2] mb-1 w-full border-2 px-2 py-1 rounded-md flex flex-row items-center justify-center gap-2 text-gray-800 hover:bg-gray-100"
        onClick={sortTypeHandler}
      >
        {type} <BiChevronDown size={20} />
      </button>
      {showDropdown && (
        <div className="overflow-y-auto ml-2 h-32 border-2 absolute w-36 bg-white">
          <Button>All</Button>
          <Button>Bug</Button>
          <Button>Dark</Button>
          <Button>Dragon</Button>
          <Button>Electric</Button>
          <Button>Fairy</Button>
          <Button>Fighting</Button>
          <Button>Fire</Button>
          <Button>Flying</Button>
          <Button>Ghost</Button>
          <Button>Grass</Button>
          <Button>Ground</Button>
          <Button>Ice</Button>
          <Button>Normal</Button>
          <Button>Poison</Button>
          <Button>Psychic</Button>
          <Button>Rock</Button>
          <Button>Steel</Button>
          <Button>Water</Button>
        </div>
      )}
    </section>
  );
};

export default TypeDropdown;
