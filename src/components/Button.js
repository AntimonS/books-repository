function Button({ children, ...props }) {
  let buttonCssStyle = "border-solid border-2 rounded-md border-stone-800 ";
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
