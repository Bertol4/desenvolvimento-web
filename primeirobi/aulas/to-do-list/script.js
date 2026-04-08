// 1. Função para adicionar o item (disparada pelo Form)
function handleSend(event) {
    event.preventDefault();
    
    const ulParent = document.querySelector('.ul-parent');
    const input = event.target[0]; // O campo de texto

    if (input.value.trim() !== "") {
        const newLi = document.createElement('li');
        
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        
        const textSpan = document.createElement('span');
        textSpan.textContent = input.value;
        textSpan.style.marginLeft = '8px';
        textSpan.className = 'task-text';
        
        newLi.appendChild(checkbox);
        newLi.appendChild(textSpan);
        ulParent.appendChild(newLi);
        
        input.value = ""; // Limpa o input após adicionar
    }
}

function removeLastItem(){
    const ulParent = document.querySelector('.ul-parent');
    const lastItem = ulParent.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form'); // Selecione seu form
    const ulParent = document.querySelector('.ul-parent');

    form.addEventListener("submit", handleSend);
    ulParent.addEventListener("click", handleClick);
});
