//need a function to show current date at the top of the screen
const today = moment().format("MMMM Do, YYYY")
const time = moment().format("LTS")
const hour = moment().format("k")

console.log(typeof(hour)) //hour is a string

$('#currentDay').text(today) 
$('#currentTime').text(time)

setInterval(() => 
$('#currentTime').text(new Date().toLocaleTimeString()),1000);

if (hour == "8") {
    $('#time-one').attr("style", "background-color:red;")
    $('#form-one').attr("style", "background-color:red;")
}
if (hour == "9") {
    $('#time-two').attr("style", "background-color:red;")
    $('#form-two').attr("style", "background-color:red;")
}
if (hour == "10") {
    $('#time-three').attr("style", "background-color:red;")
    $('#form-three').attr("style", "background-color:red;")
}
if (hour == "11") {
    $('#time-four').attr("style", "background-color:red;")
    $('#form-four').attr("style", "background-color:red;")
}
if (hour == "12") {
    $('#time-five').attr("style", "background-color:red;")
    $('#form-five').attr("style", "background-color:red;")
}
if (hour == "13") {
    $('#time-six').attr("style", "background-color:red;")
    $('#form-six').attr("style", "background-color:red;")
}
if (hour == "14") {
    $('#time-seven').attr("style", "background-color:red;")
    $('#form-seven').attr("style", "background-color:red;")
}
if (hour == "15") {
    $('#time-eight').attr("style", "background-color:red;")
    $('#form-eight').attr("style", "background-color:red;")
}
if (hour == "16") {
    $('#time-nine').attr("style", "background-color:red;")
    $('#form-nine').attr("style", "background-color:red;")
}


//timeblocks color is green if current time is less than calendar time
//timeblocks color is red if current time is greater than calendar time
//timeblocks color is oragne if current time is equal to current time block


//use append child to add button to each textarea
//on click for button, be able to update/save the text the user enters into the text area
//new text value should save in local storage localStorage.setItem()

//when user refreshes the page the most recent saved changes persist






