import UseBooks from "../hooks/use-books";

function Route({ path, children }) {
  const { currentPath } = UseBooks();

  if (path === currentPath) {
    return children;
  }
  return null;
}

export default Route;
