const inputBoxTitle = $('#input_box_title'); // stores the value of input_box_title into a variable
const taskArrayTitle = []; // stores the values into an array
const taskArrayTask = []; // stores the values into an array



$(document).ready(() =>{

    // functions of add_title_button
    $("#add_title_button").click(() =>{

        // adding value of title input box into a variable
        const taskTitle = inputBoxTitle.val();

        // check if title input box is empty or not
        if(taskTitle == ''){
            alert('Please enter title first');
            return false;
        };

        // check if input val is already in  array or not
        if (taskArrayTitle.includes(taskTitle)){
            alert('Title is already added please add some other title');
            return false;
        };

        // adding title into an array
        taskArrayTitle.push(taskTitle);

        // clearing input textbox field
        inputBoxTitle.val('');  

        // appending into div
        $(".list_container").append(
            `<div class="" id="show_task_input">
                <label>Title:</label>
                <ul id="title">${taskTitle}</ul>
                <label>Task:</label>
                <input class="input_box_task" id="input_box_task" placeholder="Add items" />
                <button id="add_task_button">+</button><br><br>
                <label>Added Task:</label>
                <ul id="tasks"></ul>
                <hr>
            </div>`
        );

    });

    // functions of add_task_button
    $(".list_container").on('click', '#add_task_button', function () {

        // adding value of inputBoxTask into a variable
        const taskList = $(this).parent().find('#input_box_task').val();

        // check if task input box is empty
        if (taskList == ''){
            alert('Please add task');
            return false;
        };

        // check if task exist in array or not
        if (taskArrayTask.includes(taskList)){
            alert('This task already exist');
            return false;
        };

        // adding value of index into array
        taskArrayTask.push(taskList);

        // clearing input value
        $(this).parent().find('#input_box_task').val('');

        // storing task into a variable
        const taskListContainer= $(this).parent().find('#tasks');

        // appending the value to list
        taskListContainer.append(`<li><span>${taskList}</span><button class="remList" >DEL</button></li>`);

    });

    

    // remove task from task list
    $('.list_container').on('click','.remList',function () {

        
        // finding text
        const deleteTask = $(this).parent().find("span").html();
        

        // finding value in index
        const index = taskArrayTask.indexOf(deleteTask);
        delete taskArrayTask[index];
       
        // delete task
        $(this).parent().remove();
   
    });

});