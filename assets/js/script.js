//-------- Task Addition Function (INCOMPLETE)
$(document).ready(function(){
  // Click button to activate function
  $("button").click(function(){
    // Create variable for the div
    var newItem = "<div class=taskDays>Hi</div>";
    // Add the div to the mainArea
    $("#mainArea").append(newItem);
    // Add the class to the div
    $(newItem).addClass("taskStyle"); // Need to get this to fkn work
    // This is a check to make sure it worked
    console.log("This worked");
  });
// Ending Brace for document.ready
});
//-------- End Function

//-------- Welcome Function (COMPLETE)
function sayHello(){
  // Declare variable for the username
  // var name = prompt("What is your name?"); ---- UN COMMENT
  // Declare variable for the greeting
  var greeting = "Welcome " + "Christopher" + ", please add a task.";
  // Inject the greeting to the mainInstruction
  var mainText = document.getElementById("mainInstruction");
  mainText.textContent = greeting;
  console.log(name); // Check
  console.log(greeting); // Check
};
sayHello();
//-------- End Function

//-------- Day for Task Function (INCOMPLETE)
/* function dayForTask(){
  var dayOne = getDay();

  console.log(dayOne);
};
dayForTask(); */

//-------- Check Time Function (COMPLETE)
function checkTime(i) {
  if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
  return i;
};

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
