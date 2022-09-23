
const today = moment().format("MMMM Do, YYYY")
const time = moment().format("LTS")
const hourStr = moment().format("k")
const hour = Number(hourStr) //convert string into number
const btn1 = document.getElementById('btn-one')
const btn2 = document.getElementById('btn-two')
const btn3 = document.getElementById('btn-three')
const btn4 = document.getElementById('btn-four')
const btn5 = document.getElementById('btn-five')
const btn6 = document.getElementById('btn-six')
const btn7 = document.getElementById('btn-seven')
const btn8 = document.getElementById('btn-eight')
const btn9 = document.getElementById('btn-nine')
const btn10 = document.getElementById('btn-ten')

const formOne = document.getElementById("form-one")
const formTwo = document.getElementById("form-two")
const formThree = document.getElementById("form-three")
const formFour = document.getElementById("form-four")
const formFive = document.getElementById("form-five")
const formSix = document.getElementById("form-six")
const formSeven = document.getElementById("form-seven")
const formEight = document.getElementById("form-eight")
const formNine = document.getElementById("form-nine")
const formTen = document.getElementById("form-ten")

console.log(typeof(hour)) //hour is a string


$('#currentDay').text(today) 
$('#currentTime').text(time)

setInterval(() => 
$('#currentTime').text(new Date().toLocaleTimeString()),1000);


//timeblocks color is red if stated hour is equal to current hour
//timeblocks color is grey if current hour has already passed
//timeblocks color is green if current hour has not yet happened
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


$('#form-one').attr("placeholder", localStorage.getItem("8am"))
$('#form-one').text(localStorage.getItem("8am"))
$('#form-two').text(localStorage.getItem("9am"))
$('#form-three').text(localStorage.getItem("10am"))
$('#form-four').text(localStorage.getItem("11am"))
$('#form-five').text(localStorage.getItem("12pm"))
$('#form-six').text(localStorage.getItem("1pm"))
$('#form-seven').text(localStorage.getItem("2pm"))
$('#form-eight').text(localStorage.getItem("3pm"))
$('#form-nine').text(localStorage.getItem("4pm"))
$('#form-ten').text(localStorage.getItem("5pm"))


//on click for button, be able to update/save the text the user enters into the text area
btn1.addEventListener('click', function() {
    localStorage.setItem("8am", formOne.value)})
btn2.addEventListener('click', function() {
    localStorage.setItem("9am", formTwo.value)
})
btn3.addEventListener('click', function() {
    localStorage.setItem("10am", formThree.value)
})
btn4.addEventListener('click', function() {
    localStorage.setItem("11am", formFour.value)
})
btn5.addEventListener('click', function() {
    localStorage.setItem("12pm", formFive.value)
})
btn6.addEventListener('click', function() {
    localStorage.setItem("1pm", formSix.value)
})
btn7.addEventListener('click', function() {
    localStorage.setItem("2pm", formSeven.value)
})
btn8.addEventListener('click', function() {
    localStorage.setItem("3pm", formEight.value)
})
btn9.addEventListener('click', function() {
    localStorage.setItem("4pm", formNine.value)
})
btn10.addEventListener('click', function() {
    localStorage.setItem("5pm", formTen.value)
})







