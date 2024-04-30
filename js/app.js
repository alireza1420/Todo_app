const userTaskInput=document.getElementById("task-input");
const userDateInput=document.getElementById("date-input");
const addButton=document.getElementById("add-button");
const alertMessage=document.getElementById( "alert-message" );

const todos = [];

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
        task:task,
        date:date,
        completed:false,
      
        }
        if(task){
            todos.push(todo);
            userTaskInput.value="";
            userDateInput.value="";
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Your work has been saved",
                showConfirmButton: false,
                timer: 1500
              });
            }else{
                Swal.fire({
                    icon: "error",
                    title: "Wrong Format",
                    text: "Please enter a Todo!",
                    
                  });
            }
}

addButton.addEventListener('click',addHandler);