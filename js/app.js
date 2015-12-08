//Problem: User interaction doesn't work.
//Solution: Add interactivity so that the user can add/edit/delete daily tasks.

var taskInput = document.getElementById("new-task"); //New Task
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //unordered list #incomplete-tasks
var completedTasksHolder = document.getElementById("completed-tasks"); //unordered list #completed-tasks

//New Task List Item
var createNewTaskElement = function(taskString) {
    //Create List Item
    var listItem = document.createElement("li");
    
    var checkBox = document.createElement("input"); //checkbox
    var label = document.createElement("label"); //label
    var editInput = document.createElement("input"); //text
    var editButton = document.createElement("button"); //edit button
    var deleteButton = document.createElement("button"); //delete button
    
    //Each element needs to be modified 
    checkBox.type = "checkbox";
    editInput.type = "text";
    
    editButton.innerText = "Edit";
    editButton.className = "edit";
    deleteButton.innerText = "Delete";
    deleteButton.className = "delete";
    
    label.innerText = taskString;
    
    //then appended to the existing list
    listItem.appendChild(checkBox);
    listItem.appendChild(label);
    listItem.appendChild(editInput);
    listItem.appendChild(editButton);
    listItem.appendChild(deleteButton);
    
    return listItem;
}
//Add a new task
var addTask = function() {
    console.log("Add task...");
    //When the button is pressed -> new list item with #new-task is created
    var listItem = createNewTaskElement(taskInput.value);
    
    //Append listItem to incompleteTasksHolder
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}


//Edit an existing task
var editTask = function() {
    console.log("Edit task...");
    var listItem = this.parentNode;
    
    var editInput = listItem.querySelector("input[type=text]");
    var label = listItem.querySelector("label");
    
    var containsClass = listItem.classList.contains("editMode");
    if(containsClass) {
        label.innerText = editInput.value;
        //if the clase of parent is .editMode
            //Switch from .editMode
            //label text become the input's value
    } else {
        editInput.value = label.innerText;
            //switch to .editMode
            //input value becomes the label's text
    }
    listItem.classList.toggle("editMode");
}
    

//Delete task
var deleteTask = function() {
    console.log("Delete task...");
    
    var listItem = this.parentNode;
    var ul = listItem.parentNode;
    //Remove parent list item from the ul
    ul.removeChild(listItem);
}

//Mark task as complete
var taskCompleted = function() {
    console.log("Task complete...");
    //When Checkbox is checked
    //Append the list item to the #completed-tasks list
    var listItem = this.parentNode;
    completedTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskIncomplete);
}

//Mark task as incomplete
var taskIncomplete = function() {
    console.log("Task incompleted...")
    //When the Checkbox is unchecked
    //Append to the #incomplete-tasks list
    var listItem = this.parentNode;
    incompleteTasksHolder.appendChild(listItem);
    bindTaskEvents(listItem, taskCompleted);
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
    console.log("Bind list item events")
    //select its taslListItem's children
    var checkBox = taskListItem.querySelector("input[type=checkbox]");
    var editButton = taskListItem.querySelector("button.edit");
    var deleteButton = taskListItem.querySelector("button.delete");
    
    //bind editTask to edit button
    editButton.onclick = editTask;
    
    //bind deleteTask to the delete button
    deleteButton.onclick = deleteTask;
    
    //bind checkBoxEventHandler to the checkbox
    checkBox.onchange = checkBoxEventHandler;
}
//Set the click handler for the addTask function
addButton.onclick = addTask;

//cycle over incompleteTasksHolder ul list items
for(var i = 0; i < incompleteTasksHolder.children.length; i++) {
    bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
}


//cycle over completeTasksHolder ul list items
for(var i = 0; i < completedTasksHolder.children.length; i++) {
    bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
}
    