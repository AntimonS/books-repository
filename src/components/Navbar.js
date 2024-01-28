import Link from "./Link";

function Navbar() {
  const links = [
    { label: "New Book", path: "/addBook" },
    { label: "Books List", path: "/table" },
  ];

  const renderedLinks = links.map((link) => {
    return (
      <Link key={link.label} to={link.path}>
        {link.label}
      </Link>
    );
  });

  return <div className="sticky flex items-center"> {renderedLinks}</div>;
}

export default Navbar;
