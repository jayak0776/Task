
let addTask = document.getElementById('add-task');
let taskContainer = document.getElementById('task-container');
let inputTask = document.getElementById('input-task');


addTask.addEventListener('click', function () {
   
    let task = document.createElement('div');
    task.classList.add('task');

    
    let li = document.createElement('li');
    li.innerText = `${inputTask.value}`;
    task.append(li);

    
    let checkbtn = document.createElement('button');
    checkbtn.innerHTML = '<i class="fa-solid fa-check">&#x2713;</i>';
    checkbtn.classList.add('checktask');
    task.append(checkbtn);

    
    let deletebtn = document.createElement('button');
    deletebtn.innerHTML ='<i class="fa-solid fa-trash can">&#x1F5D1;</i>';
    deletebtn.classList.add('deletetask'); 
    task.append(deletebtn);

    if (inputTask.value.trim() === "") { // Use trim() to remove leading/trailing whitespace
        alert("Please Enter A Task...");
    } else {
        taskContainer.appendChild(task);
    }
     inputTask.value = "";

    checkbtn.addEventListener('click', function () {
         let taskText = task.querySelector('li');
         taskText.style.textDecoration = "line-through";
    });

    // Adding a separate event listener for the delete button
    deletebtn.addEventListener('click', function () {
        taskContainer.removeChild(task);
    });

});
