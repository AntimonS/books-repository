import UseBooks from "../hooks/use-books";

function Link({ to, children, ...props }) {
  const { navigate } = UseBooks();

  const linkCssStyle = "text-blue-500";

  const handleClick = (evt) => {
    if (evt.metaKEy || evt.ctrlKey) {
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
