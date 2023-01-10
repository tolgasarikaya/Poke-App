const Button = (props) => {
  const content = props.setCurPage;
  const curPageChangeHandler = (props) => {
    content(props);
  };
  return (
    <button
      className={props.children == props.curPage ? "text-xl font-semibold" : ""}
      onClick={() => curPageChangeHandler(props.children)}
    >
      {props.children}
    </button>
  );
};

export default Button;
