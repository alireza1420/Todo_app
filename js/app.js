const userTaskInput=document.getElementById("task-input");
const userDateInput=document.getElementById("date-input");
const addButton=document.getElementById("add-button");
const alertMessage=document.getElementById( "alert-message" );
const deleteAllButton=document.getElementById('delete-all-button');
const tableData = document.getElementById("todo-list").children[1];

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const generateId = () => {

    return Math.round(Math.random() * Math.random() * Math.pow(10,15));
}

const saveToLocalStorage=()=>{

    userItems= localStorage.setItem('todos', JSON.stringify(todos));
   
 }

const displayTodos=()=>{

    if(!todos.length){
        tableData.innerHTML= `<tr> <td> Data not found</td> </tr>`;
        
    }
    todos.forEach(todo => {
        console.log(todo.completed);
        tableData.innerHTML+=
        `<tr>
        <td>${todo.task}</td>
        <td>${todo.date}</td>
        <td>${(todo.completed) ? "Completed" : "Pending"}</td>
        <td><button>Edit</button> <button>Do</button> <button>Delete</button></td>
    </tr>`
    
    });
}


const showAlert= (message, type) =>{
    alertMessage.innerHTML="";
    const alert= document.createElement('p');
    alert.innerHTML=message;
    alert.classList.add("alert")
    alert.classList.add(`alert-${type}`);
    alertMessage.append(alert);

}




const addHandler=() => {

    const task= userTaskInput.value;
    const date = userDateInput.value;
    const todo={
        id: generateId(),
        task,
        date,
        completed:false,
      
        }
        if(task){
            todos.push(todo);
            saveToLocalStorage();
            userTaskInput.value="";
            userDateInput.value="";
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
              console.log(todos);
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Wrong Format",
                    text: "Please enter a Todo!",
                    
                  });
            }
}

const deleteAllHandler = () => {
    localStorage.clear();
}

addButton.addEventListener('click',addHandler);
deleteAllButton.addEventListener('click',deleteAllHandler)
displayTodos();
