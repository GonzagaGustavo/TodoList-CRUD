import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    axios.get("/get").then((res) => {
      setTarefas(res.data);
      console.log(res.data);
    });
  }, []);

  function create() {
    if(input === "") {
      alert("Escreva uma tarefa!")
    } else {
      axios.post("/create", { tarefa: input, checked: 0 }).then((res) => {
      alert(res.data);
      window.location.reload();
    });
    }
}
function delet(id) {
  axios.post("/delete", { id: id }).then(res => {
    alert(res.data)
    window.location.reload()
  }).then(err => {
    console.log(err)
  })
}

  return (
    <div className="App">
      <h1>Todo List</h1>
      <div className="fun">
        <input
          type="text"
          placeholder="Tarefa..."
          onChange={(e) => setInput(e.target.value)}
          className="iptC"
        />
        <button onClick={create} className="criar">Criar</button>
      </div>
      <div>
        {tarefas.length === 0 ? (
          <div>Sem Tarefas</div>
        ) : (
          <div>
            {tarefas.map((tarefa) => (
              <>
              <input type="checkbox" />
              <p>{tarefa.tarefa}</p>
              <button onClick={() => delet(tarefa.id)}>X</button>
              </>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
