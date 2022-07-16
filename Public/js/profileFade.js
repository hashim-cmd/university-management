$(document).ready(function() {
    $(".profile").click(function() {
        let profileCss = $(".details").css("display");
        if(profileCss == "none") {
            $(".details").fadeIn(100);
        } else {
            $(".details").fadeOut(100)
        }
    })
})