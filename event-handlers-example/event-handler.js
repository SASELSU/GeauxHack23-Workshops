// create array to store all tasks
let taskList = [];
// initialize user input to blank
let userInput = "";

// let task = "Write workshop";
// let taskPriority = 2;
// let isTaskDone = false;

// function to add a task to the array
function addTask(task) {
    taskList.push(task);
}

// function to remove a task from the array
function removeTask(index) {
    taskList.splice(index, 1);
}

// output to the console how many tasks there are
let taskCount = taskList.length;

if (taskCount === 0) {
    console.log("No tasks in the list.");
} else {
    console.log(`You have ${taskCount} task(s) in the list.`);
}

// grab DOM elements by id in order to interact with/change them
const addButton = document.getElementById("addButton");
const inputTask = document.getElementById("taskInput");
const taskContainer = document.getElementById("taskList");

// event listener for clicking the add button
addButton.addEventListener("click", function () {
    // add the value of the text box to the taskList array
    let taskText = inputTask.value;
    addTask(taskText);
    renderTasks();
    inputTask.value = ""; // clear input field
});

// displays tasks on the webpage
function renderTasks() {
    taskContainer.innerHTML = ""; // clear existing tasks

    for (let i = 0; i < taskList.length; i++) {
        const taskItem = document.createElement("li");
        taskItem.textContent = taskList[i];

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.addEventListener("click", function () {
        removeTask(i);
        renderTasks();
        });

        taskItem.appendChild(removeButton);
        taskContainer.appendChild(taskItem);
    }

    let taskCount = taskList.length;

    if (taskCount === 0) {
        console.log("No tasks in the list.");
    } else {
        console.log(`You have ${taskCount} task(s) in the list.`);
    }
}

// also adds tasks if the user hits the enter key
inputTask.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        let taskText = inputTask.value;
        addTask(taskText);
        renderTasks();
        inputTask.value = ""; // clear input field
    }
});