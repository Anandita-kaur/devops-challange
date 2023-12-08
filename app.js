// Function to add a new task
function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskList = document.getElementById("taskList");

    if (taskInput.value !== "") {
        // Create a new list item
        var listItem = document.createElement("li");
        listItem.innerHTML = taskInput.value + '<button onclick="removeTask(this)">Remove</button>';
        
        // Add the new task to the task list
        taskList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

// Function to remove a task
function removeTask(button) {
    var listItem = button.parentNode;
    var taskList = listItem.parentNode;

    // Remove the task from the task list
    taskList.removeChild(listItem);
}
