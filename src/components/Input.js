function Input({ label, type = "text", ...props }) {
  let inputCssStyle =
    " border border-solid  border-slate-800 rounded  required p-2 my-2 ";
  if (type === "select") {
    inputCssStyle += " w-48";
  } else {
    inputCssStyle += " w-96	";
  }

  let inputType = (
    <>
      <label
        htmlFor={label}
        className=" hover:underline cursor-pointer text-xl"
      >
        {label}
      </label>
      <div>
        <input {...props} className={inputCssStyle} id={label} type={type} />
      </div>
    </>
  );

  if (type === "select") {
    inputType = (
      <>
        <label
          htmlFor={label}
          className=" hover:underline cursor-pointer text-xl"
        >
          {label}
        </label>
        <div>
          <select {...props} className={inputCssStyle} id={label}>
            <option value="">Rating</option>
            <option value="Bad">Bad</option>
            <option value="Good">Good</option>
            <option value="Great">Great</option>
          </select>
        </div>
      </>
    );
  }

  return (
    <div className="flex flex-row ">
      <div className="py-2">{inputType}</div>
    </div>
  );
}
export default Input;
