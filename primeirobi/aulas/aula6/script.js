const title = document.querySelector(".titulo-principal");

title.textContent = 'Alterado'

// title.style.backgroundColor = "pink"

title.classList.add("color-green");


function criarElementos() {
    const container = document.getElementById("container")

    const qtdFilhos = container.children.length

    if(qtdFilhos <5  ){
    
    const h3 = document.createElement("h3")

h3.textContent = 'Título 3';

const p = document.createElement("p")

p.textContent = 'Clique aqui';

const btnRemover = document.createElement("button");



container.appendChild(h3)
container.appendChild(p)

} 
}