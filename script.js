// script.js - one simple feature: a button that updates text on the page.

// 1. Find the button and the paragraph it will change.
//    (On pages without the button, this returns null and we stop.)
var matchaButton = document.getElementById("matcha-btn");
var matchaOutput = document.getElementById("matcha-output");

if (matchaButton && matchaOutput) {

  // 2. Keep track of whether the message is showing.
  var isShowing = false;

  // 3. Listen for a click on the button.
  matchaButton.addEventListener("click", function () {

    if (isShowing === false) {
      // Show the message
      matchaOutput.textContent = "Today's special: Strawberry Matcha, $9.50.";
      matchaButton.textContent = "Hide today's special";
      isShowing = true;
    } else {
      // Hide it again
      matchaOutput.textContent = "";
      matchaButton.textContent = "Show today's special";
      isShowing = false;
    }
  });
}