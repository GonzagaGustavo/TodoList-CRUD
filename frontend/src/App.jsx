import { React, useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState("");
  const [editing, setEditing] = useState(undefined);

  useEffect(() => {
    axios.get("/gete").then((res) => {
      setTarefas(res.data);
      console.log(res.data);
    });
  }, []);

  function create() {
    if (input === "") {
      alert("Escreva uma tarefa!");
    } else {
      if (editing) {
        axios.post("/edit", { id: editing, tarefa: input}).then(res => {
          window.location.reload()
        }).then(err => {
          console.log(err);
        })
      } else {
        axios.post("/create", { tarefa: input, checked: 0 }).then((res) => {
          alert(res.data);
          window.location.reload();
        });
      }
    }
  }
  function delet(id) {
    axios
      .post("/delete", { id: id })
      .then((res) => {
        alert(res.data);
        window.location.reload();
      })
      .then((err) => {
        console.log(err);
      });
  }
  function edit(tarefa) {
    setInput(tarefa.tarefa);
    setEditing(tarefa.id);
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
        <button onClick={create} className="criar">
          {editing ? <span>Editar</span> : <span>Criar</span>}
        </button>
      </div>
      <div>
        {tarefas.length === 0 ? (
          <div>Sem Tarefas</div>
        ) : (
          <div>
            {tarefas.map((tarefa) => (
              <div key={tarefa.id}>
                <input type="checkbox" />
                <p>{tarefa.tarefa}</p>
                <button onClick={() => delet(tarefa.id)}>X</button>
                <button onClick={() => edit(tarefa)}>E</button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
