const addTodoBtn = $('#add-Todo'); // store add todo button element in variable
const newTask = $('#new-task'); // store new task input element in variable
const myTasklist = $('.my-tasks-list'); // store my task list element in variable
const taskArray = []; // array to store all the task

$(document).ready(() => {
    addTodoBtn.click(() =>{

        const task = newTask.val(); // store val of newTask input in task variable

        // clear input to avoid duplicate clicks
        newTask.val('');

        // check input empty
        if (task == ''){
            alert('Please add some task');
            return;
        }

        // check task already there in taskArray
        // do not add task if in taskArray
        if(taskArray.includes(task)){
            alert('Task Already present');
            return;
        }

        // add task to task array
        taskArray.push(task);

        // append task to list
        myTasklist.append(`<li class="task">${task}</li>`);
        
    });
});