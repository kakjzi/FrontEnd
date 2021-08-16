const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos= [];

function saveToDos(){
    //Array To String ------> JSON.stringify()  
    //Array To object ------> JSON.parse()  
    localStorage.setItem(TODOS_KEY,JSON.stringify(toDos));
}

function paintToDo(newTodo){
    const li = document.createElement("li");
    li.id = newTodo.id;
    const span = document.createElement("span");
    span.innerText = newTodo.text;
    const button = document.createElement("button");
    button.innerText = "❌";

    //delete
    button.onclick=(event)=>{
        const li = event.target.parentElement;
        li.remove();
        console.log(typeof toDos.id);
        toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
        saveToDos();
    }

    li.appendChild(span);
    li.appendChild(button);
    toDoList.appendChild(li);
}

toDoForm.onsubmit= (event) =>{
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value="";
    console.log(newTodo, toDoInput.value);
    const newTodoObj = {
        text : newTodo,
        id : Date.now(),
    };
    paintToDo(newTodoObj);
    toDos.push(newTodoObj);
    saveToDos();
}

function sayHello(item){
    console.log(item);
}
const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos){
    const parsedToDos = JSON.parse(savedToDos);
   // parsedToDos.forEach(sayHello); 아래와 동일
   // arrow Function
    // parsedToDos.forEach((item) => {
    //     console.log(item);
    // });
    toDos = parsedToDos;
    parsedToDos.forEach(paintToDo);
}

