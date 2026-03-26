const aluno = {
    nome: 'Eduardo',
    idade: 20,
    curso: 'Eng.Software',
    matriculaAtiva: true,
    endereco: {
        rua: 'Salgado Filho',
    },
}
console.log(aluno.nome)
aluno.nome = "Jorginho"
console.log(aluno.nome)

const listaFrutas = ["🍇", "🍊", "🍌", "🥑" ]


//desestruturação
const {idade, nome} = aluno;
console.log(idade);
console.log(nome);

for (let index = 0; index < listaFrutas.length; index++) {
    const element = listaFrutas[index];

    console.log('fruta ' + index, element)
    
}

console.log(listaFrutas)

const printF = function printarNome(){
    console.log("eita nois")
}
printF();

const valorUm = 47;
const valorDois = "47";

if (valorUm == valorDois) {
    console.log("é igual")    
}

if (valorUm === valorDois) {
    console.log("é igual oficial")
}

const printNome  = () => console.log("Eduardo")

printNome();

const somaFuncAnonima = (val1, val2) => {
    if(val1 == undefined );
}