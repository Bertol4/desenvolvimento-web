import { useState } from 'react'
import './App.css'

function App() {
  const [tarefas, setTarefas] = useState([])
  const [textoInput, setTextoInput] = useState('')

  const adicionarTarefa = () => {
    if (textoInput.trim() === '') return

    const novaTarefa = {
      id: Date.now(),
      text: textoInput
    }

    setTarefas([...tarefas, novaTarefa])
    setTextoInput('')
  }

  const removerTarefa = (id) => {
    const novasTarefas = tarefas.filter(tarefa => tarefa.id !== id)
    setTarefas(novasTarefas)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    adicionarTarefa()
  }

  return (
    <div className="app">
      <h1>To-Do List</h1>

      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          value={textoInput}
          onChange={(e) => setTextoInput(e.target.value)}
          placeholder="Digite uma tarefa..."
          className="input"
        />
        <button type="submit" className="btn-adicionar">
          Adicionar
        </button>
      </form>

      <ul className="lista-tarefas">
        {tarefas.map((tarefa) => (
          <li key={tarefa.id} className="tarefa">
            <span>{tarefa.text}</span>
            <button
              onClick={() => removerTarefa(tarefa.id)}
              className="btn-remover"
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
