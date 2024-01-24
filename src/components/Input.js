function Input({ label, type = "text", ...props }) {
  return (
    <div>
      <div className="flex flex-col  items-center  my-1 	">
        <label htmlFor={label} className="cursor-pointer">
          {label}
        </label>
      </div>
      <div className="size-1/4	">
        <input
          id={label}
          type={type}
          className=" border-solid border  border-slate-700 rounded w-96 required"
          {...props}
        />
      </div>
    </div>
  );
}
export default Input;
