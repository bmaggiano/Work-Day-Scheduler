//need a function to show current date at the top of the screen
const today = moment().format("MMMM Do, YYYY")
const time = moment().format("LTS")
const hourStr = moment().format("k")
const hour = Number(hourStr) //convert string into number

console.log(typeof(hour)) //hour is a string


$('#currentDay').text(today) 
$('#currentTime').text(time)

setInterval(() => 
$('#currentTime').text(new Date().toLocaleTimeString()),1000);

if (hour === 8) {
    $('#time-one').attr("style", "background-color:red;")
    $('#form-one').attr("style", "background-color:red;")
} else if (hour > 8) {
    $('#time-one').attr("style", "background-color:grey;")
    $('#form-one').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-one').attr("style", "background-color:green;")
    $('#form-one').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour ===9) {
    $('#time-two').attr("style", "background-color:red;")
    $('#form-two').attr("style", "background-color:red;")
} else if (hour > 9) {
    $('#time-two').attr("style", "background-color:grey;")
    $('#form-two').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-two').attr("style", "background-color:green;")
    $('#form-two').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 10) {
    $('#time-three').attr("style", "background-color:red;")
    $('#form-three').attr("style", "background-color:red;")
} else if (hour > 10) {
    $('#time-three').attr("style", "background-color:grey;")
    $('#form-three').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-three').attr("style", "background-color:green;")
    $('#form-three').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 11) {
    $('#time-four').attr("style", "background-color:red;")
    $('#form-four').attr("style", "background-color:red;")
} else if (hour > 11) {
    $('#time-four').attr("style", "background-color:grey;")
    $('#form-four').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-four').attr("style", "background-color:green;")
    $('#form-four').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 12) {
    $('#time-five').attr("style", "background-color:red;")
    $('#form-five').attr("style", "background-color:red;")
} else if (hour > 12) {
    $('#time-five').attr("style", "background-color:grey;")
    $('#form-five').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-five').attr("style", "background-color:green;")
    $('#form-five').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 13) {
    $('#time-six').attr("style", "background-color:red;")
    $('#form-six').attr("style", "background-color:red;")
} else if (hour > 13) {
    $('#time-six').attr("style", "background-color:grey;")
    $('#form-six').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-six').attr("style", "background-color:green;")
    $('#form-six').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 14) {
    $('#time-seven').attr("style", "background-color:red;")
    $('#form-seven').attr("style", "background-color:red;")
} else if (hour > 14) {
    $('#time-seven').attr("style", "background-color:grey;")
    $('#form-seven').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-seven').attr("style", "background-color:green;")
    $('#form-seven').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 15) {
    $('#time-eight').attr("style", "background-color:red;")
    $('#form-eight').attr("style", "background-color:red;")
} else if (hour > 15) {
    $('#time-eight').attr("style", "background-color:grey;")
    $('#form-eight').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-eight').attr("style", "background-color:green;")
    $('#form-eight').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 16) {
    $('#time-nine').attr("style", "background-color:red;")
    $('#form-nine').attr("style", "background-color:rgba(214, 3, 3, 0.76);")
} else if (hour > 16) {
    $('#time-nine').attr("style", "background-color:grey;")
    $('#form-nine').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-nine').attr("style", "background-color:green;")
    $('#form-nine').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}
if (hour === 17) {
    $('#time-ten').attr("style", "background-color:red;")
    $('#form-ten').attr("style", "background-color:red;")
} else if (hour > 17) {
    $('#time-ten').attr("style", "background-color:grey;")
    $('#form-ten').attr("style", "background-color:rgba(128, 128, 128, 0.74);")
} else {
    $('#time-ten').attr("style", "background-color:green;")
    $('#form-ten').attr("style", "background-color:rgba(0, 128, 0, 0.76);")
}


//timeblocks color is green if current time is less than calendar time
//timeblocks color is red if current time is greater than calendar time
//timeblocks color is oragne if current time is equal to current time block


//use append child to add button to each textarea
//on click for button, be able to update/save the text the user enters into the text area
//new text value should save in local storage localStorage.setItem()

//when user refreshes the page the most recent saved changes persist






