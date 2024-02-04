function Input({ label, id, error, type = "text", ...props }) {
  let inputCssStyle =
    " border border-solid  border-slate-800 rounded  required p-2 my-2 ";
  if (type === "select") {
    inputCssStyle += " w-48";
  } else {
    inputCssStyle += " w-96	";
  }

  let inputType = (
    <>
      <label htmlFor={id} className=" hover:underline cursor-pointer text-xl">
        {label}
      </label>
      <div>
        <input {...props} className={inputCssStyle} id={id} type={type} />
      </div>
    </>
  );

  if (type === "select") {
    inputType = (
      <>
        <label htmlFor={id} className=" hover:underline cursor-pointer text-xl">
          {label}
        </label>
        <div>
          <select {...props} className={inputCssStyle} id={id}>
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
      <div>{error && <p>{error}</p>}</div>
    </div>
  );
}
export default Input;
