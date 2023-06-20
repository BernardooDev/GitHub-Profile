import React from "react";
import Users from "./components/User";

function App() {
  const [value, setValue] = React.useState("");
  const [dados, setDados] = React.useState(null);

  function getValue() {
    setDados(value);
  }

  return (
    <div className="mainProfile">
      <div className="inputProfile">
        <input
          placeholder="Procure o seu perfil!"
          type="text"
          autoFocus
          onChange={({ target }) => setValue(target.value)}
        ></input>
        <button onClick={getValue}>Procurar</button>
      </div>
      {dados && <Users value={dados} />}
    </div>
  );
}
export default App;
