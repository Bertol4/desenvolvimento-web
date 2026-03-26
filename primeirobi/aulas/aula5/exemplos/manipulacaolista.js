const listaFrutas = ["🍇", "🍊", "🍌", "🥑", "🍊" ];
const listaFrutasMaisMorango = [...listaFrutas , "🍓"]

console.log(listaFrutasMaisMorango)

const listaAbacate = listaFrutas.map(fruta => fruta + "🥑");

console.log(listaAbacate);

const listaLaranjas = listaFrutas.filter(fruta => fruta == "🍊");

console.log(listaLaranjas);

const transacoesConta = [20, 10, 40, 100];

const valorTotal = transacoesConta.reduce(
    (valorAnterior, valorAtual) => valorAnterior + valorAtual
);

console.log(valorTotal);