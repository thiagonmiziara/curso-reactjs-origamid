import React from "react";
import "./App.css";
import Checkbox from "./Checkbox";

const App = () => {
  const [checkbox, setCheckbox] = React.useState(false);

  function handleChange({ target }) {
    setCheckbox(target.checked)
  }
  return (
    <div className="App">
      <form>
        <label>
          <input
            type="checkbox"
            value="termos"
            checked={checkbox}
            onChange={handleChange}
          />
         Aceito os termos.
        </label>
      </form>

      <Checkbox/>
    </div>
  );
};

export default App;
