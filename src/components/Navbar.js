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

  return (
    <div className="grid grid-cols-6 gap-4 border border-solid rounded-xl mb-3 bg-stone-400">
      {renderedLinks}
    </div>
  );
}

export default Navbar;
