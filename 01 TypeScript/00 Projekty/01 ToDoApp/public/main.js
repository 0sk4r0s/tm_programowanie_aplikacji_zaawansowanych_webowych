"use strict";
const addButton = document.querySelector("#todoAddButton");
const inputTextField = document.querySelector("#todoInputField");
const todosContainer = document.querySelector("#todoContainer");
let arrayOfTodos = [];
if (addButton && inputTextField && todosContainer) {
    addButton.addEventListener("click", () => {
        if (inputTextField.value.trim() === "") {
            alert("Wpisz tytuł zadania!");
            return;
        }
        arrayOfTodos.push({
            id: Date.now(),
            title: inputTextField.value.trim(),
            isDone: 0
        });
        inputTextField.value = "";
        buildList();
    });
}
function buildList() {
    todosContainer.innerHTML = "";
    arrayOfTodos.forEach((element) => {
        let container = document.createElement("div");
        container.classList.add("card", "card-body", "mt-2", "shadow");
        let id = document.createElement("p");
        id.classList.add("small", "text-muted", "mb-1");
        id.textContent = "ID: " + element.id;
        let title = document.createElement("h3");
        title.classList.add("h5", "mb-2");
        title.textContent = element.title;
        let statusBadge = document.createElement("span");
        statusBadge.classList.add("badge", "mb-3");
        statusBadge.style.width = "fit-content";
        if (element.isDone === 0) {
            statusBadge.textContent = "To do";
            statusBadge.classList.add("bg-secondary");
        }
        else if (element.isDone === 1) {
            statusBadge.textContent = "Doing";
            statusBadge.classList.add("bg-warning", "text-dark");
        }
        else if (element.isDone === 2) {
            statusBadge.textContent = "Done";
            statusBadge.classList.add("bg-success");
        }
        let statusSelect = document.createElement("select");
        statusSelect.classList.add("form-select", "form-select-sm", "mb-3");
        const options = [
            { value: 0, text: "Zmień status na: To do" },
            { value: 1, text: "Zmień status na: Doing" },
            { value: 2, text: "Zmień status na: Done" }
        ];
        options.forEach(opt => {
            let optionElement = document.createElement("option");
            optionElement.value = opt.value.toString();
            optionElement.textContent = opt.text;
            if (element.isDone === opt.value) {
                optionElement.selected = true;
            }
            statusSelect.appendChild(optionElement);
        });
        statusSelect.addEventListener("change", (e) => {
            let target = e.target;
            element.isDone = parseInt(target.value);
            buildList();
        });
        let deleteButton = document.createElement("button");
        deleteButton.classList.add("btn", "btn-danger", "btn-sm");
        deleteButton.textContent = "Usuń zadanie";
        deleteButton.addEventListener("click", () => {
            arrayOfTodos = arrayOfTodos.filter(todo => todo.id !== element.id);
            buildList();
        });
        container.appendChild(id);
        container.appendChild(title);
        container.appendChild(statusBadge);
        container.appendChild(statusSelect);
        container.appendChild(deleteButton);
        todosContainer.appendChild(container);
    });
}
