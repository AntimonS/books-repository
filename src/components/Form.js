function Form({ children, ...props }) {
  return (
    <form {...props} className=" flex flex-col justify-items-center">
      {children}
    </form>
  );
}

export default Form;
