function Input({ label, type = "text", ...props }) {
  let inputCssStyle =
    " border border-solid   border-slate-800 rounded  required p-2 my-2 ";
  if (type === "number") {
    inputCssStyle += " w-20";
  } else {
    inputCssStyle += " w-96	";
  }

  return (
    <div className="flex flex-row ">
      <div className="py-2">
        <div>
          <label
            htmlFor={label}
            className=" hover:underline cursor-pointer  text-xl "
          >
            {label}
          </label>
        </div>
        <input className={inputCssStyle} id={label} type={type} {...props} />
      </div>
    </div>
  );
}
export default Input;
