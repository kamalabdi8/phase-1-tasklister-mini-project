document.addEventListener("DOMContentLoaded", () => {
  // getting the form element using its ID
  const taskForm = document.getElementById("create-task-form");

  // putting in the form submission
  taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    // putting the values from the form inputs using its ID
    const color = document.getElementById("select-colour").value;
    const taskDescription = document.getElementById("new-task-description").value;

    // validating the form input and adding the task
    if (taskDescription.trim() !== "") {
      addTaskToList(taskDescription, color);
      taskForm.reset();
    }
  });
});

// adding a function with two arguments
function addTaskToList(task, color) {
  // creating a task element with a list that represents the task
  const taskList = document.getElementById("tasks");
  const newTask = document.createElement("li");
  newTask.textContent = task;
  newTask.style.color = color;

  // creating a delete button
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    newTask.remove();
  }); 

  // appending task and button to the list
  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask); 
}
