import todoentry from "./todoentry.js";

const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;


let arrayOfTodos: todoentry[] = [];

if (addButton && inputTextField && todosContainer){
    
    addButton?.addEventListener('click',(e) =>{
        new todoentry(arrayOfTodos.length, inputTextField?.value)
  
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {

        todosContainer.innerHTML += element.render()
        
    });
}

function removeElement(element: HTMLElement) {}