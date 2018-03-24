  window.onload = function() {
  $("#lap").on("click", stopwatch.recordLap);
  $("#stop").on("click", stopwatch.stop);
  $("#reset").on("click", stopwatch.reset);
  $("#start").on("click", stopwatch.start);
};

var intervalId =null;
// prevents the clock from being sped up unnecessarily
var clockRunning = false;

// Our stopwatch object
var stopwatch = {
  time: 0,
  lap: 1,
  reset: function() {

    stopwatch.time = 0;
    stopwatch.lap = 1;

    // Change the "display" div to "00:00."
    $("#display").text(stopwatch.timeConverter(stopwatch.time));
    // Empty the "laps" div.
    $("#laps").empty();
  },
  start: function() {

    // Use setInterval to start the count here and set the clock to running.
    if (!clockRunning) {
      intervalId = setInterval(stopwatch.count, 1000);
      clockRunning = true;
    }
  },
  stop: function() {
    // Use clearInterval to stop the count here and set the clock to not be running.
    clearInterval(intervalId);
    clockRunning = false;
  },
  recordLap: function() {
    // Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
    // Add the current lap and time to the "laps" div.
    $("#laps").append("<p>Lap"+stopwatch.lap+":"+ converted + "</p>");
    // Increment lap by 1. Remember, we can't use "this" here.
    stopwatch.lap++;
  },
  count: function() {

    // increment time by 1, remember we cant use "this" here.
    stopwatch.time+++;

    // Get the current time, pass that into the stopwatch.timeConverter function,
    //       and save the result in a variable.
    var converted = stopwatch.timeConverter(stopwatch.time);
   

    // Use the variable we just created to show the converted time in the "display" div.


