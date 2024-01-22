
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
 var saveIcon1 =  $('#saveIcon1')
 var saveIcon2 =  $('#saveIcon2')
 var saveIcon3 =  $('#saveIcon3')
 var saveIcon4 =  $('#saveIcon4')
 var saveIcon5 =  $('#saveIcon5')
 var saveIcon6 =  $('#saveIcon6')
 var saveIcon7 =  $('#saveIcon7')
 var saveIcon8 =  $('#saveIcon8')
 var saveIcon9 =  $('#saveIcon9')

//   Storing the first hour
    var Plan1 =  localStorage.getItem("9AM:")
    var inputText1 = document.getElementById("inputText1");
        inputText1.value = Plan1;
   

 saveIcon1.on('click', function (event){
   event.preventDefault();
   Plan1 = inputText1.value;
   localStorage.setItem("9AM:", Plan1 )
   inputText1.value = Plan1;
 });

 //   Storing the second hour
 var Plan2 =  localStorage.getItem("10AM:")
 var inputText2 = document.getElementById("inputText2");
     inputText2.value = Plan2;


saveIcon2.on('click', function (event){
event.preventDefault();
Plan2 = inputText2.value;
localStorage.setItem("10AM:", Plan2 )
inputText2.value = Plan2;
});
 //   Storing the second hour
 var Plan3 =  localStorage.getItem("11AM:")
 var inputText3 = document.getElementById("inputText3");
     inputText3.value = Plan3;


saveIcon3.on('click', function (event){
event.preventDefault();
Plan3 = inputText3.value;
localStorage.setItem("11AM:", Plan3 )
inputText3.value = Plan3;
});

 //   Storing the second hour
 var Plan4 =  localStorage.getItem("12AM:")
 var inputText4 = document.getElementById("inputText4");
     inputText4.value = Plan4;


saveIcon4.on('click', function (event){
event.preventDefault();
Plan4 = inputText4.value;
localStorage.setItem("12AM:", Plan4 )
inputText4.value = Plan4;
});

 //   Storing the second hour
 var Plan5 =  localStorage.getItem("1PM:")
 var inputText5 = document.getElementById("inputText5");
     inputText5.value = Plan5;


saveIcon5.on('click', function (event){
event.preventDefault();
Plan5 = inputText5.value;
localStorage.setItem("1PM:", Plan5 )
inputText5.value = Plan5;
});

 //   Storing the second hour
 var Plan6 =  localStorage.getItem("2PM:")
 var inputText6 = document.getElementById("inputText6");
     inputText6.value = Plan6;


saveIcon6.on('click', function (event){
event.preventDefault();
Plan6 = inputText6.value;
localStorage.setItem("2PM:", Plan6 )
inputText6.value = Plan6;
});
 //   Storing the second hour
 var Plan7 =  localStorage.getItem("3PM:")
 var inputText7 = document.getElementById("inputText7");
     inputText7.value = Plan7;


saveIcon7.on('click', function (event){
event.preventDefault();
Plan7 = inputText7.value;
localStorage.setItem("3PM:", Plan7 )
inputText7.value = Plan7;
});
 //   Storing the second hour
 var Plan8 =  localStorage.getItem("4PM:")
 var inputText8 = document.getElementById("inputText8");
     inputText8.value = Plan8;


saveIcon8.on('click', function (event){
event.preventDefault();
Plan8 = inputText8.value;
localStorage.setItem("4PM:", Plan8 )
inputText8.value = Plan8;
});
 //   Storing the second hour
 var Plan9 =  localStorage.getItem("5PM:")
 var inputText9 = document.getElementById("inputText9");
     inputText9.value = Plan9;


saveIcon9.on('click', function (event){
event.preventDefault();
Plan9 = inputText9.value;
localStorage.setItem("5PM:", Plan9 )
inputText9.value = Plan9;
});





//  current time 
 var currentTime = dayjs().format('hA');
 console.log(currentTime);

 
//  the first hour
 var h3Text1 = $("#firstHour").text();
 if (currentTime == h3Text1 ){
    txtInput1.attr('class', 'present');
 }
 else if ( currentTime > h3Text1) {
    txtInput1.attr('class', 'future'); 
 }
else {
    txtInput1.attr('class', 'past');
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

 

// * Save the event in local storage when the save button is clicked in that timeblock.
// saving to colal storage is easly performed by the one and onlyly ly lovely lovely



// * Persist events between refreshes of a page

// The following animation demonstrates the application functionality:

// ![A user clicks on slots on the color-coded calendar and edits the events.](./images/05-third-party-apis-homework-demo.gif)
