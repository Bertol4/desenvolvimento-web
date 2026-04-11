// função para adicionar o item
function handleSend(event) {
    event.preventDefault();
    
    const ulParent = document.querySelector('.ul-parent');
    const input = event.target[0];

    if (input.value.trim() !== "") {
        const newLi = document.createElement('li');
        newLi.textContent = input.value;
        
        ulParent.appendChild(newLi);
        
        input.value = ""; 
    }
}

function removeLastItem(){
    const ulParent = document.querySelector('.ul-parent');
    const lastItem = ulParent.lastElementChild;
    if (lastItem) {
        lastItem.remove();
    }
}

function handleClick(event) {
    const li = event.target.closest('li');
    if (li) {
        li.remove();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector('form');
    const ulParent = document.querySelector('.ul-parent');

    form.addEventListener("submit", handleSend);
    ulParent.addEventListener("click", handleClick);
});

