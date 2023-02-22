/*---------------------CLICK-EVENT-at-NAVBAR-----------------------*/
const notePad = document.querySelector("#navDivNotePad");
const toDoList = document.querySelector("#navDivToDoList");
const lightMode = document.querySelector("#btn-mode-light");
const darkMode = document.querySelector("#btn-mode-dark");
/*---------------------HTML-ELEMENT-----------------------*/
const body = document.querySelector("body");
/*---------------------VARIABLE-ONLY-NAVBAR-----------------------*/
const navbarContainer = document.querySelector(".navbarContainer");
/*---------------------VARIABLE-ONLY-NOTEPAD----------------------*/
const textAreaDiv = document.querySelector(".text-area-div");
const notesDataDiv = document.querySelector(".notes-data-div");
const textArea = document.querySelector(".textArea");
const floatingTextarea2 = document.querySelector(".floatingTextarea2");
const addBtn = document.querySelector(".add-btn");
const noteText = document.querySelector(".noteText");
const modify = document.querySelector(".modify");
const modifyBtn = document.querySelector(".modify-btn");
const colCount = document.querySelector(".col-count");
const editBtn = document.querySelector(".editBtn");
const removeBtn = document.querySelector(".removeBtn");
const notePadGenerateDiv = document.querySelector(".notePadGenerateDiv");
/*---------------------VARIABLE-ONLY-TO-DO----------------------*/
const todoTextAreaDiv = document.querySelector(".todo-text-area-div");
const todoTextArea = document.querySelector(".todoTextArea");
const addBtnTodo = document.querySelector(".add-btn-todo");
const tableTodo = document.querySelector("table");
const todoTableBody = document.querySelector("#todoTableBody");
const todoEditBtn = document.querySelector(".todoEditBtn");
const todoRemoveBtn = document.querySelector(".todoRemoveBtn");

/*--------------EVENT-LISTENER-----------------------------*/
notePad.addEventListener("click", function () {
    notePad.style.boxShadow = "0px 0px 10px 3px black";
    notePad.style.transform = "scale(1.1 , 1.14)";
    toDoList.style.boxShadow = "none";
    toDoList.style.transform = "none";

    if (notePad.style.backgroundColor == "black") {
        notePad.style.boxShadow = "0px 0px 10px 3px white";
    }
    /*----------NOTEPAD---------------------*/
    textAreaDiv.style.display = "block";
    notesDataDiv.style.display = "block";
    /*----------TO-DO----------------------*/
    todoTextAreaDiv.style.display = "none";
    todoTextArea.style.display = "none";
});
/*--------------EVENT-LISTENER-----------------------------*/
toDoList.addEventListener("click", function () {
    toDoList.style.boxShadow = "0px 0px 10px 3px black";
    toDoList.style.transform = "scale(1.1 , 1.1)";
    notePad.style.boxShadow = "none";
    notePad.style.transform = "none";

    if (toDoList.style.backgroundColor == "black") {
        toDoList.style.boxShadow = "0px 0px 10px 3px white";
    }
    /*----------NOTEPAD---------------------*/
    textAreaDiv.style.display = "none";
    notesDataDiv.style.display = "none";
    /*----------TO-DO----------------------*/
    todoTextAreaDiv.style.display = "block";
    todoTextArea.style.display = "block";
});
/*--------------EVENT-LISTENER-----------------------------*/
lightMode.addEventListener("click", function () {
    navbarContainer.style.backgroundColor = "rgb(219, 234, 237)";
    notePad.style.backgroundColor = "rgba(211, 227, 228)";
    notePad.style.color = "#1e1e1e";
    toDoList.style.backgroundColor = "rgba(211, 227, 228)";
    toDoList.style.color = "#1e1e1e";
    lightMode.style.boxShadow = "0px 0px 10px 3px black";
    darkMode.style.boxShadow = "none";
    /*----------NOTEPAD---------------------*/
    body.style.backgroundColor = "whitesmoke";
    body.style.color = "#1e1e1e";
    textArea.style.backgroundColor = "whitesmoke";
    textArea.style.color = "#333333";
    addBtn.style.backgroundColor = "#e6e4e4";
    addBtn.style.color = "#1e1e1e";
    addBtn.style.outline = "1px solid #1e1e1e";
    modify.style.backgroundColor = "#e6e4e4";
    editBtn.style.color = " #198754";
    editBtn.style.border = "1px solid #198754";
    removeBtn.style.color = " #de3550";
    removeBtn.style.border = "1px solid #de3550";
    /*----------TO-DO---------------------*/
    todoTextArea.style.backgroundColor = "whitesmoke";
    todoTextArea.style.color = "#333333";
    addBtnTodo.style.backgroundColor = "#e6e4e4";
    addBtnTodo.style.color = "#1e1e1e";
    addBtnTodo.style.outline = "1px solid #1e1e1e";
    tableTodo.style.color = "#333333";
    todoEditBtn.style.color = "#333333";
    todoEditBtn.style.border = "1px solid #198754";
    todoRemoveBtn.style.color = "#333333";
    todoRemoveBtn.style.border = "1px solid #de3550";
});
/*--------------EVENT-LISTENER-----------------------------*/
darkMode.addEventListener("click", function () {
    navbarContainer.style.backgroundColor = "#333333";
    notePad.style.backgroundColor = "black";
    notePad.style.color = "whitesmoke";
    toDoList.style.backgroundColor = "black";
    toDoList.style.color = "whitesmoke";
    darkMode.style.boxShadow = "0px 0px 10px 3px white";
    lightMode.style.boxShadow = "none";
    /*----------NOTEPAD---------------------*/
    body.style.backgroundColor = "#1e1e1e";
    body.style.color = "whitesmoke";
    textArea.style.backgroundColor = "#333333";
    textArea.style.color = "whitesmoke";
    addBtn.style.backgroundColor = "#333333";
    addBtn.style.color = "whitesmoke";
    addBtn.style.border = "1px solid whitesmoke";
    modify.style.backgroundColor = "#333333";
    editBtn.style.color = "whitesmoke";
    editBtn.style.border = "1px solid #198754";
    removeBtn.style.color = "whitesmoke";
    removeBtn.style.border = "1px solid #de3550";
    /*----------TO-DO---------------------*/
    todoTextArea.style.backgroundColor = "#333333";
    todoTextArea.style.color = "whitesmoke";
    addBtnTodo.style.backgroundColor = "#333333";
    addBtnTodo.style.color = "whitesmoke";
    addBtnTodo.style.border = "1px solid whitesmoke";
    tableTodo.style.color = "whitesmoke";
    todoEditBtn.style.color = "whitesmoke";
    todoEditBtn.style.border = "1px solid #198754";
    todoRemoveBtn.style.color = "whitesmoke";
    todoRemoveBtn.style.border = "1px solid #de3550";
});
/*--------------EVENT-LISTENER-----------------------------*/

