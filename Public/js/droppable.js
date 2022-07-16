$(document).ready(function() {
            
    let items = [];
    $(document).on("click", ".singleCourses p", function(event) {
        content = $(this).text();
        console.log(content)

        let newArr = items.filter((item) => item != content);
        items = newArr;
        console.log(newArr);
        $(this).fadeOut(100);
    })    
    let error;
    $(".courses p").draggable({helper: 'clone'});
    $(".drop-area").droppable({
        accept: '.courses p',
        drop: function(ev, ui) {
            
            function htmlDecode(input){
                var e = document.createElement('textarea');
                e.innerHTML = input;
                return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
            }
                error = false;
            $(".text").text("")
            console.log(error)
            var droppedItem = $(ui.draggable).clone();
            let text = droppedItem.html()
            for(let i = 0; i < items.length; i++) {
                if(items[i] == htmlDecode(text)) {
                    console.log("Already there");
                    error = true;
                }
            }
            if(items.length == 6) {
                error = true;
            }
            if(error) {
                $(".text").text("Sorry That Element is already been inserted or you are trying to put more than 6 Courses")
            } else {
                items.push(htmlDecode(text))
                console.log(items)
                let childLength = $(".drop-area p is").children().length;
                function htmlDecode(input) {
                    var e = document.createElement("textarea");
                    e.innerHTML = input
                    return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
                }    
                const course = $(this).append(droppedItem).addClass("singleCourses");
                }
            console.log(items)
        }
    });
    $(".submit-btn").click(function() {
        if(items.length == 0) {
            $(".text").text("Please Drop courses in the above box")
        } else {
            console.log('Submitted')
        }
    })
})
