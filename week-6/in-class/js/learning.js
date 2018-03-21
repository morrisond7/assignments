// "use strict" tells the browser to enforce some rules about what can be in our JavaScript.
"use strict";

let my_name = "David";
let your_name = "John";

let name = prompt("What's your name?");

if (my_name === "David") {
  renderOutput("That's me!");
}
else if (my_name === "John") {
  renderOutput("That's John!");
}
else {
  renderOutput("I must be someone else");
}

function helloWorld() {
  renderOutput("Hello world");
}

helloWorld();
helloWorld();

function helloName(name) {
  renderOutput("Hello " + name);
}

helloName("David");
helloName("Jess");


function todaysHours(days_hours) {
  renderOutput("ran todaysHours once")
  renderOutput(one_days_hours);
}
// todaysHours("Tuesday: 9a - 9p");

hours.forEach(todaysHours)