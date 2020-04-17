
$(document).ready(() => {

    //adding list from text box
    $('.buttons').click(() => {
        let mylist = $('#input').val();
        $('#list').append('<li class="mgt-list" id="hidelist">'+mylist+'</li>');
        return false;
    });
    
    //changing of text of button
    $('#btntoggle').click(function(){
        $(this).toggleClass('btn-text');
        if ($(this).hasClass('btn-text')) {
            $(this).text('Show your to-do List')
        } else {
            $(this).text('Hide your to-do List')
        }

        //toggle of contents of buttons 
        $( ".textid" ).toggle();
        $( "#plus" ).toggle();
        $( ".hidelist" ).toggle();
    })
    
});