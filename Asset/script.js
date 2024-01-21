
// * Display the current day at the top of the calender when a user opens the planner.
var currentDay = document.querySelector("#currentDay")

var today = dayjs();
$(currentDay).text(today.format("dddd, MMMM D") + "th");

// * Present timeblocks for standard business hours when the user scrolls down.

 var txtInput1 = $('#inputText1')
 var txtInput2 = $('#inputText2')
 var txtInput3 = $('#inputText3')
 var txtInput4 = $('#inputText4')
 var txtInput5 = $('#inputText5')
 var txtInput6 = $('#inputText6')
 var txtInput7 = $('#inputText7')
 var txtInput8 = $('#inputText8')
 var txtInput9 = $('#inputText9')

//  current time 
 var currentTime = dayjs().format('hA');
 console.log(currentTime);

 
//  the first hour
 var h3Text1 = $("#firstHour").text();
 if (currentTime == h3Text1 ){
    txtInput1.attr('class', 'present');
 }
 else if ( currentTime > h3Text1) {
    txtInput1.attr('class', 'past'); 
 }
else {
    txtInput1.attr('class', 'future');
}

//  the first hour
var h3Text2 = $("#secondHour").text();
if (currentTime == h3Text2 ){
   txtInput2.attr('class', 'present');
}
else if ( currentTime > h3Text2) {
   txtInput2.attr('class', 'past'); 
}
else {
   txtInput2.attr('class', 'future');
}

//  the first hour
var h3Text3 = $("#thirdHour").text();
if (currentTime == h3Text3 ){
   txtInput3.attr('class', 'present');
}
else if ( currentTime > h3Text3) {
   txtInput3.attr('class', 'past'); 
}
else {
   txtInput3.attr('class', 'future');
}

//  the first hour
var h3Text4 = $("#fourthHour").text();
if (currentTime == h3Text4 ){
   txtInput4.attr('class', 'present');
}
else if ( currentTime > h3Text4) {
   txtInput4.attr('class', 'past'); 
}
else {
   txtInput4.attr('class', 'future');
}

//  the first hour
var h3Text5 = $("#fifthHour").text();
if (currentTime == h3Text5 ){
   txtInput5.attr('class', 'present');
}
else if ( currentTime > h3Text5) {
   txtInput5.attr('class', 'past'); 
}
else {
   txtInput5.attr('class', 'future');
}

//  the first hour
var h3Text6 = $("#sixthHour").text();
if (currentTime == h3Text6 ){
   txtInput6.attr('class', 'present');
}
else if ( currentTime > h3Text6) {
   txtInput6.attr('class', 'past'); 
}
else {
   txtInput6.attr('class', 'future');
}

//  the first hour
var h3Text7 = $("#seventhHour").text();
if (currentTime == h3Text7 ){
   txtInput7.attr('class', 'present');
}
else if ( currentTime > h3Text7) {
   txtInput7.attr('class', 'past'); 
}
else {
   txtInput7.attr('class', 'future');
}

//  the first hour
var h3Text8 = $("#eighthHour").text();
if (currentTime == h3Text8 ){
   txtInput8.attr('class', 'present');
}
else if ( currentTime > h3Text8) {
   txtInput8.attr('class', 'past'); 
}
else {
   txtInput8.attr('class', 'future');
}
//  the first hour
var h3Text9 = $("#ninthHour").text();
if (currentTime == h3Text9 ){
   txtInput9.attr('class', 'present');
}
else if ( currentTime > h3Text9) {
   txtInput9.attr('class', 'past'); 
}
else {
   txtInput9.attr('class', 'future');
}

 
 
// * Color-code each timeblock based on past, present, and future when the timeblock is viewed.
 
// * Allow a user to enter an event when they click a timeblock

// * Save the event in local storage when the save button is clicked in that timeblock.

// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// ![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)
