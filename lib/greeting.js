"use strict";
const isAfternoon = require("./isAfternoon");
const isMorning = require("./isMorning");
const isNight = require("./isNight");

function greeting(time) {
  // Call each helper function with the time parameter and check which one returns true
  // Then return the appropriate greeting based on the time of day

  if (isMorning(time)) {
    return "Good Morning!";
  } else if (isAfternoon(time)) {
    return "Good Afternoon!";
  } else if (isNight(time)) {
    return "Good Night!";
  }
}

module.exports = greeting;
