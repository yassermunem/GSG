let tasks = [];

console.log(`Task Manager Menu
1. Add Task
2. View Tasks
3. Toggle Task Completion
4. Edit Task
5. Delete Task
6. Exit`);

while (true) {
  let choice = prompt(`Enter the number of the task you want to do:`);

  if (choice == "1") {
    let task = prompt(`Enter your task:`);
    tasks.push({ description: task, completed: false });
    console.log(`Task added: "${task}"`);
  } else if (choice == "2") {
    if (tasks.length === 0) {
      console.log("No tasks available.");
    } else {
      console.log("Tasks:");
      tasks.forEach((task, index) => {
        console.log(
          `${index + 1}. ${task.description} - ${
            task.completed ? "Completed" : "Not Completed"
          }`
        );
      });
    }
  } else if (choice == "3") {
    let taskNumber = prompt("Enter the task number to toggle completion:");
    let taskToToggle = tasks[taskNumber - 1];
    if (taskToToggle) {
      taskToToggle.completed = !taskToToggle.completed;
      console.log(
        `Task ${taskNumber} status updated to: ${
          taskToToggle.completed ? "Completed" : "Not Completed"
        }`
      );
    } else {
      console.log("Task not found.");
    }
  } else if (choice == "4") {
    let editNumber = prompt("Enter the task number you want to edit:");
    let taskToEdit = tasks[editNumber - 1];
    if (taskToEdit) {
      let newDescription = prompt("Enter the new description for the task:");
      taskToEdit.description = newDescription;
      console.log(`Task ${editNumber} updated to: "${newDescription}"`);
    } else {
      console.log("Task not found.");
    }
  } else if (choice == "5") {
    let deleteNumber = prompt("Enter the task number you want to delete:");
    if (deleteNumber > 0 && deleteNumber <= tasks.length) {
      tasks.splice(deleteNumber - 1, 1);
      console.log(`Task number ${deleteNumber} deleted.`);
    } else {
      console.log("Task not found.");
    }
  } else if (choice == "6") {
    console.log("Program terminated.");
    break;
  } else {
    console.log("Invalid choice. Please try again.");
  }
}
