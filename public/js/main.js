
$(document).ready(() => {

    $('.buttons').click(() => {
        let mylist = $('#input').val();
        $('#list').append('<li class="li-list">'+mylist+'</li>');
        return false;
    });
    
    $('#btntoggle').click(function(){
        $(this).toggleClass('btn-text');
        if ($(this).hasClass('btn-text')) {
            $(this).text('Show your to-do List')
        } else {
            $(this).text('Hide your to-do List')
        }

        $( ".textid" ).toggle();
        $( "#plus" ).toggle();
    })
    
});