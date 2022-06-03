import React, { useState } from "react";

function App(props) {
  const [usuario, setUsuario] = useState("");
  const [repositorios, setRepositorios] = useState([]);

  const getUserRepo = async () => {
    return fetch(`https://api.github.com/users/${usuario}/repos`)
      .then((response) => response.json())
      .then((data) => {
        setRepositorios(data);
      });
  };

  return (
    <>
      <input
        className="usuarioInput"
        placeholder="Digite um usuário Github"
        value={usuario}
        onChange={(e) => setUsuario(e.target.value)}
      />
      <button type="button" onClick={getUserRepo}>
        Pesquisar
      </button>
      {repositorios.length !== 0 ? (
        <div>
          {repositorios.map((item, _) => 
            <p>{item.name}</p>
          )}
        </div>
      ) : (
        <div>Nenhum repositório encontrado!</div>
      )}
    </>
  );
}

export default App;
