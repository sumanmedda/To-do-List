const addTodoBtn = $('#add-Todo'); // store add todo button element in variable
const newTask = $('#new-task'); // store new task input element in variable
const myTasklist = $('.my-tasks-list'); // store my task list element in variable
const taskArray = []; // array to store all the task

$(document).ready(() => {
    addTodoBtn.on('click', () =>{

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

        // checkbox for showing completed task & added class task-complete-checkbox
        const checkBox = (`<input type="checkbox" class="task-complete-checkbox"/>`);

        // button for removing task from list & added class task-complete-button
        const remBtn = (`<button class="task-complete-button">-</button>`);

        // append task to list
        myTasklist.append(`<li class="task">${checkBox}<span>${task}</span>${remBtn}</li>`);
        
    });

    // button is dynamically generated so we are using delegated event listner 'on'
    // arrow function do not send the clicked element 
    // always use normal function with delegated event 
    $('.my-tasks-list').on('click','.task-complete-button', function()  {

        //  we have to remove the parent li
        const task = $(this).parent().find('span').html();

        // delete task from taskArray
        const index = taskArray.indexOf(task);
        delete taskArray[index];

        // remove the task by deleting the parent li
        console.log(taskArray);
        $(this).parent().remove();
    
    });

    $('.my-tasks-list').on('click','.task-complete-checkbox', function() {

        const taskSpan = $(this).parent().find('span');

        //
        console.log($(this).parent().find('span').html());
    });


});