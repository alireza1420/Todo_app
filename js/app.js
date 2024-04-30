const userTaskInput=document.getElementById("task-input");
const userDateInput=document.getElementById("date-input");
const addButton=document.getElementById("add-button");
const alertMessage=document.getElementById( "alert-message" );

const todos = JSON.parse(localStorage.getItem("todos")) || [];

const saveToLocalStorage=()=>{

   localStorage.setItem('todos', JSON.stringify(todos));

}

const showAlert= (message, type) =>{
    alertMessage.innerHTML="";
    const alert= document.createElement('p');
    alert.innerHTML=message;
    alert.classList.add("alert")
    alert.classList.add(`alert-${type}`);
    alertMessage.append(alert);

}

const generateId = () => {

    return Math.round(Math.random() * Math.random() * Math.pow(10,15));
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

addButton.addEventListener('click',addHandler);