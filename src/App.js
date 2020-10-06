import React, {useState} from "react";

import "./styles.css";

function App() {
  const [repositories, setRepositories] = useState(['Desafio ReactJS']);

  async function handleAddRepository() {
    const input = document.querySelector('#input_title');

    repositories.push(input.value ? input.value : 'Sem Texto');

    setRepositories([...repositories]);
  }

  async function handleRemoveRepository(id) {
    repositories.splice(id, 1);
    setRepositories([...repositories]);
  }

  return (
    <div>
      <h1>Reposiórios</h1>
      <ul data-testid="repository-list">
        {
          repositories.map((repository, index) => (

          <li key={index}>
            {repository}
            <button onClick={() => handleRemoveRepository(index)}>
              Remover
            </button>
          </li>
          ))
        }
      </ul>

      <input type="text" id="input_title"/>
      <button onClick={handleAddRepository}>Adicionar</button>
    </div>
  );
}

export default App;
