//Problem: User interaction doesn't work.
//Solution: Add interactivity so that the user can add/edit/delete daily tasks.

var taskInput = document.getElementById("new-task"); //New Task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //unordered list #completed-tasks

//Add a new task
var addTask = function() {
    console.log("Add task...");
    //When the button is pressed -> new list item with #new-task is created
        //input checkbox
        //label
        //input (text)
        //button.edit
        //button.delete
        //Each element needs to be modified and then appended to the existing list
}


//Edit an existing task
var editTask = function() {
    console.log("Edit task...");
    //When edit button is pressed // Toggle .editMode on the parent
        //if the clase of parent is .editMode
            //Switch from .editMode
            //label text become the input's value
        //else 
            //switch to .editMode
            //input value becomes the label's text
}

//Delete task
var deleteTask = function() {
    console.log("Complete task...");
    //When Delete is pressed
        //Remove parent list item from the ul
}

//Mark task as complete
var taskCompleted = function() {
    console.log("Incomplete task...");
    //When Checkbox is checked
        //Append the list item to the #completed-tasks list
}

//Mark task as incomplete
var taskIncomplete = function() {
    //When the Checkbox is unchecked
        //Append to the #incomplete-tasks list
}

