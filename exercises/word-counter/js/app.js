// 🤖: create 2 constants with references to textarea input and the stats section from the DOM
const textArea = document.getElementById("text");
const stats = document.getElementById("stat");

// 🤖: Create an Event Listener on textarea input
// 🤖: The event handler should update the stats section with the number of words and characters in the textarea input.
// 🤖: You will need to utilize the split method to get the words count.
textArea.addEventListener('keyup', function(){
  const words = textArea.value.split(" ").length;
  const characters = textArea.value.length;
  stats.innerText = "You've written " + words + " words and " + characters + " characters.";
});