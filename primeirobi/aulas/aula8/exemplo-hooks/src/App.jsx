import { useState, useEffect } from "react";
import "./App.css";
import Button from "./components/Button/Button.jsx";

export default function App() {
  const [contador, setContador] = useState(0);
  const [produtos, setProdutos] = useState([
    { id: 1, nome: "Teclado Gamer - Black Widow", valor: 400 },
    { id: 2, nome: "Mémoria RAM Kingston - DDR5 16gb", valor: 15000 },
  ]);
  const [carregando, setCarregando] = useState(true);
  const [nomeProduto, setNomeProduto] = useState("");

  useEffect(() => {
    const timer = setInterval(() => setCarregando(false), 6000);
    return () => clearInterval(timer);
  }, []);

  function incrementar() {
    setContador((prev) => {
      console.log(prev);
      return prev + 1;
    });
  }

  function adicionarProduto() {
    const novoProduto = {
      id: produtos.length + 1,
      nome: nomeProduto,
      valor: 47.47,
    };
    setProdutos([...produtos, novoProduto]);
    setNomeProduto("");
  }

  return (
    <main>
      <h2>Contador {contador}</h2>
      <Button funcao={incrementar} texto={"Incrementar"}></Button>
      <h2>Produtos</h2>
      <label>Nome produto</label>
      <input
        type="text"
        value={nomeProduto}
        onChange={(e) => setNomeProduto(e.target.value)}
      />
      <Button funcao={adicionarProduto} texto={"Adicionar"}></Button>
      {carregando ? (
        <h4>Carregando...</h4>
      ) : (
        produtos.map((item) => (
          <div key={item.id}>
            <span>
              <p>Nome: {item.nome}</p>
            </span>
            <span>
              <p>Valor: {item.valor}</p>
            </span>
          </div>
        ))
      )}
    </main>
  );
}
