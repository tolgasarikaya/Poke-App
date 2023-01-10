const Button = (props) => {
  const changePageHandler = () => {
    props.setCurPage(Number(props.children));
  };
  return (
    <button
      onClick={changePageHandler}
      className={`${
        props.curPage === Number(props.children) ? "bg-slate-300/50 " : ""
      }m-1 text-gray-800 hover:bg-slate-200/50 rounded-full py-2 my-5 ${
        Number(props.children) >= 10 ? "px-3" : "px-4"
      }`}
    >
      {props.children}
    </button>
  );
};

export default Button;
