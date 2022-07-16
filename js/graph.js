$(document).ready(function(){
    $('li').click(function() {
        const key = $(this).attr("key")
        const element = $(`.inner-list[key=${key}]`)
        let isBlock = element.css("display") == "none"
        if(isBlock) {
            $(".inner-list").slideUp("slow")
            element.slideDown("slow")
        }
        else 
            element.slideUp("slow")
    })
})
const ctx = document.getElementById("myChart").getContext('2d')
const mixedChart = new Chart(ctx, {
data: {
datasets: [{
    type: 'line',
    label: 'Teachers',
    data: [55, 12, 65, 35, 98, 44, 98, 31, 54, 14, 43, 76],
    tension: 0.1,
    borderColor: '#E65A4B',
    fill: true
}, {
    type: 'line',
    label: 'Students',
    borderColor: '#5B65E3',
    data: [5, 32, 25, 55, 68, 14, 48, 35, 54, 14, 76, 43],
    tension: 0.1,
    fill: true
}],
labels: ['January', 'February', 'March', 'April', "May", "June", "July", "August", "September", "October", "November", "December"]
}
});
