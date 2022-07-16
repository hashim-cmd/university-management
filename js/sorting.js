$(document).ready(function() {
    let events = []
    $("table tbody").sortable({
        update: function() {
            events = []
            $(this).children().each(function(index) {
                let event = $(this).attr("data-position");
                events.push(event);
                for(let i = 1; i <= events.length; i++) {
                    $(this).attr("data-position", i)
                }
            });
        }
    });   
})