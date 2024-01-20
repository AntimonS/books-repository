import "bulma/css/bulma.css";

function FormContent({ children }) {
  return (
    <div>
      <label>{children}</label>
      <input class="column input is-small" />
      <button class="button is-small">Add!</button>
    </div>
  );
}

export default FormContent;
