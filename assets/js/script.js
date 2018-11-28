//-------- Welcome Function (COMPLETE)
$(document).ready(function(){
  // Declare variable for the username
  //var name = prompt("What is your name?"); //---- UN COMMENT
  // Declare variable for the greeting
  var greeting = "Welcome " /*+ name*/ + ".";
  // Inject the greeting to the mainInstruction
  var mainText = document.getElementById("mainInstruction");
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
    var newItem = "<div class=taskDays contenteditable=true>Hi</div>";
    // Add the div to the mainArea
    $("#mainArea").append(newItem);
    // This is a check to make sure it worked
    console.log("This worked");
  });
});
//-------- End Function

//-------- Day for Task Function (INCOMPLETE)
$(document).ready(function(){
  var today = new Date();
  var day   = today.getDay();
  var result = document.getElementById("date");
  result.textContent = day;
  console.log(today);
  console.log(day);
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
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  var s = today.getSeconds();
  m = checkTime(m);
  if(h > 12) {
    h = h-12;
  }
  else {
    h = h;
  }
  var result = document.getElementById("time");
  result.textContent = h + ":" + m;
  var t = setTimeout(localTime, 500);
};
//-------- End Function
