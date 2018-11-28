//-------- Welcome Function (COMPLETE)
$(document).ready(function(){
  // Declare variable for the username
  //var name = prompt("What is your name?"); //---- UN COMMENT
  // Declare variable for the greeting
  var greeting = "Welcome " /*+ name*/ + ".";
  // Inject the greeting to the mainInstruction
  var mainText = document.getElementById("mainInstruction");
  mainText.textContent = greeting;
  console.log(name); // Check
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
// Ending Brace for document.ready
});
//-------- End Function

//-------- Day for Task Function (INCOMPLETE)
/* function dayForTask(){
  var dayOne = getDay();

  console.log(dayOne);
};
dayForTask(); */
//-------- End Function

//-------- Check Time Function (COMPLETE)
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
};
//-------- End Function

//-------- Time Function (INCOMPLETE)
$(document).ready(function(){
  var today = new Date();
  var h = today.getHours();
  var m = today.getMinutes();
  m = checkTime(m);
  if(h > 12) {
    h = h-12;
  }
  else {
    h = h;
  }
  document.getElementById("timeAct").innerHTMl = h + ":" + m;
  // var t = setTimeout(localTime, 500);
});
