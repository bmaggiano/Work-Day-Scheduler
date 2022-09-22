//need a function to show current date at the top of the screen
const today = moment().format("MMMM Do, YYYY")
const time = moment().format("LTS")

$('#currentDay').text(today) 
$('#currentTime').text(time)

setInterval(() => 
$('#currentTime').text(new Date().toLocaleTimeString()),1000);




//timeblocks color is green if current time is less than calendar time
//timeblocks color is red if current time is greater than calendar time
//timeblocks color is oragne if current time is equal to current time block


//use append child to add button to each textarea
//on click for button, be able to update/save the text the user enters into the text area
//new text value should save in local storage localStorage.setItem()

//when user refreshes the page the most recent saved changes persist






