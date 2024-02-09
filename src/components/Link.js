import UseBooks from "../hooks/use-books";

function Link({ to, children, ...props }) {
  const { navigate } = UseBooks();

  let linkCssStyle = "text-blue-500 text-2xl p-4 font-semibold hover:underline";
  if (props.className) {
    linkCssStyle += "" + props.className;
  }

  const handleClick = (evt) => {
    if (evt.metaKey || evt.ctrlKey) {
      return;
    }
    evt.preventDefault();
    navigate(to);
  };

  return (
    <a {...props} href={to} className={linkCssStyle} onClick={handleClick}>
      {children}
    </a>
  );
}

export default Link;
