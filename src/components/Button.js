function Button({ children, ...props }) {
  let buttonCssStyle =
    "border-solid border-2 rounded-md border-stone-800 bg-sky-300 hover:bg-sky-400 p-3 text-lg font-semibold ";
  if (props.className) {
    buttonCssStyle += " " + props.className;
  }

  return (
    <button className={buttonCssStyle} {...props}>
      {children}
    </button>
  );
}

export default Button;
