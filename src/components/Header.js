function Header({ action }) {
  let header = <h1>{action} A Book</h1>;

  return (
    <div className=" flex flex-col items-center  py-5 mb-6 text-2xl text-teal-900	 shadow-md	 shadow-zinc-500 bg-indigo-300	 ">
      {header}
    </div>
  );
}

export default Header;