/*-----------------FOR-GETTING-DATA-EVENT-FUNCTION-----------------*/
/*-----------------NOTEPAD-----------------*/

let notePadArray = [];
let editNotepadMessageId = null;
const messageGetStr = localStorage.getItem("notepadMessage");
if (messageGetStr != null) {
    notePadArray = JSON.parse(messageGetStr);
}
displayNotepadMessage();
addBtn.addEventListener("click", function () {
    let textAreaMessage = textArea.value;
    if (editNotepadMessageId != null) {
        notePadArray.splice(editNotepadMessageId, 1, {
            notepadMessage: textAreaMessage,
        });
        editNotepadMessageId = null;
        addBtn.innerText = "Add Notes";
    } else {
        notePadArray.push({ notepadMessage: textAreaMessage });
    }
    saveNotepadMessage(notePadArray);
    textArea.value = "";
    displayNotepadMessage();
});
function saveNotepadMessage(notePadArray) {
    let notepadmessageStr = JSON.stringify(notePadArray);
    localStorage.setItem("notepadMessage", notepadmessageStr);
    displayNotepadMessage();
}
function displayNotepadMessage() {
    let messageStatement = "";
    notePadArray.forEach((notepadMessage, index) => {
        messageStatement += `<div class="col-sm-12 col-md-5 col-lg-3  noteText">
            <div class="row ">
                <div class="col-12 modify">
                    <div class="row">
                        <div class="col-1 col-count">
                            <h4>${index + 1}</h4>
                        </div>
                        <div class="col-11 modify-btn">
                            <button type="button" onclick="editNotepadMessage(${index})" class="btn editBtn btn-outline-success">&#9998;</button>
                            <button type="button" onclick="deleteNotepadMessage(${index})" class="btn removeBtn btn-outline-danger">&#10005;</button>
                        </div>
                    </div>
                </div>
                <div class="col-12 p-2">${notepadMessage.notepadMessage}</div>
           </div>
        </div>`;
    });
    notePadGenerateDiv.innerHTML = messageStatement;
}
function deleteNotepadMessage(id) {
    notePadArray.splice(id, 1);
    saveNotepadMessage(notePadArray);
    displayNotepadMessage();
}
function editNotepadMessage(id) {
    editNotepadMessageId = id;
    textArea.value = notePadArray[id].notepadMessage;
    addBtn.innerText = "Save Changes";
}

/*-----------------TO-DO-LIST-----------------*/

let todoListArray = [];
let editIdTodo = null;
const todoMessageGetStr = localStorage.getItem("todoMessage");
if (todoMessageGetStr != null) {
    todoListArray = JSON.parse(todoMessageGetStr);
}
displayTodoNotes();
addBtnTodo.addEventListener("click", function () {
    let todoText = todoTextArea.value;

    if (editIdTodo != null) {
        todoListArray.splice(editIdTodo, 1, { todoMessage: todoText });
        editIdTodo = null;
        addBtnTodo.innerText = "Add Notes";
    } else {
        todoListArray.push({ todoMessage: todoText });
    }
    saveTodoNotes(todoListArray);
    todoTextArea.value = "";
    displayTodoNotes();
});
function saveTodoNotes(todoListArray) {
    let todoTextList = JSON.stringify(todoListArray);
    localStorage.setItem("todoMessage", todoTextList);
    displayTodoNotes();
}
function displayTodoNotes() {
    let todoStatement = "";
    todoListArray.forEach((todoMessage, indexTodo) => {
        todoStatement += `<tr>
        <th scope="row">${indexTodo + 1}</th>
        <td>${todoMessage.todoMessage}</td>
        <td class="modify-btn-todo">
            <button type="button" onclick="editTodoNotes(${indexTodo})" class="btn todoEditBtn btn-outline-success  fw-bold">&#9998;</button>
            <button type="button" onclick="removeTodoNotes(${indexTodo})" class="btn todoRemoveBtn btn-outline-danger fw-bold">&#10005;</button>
        </td>
      </tr>`;
        todoTableBody.innerHTML = todoStatement;
    });
}
function editTodoNotes(idtodo) {
    editIdTodo = idtodo;
    todoTextArea.value = todoListArray[idtodo].todoMessage;
    addBtnTodo.innerText = "Save Changes";
}
function removeTodoNotes(idtodo) {
    todoListArray.splice(idtodo,1);
    saveTodoNotes(todoListArray);
    displayTodoNotes();
}
