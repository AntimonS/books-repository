function Header({ header, ...props }) {
  let headerStyle =
    "flex flex-col items-center  py-5 mb-6 text-4xl text-teal-900	 shadow-md shadow-zinc-500 bg-indigo-300	font-medium";
  if (props.className) {
    headerStyle += "" + props.className;
  }
  let altHeader = <h1>{header} A Book</h1>;

  if (header === "list") {
    return (
      <div className={headerStyle} {...props}>
        <h1>List of All Books</h1>
      </div>
    );
  } else {
    return (
      <div className={headerStyle} {...props}>
        {altHeader}
      </div>
    );
  }
}

export default Header;
