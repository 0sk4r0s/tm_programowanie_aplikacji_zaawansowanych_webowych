const addButton: HTMLButtonElement|null = document.querySelector("#todoAddButton");
const inputTextField: HTMLInputElement|null = document.querySelector("#todoInputField") ;
const todosContainer: HTMLDivElement = document.querySelector("#todoContainer")!;

type Todo = {
    id: number,
    title: string,
    description?: string,
    isDone?: boolean,
}

let arrayOfTodos: Todo[] = [];

if (addButton && inputTextField && todosContainer){
    
    addButton?.addEventListener('click',(e) =>{
        
        arrayOfTodos.push({id: arrayOfTodos.length, title: inputTextField?.value});
        inputTextField.value='';
        buildList();
    })
}

function buildList(){
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach(element => {
        let container = document.createElement("div");
        container.classList.add("card","card-body","mt-1","shadow");

        let id = document.createElement('p');
        id.classList.add("small");

        let title = document.createElement('h3');
        title.classList.add("h3");

        let delButton = document.createElement('button');
        delButton.classList.add("btn", "btn-danger");
        delButton.innerText = "Delete";




        title.textContent = "Tytuł: " + element.title;
        id.textContent = "ID: " + element.id;

        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(delButton);


        todosContainer?.appendChild(container);
        
    });
}

function removeElement(element: HTMLElement) {}