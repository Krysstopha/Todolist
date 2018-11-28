//-------- Welcome Function (COMPLETE)
$(document).ready(function(){
  // Declare variable for the username
  //var name = prompt("What is your name?"); //---- UN COMMENT
  // Declare variable for the greeting
  var greeting = "Welcome" /*+ name*/ + ".";
  // Inject the greeting to the mainInstruction
  var mainText = document.getElementById("mainHeader");
  mainText.textContent = greeting;
  console.log(name + "No Name yet dw"); // Check
  console.log(greeting); // Check
});
//-------- End Function

//-------- Task Addition Function (INCOMPLETE)
$(document).ready(function(){
  // Click button to activate function
  $("button").click(function(){
    // Create variable for the div and add class
    var newItem = "<div class=taskDays contenteditable=true>Add a Task</div>";
    // Add the div to the mainArea
    $("#mainArea").append(newItem);
    // This is a check to make sure it worked
    console.log("This worked");
  });
  $("taskDays").click(function(){

  });
});
//-------- End Function

//-------- Level of Urgency Function
$(document).ready(function(){
  var urgency

});

//-------- Day for Task Function (INCOMPLETE)
$(document).ready(function(){
  var today   = new Date();
  var weekDay = today.getDay();   // Original value for day of the week
  var day     = today.getDate();  // Original value for month day
  var finalWeekDay;               // Final value for day of the week
  var daySuffix;                  // Final value for month day

  // Test which suffix to add
  if (day == 1 ||  day == 31){
    daySuffix = "st"; // Suffix for first
  } else if (day == 2 || day == 22){
    daySuffix = "nd"; // Suffix for second
  } else if (day == 3 || day == 23 ){
    daySuffix = "rd"; // Suffix for third
  } else {
    daySuffix = "th"; // Suffix for other
  }
  // Test which day of the week
  switch (weekDay) {
    case 0:
    finalWeekDay = "Sunday";
    break;
    case 1:
    finalWeekDay = "Monday";
    break;
    case 2:
    finalWeekDay = "Tuesday";
    break;
    case 3:
    finalWeekDay = "Wednesday";
    break;
    case 4:
    finalWeekDay = "Thursday";
    break;
    case 5:
    finalWeekDay = "Friday";
    break;
    case 6:
    finalWeekDay = "Saturday";
    break;
  }
  var result = [document.getElementById("date0"), document.getElementById("date1"),
                document.getElementById("date2"), document.getElementById("date3"),
                document.getElementById("date4"), document.getElementById("date5"),
                document.getElementById("date6"),]; // Array for collecting html
  for (i = 0; i < result.length; i++){
    result[i].textContent = finalWeekDay + " " + day + daySuffix;
  }

  //-------- Function to correctly display time for each 7 day task list

});
//-------- End Function

//-------- Check Time Function
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
};
//-------- End Function

//-------- Time Function
function localTime() {
  // Declaring necessary variables
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  if(h > 12) {
    h = h-12; // To display time in 12-hour
  }
  else {
    h = h;    // To display time in 12-hour
  }
  // Adding the time to the document
  var result = document.getElementById("time");
  result.textContent = h + ":" + m;
  var t = setTimeout(localTime, 500);
  // Adding am or pm to the document
  var h2 = today.getHours(); // 2nd getHours() for a new value
  var or = document.getElementById("or");
  if(h2 < 12){
    or.textContent = "am";
  } else
    or.textContent = "pm";
};
//-------- End Function
