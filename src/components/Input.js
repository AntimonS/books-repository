function Input({ label, type = "text", ...props }) {
  let inputCssStyle =
    " border border-solid   border-slate-800 rounded  required p-2 ";
  if (type === "number") {
    inputCssStyle += " w-12";
  } else {
    inputCssStyle += " w-96";
  }

  return (
    <div className="flex flex-row justify-start">
      <div className="flex flex-col  py-2 ">
        <label htmlFor={label} className=" hover:underline cursor-pointer mt-1">
          {label}
        </label>
        <div className="size-4/6">
          <input className={inputCssStyle} id={label} type={type} {...props} />
        </div>
      </div>
    </div>
  );
}
export default Input;
